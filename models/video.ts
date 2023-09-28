export interface IVideo {
    id: string
    iso_639_1: string
    iso_3166_1: string
    name: string
    key: string
    site: string
    size: number
    type: string
    official: boolean
    published_at: Date
}

export interface IResponseOfficeVideos {
    id: number
    results: IVideo[]
}
