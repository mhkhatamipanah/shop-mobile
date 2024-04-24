


import Image from 'next/image'
import img1 from '../../../../../public/Assets/Images/PlaceHolders/logo/logo.png'
import {AiOutlineUser} from 'react-icons/ai/index.esm'
const ProfileLogo = () => {
  return (
    <div className="h-16 flex justify-between px-4 items-center">
      <div>
        <button className='font-1 p-2 rounded-lg text-xs flex gap-2 justify-center items-center'>
        <AiOutlineUser className="text-lg"/>
           ورود / ثبت نام
           </button>
      </div>
      <div className='flex flex-row-reverse justify-center items-center gap-3'>
         <div className='w-14'>
          <Image className='rounded-xl' alt="asd" src={img1} />
        </div>
        <div className='text-xs' >
          LogoName
        </div>
      </div>

    </div>
  )
}

export default ProfileLogo