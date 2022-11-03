import React from 'react'


// component
import PersonSelection from './PersonSelection';
import TypeSelection from './TypeSelection';

function SelectionSection() {
  return (
    <div className='lg:flex lg:flex-row lg:w-[20%] xs:block xs:w-[100%] lg:justify-between py-[0.2vw] relative'>
  <PersonSelection/>
    <div className='lg:block xs:hidden text-[1vw] text-[#EEEFF1]'>|</div>
    <TypeSelection/>
    </div>
  )
}

export default SelectionSection