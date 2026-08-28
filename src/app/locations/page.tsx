import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { COMPANY } from '@/lib/data';
import { LOCATIONS } from '@/lib/locations';
import { formatPrice } from '@/lib/pricing';

export const metadata: Metadata = {
  title: `Locations | ${COMPANY.name}`,
  description:
    'Two Houston event venues: Ronin Harrisburg in the East End (150 standing) and Ronin 2 in the Downtown Warehouse District (75 standing).',
};

export default function LocationsPage() {
  return (
    <>
      <section className="relative h-64 overflow-hidden sm:h-80">
        <Image
          src="/hero.jpg"
          alt="Ronin Art House locations"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="mb-4 text-[10px] tracking-[0.4em] text-[#f45235] uppercase">
            Houston, Texas
          </p>
          <h1 className="font-serif text-5xl text-white sm:text-6xl">Locations</h1>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-foreground/65">
            One brand. Two venues. Ronin Harrisburg and Ronin 2 are both less than
            10 minutes from the Heights, EaDo, and the Washington corridor — with
            easy access to I-10, Highway 59, and I-45.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
          {LOCATIONS.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="group overflow-hidden border border-border transition-colors hover:border-[#f45235]/40"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={location.heroImage}
                  alt={location.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-8">
                <p className="text-[10px] tracking-[0.3em] text-[#f45235] uppercase">
                  {location.neighborhood}
                </p>
                <h2 className="mt-3 font-serif text-3xl text-foreground">{location.name}</h2>
                <p className="mt-2 text-sm text-foreground/55">
                  {location.address}, {location.city}
                </p>
                <div className="mt-6 flex gap-8 border-t border-border pt-6">
                  <div>
                    <p className="font-serif text-2xl text-[#f45235]">{location.standing}</p>
                    <p className="text-xs text-foreground/50">Standing</p>
                  </div>
                  <div>
                    <p className="font-serif text-2xl text-[#f45235]">{location.seated}</p>
                    <p className="text-xs text-foreground/50">Seated</p>
                  </div>
                  <div>
                    <p className="font-serif text-2xl text-[#f45235]">
                      {formatPrice(location.startingPrice)}
                    </p>
                    <p className="text-xs text-foreground/50">From</p>
                  </div>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#f45235] uppercase transition-all group-hover:gap-3">
                  See More Info <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
