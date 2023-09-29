import { Footer, Header, SwrConfig } from '@/components/common'
import { ModalVideo } from '@/components/modals'
import { BANNER_HOME_PAGE } from '@/constants'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@/app/globals.css'

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
    title: 'Nizami Movies',
    icons: {
        icon: '/favico.ico',
    },
    openGraph: {
        images: [BANNER_HOME_PAGE],
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <SwrConfig>
                    <Header />
                    <main className="min-h-screen">{children}</main>
                    <div>
                        <ModalVideo />
                    </div>
                    <Footer />
                </SwrConfig>
            </body>
        </html>
    )
}
