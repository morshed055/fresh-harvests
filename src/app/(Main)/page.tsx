import About from '@/components/About'
import HarvestBlog from '@/components/HarvestBlog'
import Hero from '@/components/Hero'
import Offer from '@/components/Offer'
import Product from '@/components/Home_Product'
import Testimonial from '@/components/Testimonial'
import React from 'react'
import Product_card from '@/components/shared/Product_card'

const page = () => {
  return (
    <div className=' -mt-[100px]'>
        <Hero />   
         <Product  />
         <About/>      
         <Offer/>
         <Testimonial/>
         <HarvestBlog/>
      
    </div>
  )
}

export default page