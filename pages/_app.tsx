import React from 'react'
import { AppProps } from 'next/app'
import Metadata from '@/components/metadata'
import Header from '@/components/header'
import Footer from '@/components/footer'

import '@/styles/app.css'

const App = ({ Component, pageProps }: AppProps) => {
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
