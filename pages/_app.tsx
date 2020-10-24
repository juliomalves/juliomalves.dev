import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Metadata from '@/components/metadata'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { pageView } from '@/helpers/analytics'

import '@/styles/app.css'

const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter()

    useEffect(() => {
        const handleRouteChange = (url: string) => {
            pageView(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

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
