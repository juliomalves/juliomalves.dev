import * as React from 'react'
import { AnalyticsProvider } from '@/components/contexts/analytics'
import Header from '@/components/header'
import Footer from '@/components/footer'

import '@/styles/app.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <script id="theme" src="/scripts/theme.js"></script>
            </head>
            <body>
                <AnalyticsProvider>
                    <Header />
                    {children}
                    <Footer />
                </AnalyticsProvider>
            </body>
        </html>
    )
}
