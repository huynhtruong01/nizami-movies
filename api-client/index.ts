import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
export * as movieApi from '@/api-client/movie-api'

const axiosClient = axios.create({
    baseURL: process.env.NEXT_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

axiosClient.interceptors.request.use(
    function (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig {
        if (!config.headers.Authorization) {
            config.headers.Authorization = `Bearer ${process.env.NEXT_ACCESS_TOKEN}`
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
