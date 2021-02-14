import * as React from 'react'

interface IUseDarkMode {
    darkModeClass?: string
    lightModeClass?: string
    storageKey?: string
}

export const useDarkMode = ({ darkModeClass = 'dark', lightModeClass = 'light', storageKey = 'theme' }: IUseDarkMode = {}) => {
    const MEDIA_QUERY = '(prefers-color-scheme: dark)'
    const [isDarkMode, setDarkMode] = React.useState(() => {
        const storedMode = window.localStorage.getItem(storageKey)
        return (storedMode && storedMode === 'dark') ?? window.matchMedia(MEDIA_QUERY).matches
    })

    React.useEffect(() => {
        const mediaQueryList = window.matchMedia(MEDIA_QUERY)
        const handleChange = (ev: MediaQueryListEvent) => setDarkMode(ev.matches)
        mediaQueryList.addEventListener('change', handleChange)
        return () => mediaQueryList.removeEventListener('change', handleChange)
    }, [])

    React.useEffect(() => {
        window.localStorage.setItem(storageKey, isDarkMode ? darkModeClass : lightModeClass)
        document.documentElement.classList.add(isDarkMode ? darkModeClass : lightModeClass)
        document.documentElement.classList.remove(isDarkMode ? lightModeClass : darkModeClass)
    }, [isDarkMode, darkModeClass, lightModeClass, storageKey])

    return [isDarkMode, setDarkMode] as const
}
