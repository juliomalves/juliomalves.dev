import * as React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

class Document extends NextDocument {
    render() {
        const isProduction = process.env.NODE_ENV === 'production'

        return (
            <Html lang="en">
                <Head>
                    <link rel="shortcut icon" href="favicon.ico" />
                    <link rel="apple-touch-icon" href="apple-touch-icon.png" sizes="180x180" />
                    <link rel="icon" href="favicon-16x16.png" sizes="16x16" type="image/png" />
                    <link rel="icon" href="favicon-32x32.png" sizes="32x32" type="image/png" />
                    {isProduction && (
                        <>
                            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ANALYTICS_ID}`} />
                            <script
                                dangerouslySetInnerHTML={{
                                    __html: `
                                        window.dataLayer = window.dataLayer || [];
                                        function gtag(){ dataLayer.push(arguments); }
                                        gtag('js', new Date());
                                        gtag('config', '${process.env.NEXT_PUBLIC_ANALYTICS_ID}', {
                                            page_path: window.location.pathname,
                                        });
                                    `
                                }}
                            />
                        </>
                    )}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Document
