import * as React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

const STORAGE_KEY = 'jma-theme'
const MEDIA_QUERY = '(prefers-color-scheme: dark)'

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <script id="theme" key="theme">
                    {`(function() {
                        const storageKey = '${STORAGE_KEY}';
                        const darkThemeClass = 'dark';
                        const lightThemeClass = 'light';
                        const prefersDarkColorScheme = window.matchMedia('${MEDIA_QUERY}').matches;
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
                    })();`}
                </script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document
