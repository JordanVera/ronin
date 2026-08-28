import type { Metadata } from 'next';
import Image from 'next/image';
import PricingContent from '@/components/pricing/PricingContent';
import { COMPANY } from '@/lib/data';

export const metadata: Metadata = {
  title: `Pricing | ${COMPANY.name}`,
  description:
    'Ronin Harrisburg venue packages: Partial Day (8 hours) from $2,300 and Full Day (10am–12am) from $3,375. Rates by day of week in Houston’s East End.',
};

export default function PricingPage() {
  return (
    <>
      <section className="relative h-64 overflow-hidden sm:h-80">
        <Image
          src="/gallery/gallery-06.jpg"
          alt="Ronin Harrisburg venue packages"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="mb-4 text-[10px] tracking-[0.4em] text-[#efc0c5] uppercase">
            Venue Packages
          </p>
          <h1 className="font-serif text-5xl text-white sm:text-6xl">
            Pricing
          </h1>
        </div>
      </section>

      <PricingContent />
    </>
  );
}
