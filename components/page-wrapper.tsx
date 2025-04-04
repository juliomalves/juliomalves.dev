import type { ReactNode } from 'react'

interface IPageWrapper {
    children: ReactNode
}

const PageWrapper = ({ children }: IPageWrapper) => {
    return <main className="grid grid-cols-[1fr_min(75ch,100%)_1fr] *:col-[2] min-h-[calc(100vh-13.25rem)]">{children}</main>
}

export default PageWrapper
