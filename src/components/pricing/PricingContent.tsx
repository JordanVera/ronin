'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import CtaStrip from '@/components/home/CtaStrip';
import {
  PACKAGE_TYPES,
  PRICING_NOTES,
  PRICING_TIERS,
  formatPrice,
  type RateCell,
} from '@/lib/pricing';

function RateDisplay({ rate }: { rate: RateCell }) {
  if (rate.price === null) {
    return (
      <div>
        <p className="font-serif text-2xl text-foreground/40 sm:text-3xl">Upon Request</p>
        {rate.note ? (
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-foreground/50">
            {rate.note}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <div>
      <p className="font-serif text-4xl text-foreground sm:text-5xl">
        {formatPrice(rate.price)}
      </p>
      {rate.additionalHour !== null ? (
        <p className="mt-2 text-sm text-foreground/55">
          {formatPrice(rate.additionalHour)} each additional hour
        </p>
      ) : null}
    </div>
  );
}

export default function PricingContent() {
  return (
    <>
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-base leading-relaxed text-foreground/65 sm:text-lg">
            Choose Partial Day or Full Day access to Ronin Harrisburg. Rates
            vary by day of week — additional hours available on every package.
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="mb-12 grid gap-10 sm:grid-cols-2 sm:gap-16">
            {PACKAGE_TYPES.map((pkg) => (
              <div key={pkg.id} className="text-center sm:text-left">
                <p className="text-[10px] tracking-[0.35em] text-primary uppercase">
                  {pkg.name}
                </p>
                <h2 className="mt-2 font-serif text-3xl text-foreground sm:text-4xl">
                  {pkg.duration}
                </h2>
                <p className="mt-2 text-sm text-foreground/50">
                  From {formatPrice(pkg.startingPrice)}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            {PRICING_TIERS.map((tier, index) => (
              <div
                key={tier.id}
                className={
                  index === 0
                    ? 'border-t border-border pt-10'
                    : 'border-t border-border pt-10 mt-10'
                }
              >
                <p className="mb-8 text-center text-[11px] tracking-[0.3em] text-foreground/40 uppercase sm:text-left">
                  {tier.label}
                </p>
                <div className="grid gap-10 sm:grid-cols-2 sm:gap-16">
                  <RateDisplay rate={tier.partial} />
                  <RateDisplay rate={tier.full} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex bg-primary px-8 py-3.5 text-xs tracking-[0.2em] text-white uppercase transition-colors duration-200 hover:bg-[#d93d20]"
            >
              Inquire About Availability
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center font-serif text-2xl text-foreground">
            Good to Know
          </h2>
          <ul className="flex flex-col gap-3">
            {PRICING_NOTES.map((note) => (
              <li key={note} className="flex gap-2.5 text-sm text-foreground/65">
                <Check size={14} className="mt-0.5 shrink-0 text-primary" />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaStrip />
    </>
  );
}
