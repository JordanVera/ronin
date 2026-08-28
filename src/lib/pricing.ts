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
    duration: '8 Hours',
    startingPrice: 2300,
  },
  {
    id: 'full',
    name: 'Full Day',
    duration: '10am – 12am',
    startingPrice: 3375,
    highlighted: true,
  },
] as const;

export const PRICING_TIERS: PricingTier[] = [
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
];

export const PRICING_NOTES = [
  'Partial Day rentals include 8 hours of venue access.',
  'Full Day rentals run 10am – 12am.',
  'Additional hours billed at the listed overage rate for your day of week.',
  'Capacity up to 150 standing / 120 seated depending on layout.',
  'Contact us to schedule a tour and confirm availability.',
];

export function formatPrice(amount: number) {
  return `$${amount.toLocaleString('en-US')}`;
}
