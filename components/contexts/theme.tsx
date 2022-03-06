import * as React from 'react'
import Script from 'next/script'

const STORAGE_KEY = 'jma-theme'
const MEDIA_QUERY = '(prefers-color-scheme: dark)'

export type Theme = 'light' | 'dark'

interface IThemeContext {
    toggleTheme: () => void
    theme: Theme
}

const ThemeContext = React.createContext<IThemeContext>({
    theme: 'light',
    toggleTheme: undefined
})

interface IThemeProvider {
    storageKey?: string
}

export const useTheme = () => React.useContext<IThemeContext>(ThemeContext)

export const ThemeProvider = ({ storageKey = STORAGE_KEY, children }: React.PropsWithChildren<IThemeProvider> = {}) => {
    const [theme, setTheme] = React.useState(() => {
        if (typeof window === 'undefined') {
            return undefined
        }
        const storedMode = window.localStorage.getItem(storageKey) as Theme
        return !storedMode ? (window.matchMedia(MEDIA_QUERY).matches ? 'dark' : 'light') : storedMode
    })

    const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

    React.useEffect(() => {
        const mediaQueryList = window.matchMedia(MEDIA_QUERY)
        const handleChange = (ev: MediaQueryListEvent) => setTheme(ev.matches ? 'dark' : 'light')
        mediaQueryList.addEventListener('change', handleChange)
        return () => mediaQueryList.removeEventListener('change', handleChange)
    }, [])

    React.useEffect(() => {
        window.localStorage.setItem(storageKey, theme)
        document.documentElement.classList.add(theme)
        document.documentElement.classList.remove(theme === 'dark' ? 'light' : 'dark')
    }, [theme, storageKey])

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
            <ThemeScript />
            {children}
        </ThemeContext.Provider>
    )
}

const ThemeScript = () => (
    <Script id="theme" key="theme">
        {`
            (function() {
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
            })();
        `}
    </Script>
)
