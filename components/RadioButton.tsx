import React from 'react'

function RadioButton() {

  function reset() {
    document.getElementById('twoWay')?.classList.remove('text-[#7C8396]');
document.getElementById('oneWay')?.classList.remove('text-[#EB1F8F]');
document.getElementById('twoWay')?.classList.remove('text-[#EB1F8F]');
document.getElementById('oneWay')?.classList.remove('text-[#7C8396]');
  }

function changeRadio(val:string) {
  reset();
  
  if(val=="two way"){
document.getElementById('twoWay')?.classList.add('text-[#EB1F8F]');
document.getElementById('oneWay')?.classList.add('text-[#7C8396]');
  }else if(val=="one way"){
    document.getElementById('twoWay')?.classList.add('text-[#7C8396]');
    document.getElementById('oneWay')?.classList.add('text-[#EB1F8F]');
  }
}
  return (
    <div className='flex flex-row border lg:pt-0 xs:t-[1vw] xs:px-[3vw] lg:w-[17%] xs:[95%] justify-between border-[1px solid #E6E8EC] rounded-[25px] py-[0.2vw] lg:px-[0.7vw]'>
    <div id='twoWay' className='text-[#EB1F8F] lg:text-[1vw]  xs:text-[2vw] flex flex-row gap-[0.3vw] hover:cursor-pointer' onClick={()=>changeRadio("two way")}>
      <span className='lg:text-[2.5vw] xs:text-[3.2vw] block' style={{marginTop:'-1.9vw'}}>.</span> <div>Round Trip</div>
    </div>
    <div className='lg:text-[1vw] xs:text-[1.6vw] text-[#EEEFF1]'>|</div>
    <div id='oneWay' className='text-[#7C8396] lg:text-[1vw] xs:text-[2vw]  flex flex-row gap-[0.3vw]' >
    <div className='hover:cursor-pointer' onClick={()=>changeRadio("one way")}>One Way</div> <span className='lg:text-[2.5vw] xs:text-[3.2vw] block' style={{marginTop:'-1.9vw'}}>.</span> 
    </div>
    </div>
  )
}

export default RadioButton