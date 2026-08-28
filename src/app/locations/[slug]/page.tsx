import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocationDetail from '@/components/locations/LocationDetail';
import { COMPANY } from '@/lib/data';
import { LOCATIONS, getLocation } from '@/lib/locations';

export function generateStaticParams() {
  return LOCATIONS.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return { title: `Venues | ${COMPANY.name}` };

  return {
    title: `${location.name} | ${COMPANY.name}`,
    description: location.description,
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  return <LocationDetail location={location} />;
}
