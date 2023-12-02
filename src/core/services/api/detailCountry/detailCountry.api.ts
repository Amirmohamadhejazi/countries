/* eslint-disable @typescript-eslint/no-explicit-any */

import { Http } from '@core/services/interceptors'

const DetailCountryApiFn = async (code: number | string | null) => {
    try {
        return Http.get(`/alpha/${code}`).then((res) => res.data)
    } catch (error: any) {
        return error.response?.data
    }
}

export default DetailCountryApiFn
