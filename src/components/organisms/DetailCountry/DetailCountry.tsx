/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react'
import Link from 'next/link'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useQuery } from '@tanstack/react-query'

import Error from '@molecules/Error'
import Loading from '@molecules/Loading'

import DetailCountryApiFn from '@api/detailCountry'

const DetailCountry = ({ paramsID }: any) => {
    const { data, error, isSuccess, isError, isLoading } = useQuery({
        queryKey: ['DetailCountry'],
        queryFn: () => DetailCountryApiFn(paramsID),
        staleTime: 360,
    })

    if (isLoading) {
        return (
            <div className='flex overflow-auto'>
                <div className='container flex flex-col items-start px-2  mx-auto'>
                    <Link href='/'>
                        <div className='flex items-center gap-2 rounded-lg bg-[#ffffff] shadow-sm dark:bg-[#2b3945] py-3 px-6 '>
                            <FaArrowLeftLong />
                            <span className='text-sm font-medium'>Back</span>
                        </div>
                    </Link>
                    <div className='w-full flex justify-center'>
                        <Loading />
                    </div>
                </div>
            </div>
        )
    }
    if (isError) {
        return (
            <div className='flex overflow-auto'>
                <div className='container flex flex-col items-start px-2  mx-auto'>
                    <Link href='/'>
                        <div className='flex items-center gap-2 rounded-lg bg-[#ffffff] shadow-sm dark:bg-[#2b3945] py-3 px-6 '>
                            <FaArrowLeftLong />
                            <span className='text-sm font-medium'>Back</span>
                        </div>
                    </Link>
                    <div className='w-full flex justify-center'>
                        <Error />
                    </div>
                </div>
            </div>
        )
    }

    if (isSuccess) {
        const dataDetail = data[0]

        return (
            <div className='flex overflow-auto'>
                <div className='container flex flex-col items-start px-2  mx-auto'>
                    <Link href='/'>
                        <div className='flex items-center gap-2 rounded-lg bg-[#ffffff] shadow-sm dark:bg-[#2b3945] py-3 px-6 '>
                            <FaArrowLeftLong />
                            <span className='text-sm font-medium'>Back</span>
                        </div>
                    </Link>

                    <div className='w-full flex justify-center mt-8'>
                        <div className='w-full gap-8 grid grid-cols-1 lg:grid-cols-5'>
                            <div className=' h-72  md:col-span-2'>
                                <img
                                    src={dataDetail.flags.png}
                                    className='w-full h-full object-cover  rounded-md'
                                    alt=''
                                />
                            </div>
                            <div className='flex flex-col justify-center p-1 gap-3    lg:col-span-3 '>
                                <span className='text-2xl font-bold truncate'>{dataDetail.name.common}</span>

                                <div className='grid grid-cols-2 gap-2'>
                                    {/* <span>Native Name: {'dataDetail.name.nativeName.eng.common'}</span> */}
                                    {/* <span>Top Level Domain: X</span> */}
                                    <span>population: {dataDetail.population}</span>
                                    {/* <span>Currencies: X</span> */}
                                    <span>Region: {dataDetail.region}</span>
                                    {/* <span>Languages: x</span> */}
                                    <span>SubRegion: {dataDetail.subregion}</span>
                                    <span className='col-span-2'>
                                        Capital:
                                        {dataDetail?.capital ? dataDetail?.capital?.map((items: any) => items) : '---'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DetailCountry
