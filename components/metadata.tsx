import * as React from 'react'
import Head from 'next/head'

const authorName = 'Julio Alves'
export const title = `${authorName} | Software Engineer`
const description = 'Frontend developer experienced in building web-based applications for all kinds of devices.'
const twitterHandle = '@juli0malves'

const Metadata = () => (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="favicon.ico" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" sizes="180x180" />
        <link rel="icon" href="favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="preload" href="/fonts/lato-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/lato-bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <title>{title}</title>
        <meta name="author" content={authorName} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:description" content={description} />
        {/* <meta property="og:image" content={image} /> */}
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta property="og:image:alt" content={title} />
        <meta property="og:url" content="https://juliomalves.dev" />
        <meta property="og:site_name" content={`${authorName} Website`} />
        <meta name="twitter:site" content={twitterHandle} />
        <meta name="twitter:creator" content={twitterHandle} />
        <meta name="twitter:card" content="summary_large_image" />
    </Head>
)

export default Metadata
