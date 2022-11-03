import React from 'react'
import Image from 'next/image'
import arrow from '../imgs/arrow.png'
import Autocomplete from './autocomplete/Autocomplete';
function TripForm() {
  const [swipe,setSwipe] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState("");
  return (
    <form >
        <div className='lg:flex lg:flex-row lg:mt-[5vw] lg:justify-between xs:block'>
        {  swipe?(<div className='flex flex-row lg:w-[52%] lg:py-0 xs:py-[2vw] xs:w-[100%] lg:border-none xs:border-b xs:border-[1px solid #EEEFF1]' >
        <div className='w-[40%]'>
        <label htmlFor="From" className='text-[#656B7A] lg:text-[1vw] xs:text-[1.5vw] font-[plus-jakarta-sans]'>To</label>
        {/* <input type="text" className='text-black text-[1.5vw] font-[plus-jakarta-sans] w-[95%]' placeholder='Select City'/> */}
        <div className="flex items-center justify-center">
      <Autocomplete options={[{title:'Chennai',description:'hello to everyone'}, {title:'Chennai',description:'hello to everyone'}, {title:'Chennai',description:'hello to everyone'}]} 
        value={selectedOption}
        onChange={setSelectedOption}
      />
      </div>
        </div>
        <div className='w-[20%]'>
          <div className='hover:cursor-pointer w-[20%]' onClick={()=>setSwipe(!swipe)}>
        <span className='text-[2.5vw] block' style={{marginTop:'-1.9vw'}}><Image
        src={arrow}
        alt="icon"
        className='w-[100%] mt-[3vw]'
      /></span> 
         <span className='text-[2.5vw] block' style={{marginTop:'-1.9vw'}}><Image
        src={arrow}
        alt="icon"
        className='w-[100%] mt-[1.7vw] transfor rotate-[-180deg]'
      /></span> 
      </div>
        </div>
        <div className='w-[40%]'>
        <label htmlFor="to" className='text-[#656B7A] lg:text-[1vw] xs:text-[1.5vw] font-[plus-jakarta-sans]'>From</label>
        {/* <input type="text" className='text-black text-[1.5vw] font-[plus-jakarta-sans] w-[90%]'  placeholder='Select City'/> */}
       <div className="flex items-center justify-center">
      <Autocomplete options={[{title:'islamabad',description:'hello to everyone'}, {title:'lahore',description:'hello to everyone'}, {title:'karachi',description:'hello to everyone'}]} 
        value={selectedOption}
        onChange={setSelectedOption}
      />
      </div>
        </div>
        </div>):(
        <div className='flex flex-row  lg:py-0 xs:py-[2vw] lg:w-[52%] xs:w-[100%] lg:border-none xs:border-b xs:border-[1px solid #EEEFF1]' >
        <div className='w-[40%]'>
        <label htmlFor="From" className='text-[#656B7A] xs:w-[80%] xs:text-[1.5vw] lg:text-[1vw] font-[plus-jakarta-sans]'>From</label>
        {/* <input type="text" className='text-black text-[1.5vw] font-[plus-jakarta-sans] w-[90%]' placeholder='Select City'/> */}
        <div className="flex items-center justify-center">
      <Autocomplete options={[{title:'Chennai',description:'hello to everyone'}, {title:'Chennai',description:'hello to everyone'}, {title:'Chennai',description:'hello to everyone'}]} 
        value={selectedOption}
        onChange={setSelectedOption}
      />
      </div>
        </div>
        <div className='w-[20%]'>
          <div className='hover:cursor-pointer w-[20%]' onClick={()=>setSwipe(!swipe)}>
        <span className='text-[2.5vw] block' style={{marginTop:'-1.9vw'}}><Image
        src={arrow}
        alt="icon"
        className='w-[100%] mt-[3vw]'
      /></span> 
         <span className='text-[2.5vw] block' style={{marginTop:'-1.9vw'}}><Image
        src={arrow}
        alt="icon"
        className='w-[100%] mt-[1.7vw] transfor rotate-[-180deg]'
      /></span> 
      </div>
        </div>
        <div className='w-[40%]'>
        <label htmlFor="to" className='text-[#656B7A] xs:text-[1.5vw] lg:text-[1vw] font-[plus-jakarta-sans]'>To</label>
        {/* <input type="text" className='text-black text-[1.5vw] font-[plus-jakarta-sans] w-[95%]'  placeholder='Select City'/> */}
        <div className="flex items-center justify-center">
      <Autocomplete options={[{title:'Chennai',description:'hello to everyone'}, {title:'Chennai',description:'hello to everyone'}, {title:'Chennai',description:'hello to everyone'}]} 
        value={selectedOption}
        onChange={setSelectedOption}
      />
      </div>
        </div>
        </div>
        )
}
<div className='flex flex-row  lg:w-[48%] xs:w-[100%] lg:border-none xs:border-b xs:border-[1px solid #EEEFF1] lg:py-0 xs:py-[2vw]' >
        <div className='w-[50%]'>
        <p className='text-[#656B7A] lg:text-[1vw] xs:text-[1.5vw] font-[plus-jakarta-sans]'>Depart</p>
        <input type="date" className='text-black lg:text-[1.5vw] xs:text-[2vw] font-[plus-jakarta-sans] lg:w-[95%] xs:w-[86%]'   placeholder='Add Date'/>
        </div>
        <div className='w-[50%] text-right'>
        <p className='text-[#656B7A] lg:text-[1vw] xs:text-[1.5vw] lg:text-right xs:text-left lg:w-[95%] xs:w-[80%]  xs:ml-[20%] lg:ml-0 font-[plus-jakarta-sans]'>Return</p>
        <input type="text" className='text-black xs:text-left lg:text-right lg:text-[1.5vw] xs:text-[2vw]  font-[plus-jakarta-sans] lg:w-[95%] xs:w-[80%]' placeholder='Add Date'/>
        </div>
        </div>
        </div>
      </form>
  )
}

export default TripForm