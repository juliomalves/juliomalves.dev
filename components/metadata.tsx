import React from 'react'
import Head from 'next/head'

const title = 'Julio Alves | Software engineer'
const description = 'Frontend developer experienced in building web-based applications for all kinds of devices.'
const canonicalUrl = 'https://juliomalves.dev'
const twitterHandle = '@juli0malves'

const Metadata = () => (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:description" content={description} />
        {/* <meta property="og:image" content={image} /> */}
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="720" />
        <meta property="og:image:alt" content={title} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:site" content={twitterHandle} />
        <meta name="twitter:creator" content={twitterHandle} />
        <meta name="twitter:card" content="summary_large_image" />
    </Head>
)

export default Metadata
