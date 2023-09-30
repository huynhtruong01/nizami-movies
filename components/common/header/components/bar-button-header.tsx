'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '@/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navMobileVariant = {
    initial: {
        scaleY: 0,
    },
    animate: {
        scaleY: 1,
    },
    exit: {
        scaleY: 0,
    },
}

const mobileLinkVariant = {
    initial: {
        y: '30vh',
        transition: {
            duration: 0.5,
        },
    },
    open: {
        y: 0,
        transition: {
            duration: 0.7,
        },
    },
}

const containerMobileLinkVariant = {
    initial: {
        transition: {
            staggerChildren: 0.09,
        },
    },
    open: {
        transition: {
            staggerChildren: 0.09,
        },
    },
}

export function BarButtonHeader() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [active, setActive] = useState<string>('')
    const pathname = usePathname()

    useEffect(() => {
        if (pathname) {
            setActive(pathname)
        }
    }, [pathname])

    const genericHamburgerLine = `h-1 w-6 my-0.5 rounded-full bg-primary ease-in-out duration-300`

    return (
        <>
            <button
                className="!flex-col h-12 w-12 group !bg-transparent hover:!bg-transparent hidden sm:!flex z-[999] absolute right-0"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div
                    className={`${genericHamburgerLine} ${
                        isOpen ? 'rotate-45 translate-y-2 opacity-100' : 'opacity-100'
                    }`}
                />
                <div
                    className={`${genericHamburgerLine} ${
                        isOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                />
                <div
                    className={`${genericHamburgerLine} ${
                        isOpen ? '-rotate-45 -translate-y-2 opacity-100' : 'opacity-100'
                    }`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={navMobileVariant}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className={`fixed inset-0 w-screen origin-top h-screen bg-header-color z-[100]`}
                    >
                        <nav className="h-full flex justify-center items-center">
                            <motion.ul
                                variants={containerMobileLinkVariant}
                                initial="initial"
                                animate="open"
                                className="flex flex-col justify-center items-center h-full gap-2"
                            >
                                {navLinks.map((nav) => (
                                    <li key={nav.link}>
                                        <Link
                                            href={nav.link}
                                            className={`relative py-2 mx-4 text-2xl overflow-hidden uppercase font-medium ${
                                                active === nav.link
                                                    ? 'text-button-color'
                                                    : 'text-primary'
                                            }`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <motion.span
                                                variants={mobileLinkVariant}
                                                className="inline-block"
                                            >
                                                {nav.name}
                                            </motion.span>
                                        </Link>
                                    </li>
                                ))}
                            </motion.ul>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
