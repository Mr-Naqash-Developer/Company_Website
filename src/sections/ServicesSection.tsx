import CardCarousel from '@/components/CardCarousel'
import React from 'react'

const ServicesSection = () => {
  return (
    <section className='h-[70vh] border-y-[1px] border-[#E7DAED] flex flex-col justify-center items-center bg-[#F9F9FF]'>
      <h1 className='text-[#1A202C] text-4xl font-bold '>Services we offer</h1>
      <div>
        <CardCarousel />
      </div>
    </section>
  )
}

export default ServicesSection