import React from 'react'

function CradBottomSection() {
  return (
    <div className='lg:flex lg:flex-row lg:justify-between lg:mt-[3vw] xs:block xs:py-[2vw] lg:py-0 ' >
        <div className="flex items-center mb-4">
    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
    <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-[plus-jakarta-sans]">Direct Flight Only</label>
</div>
<button className='lg:w-[20%] lg:text-[1vw] xs:text-[2vw] font-[plus-jakarta-sans] bg-[#FAC9E4] text-[#FFFFFF] xs:w-[100%] px-[1.3vw] lg:py-[0.5vw] xs:py-[1.5vw] rounded-[25px]'>Search Flight</button>
    </div>
  )
}

export default CradBottomSection