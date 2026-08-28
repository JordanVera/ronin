export const COMPANY = {
  name: 'Ronin Harrisburg',
  shortName: 'Ronin Harrisburg',
  tagline: 'Immersive Art Gallery Venue',
  phone: '(832) 946-8651',
  phoneHref: '+18329468651',
  email: 'rentals@roninarthouse.com',
  address: '3501 Harrisburg Blvd',
  city: 'Houston, TX 77003',
  serviceArea: 'East End · Second Ward',
  maxGuests: 150,
  instagram: 'https://www.instagram.com/roninarthouse/',
  instagramHandle: '@roninarthouse',
  facebook: 'https://www.facebook.com/roninarthouse/',
  website: 'https://www.rentalsatronin.com/locations/ronin-harrisburg',
  googleUrl: 'https://www.google.com/maps/search/?api=1&query=Ronin+Harrisburg,+3501+Harrisburg+Blvd,+Houston,+TX+77003',
  googleReviewsUrl: 'https://www.google.com/maps/search/Ronin+Harrisburg+3501+Harrisburg+Boulevard+Houston+reviews',
  googleRating: 4.9,
  reviewCount: 163,
};

export const ACCENT = '#f45235';
export const ACCENT_HOVER = '#d93d20';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Videos', href: '/videos' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'main-room', label: 'Main Room' },
  { id: 'patio', label: 'Patio' },
  { id: 'night', label: 'Evening' },
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number]['id'];

export {
  GALLERY_IMAGES,
  type GalleryImage,
} from './gallery-images';

export const ABOUT_CONTENT = {
  intro: 'Ronin Harrisburg combines an industrial aesthetic with a sophisticated edge — 4,400 sq ft of chic, modern event space in Houston\'s East End.',
  body: 'Natural light pours through three skylights by day; at sunset, laser-cut vine decals cast floral patterns across polished concrete floors inspired by the Louvre in Abu Dhabi.',
  evolution: 'Perfect for weddings, corporate events, and social soirees. Outside vendors welcome; women-owned Ronin Art House operates this immersive gallery venue.',
};

export const VENUE_HIGHLIGHTS = [
  {
    title: 'Natural Light',
    description: 'Three skylights flood the space with daylight — a photographer\'s dream with polished concrete and feature walls.',
  },
  {
    title: 'RGB Ceiling Lights',
    description: '400 feet of controllable RGB LED ceiling lighting plus a 360° galaxy projector for evening ambiance.',
  },
  {
    title: 'Private Suites',
    description: 'Two private bridal/groom suites and a covered 400 sq ft indoor patio for cocktail hour.',
  },
  {
    title: 'Flexible Catering',
    description: 'Outside catering welcome with prep area included. Table and chair setup provided.',
  },
];

export const AMENITIES = [
  '3 Skylights',
  'Polished Concrete Floors',
  'RGB LED Lighting',
  'Private Suites',
  'Indoor Patio',
  'Ghost Chairs (120)',
  'Outside Catering OK',
  'WiFi & A/V',
  'Free Parking',
];

export const REVIEWS = [
  { id: 1, name: 'Kara S.', event: 'Event Planner · Google Review', rating: 5, text: "As an event planner, it\'s hard to find a venue in Houston with a modern and elevated feel. Everything from Ronin Harrisburg\'s decor to the layout feels intentional and polished." },
  { id: 2, name: 'Sicily S.', event: 'Google Review', rating: 5, text: "The lighting and the aesthetic is like no other — we absolutely love this venue and staff." },
  { id: 3, name: 'NurseWong 8.', event: 'Google Review', rating: 5, text: "Amazing experience at Ronin Harrisburg!! Perfect size for our event. The setup naturally creates a great vibe and ambience. Team was amazing and friendly throughout!" },
  { id: 4, name: 'Jaritza', event: 'Wedding · Google Review', rating: 5, text: "Walking into this venue, we knew it was exactly where we wanted to get married! Simple, elegant, gorgeous." },
  { id: 5, name: 'Keandra P.', event: 'Google Review', rating: 4, text: "Nice space with a pretty sunroom great for pictures. The main room has incredible natural light through skylights." },
  { id: 6, name: 'Google Reviewer', event: 'Quinceañera · Google Review', rating: 5, text: "We hosted our daughter\'s quince here with minimal decorations and it still looked stunning. Jamison helped with seating, William kept vendors moving, and Brandon matched our energy all night. 10/10." },
  { id: 7, name: 'Google Reviewer', event: 'Wedding · Google Review', rating: 5, text: "Catering a wedding at Ronin Harrisburg was unforgettable. The modern industrial style, skylights, and floral cutouts perfectly complemented our dishes. Guests raved about the natural light." },
  { id: 8, name: 'Google Reviewer', event: 'Google Review', rating: 5, text: "Impressive, clean, and spacious venue! The lighting is a standout feature. Definitely a unique Houston event space worth booking." },
] as const;

export type FaqItem = {
  question: string;
  answer: string;
  link?: { href: string; label: string };
};

export const FAQS: FaqItem[] = [
  {
    question: 'What are your rental rates?',
    answer: 'Partial day packages from $2,300 · Up to 150 standing / 120 seated',
  },
  {
    question: 'What is your guest capacity?',
    answer: 'Our venue accommodates up to 150 guests depending on layout and event type.',
  },
  {
    question: 'Where are you located?',
    answer: 'We are located at 3501 Harrisburg Blvd, Houston, TX 77003.',
  },
  {
    question: 'How do I book a tour?',
    answer: 'Contact us through the inquiry form or call us directly to schedule a private tour of the space.',
  },
  {
    question: 'Do you offer parking?',
    answer: 'Yes — on-site and/or street parking is available. Contact us for details specific to your event date.',
  },
];

export { VIDEOS_DATA as VIDEOS, EMBEDS_DATA as EMBEDS } from './videos';
