"use client"

import ServiceLocationPage from '@/pages/ServiceLocation'

// Required for static export - return empty array since we have explicit routes
export function generateStaticParams() {
  return []
}

export default function Page({ params }: { params: { service: string; city: string } }) {
  return <ServiceLocationPage params={params} />
}
