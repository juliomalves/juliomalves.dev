import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

import '@styles/app.css'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default App
