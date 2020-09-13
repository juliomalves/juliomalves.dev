import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <link rel="shortcut icon" href="favicon.ico" />
                    <link rel="apple-touch-icon" href="/news/apple-touch-icon.png" />
                    <link
                        rel="preload"
                        href="https://fonts.googleapis.com/css?family=Roboto+Condensed"
                        as="font"
                        type="font/woff"
                        crossOrigin="anonymous"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
