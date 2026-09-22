/**
 * Procedural Daily Life Soundscape Generator using Web Audio API.
 * Synthesizes organic ambient soundscapes for each hour of the day
 * with 0 external network dependencies.
 */

class DailySoundscape {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private currentSceneCategory: string = 'dawn';
  private timerId: number | null = null;

  // Active oscillators / noise nodes
  private activeNodes: Array<{ stop: () => void }> = [];

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.35, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setVolume(val: number) {
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(Math.max(0, Math.min(1, val)), this.ctx.currentTime, 0.05);
    }
  }

  public toggle(): boolean {
    this.init();
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start(this.currentSceneCategory);
      return true;
    }
  }

  public isAudioActive(): boolean {
    return this.isPlaying;
  }

  public setScene(category: string) {
    this.currentSceneCategory = category;
    if (this.isPlaying) {
      this.refreshSceneAudio();
    }
  }

  public start(category: string = 'dawn') {
    this.init();
    if (!this.ctx || !this.masterGain) return;
    this.isPlaying = true;
    this.currentSceneCategory = category;
    this.refreshSceneAudio();
  }

  public stop() {
    this.isPlaying = false;
    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }
    this.activeNodes.forEach(n => {
      try {
        n.stop();
      } catch {}
    });
    this.activeNodes = [];
  }

  private refreshSceneAudio() {
    if (!this.ctx || !this.masterGain || !this.isPlaying) return;

    // Clear previous audio components
    this.activeNodes.forEach(n => {
      try {
        n.stop();
      } catch {}
    });
    this.activeNodes = [];

    if (this.timerId !== null) {
      window.clearInterval(this.timerId);
      this.timerId = null;
    }

    const t = this.ctx.currentTime;

    // 1. Bedrock drone: soft 136.1Hz Earth frequency
    const baseDrone = this.ctx.createOscillator();
    const droneGain = this.ctx.createGain();
    baseDrone.type = 'sine';
    baseDrone.frequency.setValueAtTime(136.1, t);
    droneGain.gain.setValueAtTime(0.06, t);

    // Warm low-pass filter
    const lpf = this.ctx.createBiquadFilter();
    lpf.type = 'lowpass';
    lpf.frequency.setValueAtTime(350, t);

    baseDrone.connect(lpf);
    lpf.connect(droneGain);
    droneGain.connect(this.masterGain);
    baseDrone.start();

    this.activeNodes.push({
      stop: () => {
        droneGain.gain.setTargetAtTime(0, this.ctx!.currentTime, 0.2);
        setTimeout(() => {
          try { baseDrone.stop(); } catch {}
        }, 300);
      }
    });

    // 2. Scene-specific ambient layers
    switch (this.currentSceneCategory) {
      case 'dawn':
      case 'morning':
        this.createMorningBreezeAndBirds();
        break;
      case 'commute':
        this.createCityCommuteAmbiance();
        break;
      case 'focus':
        this.createFocusFlowAudio();
        break;
      case 'pause':
      case 'afternoon':
        this.createAfternoonPeace();
        break;
      case 'sunset':
        this.createSunsetWarmth();
        break;
      case 'evening':
        this.createEveningRoomWarmth();
        break;
      case 'night':
      case 'sleep':
        this.createNightSilenceAndCrickets();
        break;
      default:
        this.createMorningBreezeAndBirds();
    }
  }

  // Morning: Gentle pink noise wind + occasional bird chirp
  private createMorningBreezeAndBirds() {
    if (!this.ctx || !this.masterGain) return;
    const noise = this.createNoiseNode(400, 0.04);
    if (noise) this.activeNodes.push(noise);

    // Occasional gentle bird chirp synthesizer
    this.timerId = window.setInterval(() => {
      if (!this.ctx || !this.masterGain || !this.isPlaying) return;
      if (Math.random() > 0.4) {
        this.triggerBirdChirp();
      }
    }, 2400);
  }

  private triggerBirdChirp() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    const baseFreq = 2200 + Math.random() * 800;
    osc.frequency.setValueAtTime(baseFreq, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq + 600, now + 0.08);
    osc.frequency.exponentialRampToValueAtTime(baseFreq - 200, now + 0.18);

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(0.04, now + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  // Commute: low distant engine hum & subtle filtered air
  private createCityCommuteAmbiance() {
    if (!this.ctx || !this.masterGain) return;
    const noise = this.createNoiseNode(220, 0.07);
    if (noise) this.activeNodes.push(noise);

    const sub = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    sub.type = 'triangle';
    sub.frequency.setValueAtTime(68, this.ctx.currentTime);
    subGain.gain.setValueAtTime(0.05, this.ctx.currentTime);

    sub.connect(subGain);
    subGain.connect(this.masterGain);
    sub.start();

    this.activeNodes.push({
      stop: () => {
        try { sub.stop(); } catch {}
      }
    });
  }

  // Focus: 10Hz binaural alpha wave pulse + soothing harmonic
  private createFocusFlowAudio() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;

    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'sine';
    osc2.type = 'sine';
    osc1.frequency.setValueAtTime(216, now); // A3 slightly tuned
    osc2.frequency.setValueAtTime(226, now); // +10Hz Alpha beat

    gain.gain.setValueAtTime(0.04, now);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.masterGain);

    osc1.start();
    osc2.start();

    this.activeNodes.push({
      stop: () => {
        try { osc1.stop(); osc2.stop(); } catch {}
      }
    });
  }

  // Afternoon: Soft acoustic harmonic warmth
  private createAfternoonPeace() {
    if (!this.ctx || !this.masterGain) return;
    const noise = this.createNoiseNode(500, 0.035);
    if (noise) this.activeNodes.push(noise);

    const chord = [261.63, 329.63, 392.0]; // C Major warmth
    chord.forEach((freq, idx) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq / 2, this.ctx!.currentTime);
      gain.gain.setValueAtTime(0.015 / (idx + 1), this.ctx!.currentTime);

      osc.connect(gain);
      gain.connect(this.masterGain!);
      osc.start();

      this.activeNodes.push({
        stop: () => { try { osc.stop(); } catch {} }
      });
    });
  }

  // Sunset: Golden resonant filtered breath
  private createSunsetWarmth() {
    if (!this.ctx || !this.masterGain) return;
    const noise = this.createNoiseNode(320, 0.06);
    if (noise) this.activeNodes.push(noise);

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(174, this.ctx.currentTime); // Solfeggio 174Hz calm
    gain.gain.setValueAtTime(0.04, this.ctx.currentTime);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start();

    this.activeNodes.push({
      stop: () => { try { osc.stop(); } catch {} }
    });
  }

  // Evening: Warm indoor room tone & lamp hum
  private createEveningRoomWarmth() {
    if (!this.ctx || !this.masterGain) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(110, this.ctx.currentTime); // Low A2
    gain.gain.setValueAtTime(0.03, this.ctx.currentTime);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start();

    this.activeNodes.push({
      stop: () => { try { osc.stop(); } catch {} }
    });
  }

  // Night: Velvet silence + delicate crickets
  private createNightSilenceAndCrickets() {
    if (!this.ctx || !this.masterGain) return;
    const noise = this.createNoiseNode(180, 0.025);
    if (noise) this.activeNodes.push(noise);

    // Periodic soft cricket ping
    this.timerId = window.setInterval(() => {
      if (!this.ctx || !this.masterGain || !this.isPlaying) return;
      if (Math.random() > 0.5) {
        this.triggerCricketChirp();
      }
    }, 1800);
  }

  private triggerCricketChirp() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(4600, now);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.linearRampToValueAtTime(0.015, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.1);
  }

  private createNoiseNode(filterFreq: number, gainAmount: number) {
    if (!this.ctx || !this.masterGain) return null;
    const bufferSize = 2 * this.ctx.sampleRate;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      output[i] = (b0 + b1 + b2) * 0.11;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(filterFreq, this.ctx.currentTime);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(gainAmount, this.ctx.currentTime);

    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(this.masterGain);

    whiteNoise.start();

    return {
      stop: () => {
        try { whiteNoise.stop(); } catch {}
      }
    };
  }
}

export const dailySoundscape = new DailySoundscape();
