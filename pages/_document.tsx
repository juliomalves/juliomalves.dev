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
                    <link rel="preload" href="/fonts/lato-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                    <link rel="preload" href="/fonts/lato-regular-italic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                    <link rel="preload" href="/fonts/lato-bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                (function() {
                                    const storageKey = 'jma-theme';
                                    const darkThemeClass = 'dark';
                                    const lightThemeClass = 'light';
                                    const prefersDarkColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
                                    const storedTheme = localStorage.getItem(storageKey);
                                    function setTheme(isDarkTheme) {
                                        document.documentElement.classList.add(isDarkTheme ? darkThemeClass : lightThemeClass);
                                        document.documentElement.classList.remove(isDarkTheme ? lightThemeClass : darkThemeClass);
                                    }
                                    if (storedTheme) {
                                        setTheme(storedTheme === darkThemeClass);
                                    } else {
                                        setTheme(prefersDarkColorScheme);
                                        localStorage.setItem(storageKey, prefersDarkColorScheme ? darkThemeClass : lightThemeClass);
                                    }
                                })();
                            `
                        }}
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
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default Document
