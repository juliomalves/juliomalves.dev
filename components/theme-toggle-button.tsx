import React from 'react'
import { useDarkMode } from '@/components/hooks/use-dark-mode'

import MoonIcon from '@/assets/svg/moon-icon.svg'
import SunIcon from '@/assets/svg/sun-icon.svg'

const ThemeToggleButton = () => {
    const [isDarkMode, setDarkMode] = useDarkMode({ storageKey: 'jma-theme' })
    const toggleMode = () => setDarkMode(!isDarkMode)

    return (
        <button className="p-4 text-blue-300 dark:text-orange-300 transition-colors duration-300 ease-in-out focus:outline-none" onClick={toggleMode}>
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>
    )
}

export default ThemeToggleButton
