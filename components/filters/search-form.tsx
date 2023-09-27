import { SearchIcon } from '@/components/icons'

export interface ISearchFormProps {
    placeholder?: string
}

export function SearchForm({ placeholder = '' }: ISearchFormProps) {
    return (
        <div className="flex gap-2">
            <div className="relative w-64 h-10 bg-white rounded overflow-hidden">
                <input
                    type="text"
                    placeholder={placeholder}
                    className="absolute w-full h-full pl-11 py-2 outline-none placeholder:text-sm text-sm text-secondary-dark"
                />
                <div className="absolute top-0 left-0 flex justify-center items-center w-10 h-full">
                    <SearchIcon className="!w-5 !h-5 text-secondary-dark" />
                </div>
            </div>
            <button type="submit" className="text-sm bg-button-color">
                Search
            </button>
        </div>
    )
}
