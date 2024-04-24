

import Image from 'next/image'
import img1 from '../../../../../../public/Assets/Images/Services/1.png'
import img2 from '../../../../../../public/Assets/Images/Services/2.png'
import img3 from '../../../../../../public/Assets/Images/Services/3.png'
import img4 from '../../../../../../public/Assets/Images/Services/4.png'
import img5 from '../../../../../../public/Assets/Images/Services/5.png'


const Services = () => {
    return (
        <div className="pb-20">
            <div className='grid grid-cols-3 gap-3 justify-evenly items-center h-20 mt-2 ' >
                <div className='flex flex-col justify-evenly items-center w-full h-full'>
                    <Image alt='1' className=' w-12  justify-self-start' src={img4} />
                    <p className='text-[10px] font-2'> 7 روز ضمانت بازگشت </p>
                </div>
                <div className='flex flex-col justify-evenly items-center w-full h-full'>
                    <Image alt='1' className=' w-12  justify-self-start' src={img2} />
                    <p className='text-[10px] font-2'>  تحویل اکسپرس</p>
                </div>
                <div className='flex flex-col justify-evenly items-center w-full h-full'>
                    <Image alt='1' className=' w-12  justify-self-start' src={img3} />
                    <p className='text-[10px] font-2'>پرداخت در محل</p>
                </div>
            </div>
            <div className='flex justify-evenly items-center h-20  mt-1 '>
                <div className='flex flex-col justify-evenly items-center w-full h-full'>
                    <Image alt='1' className=' w-12 ' src={img1} />
                    <p className='text-[10px] font-2'>  پشتیبانی 24 ساعته </p>
                </div>
                <div className='flex flex-col justify-evenly items-center w-full h-full'>
                    <Image alt='1' className=' w-12 ' src={img5} />
                    <p className='text-[10px] font-2'> ضمانت اصل بودن کالا  </p>
                </div>
             
            </div>
        </div>

    )
}

export default Services