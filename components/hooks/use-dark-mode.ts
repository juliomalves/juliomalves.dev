import { useEffect, useState } from 'react'

interface IUseDarkMode {
    darkModeClass?: string
    lightModeClass?: string
    storageKey?: string
}

export const useDarkMode = ({ darkModeClass = 'dark-mode', lightModeClass = 'light-mode', storageKey = 'theme' }: IUseDarkMode = {}) => {
    const preferDarkQuery = '(prefers-color-scheme: dark)'
    const [isDarkMode, setDarkMode] = useState(() => {
        const storedMode = window.localStorage.getItem(storageKey)
        return (storedMode && storedMode === 'dark') ?? window.matchMedia(preferDarkQuery).matches
    })

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery)
        const handleChange = () => setDarkMode(mediaQuery.matches)
        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    useEffect(() => {
        window.localStorage.setItem(storageKey, isDarkMode ? 'dark' : 'light')
        document.documentElement.classList.add(isDarkMode ? darkModeClass : lightModeClass)
        document.documentElement.classList.remove(isDarkMode ? lightModeClass : darkModeClass)
    }, [isDarkMode])

    return [isDarkMode, setDarkMode] as const
}
