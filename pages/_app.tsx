import * as React from 'react'
import type { AppProps } from 'next/app'
import { AnalyticsProvider } from '@/components/contexts/analytics'
import { ThemeProvider } from '@/components/contexts/theme'
import Metadata from '@/components/metadata'
import Header from '@/components/header'
import Footer from '@/components/footer'

import '@/styles/app.css'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Metadata />
            <AnalyticsProvider>
                <ThemeProvider>
                    <Header />
                </ThemeProvider>
                <Component {...pageProps} />
                <Footer />
            </AnalyticsProvider>
        </>
    )
}

export default App
