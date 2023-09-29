import axiosClient from '.'

const BASE_URL = '/tv'

export const getTvShowDetail = async (tvId: number) => {
    return axiosClient.get(`${BASE_URL}/${tvId}`).then((res) => res.data)
}
