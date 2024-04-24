"use client"
import React from 'react'
import Link from 'next/link'

import { usePathname } from "next/navigation";

//icons
import { Badge, Button } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DehazeIcon from '@mui/icons-material/Dehaze';
const cssMui = { padding: 0, color: 'var(--color-3)', minWidth: 0 }
const Navbar = () => {
    const pathname = usePathname();
    return (

        <div className='fixed w-full bottom-0 bg-gray-100 border-t border-gray-200 overflow-visible z-10'>
            <div className='relative w-full grid grid-cols-5 grid-row-reverse justify-center items-center '>
                <Link href="/account" className={pathname == "/account" ? "active w-full flex justify-center items-center" : 'w-full flex justify-center items-center'}>
                    <Button sx={cssMui} className='w-full font-1 flex flex-col-reverse sizeNav'>
                        حساب
                        <PersonIcon fontSize="small" />
                    </Button>
                </Link>
                <Link href="/search" className={pathname == "/search" ? "active w-full flex justify-center items-center" : 'w-full flex justify-center items-center'}>
                    <Button sx={cssMui} className='w-full font-1 flex flex-col-reverse sizeNav'>
                        جست و جو
                        <SearchIcon fontSize="small" />
                    </Button>
                </Link>
                <Link href="/shoppingCart" className={pathname == "/shoppingCart" ? "active w-full flex justify-center items-center" : 'w-full flex justify-center items-center '}>
                    <Button sx={cssMui} className='w-full font-1 flex flex-col-reverse sizeNav  pt-3'>
                        سبد خرید
                        <Badge sx={{top: '2px'}}  badgeContent={5} className="font-2"  aria-label="cart" color="error" >
                            <ShoppingCartIcon fontSize="small" />
                        </Badge>
                    </Button>
                </Link>
                <Link href="/category" className={pathname == "/category" ? "active w-full flex justify-center items-center" : 'w-full flex justify-center items-center'}>
                    <Button sx={cssMui} className='w-full font-1 flex flex-col-reverse sizeNav'>
                        دسته بندی
                        <DehazeIcon fontSize="small" />
                    </Button>
                </Link>
                <Link href="/" className={pathname == "/" ? "active w-full flex justify-center items-center" : 'w-full flex justify-center items-center'}>
                    <Button sx={cssMui} className='w-full font-1 flex flex-col-reverse sizeNav'>
                        خانه
                        <HomeIcon fontSize="small" />
                    </Button>
                </Link>
                <span className='moveBox'></span>
            </div>
        </div>
    )
}

export default Navbar