import * as React from 'react'
import type { Metadata } from 'next'
import PageWrapper from '@/components/page-wrapper'
import Link from '@/components/link'

const authorName = 'Julio Alves'
const title = `${authorName} | Software Engineer`

export const metadata: Metadata = {
    title: `Page Not Found | ${title}`
}

const Page404 = () => {
    return (
        <PageWrapper>
            <section className="flex flex-col items-center place-content-center px-4 tablet:px-8" aria-labelledby="404">
                <h1 id="404">Page Not Found</h1>
                <p>
                    <Link className="focus-outline" href="/">
                        Go back home
                    </Link>
                </p>
            </section>
        </PageWrapper>
    )
}

export default Page404
