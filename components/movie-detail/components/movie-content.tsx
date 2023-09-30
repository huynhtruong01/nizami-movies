import { SkeletonText } from '@/components/loadings'
import { IMovie } from '@/models'
import { useCallback } from 'react'

export interface IMovieContentProps {
    movie: IMovie
    isLoading?: boolean
    className?: string
}

export function MovieContent({
    movie,
    isLoading = false,
    className = '',
}: IMovieContentProps) {
    const list = useCallback((length: number) => {
        return Array.from({ length }, (_, idx) => idx + 1)
    }, [])

    if (isLoading)
        return (
            <div className={`${className}`}>
                <div>
                    {list(5).map((idx) => (
                        <SkeletonText key={idx} className="!h-3 mb-3" />
                    ))}
                </div>
            </div>
        )

    return (
        <div className={`${className}`}>
            <p className="text-sm leading-7 text-primary max-w-full line-clamp-4">
                {movie.overview}
            </p>
            <div className="mt-6 flex flex-col gap-3">
                <div className="flex text-sm xs:flex-col">
                    <span className="max-w-[200px] w-full text-secondary">
                        Production Countries
                    </span>
                    <span className="leading-normal xs:mt-1">
                        {movie.production_countries
                            .map((country) => country.name)
                            .join(', ') || 'No information'}
                    </span>
                </div>
                <div className="flex text-sm xs:flex-col">
                    <span className="max-w-[200px] w-full text-secondary">
                        Production Companies
                    </span>
                    <span className="leading-normal xs:mt-1">
                        {movie.production_companies
                            .map((company) => company.name)
                            .join(', ') || 'No information'}
                    </span>
                </div>
                <div className="flex text-sm xs:flex-col">
                    <span className="max-w-[200px] w-full text-secondary">
                        Spoke Languages
                    </span>
                    <span className="leading-normal xs:mt-1">
                        {movie.spoken_languages
                            .map((language) => language.name)
                            .join(', ') || 'No information'}
                    </span>
                </div>
            </div>
        </div>
    )
}
