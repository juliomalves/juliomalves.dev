import * as React from 'react'
import { AppProps } from 'next/app'
import { AnalyticsProvider } from '@/components/contexts/analytics'
import Metadata from '@/components/metadata'
import Header from '@/components/header'
import Footer from '@/components/footer'

import '@/styles/app.css'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Metadata />
            <AnalyticsProvider>
                <Header />
                <Component {...pageProps} />
                <Footer />
            </AnalyticsProvider>
        </>
    )
}

export default App
