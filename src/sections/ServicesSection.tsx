import CardCarousel from '@/components/CardCarousel'
import React from 'react'

const ServicesSection = () => {
  return (
    <section className="min-h-[70vh] border-y border-[#E7DAED] flex flex-col justify-center items-center bg-[#F9F9FF] px-4 py-10 md:py-16">
      <h1 className="text-[#1A202C] text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
        Services we offer
      </h1>
      <div className="w-full">
        <CardCarousel />
      </div>
    </section>
  )
}

export default ServicesSection
