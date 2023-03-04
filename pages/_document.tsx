import * as React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

const scriptHtml = `(function() {
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
})();`

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <script
                    id="theme"
                    key="theme"
                    dangerouslySetInnerHTML={{
                        __html: scriptHtml
                    }}
                ></script>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document
