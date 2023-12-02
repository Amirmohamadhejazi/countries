/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'
import { Input, Select } from '@mantine/core'
import { StringParam, useQueryParams } from 'use-query-params'
import { useQuery } from '@tanstack/react-query'

import Error from '@molecules/Error'
import Loading from '@molecules/Loading'

import AllCountriesApiFn from '@api/AllCountries'

const Countries = () => {
    const [query, setQuery] = useQueryParams({
        search: StringParam,
        select: StringParam,
    })

    useEffect(() => {
        // if()
        console.log(query)
    }, [query])
    const [input, setInput] = useState(query.search || '')

    const { data, error, isSuccess, isError, isLoading } = useQuery({
        queryKey: ['AllCountries'],
        queryFn: AllCountriesApiFn,
        staleTime: 360,
    })
    // setQuery({ x: Math.random(), q: Math.random() })

    // search input
    // /name/{name}

    // filter region
    // /region/{region}

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
        // console.log(select)
        const selectHandler = (data: any) => {
            setQuery({ search: null, select: data })
        }
        const inputHandler = (data: any) => {
            setQuery({ search: data, select: null })
        }
        return (
            <div className='container px-2  mx-auto flex flex-col gap-8'>
                <div className='container mx-auto flex justify-between items-center'>
                    <Input
                        placeholder='Clearable input'
                        value={input}
                        onChange={(event) => setInput(event.currentTarget.value)}
                        rightSectionPointerEvents='all'
                        rightSection={
                            // <CloseButton
                            //     aria-label='Clear input'
                            //     onClick={() => setInput('')}
                            //     style={{ display: input ? undefined : 'none' }}
                            // />
                            <FiSearch className='cursor-pointer ' onClick={() => inputHandler(input)} />
                        }
                    />
                    <Select
                        data={['Africa', 'America', 'Asia', 'Europe', 'Oceania']}
                        defaultValue={query.select ? query.select : null}
                        onChange={(e: any) => selectHandler(e)}
                        // onChange={(e: any) => setSelect(e)}
                        clearable
                        searchable
                    />
                </div>
                <div className=''>
                    <div className='grid gap-5 xs:grid-cols-2  md:grid-cols-3 lg:grid-cols-4'>
                        {data.map((itemsCountries: any, index: any) => (
                            <Link href={`/${itemsCountries.ccn3}`} key={index}>
                                <div className='flex flex-col rounded-lg overflow-hidden bg-[#ffffff] shadow-sm dark:bg-[#2b3945] whitespace-nowrap'>
                                    <div className=' h-36 bg-red-200 '>
                                        <img
                                            src={itemsCountries.flags.png}
                                            className='w-full h-full object-cover'
                                            alt=''
                                        />
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
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Countries
