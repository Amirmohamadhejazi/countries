/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import { type TBoxDetail } from './resources'

const XCardDetail = ({ dataCard }: { dataCard: TBoxDetail }) => {
    return (
        <div className='flex flex-col'>
            {dataCard.imgT && <img src={dataCard.imgT.src} alt='' />}

            <div className={`${dataCard.imgT && dataCard.imgB && 'bg-[#f5faff]'}  `}>
                <div className=' container mx-auto p-8 md:p-0 '>
                    <div className='grid items-center grid-cols-1 md:grid-cols-2  gap-3 md:gap-0'>
                        <div className={`flex flex-col gap-2 md:gap-4 ${dataCard.orderClass}`}>
                            <span className='text-md md:text-3xl font-bold'>{dataCard.title}</span>
                            <div className='flex flex-col text-xs md:text-lg font-semibold'>
                                {dataCard.texts.map((itemsText, index) => (
                                    <span key={index}>{itemsText}</span>
                                ))}
                            </div>
                        </div>
                        <div
                            className={`flex relative  ${
                                dataCard.imgT && dataCard.imgB ? 'justify-end' : 'justify-center'
                            }`}
                        >
                            <div
                                className={` flex items-start gap-12 absolute ${
                                    dataCard.imgT && dataCard.imgB ? 'right-0' : 'left-0'
                                }  top-0`}
                            >
                                <Parallax speed={4} easing='easeInQuad'>
                                    <div className='p-1 rounded-full bg-red-600' />
                                </Parallax>
                                <Parallax speed={-2} easing='easeInQuad'>
                                    <div className='p-1 rounded-full bg-yellow-600' />
                                </Parallax>
                                <Parallax speed={5} easing='easeInQuad'>
                                    <div className='p-1 rounded-full bg-blue-600' />
                                </Parallax>
                                <Parallax speed={-3} easing='easeInQuad'>
                                    <div className='p-1 rounded-full bg-green-600' />
                                </Parallax>
                                <Parallax speed={6} easing='easeInQuad'>
                                    <div className='p-1 rounded-full bg-cyan-600' />
                                </Parallax>
                            </div>
                            <img src={dataCard.img.src} className=' sm:max-w-lg md:max-w-sm lg:max-w-md' alt='' />
                        </div>
                    </div>
                </div>
            </div>

            {dataCard.imgB && <img src={dataCard.imgB.src} alt='' />}
        </div>
    )
}

export default XCardDetail
