'use client'

import DetailCountry from '@organisms/DetailCountry'

const Detail = ({ params }: { params: { id: number } }) => {
    return <DetailCountry paramsID={params.id} />
}

export default Detail
