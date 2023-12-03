/* eslint-disable @typescript-eslint/no-explicit-any */

import { Http } from '@core/services/interceptors'

const AllCountriesApiFn = async ({ route, data }: { route: string; data: any }) => {
    try {
        return Http.get(`${route}${data}`).then((res) => res.data)
    } catch (error: any) {
        return error.response?.data
    }
}

export default AllCountriesApiFn
