import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
export * as movieApi from '@/api-client/movie-api'
export * as tvShowApi from '@/api-client/tv-show-api'

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

axiosClient.interceptors.request.use(
    function (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
        if (!config.headers.Authorization) {
            config.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`
        }
        return config
    },
    function (error: AxiosError): Promise<AxiosError> {
        return Promise.reject(error)
    }
)

axiosClient.interceptors.response.use(
    function (response: AxiosResponse): AxiosResponse {
        return response
    },
    function (error: AxiosError): Promise<AxiosError> {
        return Promise.reject(error)
    }
)

export default axiosClient
