'use client'
import React, { type ReactNode } from 'react'

import HeaderNavbar from '@organisms/HeaderNavbar'

const CountriesLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex min-h-screen flex-col gap-4  bg-[#fafafa] text-[#111517] dark:bg-[#202c37] dark:text-[#ffffff] '>
            <HeaderNavbar />
            {children}
        </div>
    )
}

export default CountriesLayout
