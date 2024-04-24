'use client'
import React from 'react'
import { FcComboChart } from 'react-icons/fc/index.esm'
import TitleAndLink from '../TitleAndLink/TitleAndLink'
import img1 from '../../../../../../public/Assets/Images/PlaceHolders/card/1.jpg'
import img2 from '../../../../../../public/Assets/Images/PlaceHolders/card/2.jpg'
import img3 from '../../../../../../public/Assets/Images/PlaceHolders/card/3.jpg'
import img4 from '../../../../../../public/Assets/Images/PlaceHolders/card/4.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import toman from '../../../../../../public/Assets/Images/312.png'

const SwiperHomeCards = () => {
    return (
        <>
            <TitleAndLink title={'محصولات پرفروش'} icon={<FcComboChart />} />
            {/* 
            <Swiper
                slidesPerView={2.5}
                spaceBetween={10}
                dir="rtl"
                // centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                className="mySwiper !rounded !m-3"
                pagination={{
                    clickable: true,
                }}
            // modules={[Autoplay,Pagination]}
            >
                <SwiperSlide>
                    <div className='bg-white p-2 rounded-lg '>
                        <Image alt="asd" src={img1} />
                        <div className='my-1'>
                            <h3 className='text-[10px] font-1 line-clamp-2 '> دفتر خوشگل سیمی هشتاد برگ پاپکو رسمی</h3>
                        </div>
                        <div className='h-10 flex flex-col justify-evenly items-end '>
                            <div className='flex flex-row-reverse justify-between items-center w-full'>
                                <p className='text-[10px] font-2 flex mr-2'>
                                    567,000
                                    <span className='w-3 mr-1'>
                                        <Image alt='toman' src={toman} />
                                    </span>
                                </p>
                                <span className='bg-red-600 rounded-lg text-[8px] text-white p-1 mr-1 font-2'>
                                    20%
                                </span>
                            </div>
                            <p className='text-xs text-gray-400 line-through text-[8px] font-2'>
                                620,000
                            </p>
                        </div>
                        <div>
                            <button className='font-1 text-[10px] text-white bg-blue-500 w-full rounded-md rounded-tr-sm rounded-bl-sm p-1 my-1'>
                              جزئیات
                            </button>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>
                <div className='bg-white p-2 rounded-lg '>
                        <Image alt="asd" src={img2} />
                        <div className='my-1'>
                            <h3 className='text-[10px] font-1 line-clamp-2 '> دفتر خوشگل سیمی هشتاد برگ پاپکو رسمی</h3>
                        </div>
                        <div className='h-10 flex flex-col justify-evenly items-end '>
                            <div className='flex flex-row-reverse justify-between items-center w-full'>
                                <p className='text-[10px] font-2 flex mr-2'>
                                    567,000
                                    <span className='w-3 mr-1'>
                                        <Image alt='toman' src={toman} />
                                    </span>
                                </p>
                                <span className='bg-red-600 rounded-lg text-[8px] text-white p-1 mr-1 font-2'>
                                    20%
                                </span>
                            </div>
                            <p className='text-xs text-gray-400 line-through text-[8px] font-2'>
                                620,000
                            </p>
                        </div>
                        <div>
                            <button className='font-1 text-[10px] text-white bg-blue-500 w-full rounded-md rounded-tr-sm rounded-bl-sm p-1 my-1'>
                              جزئیات
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='bg-white p-2 rounded-lg '>
                        <Image alt="asd" src={img3} />
                        <div className='my-1'>
                            <h3 className='text-[10px] font-1 line-clamp-2 '> دفتر خوشگل سیمی هشتاد برگ پاپکو رسمی</h3>
                        </div>
                        <div className='h-10 flex flex-col justify-evenly items-end '>
                            <div className='flex flex-row-reverse justify-between items-center w-full'>
                                <p className='text-[10px] font-2 flex mr-2'>
                                    567,000
                                    <span className='w-3 mr-1'>
                                        <Image alt='toman' src={toman} />
                                    </span>
                                </p>
                                <span className='bg-red-600 rounded-lg text-[8px] text-white p-1 mr-1 font-2'>
                                    20%
                                </span>
                            </div>
                            <p className='text-xs text-gray-400 line-through text-[8px] font-2'>
                                620,000
                            </p>
                        </div>
                        <div>
                            <button className='font-1 text-[10px] text-white bg-blue-500 w-full rounded-md rounded-tr-sm rounded-bl-sm p-1 my-1'>
                              جزئیات
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='bg-white p-2 rounded-lg '>
                        <Image alt="asd" src={img4} />
                        <div className='my-1'>
                            <h3 className='text-[10px] font-1 line-clamp-2 '>
                                 دفتر خوشگل سیمی هشتاد برگ پاپکو رسمی
                            </h3>
                        </div>
                        <div className='h-10 flex flex-col justify-evenly items-end '>
                            <div className='flex flex-row-reverse justify-between items-center w-full'>
                                <p className='text-[10px] font-2 flex mr-2'>
                                    567,000
                                    <span className='w-3 mr-1'>
                                        <Image alt='toman' src={toman} />
                                    </span>
                                </p>
                                <span className='bg-red-600 rounded-lg text-[8px] text-white p-1 mr-1 font-2'>
                                    20%
                                </span>
                            </div>
                            <p className='text-xs text-gray-400 line-through text-[8px] font-2'>
                                620,000
                            </p>
                        </div>
                        <div>
                            <button className='font-1 text-[10px] text-white bg-blue-500 w-full rounded-md rounded-tr-sm rounded-bl-sm p-1 my-1'>
                              جزئیات
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper> */}
            <div className='hideScrollBarX px-3 snap-x w-full overflow-x-auto overflow-y-visible touch-auto flex flex-nowrap items-center jus gap-2 rtl my-2'>

                <div className='bg-white p-2 rounded-lg w-[35vw] min-w-[35vw] '>
                    <Image alt="asd" src={img1} />
                    <div className='my-1'>
                        <h3 className='text-[10px] font-1 line-clamp-2 '> دفتر خوشگل سیمی هشتاد برگ پاپکو رسمی</h3>
                    </div>
                    <div className='h-10 flex flex-col justify-evenly items-end '>
                        <div className='flex flex-row-reverse justify-between items-center w-full'>
                            <p className='text-[10px] font-2 flex mr-2'>
                                567,000
                                <span className='w-3 mr-1'>
                                    <Image alt='toman' src={toman} />
                                </span>
                            </p>
                            <span className='bg-red-600 rounded-lg text-[8px] text-white p-1 mr-1 font-2'>
                                20%
                            </span>
                        </div>
                        <p className='text-xs text-gray-400 line-through text-[8px] font-2'>
                            620,000
                        </p>
                    </div>
                    <div>
                        <button className='font-1 text-[10px] text-white bg-blue-500 w-full rounded-md rounded-tr-sm rounded-bl-sm p-1 my-1'>
                          جزئیات
                        </button>
                    </div>
                </div>
                <div className='bg-white p-2 rounded-lg w-[35vw] min-w-[35vw] '>
                    <Image alt="asd" src={img1} />
                    <div className='my-1'>
                        <h3 className='text-[10px] font-1 line-clamp-2 '> دفتر خوشگل سیمی هشتاد برگ پاپکو رسمی</h3>
                    </div>
                    <div className='h-10 flex flex-col justify-evenly items-end '>
                        <div className='flex flex-row-reverse justify-between items-center w-full'>
                            <p className='text-[10px] font-2 flex mr-2'>
                                567,000
                                <span className='w-3 mr-1'>
                                    <Image alt='toman' src={toman} />
                                </span>
                            </p>
                            <span className='bg-red-600 rounded-lg text-[8px] text-white p-1 mr-1 font-2'>
                                20%
                            </span>
                        </div>
                        <p className='text-xs text-gray-400 line-through text-[8px] font-2'>
                            620,000
                        </p>
                    </div>
                    <div>
                        <button className='font-1 text-[10px] text-white bg-blue-500 w-full rounded-md rounded-tr-sm rounded-bl-sm p-1 my-1'>
                          جزئیات
                        </button>
                    </div>
                </div>
                <div className='bg-white p-2 rounded-lg w-[35vw] min-w-[35vw] '>
                    <Image alt="asd" src={img1} />
                    <div className='my-1'>
                        <h3 className='text-[10px] font-1 line-clamp-2 '> دفتر خوشگل سیمی هشتاد برگ پاپکو رسمی</h3>
                    </div>
                    <div className='h-10 flex flex-col justify-evenly items-end '>
                        <div className='flex flex-row-reverse justify-between items-center w-full'>
                            <p className='text-[10px] font-2 flex mr-2'>
                                567,000
                                <span className='w-3 mr-1'>
                                    <Image alt='toman' src={toman} />
                                </span>
                            </p>
                            <span className='bg-red-600 rounded-lg text-[8px] text-white p-1 mr-1 font-2'>
                                20%
                            </span>
                        </div>
                        <p className='text-xs text-gray-400 line-through text-[8px] font-2'>
                            620,000
                        </p>
                    </div>
                    <div>
                        <button className='font-1 text-[10px] text-white bg-blue-500 w-full rounded-md rounded-tr-sm rounded-bl-sm p-1 my-1'>
                          جزئیات
                        </button>
                    </div>
                </div>

                <div className='bg-white p-2 rounded-lg w-[35vw] min-w-[35vw] '>
                    <Image alt="asd" src={img1} />
                    <div className='my-1'>
                        <h3 className='text-[10px] font-1 line-clamp-2 '> دفتر خوشگل سیمی هشتاد برگ پاپکو رسمی</h3>
                    </div>
                    <div className='h-10 flex flex-col justify-evenly items-end '>
                        <div className='flex flex-row-reverse justify-between items-center w-full'>
                            <p className='text-[10px] font-2 flex mr-2'>
                                567,000
                                <span className='w-3 mr-1'>
                                    <Image alt='toman' src={toman} />
                                </span>
                            </p>
                            <span className='bg-red-600 rounded-lg text-[8px] text-white p-1 mr-1 font-2'>
                                20%
                            </span>
                        </div>
                        <p className='text-xs text-gray-400 line-through text-[8px] font-2'>
                            620,000
                        </p>
                    </div>
                    <div>
                        <button className='font-1 text-[10px] text-white bg-blue-500 w-full rounded-md rounded-tr-sm rounded-bl-sm p-1 my-1'>
                          جزئیات
                        </button>
                    </div>
                </div>

                <div className='bg-white p-2 rounded-lg w-[35vw] min-w-[35vw] '>
                    <Image alt="asd" src={img1} />
                    <div className='my-1'>
                        <h3 className='text-[10px] font-1 line-clamp-2 '> دفتر خوشگل سیمی هشتاد برگ پاپکو رسمی</h3>
                    </div>
                    <div className='h-10 flex flex-col justify-evenly items-end '>
                        <div className='flex flex-row-reverse justify-between items-center w-full'>
                            <p className='text-[10px] font-2 flex mr-2'>
                                567,000
                                <span className='w-3 mr-1'>
                                    <Image alt='toman' src={toman} />
                                </span>
                            </p>
                            <span className='bg-red-600 rounded-lg text-[8px] text-white p-1 mr-1 font-2'>
                                20%
                            </span>
                        </div>
                        <p className='text-xs text-gray-400 line-through text-[8px] font-2'>
                            620,000
                        </p>
                    </div>
                    <div>
                        <button className='font-1 text-[10px] text-white bg-blue-500 w-full rounded-md rounded-tr-sm rounded-bl-sm p-1 my-1'>
                          جزئیات
                        </button>
                    </div>
                </div>

                <div className='bg-white p-2 rounded-lg w-[35vw] min-w-[35vw] '>
                    <Image alt="asd" src={img1} />
                    <div className='my-1'>
                        <h3 className='text-[10px] font-1 line-clamp-2 '> دفتر خوشگل سیمی هشتاد برگ پاپکو رسمی</h3>
                    </div>
                    <div className='h-10 flex flex-col justify-evenly items-end '>
                        <div className='flex flex-row-reverse justify-between items-center w-full'>
                            <p className='text-[10px] font-2 flex mr-2'>
                                567,000
                                <span className='w-3 mr-1'>
                                    <Image alt='toman' src={toman} />
                                </span>
                            </p>
                            <span className='bg-red-600 rounded-lg text-[8px] text-white p-1 mr-1 font-2'>
                                20%
                            </span>
                        </div>
                        <p className='text-xs text-gray-400 line-through text-[8px] font-2'>
                            620,000
                        </p>
                    </div>
                    <div>
                        <button className='font-1 text-[10px] text-white bg-blue-500 w-full rounded-md rounded-tr-sm rounded-bl-sm p-1 my-1'>
                          جزئیات
                        </button>
                    </div>
                </div>






            </div>
        </>
    )
}

export default SwiperHomeCards