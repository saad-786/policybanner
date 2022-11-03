import React from 'react'

function Footer() {
  return (<>
    <div className=' mt-[0vw] lg:w-[85%] xs:w-[100%] m-auto p-[2vw] bg-[#EEEFF1] rounded-b-[15px] mb-[2vw]'>
        <div className='lg:flex lg:flex-row lg:justify-between xs:block'>
        <p className='xs:text-[2vw] lg:text-[1vw] font-[plus-jakarta-sans] lg:w-[80%] xs:m-auto xs:text-center xs:w-[80%] mt-[0.5vw]'>By clicking the search button above you are agreeing to the 
            <span className='text-[#EB1F8F]'> Privacy Policy, Terms and Conditions, and End User Licensing Agreement.</span></p>
           <button className='bg-[#121825] text-[white] lg:text-[0.8vw] xs:text-[2vw] font-[plus-jakarta-sans] lg:px-[1.5vw] lg:py-[0.5vw] rounded-[20px] lg:ml-0 lg:mt-0 lg:w-[10%] xs:w-[80%] xs:mt-[2vw] xs:ml-[10%] xs:py-[1vw]'>Agree</button>
            </div>
    </div>
    
    </>
  )
}

export default Footer