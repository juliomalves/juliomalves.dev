import * as React from 'react'

export enum Theme {
    Light = 'light',
    Dark = 'dark'
}

const STORAGE_KEY = 'jma-theme'
const MEDIA_QUERY = '(prefers-color-scheme: dark)'

interface IThemeContext {
    toggleTheme: () => void
    theme: Theme
}

export const ThemeContext = React.createContext<IThemeContext>({
    theme: Theme.Light,
    toggleTheme: undefined
})

interface IThemeProvider {
    storageKey?: string
}

export const ThemeProvider = ({ storageKey = STORAGE_KEY, children }: React.PropsWithChildren<IThemeProvider> = {}) => {
    const [theme, setTheme] = React.useState(() => {
        if (typeof window === 'undefined') {
            return undefined
        }
        const storedMode = window.localStorage.getItem(storageKey)
        return !storedMode ? (window.matchMedia(MEDIA_QUERY).matches ? Theme.Dark : Theme.Light) : (storedMode as Theme)
    })

    const toggleTheme = () => setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark)

    React.useEffect(() => {
        const mediaQueryList = window.matchMedia(MEDIA_QUERY)
        const handleChange = (ev: MediaQueryListEvent) => setTheme(ev.matches ? Theme.Dark : Theme.Light)
        mediaQueryList.addEventListener('change', handleChange)
        return () => mediaQueryList.removeEventListener('change', handleChange)
    }, [])

    React.useEffect(() => {
        window.localStorage.setItem(storageKey, theme)
        document.documentElement.classList.add(theme)
        document.documentElement.classList.remove(theme === Theme.Dark ? Theme.Light : Theme.Dark)
    }, [theme, storageKey])

    return <ThemeContext.Provider value={{ toggleTheme, theme }}>{children}</ThemeContext.Provider>
}

export const ThemeScript = () => (
    <script
        key="theme-script"
        dangerouslySetInnerHTML={{
            __html: `
                    (function() {
                        const storageKey = '${STORAGE_KEY}';
                        const darkThemeClass = '${Theme.Dark}';
                        const lightThemeClass = '${Theme.Light}';
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
                `
        }}
    />
)
