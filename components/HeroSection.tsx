import React from 'react'
import hero1 from '@/public/images/insHero1.jpg'
import hero2 from '@/public/images/insHero2.jpg'
import hero3 from '@/public/images/insHero3.jpg'
import hero4 from '@/public/images/insHero4.jpg'
import hero5 from '@/public/images/insHero5.jpg'
import hero6 from '@/public/images/insHero6.jpg'
import hero7 from '@/public/images/insHero7.jpg'
import { SlickSlider } from './Slider'

const HeroSection = () => {
  return (
    <div className='w-full mx-auto max-h-[500px]'>
        <SlickSlider images={[hero1.src, hero2.src, hero3.src, hero4.src, hero5.src, hero6.src, hero7.src]} />
    </div>
  )
}

export default HeroSection