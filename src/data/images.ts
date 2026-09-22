export interface EditorialImageConfig {
  id: string;
  title: string;
  url: string;
  fallbackUrl: string;
  alt: string;
  caption?: string;
}

export const DAILY_IMAGES: Record<string, EditorialImageConfig> = {
  hero: {
    id: 'hero',
    title: 'Morning Bedroom Serenity',
    url: 'https://images.unsplash.com/photo-1540518614846-7ede433c4b13?auto=format&fit=crop&w=1920&q=85',
    fallbackUrl: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1920&q=85',
    alt: 'A quiet morning bedroom bathed in gentle dawn sunlight with linen bedding and curtains',
    caption: '06:30 AM — First light over linen and wood',
  },
  morning: {
    id: 'morning',
    title: 'Waking to Daylight',
    url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1600&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
    alt: 'Morning bedroom with sunlight filtering through sheer curtains, coffee mug, and alarm clock',
    caption: 'Some mornings begin slowly',
  },
  getReady: {
    id: 'getReady',
    title: 'Morning Preparation Rituals',
    url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1600&q=80',
    alt: 'Vanity mirror, amber perfume bottle, comb, wristwatch and skincare essentials in natural morning light',
    caption: 'The little rituals that make us feel ready',
  },
  breakfast: {
    id: 'breakfast',
    title: 'Morning Breakfast & Steam',
    url: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1600&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80',
    alt: 'Fresh artisanal coffee, sourdough toast, fresh fruit on a sunlit breakfast table',
    caption: 'Coffee. Breakfast. A few quiet minutes',
  },
  onTheWay: {
    id: 'onTheWay',
    title: 'City Morning Commute',
    url: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1920&q=85',
    fallbackUrl: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=1920&q=85',
    alt: 'Morning commute road with tree-lined avenue, architecture, and pedestrians in gentle city haze',
    caption: 'Between where we were and where we’re going',
  },
  focus: {
    id: 'focus',
    title: 'Clean Workspace & Study',
    url: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80',
    alt: 'Oak work desk with open notebook, fountain pen, laptop, coffee cup, and studio headphones',
    caption: 'Hours disappear when we’re busy building something',
  },
  lunch: {
    id: 'lunch',
    title: 'Midday Pause & Lunch',
    url: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1600&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80',
    alt: 'Nourishing midday lunch plate with fresh ingredients, cutlery, and water glass on wooden table',
    caption: 'Even busy days need a pause',
  },
  afternoon: {
    id: 'afternoon',
    title: 'Afternoon Slant of Light',
    url: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1600&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80',
    alt: 'Warm quiet afternoon desk by tall window with steaming herbal tea and journal',
    caption: 'The day is moving faster than we realize',
  },
  evening: {
    id: 'evening',
    title: 'The Day Softens at Dusk',
    url: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1920&q=85',
    fallbackUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1920&q=85',
    alt: 'Golden evening sky over city boulevard with silhouetted trees, architecture, and warm street lights',
    caption: 'Somewhere between work and home, everything becomes quieter',
  },
  goldenHour: {
    id: 'goldenHour',
    title: 'Pure Golden Hour Horizon',
    url: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?auto=format&fit=crop&w=1920&q=85',
    fallbackUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85',
    alt: 'Vibrant golden hour sunset over city silhouettes and peaceful evening skies',
    caption: 'Maybe ordinary days are beautiful after all',
  },
  homeAgain: {
    id: 'homeAgain',
    title: 'Warm Sanctuary of Home',
    url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
    alt: 'Warm mid-century living room with comfortable sofa, glowing floor lamp, book, and coffee table',
    caption: 'The outside world gets quieter',
  },
  dinner: {
    id: 'dinner',
    title: 'Evening Dinner Table',
    url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80',
    alt: 'Warm intimate dinner table setting with plates, wine glasses, and soft candlelit illumination',
    caption: 'Small moments become memories',
  },
  slowDown: {
    id: 'slowDown',
    title: 'Quiet Bedside Reading',
    url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    alt: 'Dimly lit bedroom with warm nightstand lamp, open book, soft pillows, and evening calmness',
    caption: 'Tomorrow can wait',
  },
  goodNight: {
    id: 'goodNight',
    title: 'Midnight Solitary Lamp',
    url: 'https://images.unsplash.com/photo-1511295742362-92c96b124e52?auto=format&fit=crop&w=1920&q=85',
    fallbackUrl: 'https://images.unsplash.com/photo-1540518614846-7ede433c4b13?auto=format&fit=crop&w=1920&q=85',
    alt: 'Dark cinematic bedroom with solitary warm bedside lamp glowing against deep tranquil shadows',
    caption: 'Another ordinary day, beautifully lived',
  },
};

export const TRAVEL_STRIP_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=800&q=80',
    title: 'City Street Life',
    subtitle: 'Morning footsteps',
  },
  {
    url: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=800&q=80',
    title: 'Transit Window',
    subtitle: 'Glances between stops',
  },
  {
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80',
    title: 'Urban Geometry',
    subtitle: 'Glass and limestone',
  },
  {
    url: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=800&q=80',
    title: 'Morning Avenue',
    subtitle: 'Tree-lined shadows',
  },
  {
    url: 'https://images.unsplash.com/photo-1508873696983-2df5293cb395?auto=format&fit=crop&w=800&q=80',
    fallbackUrl: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
    title: 'Crosswalk Motion',
    subtitle: 'Collective rhythm',
  },
];
