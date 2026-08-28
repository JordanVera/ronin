'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PACKAGE_TYPES, PRICING_TIERS, formatPrice } from '@/lib/pricing';

export default function PricingPreview() {
  return (
    <section className="bg-[#0e0c08] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-[10px] tracking-[0.35em] text-[#efc0c5] uppercase"
          >
            Venue Packages
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl text-white sm:text-5xl"
          >
            Partial Day &amp; Full Day
          </motion.h2>
        </div>

        <div className="mx-auto grid max-w-4xl gap-12 md:grid-cols-2 md:gap-16">
          {PACKAGE_TYPES.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="flex flex-col"
            >
              <p className="text-[10px] tracking-[0.3em] text-[#efc0c5] uppercase">
                {pkg.name}
              </p>
              <p className="mt-2 font-serif text-3xl text-white">{pkg.duration}</p>
              <p className="mt-4 font-serif text-5xl text-white">
                From {formatPrice(pkg.startingPrice)}
              </p>
              <ul className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-6">
                {PRICING_TIERS.map((tier) => {
                  const rate = pkg.id === 'partial' ? tier.partial : tier.full;
                  return (
                    <li
                      key={tier.id}
                      className="flex items-baseline justify-between gap-4 text-sm"
                    >
                      <span className="text-white/50">{tier.label}</span>
                      <span className="text-white/80">
                        {rate.price === null
                          ? 'Upon request'
                          : formatPrice(rate.price)}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <Link
                href="/pricing"
                className="mt-8 inline-flex items-center gap-2 text-xs tracking-[0.2em] text-[#efc0c5] uppercase transition-all hover:gap-3"
              >
                View Details <ArrowRight size={12} />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/pricing"
            className="inline-flex border border-[#efc0c5] px-8 py-3.5 text-xs tracking-[0.2em] text-[#efc0c5] uppercase transition-colors duration-200 hover:bg-[#efc0c5] hover:text-primary"
          >
            See Full Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
