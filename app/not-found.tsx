import * as React from 'react'
import type { NextPage } from 'next'
// import Head from 'next/head'
import PageWrapper from '@/components/page-wrapper'
import Link from '@/components/link'
// import { title } from '@/components/metadata'

const Page404: NextPage = () => {
    return (
        <>
            {/* <Head>
                <title>{`Page Not Found - ${title}`}</title>
            </Head> */}
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
        </>
    )
}

export default Page404
