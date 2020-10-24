import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        const isProduction = process.env.NODE_ENV === 'production'

        return (
            <Html lang="en">
                <Head>
                    <link rel="shortcut icon" href="favicon.ico" />
                    <link rel="apple-touch-icon" href="apple-touch-icon.png" sizes="180x180" />
                    <link rel="icon" href="favicon-16x16.png" sizes="16x16" type="image/png" />
                    <link rel="icon" href="favicon-32x32.png" sizes="32x32" type="image/png" />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap"
                    />
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
                    <script src="toggle-theme.js" />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
