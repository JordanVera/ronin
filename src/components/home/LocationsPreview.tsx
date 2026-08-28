'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { LOCATIONS } from '@/lib/locations';
import { formatPrice } from '@/lib/pricing';

export default function LocationsPreview() {
  return (
    <section className="bg-background px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-[10px] tracking-[0.35em] text-[#f45235] uppercase"
          >
            Featured Locations
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl text-foreground sm:text-5xl"
          >
            1 Brand. 2 Venues.
          </motion.h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {LOCATIONS.map((location, i) => (
            <motion.div
              key={location.slug}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
            >
              <Link
                href={`/locations/${location.slug}`}
                className="group block"
              >
                <div className="relative mb-6 aspect-[16/10] overflow-hidden">
                  <Image
                    src={location.heroImage}
                    alt={location.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <p className="text-[10px] tracking-[0.3em] text-[#f45235] uppercase">
                  {location.neighborhood}
                </p>
                <h3 className="mt-2 font-serif text-3xl text-foreground">
                  {location.name}
                </h3>
                <p className="mt-2 text-sm text-foreground/55">
                  {location.address}, {location.city}
                </p>
                <div className="mt-4 flex gap-6 text-sm text-foreground/70">
                  <span>{location.standing} standing</span>
                  <span>{location.seated} seated</span>
                  <span>From {formatPrice(location.startingPrice)}</span>
                </div>
                <span className="mt-5 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#f45235] uppercase transition-all group-hover:gap-3">
                  Explore this venue <ArrowRight size={12} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
