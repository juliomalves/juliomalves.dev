import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="shortcut icon" href="favicon.ico" />
                    <link rel="apple-touch-icon" href="apple-touch-icon.png" sizes="180x180" />
                    <link rel="icon" href="favicon-16x16.png" sizes="16x16" type="image/png" />
                    <link rel="icon" href="favicon-32x32.png" sizes="32x32" type="image/png" />
                </Head>
                <body>
                    <script src="toggle-theme.js" />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
