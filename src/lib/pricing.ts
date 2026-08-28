import { LOCATIONS } from './locations';

export type RateCell = {
  price: number | null;
  additionalHour: number | null;
  note?: string;
};

export type PricingTier = {
  id: string;
  label: string;
  partial: RateCell;
  full: RateCell;
};

export const PACKAGE_TYPES = [
  {
    id: 'partial',
    name: 'Partial Day',
    duration: '6–8 Hours',
    startingPrice: 1350,
  },
  {
    id: 'full',
    name: 'Full Day',
    duration: '10am – 12am',
    startingPrice: 2000,
    highlighted: true,
  },
] as const;

export const PRICING_TIERS: PricingTier[] = LOCATIONS[0].pricingTiers;

export const PRICING_NOTES = [
  'Two Houston locations with different capacities and packages.',
  'Ronin Harrisburg: Partial Day (8 hours) and Full Day (10am–12am).',
  'Ronin 2: Partial Day (6 hours) and Full Day (10am–12am).',
  'A refundable security deposit is charged for all rentals.',
  'You must be 25 or older to book either venue.',
  'Pricing may vary for holidays, holiday weekends, and peak season.',
];

export function formatPrice(amount: number) {
  return `$${amount.toLocaleString('en-US')}`;
}
