import type { Metadata } from 'next';
import Image from 'next/image';
import CtaStrip from '@/components/home/CtaStrip';
import FaqAccordion from '@/components/faq/FaqAccordion';
import { COMPANY, FAQS } from '@/lib/data';

export const metadata: Metadata = {
  title: `FAQ | ${COMPANY.name}`,
  description:
    'Frequently asked questions about Ronin Art House — two Houston venues, packages, catering, alcohol policy, and touring the spaces.',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.link ? `${faq.answer} ${faq.link.label}.` : faq.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative h-64 overflow-hidden sm:h-80">
        <Image
          src="/gallery/gallery-10.jpeg"
          alt="Ronin Art House frequently asked questions"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="mb-4 text-[10px] tracking-[0.4em] text-[#f45235] uppercase">
            Good to Know
          </p>
          <h1 className="font-serif text-5xl text-white sm:text-6xl">FAQ</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-base leading-relaxed text-foreground/65 sm:text-lg">
            Everything you need to know about hosting at Ronin Harrisburg or
            Ronin 2 — from packages and catering to booking a tour.
          </p>
        </div>
        <FaqAccordion />
      </section>

      <CtaStrip />
    </>
  );
}
