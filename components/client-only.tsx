'use client'

import * as React from 'react'

type IClientOnly = {
    fallback?: React.ReactNode
    children: React.ReactNode
}

const ClientOnly = ({ fallback = null, children }: IClientOnly) => {
    const [isClient, setIsClient] = React.useState(false)

    React.useEffect(() => {
        setIsClient(true)
    }, [])

    return <>{isClient ? children : fallback}</>
}

export default ClientOnly
