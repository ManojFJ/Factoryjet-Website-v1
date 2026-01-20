"use client"

import ServiceLocationPage from '@/pages/ServiceLocation'

export default function Page({ params }: { params: { service: string; city: string } }) {
  return <ServiceLocationPage params={params} />
}
