/* eslint-disable @typescript-eslint/no-explicit-any */

import { Http } from '@core/services/interceptors'

const AllCountriesApiFn = async () => {
    try {
        return Http.get(`/all`).then((res) => res.data)
    } catch (error: any) {
        return error.response?.data
    }
}

export default AllCountriesApiFn
