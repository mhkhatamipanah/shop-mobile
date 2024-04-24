import Image from 'next/image'
import React from 'react'
import img1 from '../../../../../../public/Assets/Images/PlaceHolders/banner/1.webp'
import img2 from '../../../../../../public/Assets/Images/PlaceHolders/banner/2.webp'
import img3 from '../../../../../../public/Assets/Images/PlaceHolders/banner/3.webp'
import img4 from '../../../../../../public/Assets/Images/PlaceHolders/banner/4.webp'

const Banner = () => {
  return (
    <div className='grid grid-cols-2  p-2'>
            <Image alt="asd" src={img1} />
            <Image alt="asd" src={img2} />
            <Image alt="asd" src={img3} />
            <Image alt="asd" src={img4} />

    </div>
  )
}

export default Banner