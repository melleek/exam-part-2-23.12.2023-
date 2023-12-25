import React from 'react'

function Card1({img, h1, p, sp, str}) {
  return (
    <div className='w-[560px] lg:h-[332px] bg-[white] rounded-[10px] p-[30px] flex items-start flex-col gap-[15px]' id="d1">
      <img src={img} alt="" />
      <h1 className='font-[700] text-[16px]'>{h1}</h1>
      <p className='lg:text-[16px] sm:text-[14px] text-[#535353] font-[500]'>{p}</p>
      <div className='flex items-center gap-[10px]'>
      <h3 className='text-[#3BA3FF]'>{sp}</h3>
      <img src={str} alt="" />
      </div>
    </div>
  )
}

export default Card1
