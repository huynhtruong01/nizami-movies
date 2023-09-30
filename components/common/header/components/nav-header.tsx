'use client'

import { navLinks } from '@/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export function NavHeader() {
    const [active, setActive] = useState<string>('')
    const pathname = usePathname()

    useEffect(() => {
        if (pathname) {
            setActive(pathname)
        }
    }, [pathname])

    return (
        <nav className="block md:hidden">
            <ul className="flex items-center">
                {navLinks.map((nav) => (
                    <li key={nav.link}>
                        <Link
                            href={nav.link}
                            className={`relative py-2 mx-4 font-medium text-white before:content-[''] before:absolute before:w-full before:h-0.5 before:rounded ${
                                active === nav.link
                                    ? 'before:bg-button-color'
                                    : 'before:bg-transparent'
                            } before:bottom-0`}
                        >
                            {nav.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
