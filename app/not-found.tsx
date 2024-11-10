import PageWrapper from '@/components/page-wrapper'
import Link from '@/components/link'

const authorName = 'Julio Alves'
const title = `${authorName} | Software Engineer`

const Page404 = () => {
    return (
        <>
            {/* No support for metadata in `not-found.tsx` yet: https://github.com/vercel/next.js/pull/47328#issuecomment-1488891093 */}
            <title>{`Page Not Found | ${title}`}</title>
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
