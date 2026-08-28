import type { LocationVenue } from '@/lib/locations';
import { formatPrice } from '@/lib/pricing';

function RateCell({
  price,
  additionalHour,
  note,
}: {
  price: number | null;
  additionalHour: number | null;
  note?: string;
}) {
  if (price === null) {
    return (
      <div>
        <p className="font-serif text-2xl text-foreground/40 sm:text-3xl">Upon Request</p>
        {note ? (
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-foreground/50">{note}</p>
        ) : null}
      </div>
    );
  }

  return (
    <div>
      <p className="font-serif text-4xl text-foreground sm:text-5xl">{formatPrice(price)}</p>
      {additionalHour !== null ? (
        <p className="mt-2 text-sm text-foreground/55">
          {formatPrice(additionalHour)} each additional hour
        </p>
      ) : null}
      {note ? (
        <p className="mt-2 text-sm text-foreground/50">{note}</p>
      ) : null}
    </div>
  );
}

export default function LocationPricing({ location }: { location: LocationVenue }) {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-12 grid gap-10 sm:grid-cols-2 sm:gap-16">
        <div className="text-center sm:text-left">
          <p className="text-[10px] tracking-[0.35em] text-primary uppercase">Partial Day</p>
          <h3 className="mt-2 font-serif text-3xl text-foreground sm:text-4xl">
            {location.partialLabel}
          </h3>
        </div>
        <div className="text-center sm:text-left">
          <p className="text-[10px] tracking-[0.35em] text-primary uppercase">Full Day</p>
          <h3 className="mt-2 font-serif text-3xl text-foreground sm:text-4xl">
            {location.fullLabel}
          </h3>
        </div>
      </div>

      <div className="flex flex-col">
        {location.pricingTiers.map((tier, index) => (
          <div
            key={tier.id}
            className={index === 0 ? 'border-t border-border pt-10' : 'mt-10 border-t border-border pt-10'}
          >
            <p className="mb-8 text-center text-[11px] tracking-[0.3em] text-foreground/40 uppercase sm:text-left">
              {tier.label}
            </p>
            <div className="grid gap-10 sm:grid-cols-2 sm:gap-16">
              <RateCell {...tier.partial} />
              <RateCell {...tier.full} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
