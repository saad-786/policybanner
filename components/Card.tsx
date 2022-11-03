import React from 'react'
import bgImg from '../imgs/backgroungWallpaper.png'
import Image from 'next/image'
import logo from '../imgs/Logo.png'
import personIcon from '../imgs/personIcon.png'
import typeIcon from '../imgs/typeIcon.png'

// component
import RadioButton from './RadioButton';
import SelectionSection from './SelectionSection';
import TripForm from './TripForm'
import CradBottomSection from './CradBottomSection'

function Card() {
  return (
    <div className='card bg-white shadow-[0px 10px 20px rgba(0, 0, 0, 0.05)] p-[2vw] rounded-t-[15px] lg:w-[85%] xs:w-[100%] relative z-10 m-auto lg:mt-[-12vw] xs:mt-[0]' >
    <div className='lg:block xs:hidden'>
    <div className='lg:flex lg:justify-between w-[100%] xs:block'>
    <RadioButton/>
   <SelectionSection/>
    </div>
    <div>
      <TripForm/>
      <CradBottomSection/>
    </div>
    </div>
    <div className='lg:hidden xs:block '>
    <div className='lg:flex lg:justify-between w-[100%] xs:block'>
    <RadioButton/>
    </div>
    <div>
      <TripForm/>
      <SelectionSection/>
      <CradBottomSection/>
    </div>
    </div>
    </div>
  )
}

export default Card