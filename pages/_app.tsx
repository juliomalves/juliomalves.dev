import * as React from 'react'
import { AppProps } from 'next/app'
import { useGoogleAnalytics } from '@/components/hooks/use-google-analytics'
import { ThemeProvider } from 'next-themes'
import Metadata from '@/components/metadata'
import Header from '@/components/header'
import Footer from '@/components/footer'

import '@/styles/app.css'

const App = ({ Component, pageProps }: AppProps) => {
    useGoogleAnalytics()

    return (
        <ThemeProvider storageKey="jma-theme" attribute="class">
            <Metadata />
            <Header />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    )
}

export default App
