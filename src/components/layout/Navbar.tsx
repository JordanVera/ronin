'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '@/lib/data';
import { cn } from '@/lib/utils';
import SocialLinks from '@/components/layout/SocialLinks';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [venuesOpen, setVenuesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setVenuesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const venuesActive = pathname.startsWith('/locations/');

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4">
      <nav
        className={cn(
          'mx-auto flex items-center justify-between rounded-full border px-3 py-2 transition-[background-color,border-color,box-shadow,max-width] duration-500 ease-out sm:px-4',
          scrolled || mobileOpen
            ? 'max-w-5xl border-white/20 bg-[#302c2c] shadow-lg shadow-[#302c2c]/30'
            : 'max-w-6xl border-transparent bg-[#302c2c]/0 shadow-none',
        )}
      >
        <Link href="/" className="flex shrink-0 items-center gap-2 pl-1">
          <Image
            src="/logo-white.png"
            alt={COMPANY.name}
            width={160}
            height={48}
            className="h-6 w-auto"
            priority
          />
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((link) => {
            if (link.children) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setVenuesOpen(true)}
                  onMouseLeave={() => setVenuesOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={venuesOpen}
                    aria-haspopup="true"
                    className={cn(
                      'group relative flex items-center gap-1 rounded-full px-2.5 py-1.5 text-[11px] font-medium tracking-widest uppercase transition-colors xl:px-3',
                      venuesActive ? 'text-white' : 'text-white/80 hover:text-white',
                    )}
                    onClick={() => setVenuesOpen((open) => !open)}
                  >
                    {link.label}
                    <ChevronDown
                      size={12}
                      className={cn(
                        'transition-transform duration-200',
                        venuesOpen ? 'rotate-180' : '',
                      )}
                    />
                    <span
                      className={cn(
                        'absolute inset-x-3.5 -bottom-0.5 h-px bg-white transition-transform duration-300',
                        venuesActive || venuesOpen
                          ? 'scale-x-100'
                          : 'scale-x-0 group-hover:scale-x-100',
                      )}
                    />
                  </button>
                  <AnimatePresence>
                    {venuesOpen ? (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.16 }}
                        className="absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3"
                      >
                        <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#302c2c] py-2 shadow-xl">
                          {link.children.map((child) => {
                            const childActive = pathname === child.href;
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={cn(
                                  'block px-4 py-2.5 text-[11px] font-medium tracking-widest uppercase transition-colors',
                                  childActive
                                    ? 'text-white'
                                    : 'text-white/75 hover:bg-white/10 hover:text-white',
                                )}
                              >
                                {child.label}
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            }

            const isActive =
              pathname === link.href ||
              (link.href !== '/' && pathname.startsWith(`${link.href}/`));

            return (
              <Link
                key={link.href}
                href={link.href!}
                className={cn(
                  'group relative rounded-full px-2.5 py-1.5 text-[11px] font-medium tracking-widest uppercase transition-colors xl:px-3',
                  isActive ? 'text-white' : 'text-white/80 hover:text-white',
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute inset-x-3.5 -bottom-0.5 h-px bg-white transition-transform duration-300',
                    isActive
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100',
                  )}
                />
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-1.5">
          <SocialLinks
            className="mr-4 md:mr-2"
            iconSize={18}
            linkClassName="text-white/80 hover:text-white"
          />
          <Link
            href="/contact"
            className="hidden items-center rounded-full border border-white px-3.5 py-1.5 text-[10px] tracking-[0.2em] uppercase text-white transition-all duration-200 hover:bg-white hover:text-primary sm:inline-flex"
          >
            Book a Tour
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-white xl:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className={cn(
              'mx-auto mt-2 overflow-hidden rounded-3xl border border-white/20 bg-[#302c2c] p-4 shadow-xl xl:hidden',
              scrolled || mobileOpen ? 'max-w-5xl' : 'max-w-6xl',
            )}
          >
            <div className="flex flex-col">
              {NAV_LINKS.map((link) => {
                if (link.children) {
                  return (
                    <div key={link.label} className="py-1">
                      <p className="px-3 py-2 text-[10px] tracking-[0.2em] text-white/40 uppercase">
                        {link.label}
                      </p>
                      {link.children.map((child) => {
                        const isActive = pathname === child.href;
                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className={cn(
                              'block rounded-xl px-3 py-2.5 text-sm font-medium transition hover:bg-white/10',
                              isActive
                                ? 'text-white'
                                : 'text-white/80 hover:text-white',
                            )}
                          >
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  );
                }

                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href!}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      'rounded-xl px-3 py-2.5 text-sm font-medium transition hover:bg-white/10',
                      isActive
                        ? 'text-white'
                        : 'text-white/80 hover:text-white',
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className="mt-3 grid gap-2 border-t border-white/10 pt-3">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-xl bg-white px-4 py-3 text-center text-sm font-semibold tracking-[0.15em] uppercase text-primary"
              >
                Book a Tour
              </Link>
              <a
                href={`tel:${COMPANY.phoneHref}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-white/40 px-4 py-3 text-center text-sm font-medium text-white"
              >
                <Phone size={14} />
                {COMPANY.phone}
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
