import React from 'react'
import Image from 'next/image'

export default function CardMobile({ img }) {
  return (
    <div className='ml-5 h-auto w-auto flex flex-col items-center gap-2 rounded-xl border  border-l-0 border-gray-500'>
      <a href="">
      <div className='w-[110px] h-[110px] rounded-xl '>
        <Image
          className='w-full rounded-xl '
          src={img}
          alt=""
        />

      </div>
      <div className='w-[120px] p-1'>
        <p className='font-1 text-xs line-clamp-3'>این خیلی محصول خوبیه حتما استفاده کنید من استفاده کردم خوب بوده</p>
      </div>
      </a>
      
    </div>
  );
}

