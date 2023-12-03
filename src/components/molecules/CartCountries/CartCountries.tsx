/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const CartCountries = ({ itemsCountries, key }: { itemsCountries: any; key: number }) => {
    return (
        <Link href={`/${itemsCountries.ccn3}`} key={key}>
            <div className='flex flex-col rounded-lg overflow-hidden bg-[#ffffff] shadow-sm dark:bg-[#2b3945] whitespace-nowrap'>
                <div className=' h-36 bg-red-200 '>
                    <img src={itemsCountries.flags.png} className='w-full h-full object-cover' alt='' />
                </div>
                <div className='flex flex-col gap-2 m-3'>
                    <span className='text-xl font-semibold'>{itemsCountries.name.common} </span>
                    <div className='flex text-sm flex-col gap-1'>
                        <span className='truncate'>population: {itemsCountries.population}</span>
                        <span className='truncate'>region: {itemsCountries.region}</span>
                        <span className='truncate'>
                            capital: {itemsCountries.capital ? itemsCountries.capital[0] : '---'}
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CartCountries
