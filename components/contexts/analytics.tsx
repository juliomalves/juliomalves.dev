'use client'

import * as React from 'react'
import Script from 'next/script'
// import { useRouter } from 'next/navigation'
import { event } from '@/helpers/analytics'

const isProduction = process.env.NODE_ENV === 'production'

interface IAnalyticsProvider {
    children: React.ReactNode
}

interface IAnalyticsContext {
    sendEvent: typeof event
}

const AnalyticsContext = React.createContext<IAnalyticsContext>({
    sendEvent: () => {
        throw new Error('sendEvent must be initialised')
    }
})

export const useAnalytics = () => React.useContext<IAnalyticsContext>(AnalyticsContext)

export const AnalyticsProvider = ({ children }: IAnalyticsProvider) => {
    // const { events } = useRouter()

    // React.useEffect(() => {
    //     events.on('routeChangeComplete', pageView)

    //     return () => {
    //         events.off('routeChangeComplete', pageView)
    //     }
    // }, [events])

    return (
        <AnalyticsContext.Provider value={{ sendEvent: event }}>
            {isProduction && (
                <>
                    <Script key="gtag" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`} />
                    <Script id="gtag-config" key="gtag-config">
                        {`
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){ dataLayer.push(arguments); }
                            gtag('js', new Date());
                            gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}', {
                                page_path: window.location.pathname,
                            });
                        `}
                    </Script>
                </>
            )}
            {children}
        </AnalyticsContext.Provider>
    )
}
