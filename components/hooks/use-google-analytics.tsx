import * as React from 'react'
import { useRouter } from 'next/router'
import { pageView } from '@/helpers/analytics'

export const useGoogleAnalytics = () => {
    const { events } = useRouter()

    React.useEffect(() => {
        events.on('routeChangeComplete', pageView)

        return () => {
            events.off('routeChangeComplete', pageView)
        }
    }, [events])
}
