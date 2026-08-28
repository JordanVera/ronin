export const COMPANY = {
  name: 'Ronin Art House',
  shortName: 'Ronin',
  tagline: 'An Immersive Venue Experience',
  phone: '(832) 946-8651',
  phoneHref: '+18329468651',
  email: 'rentals@roninarthouse.com',
  address: '3501 Harrisburg Blvd',
  city: 'Houston, TX 77003',
  serviceArea: 'Houston · East End & Warehouse District',
  maxGuests: 150,
  instagram: 'https://www.instagram.com/roninarthouse/',
  instagramHandle: '@roninarthouse',
  facebook: 'https://www.facebook.com/roninarthouse/',
  website: 'https://www.rentalsatronin.com/',
  googleUrl:
    'https://www.google.com/maps/search/?api=1&query=Ronin+Harrisburg,+3501+Harrisburg+Blvd,+Houston,+TX+77003',
  googleReviewsUrl:
    'https://www.google.com/maps/search/Ronin+Harrisburg+3501+Harrisburg+Boulevard+Houston+reviews',
  googleRating: 4.9,
  reviewCount: 163,
};

export const ACCENT = '#f45235';
export const ACCENT_HOVER = '#d93d20';

export type NavLink = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Venues',
    children: [
      { label: 'Ronin Harrisburg', href: '/locations/ronin-harrisburg' },
      { label: 'Ronin 2', href: '/locations/ronin-2' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Videos', href: '/videos' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' },
];

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'harrisburg', label: 'Ronin Harrisburg' },
  { id: 'ronin-2', label: 'Ronin 2' },
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number]['id'];

export {
  GALLERY_IMAGES,
  type GalleryImage,
  type GalleryLocation,
} from './gallery-images';

export { LOCATIONS, getLocation, locationPath } from './locations';

export const ABOUT_CONTENT = {
  intro:
    'One brand, two venues, unlimited possibilities. Ronin Art House is a women-owned immersive gallery venue with two Houston locations — Ronin Harrisburg in the East End and Ronin 2 in the Downtown Warehouse District.',
  body: 'Both spaces mix industrial architecture with a sophisticated edge: skylights, polished surfaces, and rooms that photograph as well as they host. We welcome outside vendors and catering; all alcohol is served by our exclusive third-party bartending vendor.',
  evolution:
    'Whether you need standing room for 150 at Harrisburg or an intimate 75-guest celebration at Ronin 2, we’ll help you match the space to the event.',
};

export const REVIEWS = [
  {
    id: 1,
    name: 'Kara S.',
    event: 'Event Planner · Google Review',
    rating: 5,
    text: "As an event planner, it's hard to find a venue in Houston with a modern and elevated feel. Everything from Ronin Harrisburg's decor to the layout feels intentional and polished.",
  },
  {
    id: 2,
    name: 'Sicily S.',
    event: 'Google Review',
    rating: 5,
    text: 'The lighting and the aesthetic is like no other — we absolutely love this venue and staff.',
  },
  {
    id: 3,
    name: 'NurseWong 8.',
    event: 'Google Review',
    rating: 5,
    text: 'Amazing experience at Ronin Harrisburg!! Perfect size for our event. The setup naturally creates a great vibe and ambience. Team was amazing and friendly throughout!',
  },
  {
    id: 4,
    name: 'Jaritza',
    event: 'Wedding · Google Review',
    rating: 5,
    text: 'Walking into this venue, we knew it was exactly where we wanted to get married! Simple, elegant, gorgeous.',
  },
  {
    id: 5,
    name: 'Keandra P.',
    event: 'Google Review',
    rating: 4,
    text: 'Nice space with a pretty sunroom great for pictures. The main room has incredible natural light through skylights.',
  },
  {
    id: 6,
    name: 'Google Reviewer',
    event: 'Quinceañera · Google Review',
    rating: 5,
    text: "We hosted our daughter's quince here with minimal decorations and it still looked stunning. Jamison helped with seating, William kept vendors moving, and Brandon matched our energy all night. 10/10.",
  },
  {
    id: 7,
    name: 'Google Reviewer',
    event: 'Wedding · Google Review',
    rating: 5,
    text: 'Catering a wedding at Ronin Harrisburg was unforgettable. The modern industrial style, skylights, and floral cutouts perfectly complemented our dishes. Guests raved about the natural light.',
  },
  {
    id: 8,
    name: 'Google Reviewer',
    event: 'Google Review',
    rating: 5,
    text: 'Impressive, clean, and spacious venue! The lighting is a standout feature. Definitely a unique Houston event space worth booking.',
  },
] as const;

export type FaqItem = {
  question: string;
  answer: string;
  link?: { href: string; label: string };
};

export const FAQS: FaqItem[] = [
  {
    question: 'How many locations do you have?',
    answer:
      'Two Houston venues: Ronin Harrisburg at 3501 Harrisburg Blvd (up to 150 standing / 120 seated) and Ronin 2 at 1315 Sterrett St (up to 75 standing / 45–50 seated).',
  },
  {
    question: 'What are your rental rates?',
    answer:
      'Ronin Harrisburg event packages start at $2,300 for a partial day. Ronin 2 event packages start at $1,350 for six hours. Rates vary by day of week, and a refundable security deposit applies to all rentals.',
    link: { href: '/pricing', label: 'View pricing' },
  },
  {
    question: 'What is your guest capacity?',
    answer:
      'Ronin Harrisburg holds up to 150 standing or 120 seated. Ronin 2 holds up to 75 standing or 45–50 seated, depending on layout.',
  },
  {
    question: 'Can we bring our own catering?',
    answer:
      'Yes — outside vendors and catering are welcome at both locations. All alcohol must be served by our exclusive third-party bartending vendor. Security is required for events that serve alcohol.',
  },
  {
    question: 'Do weddings need a planner?',
    answer:
      'Yes. We require a professional wedding planner or day-of coordinator on site. Ask us about in-house planning options and our preferred vendors list.',
  },
  {
    question: 'How do I book a tour?',
    answer:
      'Send an inquiry, call, or text us to schedule a private tour of either space. You can also walk both venues in 3D from each location page.',
    link: { href: '/contact', label: 'Inquire now' },
  },
  {
    question: 'Is there parking?',
    answer:
      'Yes — each venue has a parking map. On-site and nearby street parking details are shared when you tour or book.',
  },
];

export { VIDEOS_DATA as VIDEOS, EMBEDS_DATA as EMBEDS } from './videos';
