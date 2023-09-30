import {
    BarButtonHeader,
    NavHeader,
    SearchFormHeader,
} from '@/components/common/header/components'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '..'

export function Header() {
    return (
        <header className="fixed top-0 left-0 w-full h-auto bg-[hsla(0, 0%, 100%, 0.3)] backdrop-blur-md z-50">
            <Container>
                <div className="py-4 sm:py-2 w-full flex items-center justify-between">
                    <div className="flex items-center">
                        <Link href={'/'} className="relative w-32 h-8 mr-10">
                            <Image
                                src={'/icon.png'}
                                alt="logo"
                                fill
                                sizes="(min-width: 720px) 125px, 118px"
                            />
                        </Link>
                        <NavHeader />
                    </div>
                    <SearchFormHeader />
                    <BarButtonHeader />
                </div>
            </Container>
        </header>
    )
}
