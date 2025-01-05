'use client'

import * as React from 'react'

const STORAGE_KEY = 'jma-theme'
const MEDIA_QUERY = '(prefers-color-scheme: dark)'

export type Theme = 'light' | 'dark'

interface IThemeContext {
    toggleTheme: () => void
    theme: Theme
}

const ThemeContext = React.createContext<IThemeContext>({
    theme: 'light',
    toggleTheme: () => {
        throw new Error('toggleTheme must be initialised')
    }
})

interface IThemeProvider {
    storageKey?: string
}

export const useTheme = () => React.useContext<IThemeContext>(ThemeContext)

const subscribeToLocalStorage = (callback: () => void) => {
    window.addEventListener('storage', callback)
    return () => {
        window.removeEventListener('storage', callback)
    }
}

const subscribeToMediaQuery = (callback: () => void) => {
    const mediaQueryList = window.matchMedia(MEDIA_QUERY)
    mediaQueryList.addEventListener('change', callback)
    return () => {
        mediaQueryList.removeEventListener('change', callback)
    }
}

export const ThemeProvider = ({ storageKey = STORAGE_KEY, children }: React.PropsWithChildren<IThemeProvider> = {}) => {
    const themeFromLocalStorage = React.useSyncExternalStore(
        subscribeToLocalStorage,
        () => localStorage.getItem(storageKey) as Theme | null,
        () => null
    )
    const themeFromMediaQuery = React.useSyncExternalStore(
        subscribeToMediaQuery,
        () => (window.matchMedia(MEDIA_QUERY).matches ? 'dark' : 'light') as Theme,
        () => 'light' as Theme
    )
    const theme = themeFromLocalStorage ?? themeFromMediaQuery

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        localStorage.setItem(storageKey, newTheme)
        window.dispatchEvent(new Event('storage'))
    }

    React.useEffect(() => {
        document.documentElement.classList.add(theme)
        document.documentElement.classList.remove(theme === 'dark' ? 'light' : 'dark')
    }, [theme])

    return <ThemeContext value={{ toggleTheme, theme }}>{children}</ThemeContext>
}
