import { Footer, Header, SwrConfig } from '@/components/common'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
    title: 'Movie',
    icons: {
        icon: '/favico.ico',
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <SwrConfig>
                    <Header />
                    <main className="pt-[72px] min-h-screen">{children}</main>
                    <Footer />
                </SwrConfig>
            </body>
        </html>
    )
}
