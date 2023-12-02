/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react'
import { useQuery } from '@tanstack/react-query'

import Error from '@molecules/Error'
import Loading from '@molecules/Loading'

import AllCountriesApiFn from '@api/AllCountries'

const Countries = () => {
    const { data, error, isSuccess, isError, isLoading } = useQuery({
        queryKey: ['AllCountries'],
        queryFn: AllCountriesApiFn,
        staleTime: 360,
    })
    // setQuery({ x: Math.random(), q: Math.random() })

    // console.log(data)
    // AllCountries by filter region

    if (isLoading) {
        return (
            <div className='flex items-center w-full justify-center'>
                <Loading />
            </div>
        )
    }
    if (isError) {
        return (
            <div className='flex items-center w-full justify-center'>
                <Error text={error.message} />
            </div>
        )
    }

    if (isSuccess) {
        return (
            <div className='flex overflow-auto'>
                <div className='container px-2  mx-auto'>
                    <div className='grid gap-5 xs:grid-cols-2  md:grid-cols-3 lg:grid-cols-4'>
                        {data.map((itemsCountries: any, index: any) => (
                            <div
                                className='flex flex-col rounded-lg overflow-hidden bg-[#ffffff] shadow-sm dark:bg-[#2b3945] whitespace-nowrap'
                                key={index}
                            >
                                <div className='max-h-36 '>
                                    <img src={itemsCountries.flags.png} className='w-full h-full object-cover' alt='' />
                                </div>
                                <div className='flex flex-col gap-2 m-3'>
                                    <span className='text-xl font-semibold'> {itemsCountries.name.common} </span>
                                    <div className='flex text-sm flex-col gap-1'>
                                        <span className='truncate'>population: {itemsCountries.population}</span>
                                        <span className='truncate'>region: {itemsCountries.region}</span>
                                        <span className='truncate'>
                                            capital: {itemsCountries.capital ? itemsCountries.capital[0] : '---'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Countries
