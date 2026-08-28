'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import CtaStrip from '@/components/home/CtaStrip';
import LocationPricing from '@/components/locations/LocationPricing';
import { LOCATIONS } from '@/lib/locations';
import { PRICING_NOTES } from '@/lib/pricing';

export default function PricingContent() {
  return (
    <>
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-base leading-relaxed text-foreground/65 sm:text-lg">
            Event packages for both Houston locations. Rates vary by day of week —
            additional hours, workshops, photography, and meetings are available on
            request.
          </p>
        </div>

        <div className="mx-auto flex max-w-5xl flex-col gap-24">
          {LOCATIONS.map((location) => (
            <div key={location.slug}>
              <div className="mb-10 text-center sm:text-left">
                <p className="text-[10px] tracking-[0.35em] text-primary uppercase">
                  {location.neighborhood}
                </p>
                <h2 className="mt-2 font-serif text-3xl text-foreground sm:text-4xl">
                  {location.name}
                </h2>
                <p className="mt-2 text-sm text-foreground/50">
                  {location.standing} standing · {location.seated} seated
                </p>
              </div>
              <LocationPricing location={location} />
              <div className="mt-10 flex justify-center sm:justify-start">
                <Link
                  href={`/locations/${location.slug}`}
                  className="text-xs tracking-[0.2em] text-[#f45235] uppercase hover:underline"
                >
                  View {location.name} details
                </Link>
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
