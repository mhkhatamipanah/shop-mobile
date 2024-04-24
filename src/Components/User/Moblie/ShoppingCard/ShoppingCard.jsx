import Image from 'next/image'
import img1 from '../../../../../public/Assets/Images/PlaceHolders/card/1.jpg'
import toman from '../../../../../public/Assets/Images/312.png'

const ShoppingCard = () => {
  return (
    <section className='p-2 flex flex-col gap-2'>
      <div className='cardBasket flex w-full p-2 bg-white rounded-lg shadow-md'>
        <div className='w-1/6 flex flex-col justify-evenly items-center'>
          <span className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
          </span>
          <span>3</span>
          <span className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </span>
        </div>
        <div className='w-1/2 flex flex-col justify-between rtl pl-2'>
          <div className='h-10 pt-1'>
            <p className='text-[10px] line-clamp-2   '>
              دفتر خوشگل سیمی هشتاد برگ پاپکو رسمی
            </p>
          </div>
          <div>
          <div className='flex flex-row-reverse justify-between items-center w-full'>
            <p className='font-1 text-[10px] font-2 flex'>
              567,000
              <span className='w-3 mr-1'>
                <Image alt='toman' src={toman} />
              </span>
            </p>
            <span className='bg-red-600 rounded-lg text-[8px] text-white p-1 mr-1 font-2'>
              20%
            </span>
          </div>
          <p className='text-xs text-gray-400 line-through text-[8px] font-2 text-left pl-3'>
            620,000
          </p>
          </div>
        



        </div>
        <div className='w-1/3'>
          <Image className='rounded-xl' alt="asd" src={img1} />
        </div>

      </div>
     <div className='cardBasket flex w-full p-2 bg-white rounded-lg shadow-md'>
        <div className='w-1/6 flex flex-col justify-evenly items-center'>
          <span className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
          </span>
          <span>3</span>
          <span className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </span>
        </div>
        <div className='w-1/2 flex flex-col justify-between rtl pl-2'>
          <div className='h-10 pt-1'>
            <p className='text-[10px] line-clamp-2   '>
              دفتر خوشگل سیمی هشتاد برگ پاپکو رسمی
            </p>
          </div>
          <div>
          <div className='flex flex-row-reverse justify-between items-center w-full'>
            <p className='font-1 text-[10px] font-2 flex'>
              567,000
              <span className='w-3 mr-1'>
                <Image alt='toman' src={toman} />
              </span>
            </p>
            <span className='bg-red-600 rounded-lg text-[8px] text-white p-1 mr-1 font-2'>
              20%
            </span>
          </div>
          <p className='text-xs text-gray-400 line-through text-[8px] font-2 text-left pl-3'>
            620,000
          </p>
          </div>
        



        </div>
        <div className='w-1/3'>
          <Image className='rounded-xl' alt="asd" src={img1} />
        </div>

      </div>
      <div className='cardBasket flex w-full p-2 bg-white rounded-lg shadow-md'>
        <div className='w-1/6 flex flex-col justify-evenly items-center'>
          <span className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
          </span>
          <span>3</span>
          <span className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </span>
        </div>
        <div className='w-1/2 flex flex-col justify-between rtl pl-2'>
          <div className='h-10 pt-1'>
            <p className='text-[10px] line-clamp-2   '>
              دفتر خوشگل سیمی هشتاد برگ پاپکو رسمی
            </p>
          </div>
          <div>
          <div className='flex flex-row-reverse justify-between items-center w-full'>
            <p className='font-1 text-[10px] font-2 flex'>
              567,000
              <span className='w-3 mr-1'>
                <Image alt='toman' src={toman} />
              </span>
            </p>
            <span className='bg-red-600 rounded-lg text-[8px] text-white p-1 mr-1 font-2'>
              20%
            </span>
          </div>
          <p className='text-xs text-gray-400 line-through text-[8px] font-2 text-left pl-3'>
            620,000
          </p>
          </div>
        



        </div>
        <div className='w-1/3'>
          <Image className='rounded-xl' alt="asd" src={img1} />
        </div>

      </div>
      <div className='cardBasket flex w-full p-2 bg-white rounded-lg shadow-md'>
        <div className='w-1/6 flex flex-col justify-evenly items-center'>
          <span className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
          </span>
          <span>3</span>
          <span className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </span>
        </div>
        <div className='w-1/2 flex flex-col justify-between rtl pl-2'>
          <div className='h-10 pt-1'>
            <p className='text-[10px] line-clamp-2   '>
              دفتر خوشگل سیمی هشتاد برگ پاپکو رسمی
            </p>
          </div>
          <div>
          <div className='flex flex-row-reverse justify-between items-center w-full'>
            <p className='font-1 text-[10px] font-2 flex'>
              567,000
              <span className='w-3 mr-1'>
                <Image alt='toman' src={toman} />
              </span>
            </p>
            <span className='bg-red-600 rounded-lg text-[8px] text-white p-1 mr-1 font-2'>
              20%
            </span>
          </div>
          <p className='text-xs text-gray-400 line-through text-[8px] font-2 text-left pl-3'>
            620,000
          </p>
          </div>
        



        </div>
        <div className='w-1/3'>
          <Image className='rounded-xl' alt="asd" src={img1} />
        </div>

      </div>
      <div className='cardBasket flex w-full p-2 bg-white rounded-lg shadow-md'>
        <div className='w-1/6 flex flex-col justify-evenly items-center'>
          <span className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
          </span>
          <span>3</span>
          <span className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </span>
        </div>
        <div className='w-1/2 flex flex-col justify-between rtl pl-2'>
          <div className='h-10 pt-1'>
            <p className='text-[10px] line-clamp-2   '>
              دفتر خوشگل سیمی هشتاد برگ پاپکو رسمی
            </p>
          </div>
          <div>
          <div className='flex flex-row-reverse justify-between items-center w-full'>
            <p className='font-1 text-[10px] font-2 flex'>
              567,000
              <span className='w-3 mr-1'>
                <Image alt='toman' src={toman} />
              </span>
            </p>
            <span className='bg-red-600 rounded-lg text-[8px] text-white p-1 mr-1 font-2'>
              20%
            </span>
          </div>
          <p className='text-xs text-gray-400 line-through text-[8px] font-2 text-left pl-3'>
            620,000
          </p>
          </div>
        



        </div>
        <div className='w-1/3'>
          <Image className='rounded-xl' alt="asd" src={img1} />
        </div>

      </div>
      <div className='cardBasket flex w-full p-2 bg-white rounded-lg shadow-md'>
        <div className='w-1/6 flex flex-col justify-evenly items-center'>
          <span className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
          </span>
          <span>3</span>
          <span className=''>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </span>
        </div>
        <div className='w-1/2 flex flex-col justify-between rtl pl-2'>
          <div className='h-10 pt-1'>
            <p className='text-[10px] line-clamp-2   '>
              دفتر خوشگل سیمی هشتاد برگ پاپکو رسمی
            </p>
          </div>
          <div>
          <div className='flex flex-row-reverse justify-between items-center w-full'>
            <p className='font-1 text-[10px] font-2 flex'>
              567,000
              <span className='w-3 mr-1'>
                <Image alt='toman' src={toman} />
              </span>
            </p>
            <span className='bg-red-600 rounded-lg text-[8px] text-white p-1 mr-1 font-2'>
              20%
            </span>
          </div>
          <p className='text-xs text-gray-400 line-through text-[8px] font-2 text-left pl-3'>
            620,000
          </p>
          </div>
        



        </div>
        <div className='w-1/3'>
          <Image className='rounded-xl' alt="asd" src={img1} />
        </div>

      </div>
    </section>
  )
}

export default ShoppingCard