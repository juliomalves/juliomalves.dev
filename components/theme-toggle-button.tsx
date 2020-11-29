import * as React from 'react'
import { useDarkMode } from '@/components/hooks/use-dark-mode'

import MoonIcon from '@/assets/svg/moon-icon.svg'
import SunIcon from '@/assets/svg/sun-icon.svg'

const ThemeToggleButton = () => {
    const [isDarkMode, setDarkMode] = useDarkMode({ storageKey: 'jma-theme' })
    const toggleMode = () => setDarkMode(!isDarkMode)
    const label = isDarkMode ? 'Light mode' : 'Dark mode'

    return (
        <button
            className="p-4 text-yellow-300 focus-outline"
            onClick={toggleMode}
            aria-label={label}
        >
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>
    )
}

export default ThemeToggleButton
