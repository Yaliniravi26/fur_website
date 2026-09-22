export interface ImageData {
  id: string;
  url: string;
  fallbackUrl: string;
  alt: string;
  caption?: string;
  category?: string;
}

export const LUMIERE_IMAGES = {
  // 1. Hero: Large luxury modern living room with floor-to-ceiling windows, warm natural lighting, neutral furniture, wooden elements
  hero: {
    id: 'hero-living-room',
    url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85',
    fallbackUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    alt: 'Luxury contemporary living room with floor-to-ceiling glass windows, warm natural light and bespoke wooden furniture',
    caption: 'Lumen Penthouse — Living Pavilion',
  },

  // 2. Philosophy: Sophisticated dining room, natural daylight, neutral palette, modern furniture
  philosophy: {
    id: 'philosophy-dining',
    url: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1800&q=85',
    fallbackUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
    alt: 'Minimalist luxury dining room with natural travertine table, linen chairs and soft daylight',
    caption: 'Curated Simplicity — Private Residence',
  },

  // 3. Project 01: Lumen Residence — Living Room
  project01: {
    id: 'project-lumen-residence',
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85',
    fallbackUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Lumen Residence bespoke living lounge with sculptural sofa and floor lamp',
    caption: 'Lumen Residence — Living Room',
    category: 'Living Room',
  },

  // 4. Project 02: Oak & Stone — Kitchen
  project02: {
    id: 'project-oak-and-stone',
    url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85',
    fallbackUrl: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?auto=format&fit=crop&w=1200&q=80',
    alt: 'Oak & Stone kitchen with waterfall marble island, fluted oak cabinetry and integrated bronze fixtures',
    caption: 'Oak & Stone — Kitchen',
    category: 'Kitchen',
  },

  // 5. Project 03: Quiet Haven — Bedroom
  project03: {
    id: 'project-quiet-haven',
    url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1400&q=85',
    fallbackUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    alt: 'Quiet Haven master bedroom in neutral oatmeal linens, tactile lime wash walls and custom headboard',
    caption: 'Quiet Haven — Bedroom',
    category: 'Bedroom',
  },

  // 6. Project 04: Urban Retreat — Apartment
  project04: {
    id: 'project-urban-retreat',
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85',
    fallbackUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Urban Retreat open-plan modern apartment interior with panoramic city views and neutral palette',
    caption: 'Urban Retreat — Apartment',
    category: 'Apartment',
  },

  // 7. Project 05: Linea Workspace — Workspace / Home Office
  project05: {
    id: 'project-linea-workspace',
    url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=85',
    fallbackUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    alt: 'Linea Workspace architect studio home office with bespoke walnut desk, shelving and reading chair',
    caption: 'Linea Workspace — Studio',
    category: 'Workspace',
  },

  // 8. Project 06: Casa Terra — Dining
  project06: {
    id: 'project-casa-terra',
    url: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1400&q=85',
    fallbackUrl: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
    alt: 'Casa Terra dining space with handcrafted solid wood trestle table and pendant light',
    caption: 'Casa Terra — Dining',
    category: 'Dining',
  },

  // 9. Project Showcase: Luxury villa, large staircase, warm architectural lighting, natural stone, wood (Casa Aurelia)
  projectShowcase: {
    id: 'showcase-casa-aurelia',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
    fallbackUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
    alt: 'Casa Aurelia luxury modern villa featuring a floating timber staircase, double-height stone walls and ambient recessed illumination',
    caption: 'Casa Aurelia — Architectural Residence',
  },

  // 10. Process: Interior architecture, design studio, drawings and material curation
  process: {
    id: 'process-architecture',
    url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=85',
    fallbackUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
    alt: 'Architectural studio drawing board with interior layouts, material finish samples and precision scales',
    caption: 'The Studio — Precision & Curation',
  },

  // 11. Materials & Details: 6 Unique Material Textures
  materials: {
    naturalWood: {
      id: 'mat-natural-wood',
      url: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=800&q=85',
      fallbackUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
      title: 'Natural Wood',
      desc: 'European white oak, smoked ash and solid American walnut with matte organic wax oil finishes.',
      alt: 'Macro photograph of fine grain white oak wood texture',
    },
    travertine: {
      id: 'mat-travertine',
      url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=85',
      fallbackUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      title: 'Travertine',
      desc: 'Honed Roman travertine, vein-cut surfaces and warm limestone celebrating natural porous geological memory.',
      alt: 'Close-up texture of honed cream Roman travertine stone surface',
    },
    linen: {
      id: 'mat-linen',
      url: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=85',
      fallbackUrl: 'https://images.unsplash.com/photo-1528458876861-544fd1761a91?auto=format&fit=crop&w=800&q=80',
      title: 'Linen',
      desc: 'Belgian washed linen, textured bouclés and unbleached cotton blends for tactile upholstery and drapery.',
      alt: 'Close up of natural textured Belgian washed linen fabric weave',
    },
    brushedMetal: {
      id: 'mat-brushed-metal',
      url: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=85',
      fallbackUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
      title: 'Brushed Metal',
      desc: 'Aged brass, blackened bronze and brushed champagne nickel bringing quiet metallic permanence.',
      alt: 'Brushed brass architectural hardware detail and matte metallic reflection',
    },
    stone: {
      id: 'mat-stone',
      url: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=85',
      fallbackUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80',
      title: 'Stone',
      desc: 'Calacatta viola, Ceppo di Gré and tactile quartzite slab cut for bespoke statement islands.',
      alt: 'Natural architectural stone surface with organic geological veining',
    },
    warmGlass: {
      id: 'mat-warm-glass',
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=85',
      fallbackUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
      title: 'Warm Glass',
      desc: 'Fluted reeded glass, smoked bronze vitrines and hand-blown ambient pendants filtering light.',
      alt: 'Warm reeded fluted architectural glass refracting soft amber lighting',
    },
  },

  // 12. Before Image: Old, raw, dated interior
  before: {
    id: 'before-interior',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85',
    fallbackUrl: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80',
    alt: 'Before renovation: Dated room layout with uneven lighting, clutter and obsolete finishes',
    caption: 'Before Transformation — 1980s Layout',
  },

  // 13. After Image: Renovated luxury interior
  after: {
    id: 'after-interior',
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85',
    fallbackUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    alt: 'After renovation: Open-concept architectural living space with natural light, tailored millwork and serene furniture',
    caption: 'After Lumière Design — Transformed Space',
  },

  // 14. Journal 01: "How to Create a Calm Living Room"
  journal01: {
    id: 'journal-calm-living-room',
    url: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=85',
    fallbackUrl: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80',
    alt: 'Tranquil serene living lounge with low-profile seating, warm throw and gentle morning shadow play',
    title: 'How to Create a Calm Living Room',
    readTime: '4 min read',
    date: 'Autumn 2026',
  },

  // 15. Journal 02: "The Art of Choosing the Right Materials"
  journal02: {
    id: 'journal-materials',
    url: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1200&q=85',
    fallbackUrl: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1000&q=80',
    alt: 'Studio presentation tray of limestone tiles, bronze swatches and linen samples',
    title: 'The Art of Choosing the Right Materials',
    readTime: '6 min read',
    date: 'Summer 2026',
  },

  // 16. Journal 03: "5 Timeless Interior Design Principles"
  journal03: {
    id: 'journal-design-principles',
    url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
    fallbackUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
    alt: 'Harmonious architectural interior displaying proportional symmetry and subtle contrast',
    title: '5 Timeless Interior Design Principles',
    readTime: '5 min read',
    date: 'Spring 2026',
  },

  // 17. Final CTA: Luxury staircase / architectural interior
  finalCta: {
    id: 'cta-luxury-interior',
    url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=2000&q=85',
    fallbackUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    alt: 'Sculptural architectural staircase and double-height minimalist foyer illuminated with warm light',
    caption: 'Private Villa Entrance',
  },
};

