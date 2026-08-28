import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CtaStrip from '@/components/home/CtaStrip';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import { ABOUT_CONTENT, COMPANY } from '@/lib/data';
import { LOCATIONS } from '@/lib/locations';

export const metadata: Metadata = {
  title: `About | ${COMPANY.name}`,
  description:
    'Ronin Art House is a women-owned immersive gallery venue with two Houston locations — Ronin Harrisburg and Ronin 2.',
};

export default function AboutPage() {
  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/about-hero.jpg"
          alt="Ronin Art House event venue"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#f45235] text-[10px] tracking-[0.4em] uppercase mb-4">
            Our Story
          </p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">
            About Us
          </h1>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="flex flex-col gap-8">
          <h2 className="font-serif text-4xl sm:text-5xl leading-tight text-foreground">
            An immersive venue experience in{' '}
            <em className="italic text-[#f45235]">Houston, Texas.</em>
          </h2>
          <p className="text-foreground/65 text-lg leading-relaxed">
            {ABOUT_CONTENT.intro}
          </p>
          <p className="text-foreground/65 text-lg leading-relaxed">
            {ABOUT_CONTENT.body}
          </p>
          <p className="text-foreground/65 text-lg leading-relaxed">
            {ABOUT_CONTENT.evolution}
          </p>
          <div className="grid sm:grid-cols-3 gap-8 pt-8 border-t border-border">
            {[
              { number: '2', label: 'Houston Venues' },
              { number: '150', label: 'Max Standing' },
              { number: '5★', label: `${COMPANY.reviewCount}+ Reviews` },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-2xl text-[#f45235]">
                  {stat.number}
                </p>
                <p className="text-sm text-foreground/50 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-[#eeece9]">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-6">
          {LOCATIONS.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="bg-white border border-border p-8 transition-colors hover:border-[#f45235]/40"
            >
              <p className="text-[10px] tracking-[0.3em] text-[#f45235] uppercase">
                {location.neighborhood}
              </p>
              <h3 className="font-serif text-2xl text-foreground mt-3 mb-3">
                {location.name}
              </h3>
              <p className="text-foreground/60 leading-relaxed">
                {location.description}
              </p>
              <p className="mt-4 text-sm text-foreground/50">
                {location.standing} standing · {location.seated} seated
              </p>
            </Link>
          ))}
        </div>
      </section>

      <TestimonialsSection />

      <section className="py-16 px-6 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-[#f45235] text-xs tracking-[0.2em] uppercase hover:gap-3 transition-all"
        >
          Inquire About a Venue <ArrowRight size={12} />
        </Link>
      </section>

      <CtaStrip />
    </>
  );
}
