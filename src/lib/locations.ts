export type LocationSlug = 'ronin-harrisburg' | 'ronin-2';

export type LocationPricingTier = {
  id: string;
  label: string;
  partial: { price: number | null; additionalHour: number | null; note?: string };
  full: { price: number | null; additionalHour: number | null; note?: string };
};

export type LocationVenue = {
  slug: LocationSlug;
  name: string;
  neighborhood: string;
  address: string;
  city: string;
  standing: number;
  seated: string;
  description: string;
  body: string;
  highlights: { title: string; description: string }[];
  amenities: string[];
  matterportUrl: string;
  parkingMapUrl: string;
  googleUrl: string;
  heroImage: string;
  youtubeId?: string;
  startingPrice: number;
  partialLabel: string;
  fullLabel: string;
  pricingTiers: LocationPricingTier[];
  pricingNotes: string[];
  proposal?: {
    headline: string;
    intro: string;
    details: string[];
  };
};

export const LOCATIONS: LocationVenue[] = [
  {
    slug: 'ronin-harrisburg',
    name: 'Ronin Harrisburg',
    neighborhood: 'East End · Second Ward',
    address: '3501 Harrisburg Blvd',
    city: 'Houston, TX 77003',
    standing: 150,
    seated: '120',
    description:
      'Ronin Harrisburg combines an industrial aesthetic with a sophisticated edge — a chic, modern event space inspired by the Louvre in Abu Dhabi.',
    body: 'During the day, natural light pours through three skylights. At sunset, laser-cut vine decals cast floral patterns across polished concrete. Perfect for weddings, corporate events, and social soirees. Outside vendors and catering are welcome; all alcohol must be served by our exclusive third-party bartending vendor.',
    highlights: [
      {
        title: 'Natural Light',
        description:
          'Three skylights flood the space with daylight — a photographer’s dream with polished concrete and two feature walls.',
      },
      {
        title: 'Covered Indoor Patio',
        description:
          'An indoor patio with natural light features throughout, ideal for cocktail hour and portraits.',
      },
      {
        title: 'Private Suites',
        description:
          'Two private suites for the couple, getting-ready moments, or a quiet reset during the event.',
      },
      {
        title: 'Tables & Chairs Included',
        description:
          'Table and chair setup and breakdown is included. Room flips are available on request.',
      },
    ],
    amenities: [
      'Polished concrete floors and 2 feature walls',
      'Food prep / catering area',
      'Covered indoor patio',
      'Natural light throughout',
      '2 private suites',
      '15 60-inch round tables',
      '10 30-inch round cocktail tables',
      '4 6ft rectangle tables',
      '4 8ft rectangle tables',
      '120 ghost round-back chairs',
      '2 mobile bars',
    ],
    matterportUrl: 'https://my.matterport.com/show/?m=bhF2HsBmwJo&nt=1',
    parkingMapUrl:
      'https://cdn.prod.website-files.com/5e8e2114bfef93c1695e1142/6435515823a8480379946eed_RAR_Parking-Map_Ronin-Harrisburg_4-11-23.pdf',
    googleUrl:
      'https://www.google.com/maps/search/?api=1&query=Ronin+Harrisburg,+3501+Harrisburg+Blvd,+Houston,+TX+77003',
    heroImage: '/hero.jpg',
    startingPrice: 2300,
    partialLabel: 'Partial Day, 8 Hours',
    fullLabel: 'Full Day, 10am – 12am',
    pricingTiers: [
      {
        id: 'weekday',
        label: 'Monday–Thursday',
        partial: { price: 2300, additionalHour: 250 },
        full: { price: 3375, additionalHour: 225 },
      },
      {
        id: 'fri-sun',
        label: 'Friday / Sunday',
        partial: { price: 3500, additionalHour: 375 },
        full: { price: 4350, additionalHour: 300 },
      },
      {
        id: 'saturday',
        label: 'Saturday',
        partial: {
          price: null,
          additionalHour: null,
          note: 'Partial day booking upon request, pricing may vary',
        },
        full: { price: 5300, additionalHour: 375 },
      },
    ],
    pricingNotes: [
      'At least one hour must be allotted for tear down within the rental timeframe.',
      'Additional charges may apply for events that check out past 1am or past the agreed checkout time.',
      'Weddings require a professional planner or day-of coordinator on site.',
      'Security is required for all events that serve alcohol.',
      'An hour rehearsal is included with wedding rentals (Monday–Thursday, around the event schedule).',
      'Table and chair setup and breakdown is included. Room flips are not included in standard pricing.',
      'You must be 25 or older to book the venue.',
      'Pricing may vary for holidays, holiday weekends, and peak season months (April, May, September, October, November, December).',
    ],
  },
  {
    slug: 'ronin-2',
    name: 'Ronin 2',
    neighborhood: 'Downtown Warehouse District',
    address: '1315 Sterrett St',
    city: 'Houston, TX 77002',
    standing: 75,
    seated: '45–50',
    description:
      'Ronin 2 is a boutique venue in Houston’s Downtown Warehouse District — industrial features, a modern arch patio, and a mirrored tile bar for intimate weddings and events.',
    body: 'Conveniently located inside the loop, this space gives a whole new meaning to industrial-chic. Three large skylights, a 400 sq ft covered patio, and a chic mirrored bar make it an ideal setting for gatherings and celebrations. Outside vendors and catering are welcome; all alcohol must be served by our exclusive third-party bartending vendor.',
    highlights: [
      {
        title: 'Industrial-Chic Patio',
        description:
          'A 400 sq ft covered patio with a modern arch — picture-perfect for ceremonies, cocktail hour, and proposals.',
      },
      {
        title: 'Mirrored Bar',
        description:
          'A chic, mirrored tile bar area that photographs beautifully day or night.',
      },
      {
        title: 'Greenrooms',
        description:
          'Two greenrooms that work as bride and groom suites or fitting rooms.',
      },
      {
        title: 'Skylight Glow',
        description:
          'Three large natural-light skylights keep the main room bright without feeling cavernous.',
      },
    ],
    amenities: [
      '50 ghost Chiavari chairs',
      '10 6ft tables (linens not included)',
      '3 cocktail tables',
      '400 sq ft covered patio',
      'Catering prep kitchen (no cooking on site)',
      'Chic, mirrored bar area',
      '2 greenrooms',
      'Surround-sound speakers',
      '2 restrooms',
    ],
    matterportUrl: 'https://my.matterport.com/show/?m=1G8QTeGjpxh&nt=1',
    parkingMapUrl:
      'https://cdn.prod.website-files.com/5e8e2114bfef93c1695e1142/642dd16c31eab1b5cafb04f6_RAR_Parking-Map_Ronin-2.pdf',
    googleUrl:
      'https://www.google.com/maps/search/?api=1&query=Ronin+2,+1315+Sterrett+St,+Houston,+TX+77002',
    heroImage: '/gallery/ronin-2/venue-01.jpg',
    youtubeId: 'Hw9dlVhBvxs',
    startingPrice: 1350,
    partialLabel: 'Partial Day, 6 Hours',
    fullLabel: 'Full Day, 10am – 12am',
    pricingTiers: [
      {
        id: 'weekday',
        label: 'Monday–Thursday',
        partial: { price: 1350, additionalHour: null, note: 'Any time frame' },
        full: { price: 2000, additionalHour: null },
      },
      {
        id: 'fri-sun',
        label: 'Friday / Sunday',
        partial: { price: 1700, additionalHour: null, note: 'Any time frame' },
        full: { price: 2500, additionalHour: null },
      },
      {
        id: 'saturday',
        label: 'Saturday',
        partial: {
          price: 2100,
          additionalHour: null,
          note: 'AM 10am–4pm or PM 6pm–12am',
        },
        full: { price: 2800, additionalHour: null },
      },
    ],
    pricingNotes: [
      'Optional in-house table and chair setup $175, breakdown $175, or both $300. Applies to Ronin tables and chairs only.',
      'You must be at least 25 years old to rent the venue.',
      'A $100 cleaning fee applies to hourly bookings.',
      'A refundable security deposit is charged for all rentals.',
      'Pricing may vary for holidays, holiday weekends, and peak season months (May, October, November, December).',
      'Please inquire about hourly pricing for creative rentals.',
    ],
    proposal: {
      headline: 'Pop the question at Ronin 2',
      intro:
        'Our romantic patio is a picture-perfect location to propose.',
      details: [
        'Monday–Thursday bookings no more than 2 months in advance',
        'Friday–Sunday bookings only 2 weeks in advance',
        '15 people or less',
        '$250 + tax per hour for 2 hours',
        '$200 + tax per hour for 3 hours',
        'Pricing varies for groups over 15; a refundable security deposit applies',
      ],
    },
  },
];

export function getLocation(slug: string) {
  return LOCATIONS.find((location) => location.slug === slug);
}

export function locationPath(slug: LocationSlug) {
  return `/locations/${slug}`;
}
