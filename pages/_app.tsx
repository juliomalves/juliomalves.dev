import * as React from 'react'
import { AppProps } from 'next/app'
import { useAnalytics } from '@/components/hooks/use-analytics'
import Metadata from '@/components/metadata'
import Header from '@/components/header'
import Footer from '@/components/footer'

import '@/styles/app.css'

const App = ({ Component, pageProps }: AppProps) => {
    useAnalytics()

    return (
        <>
            <Metadata />
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default App
