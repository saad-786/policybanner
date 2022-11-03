import React from 'react'
import bgImg from '../imgs/backgroungWallpaper.png'
import Image from 'next/image'
import logo from '../imgs/Logo.png'

// import currency dropdown
import CurrencyDropdown from './CurrencyDropdown';

function HeaderSectionAndBackground() {
  return (<>
    <div className='xs:hidden lg:block bg-white relative w-[100%] m-auto'>
      {/* bg image */}
  <Image
      src={bgImg}
      alt="Picture of the author"
      className='w-[100%]'
    />
    {/* logo */}
<Image
      src={logo}
      alt="Picture of the author"
      className='w-[25%] absolute z-10 top-[13vw] left-[34vw]'
    />
    <CurrencyDropdown/>
    </div>
    </>
  )
}

export default HeaderSectionAndBackground