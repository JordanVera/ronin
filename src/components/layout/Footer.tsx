import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Mail } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '@/lib/data';
import { LOCATIONS } from '@/lib/locations';
import SocialLinks from '@/components/layout/SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-primary text-white/80">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo-white.png"
                alt={COMPANY.name}
                width={160}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed">
              Two immersive Houston event venues — Ronin Harrisburg in the East
              End and Ronin 2 in the Downtown Warehouse District.
            </p>
            <SocialLinks linkClassName="text-white/80 hover:text-white" />
          </div>

          <div>
            <h4 className="mb-6 text-xs tracking-[0.25em] text-white uppercase">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xs tracking-[0.25em] text-white uppercase">
              Contact
            </h4>
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <a
                  href={`tel:${COMPANY.phoneHref}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone size={14} className="shrink-0 text-white" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail size={14} className="shrink-0 text-white" />
                  {COMPANY.email}
                </a>
              </li>
              {LOCATIONS.map((location) => (
                <li key={location.slug} className="flex items-start gap-3">
                  <MapPin size={14} className="mt-0.5 shrink-0 text-white" />
                  <span>
                    <span className="block text-white">{location.name}</span>
                    {location.address}
                    <br />
                    {location.city}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-8 text-xs text-white/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY.name}. All Rights Reserved.
          </p>
          <p>{COMPANY.serviceArea}</p>
        </div>
      </div>
    </footer>
  );
}
