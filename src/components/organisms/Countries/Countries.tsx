/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { Input, Select } from '@mantine/core'
import { StringParam, useQueryParams } from 'use-query-params'
import { useQuery } from '@tanstack/react-query'

import CartCountries from '@molecules/CartCountries'
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
        queryKey: ['AllCountries', query],
        queryFn: () => {
            if (query.select) {
                return AllCountriesApiFn({ route: '/region/', data: query.select })
            }
            if (query.search && query.search !== '') {
                return AllCountriesApiFn({ route: '/name/', data: query.search })
            } else {
                return AllCountriesApiFn({ route: '/all', data: '' })
            }
        },
        staleTime: 360,
    })
    const selectHandler = (data: any) => {
        setQuery({ search: null, select: data })
    }
    const inputHandler = (data: any) => {
        setQuery({ search: data, select: null })
    }
    if (isLoading) {
        return (
            <div className='container px-2  mx-auto flex flex-col gap-8'>
                <div className='container mx-auto flex justify-between items-center'>
                    <Input
                        placeholder='Clearable input'
                        value={input}
                        onChange={(event) => setInput(event.currentTarget.value)}
                        rightSectionPointerEvents='all'
                        rightSection={<FiSearch className='cursor-pointer ' onClick={() => inputHandler(input)} />}
                    />
                    <Select
                        data={['Africa', 'America', 'Asia', 'Europe', 'Oceania']}
                        defaultValue={query.select ? query.select : null}
                        onChange={(e: any) => selectHandler(e)}
                        clearable
                        searchable
                    />
                </div>

                <Loading />
            </div>
        )
    }
    if (isError) {
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

                <Error text={error.message} />
            </div>
        )
    }

    if (isSuccess) {
        return (
            <div className='container px-2  mx-auto flex flex-col gap-8'>
                <div className='container mx-auto flex  gap-2 justify-between items-center'>
                    <Input
                        placeholder='Clearable input'
                        value={input}
                        onChange={(event) => setInput(event.currentTarget.value)}
                        rightSectionPointerEvents='all'
                        rightSection={<FiSearch className='cursor-pointer ' onClick={() => inputHandler(input)} />}
                    />
                    <Select
                        data={['Africa', 'America', 'Asia', 'Europe', 'Oceania']}
                        defaultValue={query.select ? query.select : null}
                        onChange={(e: any) => selectHandler(e)}
                        clearable
                        searchable
                    />
                </div>
                <div className='grid gap-5 grid-cols-1 xs:grid-cols-2  md:grid-cols-3 lg:grid-cols-4'>
                    {data.map((itemsCountries: any, index: any) => (
                        <CartCountries itemsCountries={itemsCountries} key={index} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Countries
