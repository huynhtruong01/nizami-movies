import { LanguagesParam } from '@/enums'

export type ILanguagesParam = LanguagesParam.EN

export interface IParams {
    language: ILanguagesParam
    page: number
    region?: string
    query?: string
}
