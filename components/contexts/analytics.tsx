import * as React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { pageView, event } from '@/helpers/analytics'

const isProduction = process.env.NODE_ENV === 'production'

interface IAnalyticsProvider {
    children: React.ReactNode
}

interface IAnalyticsContext {
    sendEvent: typeof event
}

const AnalyticsContext = React.createContext<IAnalyticsContext>(null)

export const useAnalytics = () => React.useContext<IAnalyticsContext>(AnalyticsContext)

export const AnalyticsProvider = ({ children }: IAnalyticsProvider) => {
    const { events } = useRouter()

    React.useEffect(() => {
        events.on('routeChangeComplete', pageView)

        return () => {
            events.off('routeChangeComplete', pageView)
        }
    }, [events])

    return (
        <AnalyticsContext.Provider value={{ sendEvent: event }}>
            {isProduction && (
                <Head>
                    <script key="gtag" async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`} />
                    <script
                        key="gtag-config"
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){ dataLayer.push(arguments); }
                                gtag('js', new Date());
                                gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}', {
                                    page_path: window.location.pathname,
                                });
                            `
                        }}
                    />
                </Head>
            )}
            {children}
        </AnalyticsContext.Provider>
    )
}
