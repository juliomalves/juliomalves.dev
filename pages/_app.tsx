import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Metadata from '@/components/metadata'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { pageView } from '@/helpers/analytics'

import '@/styles/app.css'

const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter()

    React.useEffect(() => {
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
            <Head>
                <script type="text/javascript" src="toggle-theme.js" />
            </Head>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}

export default App
