import Image from 'next/image';
import Link from 'next/link';
import { Check, MapPin } from 'lucide-react';
import MatterportEmbed from '@/components/locations/MatterportEmbed';
import LocationPricing from '@/components/locations/LocationPricing';
import CtaStrip from '@/components/home/CtaStrip';
import { GALLERY_IMAGES } from '@/lib/gallery-images';
import type { LocationVenue } from '@/lib/locations';
import { formatPrice } from '@/lib/pricing';

const LOCATION_FILTER: Record<LocationVenue['slug'], 'harrisburg' | 'ronin-2'> = {
  'ronin-harrisburg': 'harrisburg',
  'ronin-2': 'ronin-2',
};

export default function LocationDetail({ location }: { location: LocationVenue }) {
  const photos = GALLERY_IMAGES.filter(
    (image) => image.location === LOCATION_FILTER[location.slug] && image.kind === 'venue',
  ).slice(0, 8);

  return (
    <>
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden">
        <Image
          src={location.heroImage}
          alt={location.name}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20 text-center">
          <p className="mb-4 text-[10px] tracking-[0.4em] text-[#f45235] uppercase">
            {location.neighborhood}
          </p>
          <h1 className="font-serif text-5xl text-white sm:text-6xl md:text-7xl">{location.name}</h1>
          <p className="mt-6 flex items-center gap-2 text-sm text-white/75">
            <MapPin size={14} />
            {location.address}, {location.city}
          </p>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
          <div>
            <p className="text-[10px] tracking-[0.35em] text-[#f45235] uppercase">The Space</p>
            <div className="mt-4 h-px w-16 bg-[#f45235]" />
            <div className="mt-10 flex gap-8">
              <div>
                <p className="font-serif text-3xl text-[#f45235]">{location.standing}</p>
                <p className="mt-1 text-xs tracking-wide text-foreground/50">Standing</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-[#f45235]">{location.seated}</p>
                <p className="mt-1 text-xs tracking-wide text-foreground/50">Seated</p>
              </div>
            </div>
            <p className="mt-8 text-sm text-foreground/55">
              Event packages from {formatPrice(location.startingPrice)}
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-lg leading-relaxed text-foreground/70">{location.description}</p>
            <p className="text-lg leading-relaxed text-foreground/70">{location.body}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="bg-[#f45235] px-6 py-3 text-[10px] tracking-[0.2em] text-white uppercase transition-colors hover:bg-[#d93d20]"
              >
                Check My Date
              </Link>
              <a
                href={location.parkingMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border px-6 py-3 text-[10px] tracking-[0.2em] uppercase text-foreground/70 transition-colors hover:border-[#f45235] hover:text-[#f45235]"
              >
                Parking Map
              </a>
              <a
                href={location.googleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border px-6 py-3 text-[10px] tracking-[0.2em] uppercase text-foreground/70 transition-colors hover:border-[#f45235] hover:text-[#f45235]"
              >
                Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eeece9] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-center text-[10px] tracking-[0.35em] text-[#f45235] uppercase">
            Included
          </p>
          <h2 className="mb-12 text-center font-serif text-4xl text-foreground">Amenities</h2>
          <ul className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
            {location.amenities.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm text-foreground/70">
                <Check size={14} className="mt-0.5 shrink-0 text-[#f45235]" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {location.highlights.map((item) => (
              <div key={item.title} className="border border-border bg-white p-8">
                <h3 className="mb-3 font-serif text-2xl text-foreground">{item.title}</h3>
                <p className="leading-relaxed text-foreground/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-center text-[10px] tracking-[0.35em] text-[#f45235] uppercase">
            Walk the Space
          </p>
          <h2 className="mb-10 text-center font-serif text-4xl text-foreground sm:text-5xl">
            3D Tour
          </h2>
          <MatterportEmbed url={location.matterportUrl} title={`${location.name} 3D virtual tour`} />
          {location.youtubeId ? (
            <div className="relative mt-10 aspect-video overflow-hidden rounded-sm border border-border">
              <iframe
                src={`https://www.youtube.com/embed/${location.youtubeId}`}
                title={`${location.name} video tour`}
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
              />
            </div>
          ) : null}
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-[10px] tracking-[0.35em] text-[#f45235] uppercase">Gallery</p>
              <h2 className="font-serif text-4xl text-foreground">Inside {location.name}</h2>
            </div>
            <Link
              href={`/gallery?location=${LOCATION_FILTER[location.slug]}`}
              className="text-xs tracking-[0.2em] text-[#f45235] uppercase hover:underline"
            >
              View all photos
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {photos.map((image) => (
              <div key={image.id} className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="border-t border-border px-6 py-20 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-[10px] tracking-[0.35em] text-[#f45235] uppercase">Rental Pricing</p>
          <h2 className="font-serif text-4xl text-foreground sm:text-5xl">Event Packages</h2>
        </div>
        <LocationPricing location={location} />
        <ul className="mx-auto mt-16 flex max-w-3xl flex-col gap-3">
          {location.pricingNotes.map((note) => (
            <li key={note} className="flex gap-2.5 text-sm text-foreground/65">
              <Check size={14} className="mt-0.5 shrink-0 text-primary" />
              {note}
            </li>
          ))}
        </ul>
        <div className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="bg-primary px-8 py-3.5 text-xs tracking-[0.2em] text-white uppercase transition-colors hover:bg-[#d93d20]"
          >
            Inquire About Availability
          </Link>
        </div>
      </section>

      {location.proposal ? (
        <section className="bg-[#0e0c08] px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#efc0c5] uppercase">Proposals</p>
            <h2 className="font-serif text-4xl text-white sm:text-5xl">{location.proposal.headline}</h2>
            <p className="mx-auto mt-6 max-w-xl text-white/70">{location.proposal.intro}</p>
            <ul className="mt-10 flex flex-col gap-3 text-left">
              {location.proposal.details.map((detail) => (
                <li key={detail} className="flex gap-2.5 text-sm text-white/70">
                  <Check size={14} className="mt-0.5 shrink-0 text-[#efc0c5]" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <CtaStrip />
    </>
  );
}
