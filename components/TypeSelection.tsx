import React from 'react'
import Image from 'next/image'
import typeIcon from '../imgs/typeIcon.png';

function TypeSelection() {
    interface IUser {
        [key:string]:string
       }
     const [isModalOPen,setIsModalOPen] = React.useState(false);
     const [data,setData] =React.useState<IUser>({name:'All Classes'});
 
function putValue(name:string) {
    setData({name:name})
}
 function submitHandle() {
    setIsModalOPen(false);
 }
  return (<>
    <div className='text-[#151E34] text-[1vw] flex flex-row relative hover:cursor-pointer lg:py-0 xs:py-[2vw] lg:border-0 xs:border-b xs:border-[1px solid #EEEFF1]' onClick={()=>setIsModalOPen(!isModalOPen)}>
    <div>
      <div className='selectedItems flex flex-row  '>
         <div className='flex flex-row adults w-[100%]'>
         <span className='text-[2.5vw] block' style={{marginTop:'-1.9vw'}}><Image
        src={typeIcon}
        alt="icon"
        className='lg:w-[100%] xs:w-[100%] lg:pr-[1vw] xs:pr-[1vw] mt-[2.2vw] m-auto'
      /></span> 
      <p className='lg:text-[1vw] xs:text-[1.5vw] font-[plus-jakarta-sans] '>{data.name}</p>
         </div>
      </div>
      </div>
      <div className="pointer-events-none absolute xs:top-[2.5vw] lg:top-[0.3vw] lg:right-[-1vw] xs:right-[3.7vw] flex items-center pl-[0.1vw] pr-[0.2vw] text-gray">
      <svg className="fill-current h-4 xs:w-[2vw] lg:w-[0.8vw]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
    </div>
  </div>
  {
   isModalOPen?(<div className='dropdown absolute lg:w-[125%] xs:w-[90%] lg:top-[2vw] xs:top-[11vw] lg:right-[-6vw] xs:right-[5vw] bg-[#FFFFFF] border border-[1px solid #EEEFF1] shadow-[0px 32px 64px -12px rgba(16, 24, 40, 0.14)] rounded-[12px] p-[1vw]'>
<div className='flex flex-row justify-between mt-[1vw]'>
    <div className='flex flex-row'>
<span className='text-[2.5vw] pr-[0.2vw] block' style={{marginTop:'-1.9vw'}}><Image
        src={typeIcon}
        alt="icon"
        className='lg:w-[60%] xs:w-[100%] xs:pr-[1vw] lg:pr-0 mt-[2.2vw] m-auto'
      /></span> 
      <div>
      <p className='font-[plus-jakarta-sans] lg:text-[1vw] xs:text-[1.5vw] text-[#121825]'>All Classes</p>
      </div>
      </div>
<input onClick={()=>putValue('All Classes')} id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
</div>
<div className='flex flex-row justify-between mt-[1vw]'>
    <div className='flex flex-row'>
<span className='text-[2.5vw] pr-[0.2vw] block ' style={{marginTop:'-1.9vw'}}><Image
        src={typeIcon}
        alt="icon"
        className='lg:w-[60%] xs:w-[100%] xs:pr-[1vw] lg:pr-0 mt-[2.2vw] m-auto'
      /></span> 
      <div>
      <p className='font-[plus-jakarta-sans] lg:text-[1vw] xs:text-[1.5vw] text-[#121825]'>Economy Class</p>
      </div>
      </div>
      <input onClick={()=>putValue('Economy Class')} id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
</div>
<div className='flex flex-row justify-between mt-[1vw]'>
    <div className='flex flex-row'>
<span className='text-[2.5vw] pr-[0.2vw] block' style={{marginTop:'-1.9vw'}}><Image
        src={typeIcon}
        alt="icon"
        className='lg:w-[60%] xs:w-[100%] xs:pr-[1vw] lg:pr-0 mt-[2.2vw] m-auto'
      /></span> 
      <div>
      <p className='font-[plus-jakarta-sans] xs:text-[1.5vw] lg:text-[1vw] text-[#121825]'>Business Class</p>
      </div>
      </div>
      <input onClick={()=>putValue('Business Class')} id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
</div>
<div className='flex flex-row justify-between mt-[1vw]'>
    <div className='flex flex-row'>
<span className='text-[2.5vw] pr-[0.2vw] block' style={{marginTop:'-1.9vw'}}><Image
        src={typeIcon}
        alt="icon"
        className='lg:w-[60%] xs:w-[100%] xs:pr-[1vw] lg:pr-0 mt-[2.2vw] m-auto'
      /></span> 
      <div>
      <p className='font-[plus-jakarta-sans] lg:text-[1vw] xs:text-[1.5vw] text-[#121825]'>First Class</p>
      </div>
      </div>
      <input onClick={()=>putValue('First Class')} id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
</div>
<button className='w-[100%] mt-[1.5vw] text-[#656B7A] text-[1vw] py-[0.3vw] bg-[#FFFFFF] border border-[1px solid #EEEFF1] rounded-[16px]' onClick={submitHandle}>
Confirm
</button>
  </div>):(<></>)
}
  </>
  )
}

export default TypeSelection