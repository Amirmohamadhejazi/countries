'use client'
import React, { useState } from 'react'
import { IoMoonOutline } from 'react-icons/io5'
import { MdOutlineWbSunny } from 'react-icons/md'

const HeaderNavbar = () => {
    const [darkMode, setDarkMode] = useState(localStorage.theme === 'dark' ? true : false)

    const toggleMode = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
            setDarkMode(false)
        } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
            setDarkMode(true)
        }
    }

    return (
        <div className='bg-[#ffffff] dark:bg-[#2b3945] shadow-lg w-full py-4'>
            <div className='container px-2  mx-auto'>
                <div className='flex justify-between'>
                    <span className='text-xl font-bold'>where in the world?</span>
                    <div className='flex gap-1 items-center font-medium cursor-pointer' onClick={() => toggleMode()}>
                        {darkMode ? <IoMoonOutline className='text-lg' /> : <MdOutlineWbSunny className='text-xl' />}
                        {darkMode ? <span>dark Mode</span> : <span>light Mode</span>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderNavbar
