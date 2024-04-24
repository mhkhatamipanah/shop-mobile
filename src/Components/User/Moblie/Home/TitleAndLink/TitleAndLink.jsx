import React from 'react'
import Link from 'next/link'

const TitleAndLink = ({title , icon}) => {
  return (
    <div className='flex items-center justify-between rtl px-4'>
        <h3 className='font-1 text-sm flex items-center justify-center gap-2'> 
        {icon}
         {title}</h3>
        <Link href='/allBrands' className='font-1 text-xs'>دیدن همه</Link>
    </div>
  )
}

export default TitleAndLink