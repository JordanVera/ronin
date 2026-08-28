import type { Metadata } from 'next';
import Image from 'next/image';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { COMPANY, type GalleryCategory } from '@/lib/data';

export const metadata: Metadata = {
  title: `Gallery | ${COMPANY.name}`,
  description:
    'Browse photos from Ronin Harrisburg and Ronin 2 — Houston event venues for weddings, celebrations, and gatherings.',
};

const LOCATION_FILTERS = new Set<GalleryCategory>(['all', 'harrisburg', 'ronin-2']);

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ location?: string }>;
}) {
  const { location } = await searchParams;
  const initialCategory: GalleryCategory = LOCATION_FILTERS.has(
    location as GalleryCategory,
  )
    ? (location as GalleryCategory)
    : 'all';

  return (
    <>
      <section className="relative h-64 sm:h-80 overflow-hidden">
        <Image
          src="/gallery/gallery-01.jpg"
          alt="Ronin Art House gallery"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <p className="text-[#f45235] text-[10px] tracking-[0.4em] uppercase mb-4">Our Spaces</p>
          <h1 className="font-serif text-white text-5xl sm:text-6xl">Gallery</h1>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <GalleryGrid key={initialCategory} initialCategory={initialCategory} />
      </section>
    </>
  );
}
