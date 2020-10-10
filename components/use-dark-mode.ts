import { useEffect, useState } from 'react'

interface IUseDarkMode {
    darkThemeClass?: string
    lightThemeClass?: string
    storageKey?: string
}

const useDarkMode = ({ darkThemeClass = 'dark-mode', lightThemeClass = 'light-mode', storageKey = 'theme' }: IUseDarkMode = {}) => {
    const preferDarkQuery = '(prefers-color-scheme: dark)'
    const [mode, setMode] = useState(
        () => window.localStorage.getItem(storageKey) || (window.matchMedia(preferDarkQuery).matches ? 'dark' : 'light')
    )

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery)
        const handleChange = () => setMode(mediaQuery.matches ? 'dark' : 'light')
        mediaQuery.addEventListener('change', handleChange)

        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    useEffect(() => {
        window.localStorage.setItem(storageKey, mode)
        const isDarkMode = mode === 'dark'
        document.documentElement.classList.add(isDarkMode ? darkThemeClass : lightThemeClass)
        document.documentElement.classList.remove(isDarkMode ? lightThemeClass : darkThemeClass)
    }, [mode])

    return [mode, setMode] as const
}

export default useDarkMode
