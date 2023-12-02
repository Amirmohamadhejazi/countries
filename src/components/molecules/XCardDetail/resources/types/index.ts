import { type StaticImageData } from 'next/image'

type TBoxDetail = {
    title: string
    texts: string[]
    orderClass: string
    img: StaticImageData
    imgT: StaticImageData | null
    imgB: StaticImageData | null
    parallax: number
    id: number
}

export type { TBoxDetail }
