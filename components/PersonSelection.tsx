import React from 'react'
import Image from 'next/image'
import personIcon from '../imgs/personIcon.png';
import adult from '../imgs/adults.png';
import children from '../imgs/children.png';
import infant from '../imgs/infants.png';
import increment from '../imgs/increment.png';
import decrement from '../imgs/decrement.png';
import { type } from 'os';

function PersonSelection() {
    
    interface IUser {
       [key:string]:any
      }
    const [isOPen,setIsOPen] = React.useState(false);
    const [data,setData] =React.useState<IUser>({adults:0,children:0,infants:0});

function incrementValue(name:string) {
    setData({...data,[name]:data[name]+1})
}
function decrementValue(name:string) {
    data[name]>=1 ? setData({...data,[name]:data[name]-1}) :''
}
function submitHandle() {
    setIsOPen(false);
}
  return (<>
    <div className='text-[#151E34] text-[1vw] flex flex-row pr-[1vw] hover:cursor-pointer lg:py-0 xs:py-[2vw] lg:border-0 xs:border-b xs:border-[1px solid #EEEFF1]' onClick={()=>setIsOPen(!isOPen)}>
    <div>
      <div className='selectedItems flex flex-row  relative'>
         <div className='flex flex-row adults w-[100%]'>
         <span className=' block' style={{marginTop:'-1.9vw'}}><Image
        src={personIcon}
        alt="icon"
        className='lg:w-[100%] xs:w-[100%] lg:mt-[2.2vw] xs:mt-[2.2vw] xs:pr-[1vw] lg:pr-[1vw] m-auto'
      /></span> 
      <p className='font-[plus-jakarta-sans] lg:text-[1vw] xs:text-[1.5vw] text-[#121825]'>{data.adults} Adult</p>
         </div>
         <div className="pointer-events-none absolute  top-[0.3vw] lg:right-[-1vw] xs:right-[-85vw] flex items-center pl-[0.1vw] pr-[0.2vw] text-gray">
      <svg className="fill-current h-4 lg:w-[0.8vw] xs:w-[2vw]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
    </div>
      </div>
      </div>
  </div>
 {
   isOPen?(<div className='dropdown absolute z-10 lg:w-[125%] xs:w-[90%] top-[2vw] right-[2vw] bg-[#FFFFFF] border border-[1px solid #EEEFF1] shadow-[0px 32px 64px -12px rgba(16, 24, 40, 0.14)] rounded-[12px] p-[1vw]'>
<div className='flex flex-row justify-between mt-[1vw]'>
    <div className='flex flex-row'>
<span className='text-[2.5vw] pr-[0.2vw] block' style={{marginTop:'-1.9vw'}}><Image
        src={adult}
        alt="icon"
        className='lg:w-[60%] xs:w-[100%] xs:pr-[1vw]  lg:pr-0 mt-[2.2vw] m-auto'
      /></span> 
      <div>
      <p className='font-[plus-jakarta-sans] lg:text-[1vw] xs:text-[1.5vw] text-[#121825]'>Adults</p>
      <p className='font-[plus-jakarta-sans] lg:text-[0.7vw] xs:text-[1vw] text-[#656B7A]'>Age 16 or over</p>
      </div>
      </div>
      <div className='flex flex-row justify-between'>
      <span className='text-[2.5vw] pr-[1vw] block hover:cursor-pointer'  style={{marginTop:'-1.9vw'}} onClick={()=>decrementValue('adults')}><Image
        src={decrement}
        alt="icon"
        className='lg:w-[60%] xs:w-[90%] mt-[2.2vw] m-auto'
      /></span> 
       <p id='adultsCount' className='font-[plus-jakarta-sans] pr-[1vw] text-[1vw] text-[#121825]'>{data.adults}</p>
       <span className='text-[2.5vw] block hover:cursor-pointer' style={{marginTop:'-1.9vw'}} onClick={()=>incrementValue('adults')}><Image
        src={increment}
        alt="icon"
        className='lg:w-[60%] xs:w-[90%]  mt-[2.2vw] m-auto'
      /></span> 
      </div>
</div>
<div className='flex flex-row justify-between mt-[1vw]'>
    <div className='flex flex-row'>
<span className='text-[2.5vw] pr-[0.2vw] block ' style={{marginTop:'-1.9vw'}}><Image
        src={children}
        alt="icon"
        className='lg:w-[60%] xs:w-[100%] xs:pr-[1vw]  lg:pr-0 mt-[2.2vw] m-autoo'
      /></span> 
      <div>
      <p className='font-[plus-jakarta-sans] xs:text-[1.5vw] lg:text-[1vw] text-[#121825]'>Children</p>
      <p className='font-[plus-jakarta-sans] xs:text-[1vw] lg:text-[0.7vw] text-[#656B7A]'>Age 2 t0 15</p>
      </div>
      </div>
      <div className='flex flex-row justify-between'>
      <span className='text-[2.5vw] pr-[1vw] block hover:cursor-pointer' style={{marginTop:'-1.9vw'}} onClick={()=>decrementValue('children')}><Image
        src={decrement}
        alt="icon"
        className='lg:w-[60%] xs:w-[90%]  mt-[2.2vw] m-auto'
      /></span> 
       <p id='childrenCount' className='font-[plus-jakarta-sans] pr-[1vw] text-[1vw] text-[#121825]'>{data.children}</p>
       <span className='text-[2.5vw] block hover:cursor-pointer' style={{marginTop:'-1.9vw'}} onClick={()=>incrementValue('children')}><Image
        src={increment}
        alt="icon"
        className='lg:w-[60%] xs:w-[90%]  mt-[2.2vw] m-auto'
      /></span> 
      </div>
</div>
<div className='flex flex-row justify-between mt-[1vw]'>
    <div className='flex flex-row'>
<span className='text-[2.5vw] pr-[0.2vw] block' style={{marginTop:'-1.9vw'}}><Image
        src={infant}
        alt="icon"
        className='lg:w-[60%] xs:w-[100%] xs:pr-[1vw]  lg:pr-0 mt-[2.2vw] m-auto'
      /></span> 
      <div>
      <p className='font-[plus-jakarta-sans] xs:text-[1.5vw] lg:text-[1vw] text-[#121825]'>Infants</p>
      <p className='font-[plus-jakarta-sans] xs:text-[1vw] lg:text-[0.7vw] text-[#656B7A]'>Age 0 t0 2</p>
      </div>
      </div>
      <div className='flex flex-row justify-between'>
      <span className='text-[2.5vw] pr-[1vw] block hover:cursor-pointer' style={{marginTop:'-1.9vw'}} onClick={()=>decrementValue('infants')}><Image
        src={decrement}
        alt="icon"
        className='lg:w-[60%] xs:w-[90%]  mt-[2.2vw] m-auto'
      /></span> 
       <p  className='font-[plus-jakarta-sans] pr-[1vw] text-[1vw] text-[#121825]'>{data.infants}</p>
       <span className='text-[2.5vw] block hover:cursor-pointer' style={{marginTop:'-1.9vw'}} onClick={()=>incrementValue('infants')}><Image
        src={increment}
        alt="icon"
        className='lg:w-[60%] xs:w-[90%]  mt-[2.2vw] m-auto'
      /></span> 
      </div>
</div>
<button className='w-[100%] mt-[1.5vw] text-[#656B7A] text-[1vw] py-[0.3vw] bg-[#FFFFFF] border border-[1px solid #EEEFF1] rounded-[16px]' onClick={submitHandle}>
Confirm
</button>
  </div>):(<></>)
}
  </>
  )
}

export default PersonSelection