'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import headerData from '@/data/header.json'

function Header() {
    const [showMenu, setShowMenu] = useState(false)
    const toggleMenu = () =>{
        console.log('click')
        setShowMenu((prev)=> !prev)
    }
  return (
    <header className='flex justify-between items-center px-6 absolute z-10 w-full'>
    <div className='flex justify-between items-center w-full py-3 border-b-2 border-white'>
        <Link href={'/'}>VIVIFY</Link>
        <ul className={`flex flex-col duration-300 sm:flex-row absolute right-0 bg-black w-screen h-screen sm:h-fit sm:w-fit sm:top-0 sm:relative sm:bg-transparent gap-6 justify-center items-center 
        ${showMenu ? "top-0" : "-top-[100vh]" }`} >
            {headerData.header.map((data,index)=>(
                <>
                    <li className='text-white text-base uppercase' key={index}>
                        <Link href={data.href}>{data.label}</Link>
                    </li>
                </>
            ))}
        </ul>
        <div>
            <button className='text-white sm:hidden z-20 relative' onClick={toggleMenu}>
                {showMenu ? "Close" : "Menu"}
            </button>
        </div>
    </div>
    </header>
  )
}

export default Header