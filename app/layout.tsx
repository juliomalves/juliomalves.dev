import * as React from 'react'
import Script from 'next/script'
import localFont from 'next/font/local'
import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'

import '@/styles/app.css'

const authorName = 'Julio Alves'
const title = `${authorName} | Software Engineer`
const description = 'Frontend developer experienced in building web-based applications for all kinds of devices.'
const twitterHandle = '@juli0malves'

export const metadata: Metadata = {
    title,
    description,
    authors: [{ name: authorName }],
    metadataBase: new URL('https://juliomalves.dev'),
    alternates: {
        canonical: 'https://juliomalves.dev'
    },
    openGraph: {
        title,
        description,
        url: 'https://juliomalves.dev',
        siteName: `${authorName} Website`,
        // images: [],
        locale: 'en_GB',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        title,
        description,
        creator: twitterHandle
    },
    icons: {
        icon: [
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
        ],
        shortcut: '/favicon.ico',
        apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }]
    }
}

const latoFont = localFont({
    src: [
        {
            path: './fonts/lato-regular.woff2',
            weight: '400',
            style: 'normal'
        },
        {
            path: './fonts/lato-bold.woff2',
            weight: '700',
            style: 'normal'
        }
    ],
    display: 'optional'
})

const isProduction = process.env.NODE_ENV === 'production'

type IRootLayout = {
    children: React.ReactNode
}

const RootLayout = ({ children }: IRootLayout) => {
    return (
        <html lang="en" className={latoFont.className}>
            <head>
                <script id="theme" src="/scripts/theme.js"></script>
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                {isProduction && (
                    <>
                        <Script key="gtag" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`} />
                        <Script id="gtag-config" key="gtag-config">
                            {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){ dataLayer.push(arguments); }
                                gtag('js', new Date());
                                gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}', {
                                    page_path: window.location.pathname,
                                });
                            `}
                        </Script>
                    </>
                )}
            </body>
        </html>
    )
}

export default RootLayout
