'use client'

import { SearchField } from '@/components/filters'
import { ButtonType } from '@/enums'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

export function SearchFormHeader() {
    const [search, setSearch] = useState<string>('')
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const params = new URLSearchParams(searchParams.toString())

    useEffect(() => {
        if (pathname !== '/search') {
            setSearch('')
        }
    }, [pathname])

    const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        params.set('q', search.toLowerCase())
        router.push(`/search?${params.toString()}`)
    }

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    return (
        <form onSubmit={handleSearchSubmit} className="block sm:hidden">
            <SearchField
                search={search}
                onChange={handleSearchChange}
                buttonType={ButtonType.SUBMIT}
                placeholder={'Search movie name...'}
            />
        </form>
    )
}
