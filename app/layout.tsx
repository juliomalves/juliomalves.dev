import * as React from 'react'
import Script from 'next/script'
import Header from '@/components/header'
import Footer from '@/components/footer'

import '@/styles/app.css'

const isProduction = process.env.NODE_ENV === 'production'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
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