export const PROJECTS_DATA = [
  {
    id: 'lumen-residence',
    title: 'Lumen Residence',
    category: 'Living Room',
    year: '2026',
    location: 'Bespoke Penthouse, Waterfront',
    area: '2,800 sq.ft.',
    description: 'An open-concept living pavilion anchored by floor-to-ceiling glass, custom fluted oak wall paneling, and tactile bouclé seating.',
    image: LUMIERE_IMAGES.project01,
  },
  {
    id: 'oak-and-stone',
    title: 'Oak & Stone',
    category: 'Kitchen',
    year: '2025',
    location: 'Modern Villa, Kensington',
    area: '950 sq.ft.',
    description: 'A culinary sanctuary composed of monolithic Taj Mahal quartzite, bespoke wire-brushed oak cabinetry, and hidden architectural pocket doors.',
    image: LUMIERE_IMAGES.project02,
  },
  {
    id: 'quiet-haven',
    title: 'Quiet Haven',
    category: 'Bedroom',
    year: '2026',
    location: 'Private Sanctuary, Hillside',
    area: '1,400 sq.ft.',
    description: 'A deeply restorative master suite enveloped in natural lime wash, Belgian washed linens, acoustic timber screening, and ambient indirect illumination.',
    image: LUMIERE_IMAGES.project03,
  },
  {
    id: 'urban-retreat',
    title: 'Urban Retreat',
    category: 'Apartment',
    year: '2025',
    location: 'Contemporary High-Rise',
    area: '3,100 sq.ft.',
    description: 'Complete transformation of a metropolitan apartment into a serene sanctuary balancing warm minimalism, seamless concealed storage, and panoramic views.',
    image: LUMIERE_IMAGES.project04,
  },
  {
    id: 'linea-workspace',
    title: 'Linea Workspace',
    category: 'Workspace',
    year: '2026',
    location: 'Architectural Townhouse',
    area: '620 sq.ft.',
    description: 'A tailored private executive study featuring monolithic solid walnut joinery, integrated ambient lighting ribbons, and tactile acoustic leather paneling.',
    image: LUMIERE_IMAGES.project05,
  },
  {
    id: 'casa-terra',
    title: 'Casa Terra',
    category: 'Dining',
    year: '2025',
    location: 'Mediterranean Estate',
    area: '1,200 sq.ft.',
    description: 'An earthy, tactile dining space defined by hand-chiseled limestone flooring, an eight-meter solid chestnut table, and organic plaster archways.',
    image: LUMIERE_IMAGES.project06,
  },
];
