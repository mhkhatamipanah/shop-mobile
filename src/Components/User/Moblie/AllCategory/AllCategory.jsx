
import Image from 'next/image'
import img1 from '../../../../../public/Assets/Images/Category/1.webp'
import img2 from '../../../../../public/Assets/Images/Category/2.webp'
const AllCategory = () => {
  return (
    <div>
      <p className="text-center text-xl"> دسته بندی محصولات</p>
      <section className='px-4'>
        <div className="flex justify-evenly items-center">
          <div className=" pt-3 flex flex-col justify-center items-center">
            <Image className='w-20' alt="asd" src={img1} />
            <p className='text-xs text-center'>نوشت افزار</p>
          </div>
          <div className=" pt-3">
            <Image className='w-20' alt="asd" src={img2} />
            <p className='text-xs text-center'> بازی و تفریح</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 pt-3">
          <div className="w-full pt-3 flex flex-col justify-center items-center">
            <Image className='w-20' alt="asd" src={img1} />
            <p className='text-xs text-center'>نوشت افزار</p>
          </div>
          <div className="w-full pt-3 flex flex-col justify-center items-center">
            <Image className='w-20' alt="asd" src={img1} />
            <p className='text-xs text-center'>نوشت افزار</p>
          </div>
          <div className="w-full pt-3 flex flex-col justify-center items-center">
            <Image className='w-20' alt="asd" src={img1} />
            <p className='text-xs text-center'>نوشت افزار</p>
          </div>
          <div className="w-full pt-3 flex flex-col justify-center items-center">
            <Image className='w-20' alt="asd" src={img1} />
            <p className='text-xs text-center'>نوشت افزار</p>
          </div> <div className="w-full pt-3 flex flex-col justify-center items-center">
            <Image className='w-20' alt="asd" src={img1} />
            <p className='text-xs text-center'>نوشت افزار</p>
          </div> <div className="w-full pt-3 flex flex-col justify-center items-center">
            <Image className='w-20' alt="asd" src={img1} />
            <p className='text-xs text-center'>نوشت افزار</p>
          </div> <div className="w-full pt-3 flex flex-col justify-center items-center">
            <Image className='w-20' alt="asd" src={img1} />
            <p className='text-xs text-center'>نوشت افزار</p>
          </div> <div className="w-full pt-3 flex flex-col justify-center items-center">
            <Image className='w-20' alt="asd" src={img1} />
            <p className='text-xs text-center'>نوشت افزار</p>
          </div> <div className="w-full pt-3 flex flex-col justify-center items-center">
          <Image className='w-20' alt="asd" src={img1} />
          <p className='text-xs text-center'>نوشت افزار</p>
        </div>

        </div>
      </section>


    </div>
  )
}

export default AllCategory