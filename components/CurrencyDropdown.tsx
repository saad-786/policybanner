import React from 'react'

function CurrencyDropdown() {
  return (
    <div>
<form className="flex w-[6%] m-auto  rounded-lg search-shadow absolute top-[1vw]  right-[2vw]" >
    <div className="inline-block relative w-[100%] ">
  <select className="block appearance-none w-full  border-none px-[0.5vw] py-[0.3vw] text-[1vw] pr-[1.7vw]  leading-tight rounded-[12px]">
    <option className='text-[#222222] font-[plus-jakarta-sans] text-[1vw] bg-[#FFFF] hover:bg-white'><span className='text-[#EB1F8F]'>$</span> USD</option>
    <option className='text-[#222222] font-[plus-jakarta-sans] text-[1vw] hover:bg-white'>$ USD</option>
    <option className='text-[#222222] font-[plus-jakarta-sans] text-[1vw] hover:bg-white'>$ USD</option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pl-[0.1vw] pr-[0.2vw] text-gray">
    <svg className="fill-current h-4 w-[0.8vw]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
    </div>
    </form>
</div>
  )
}

export default CurrencyDropdown