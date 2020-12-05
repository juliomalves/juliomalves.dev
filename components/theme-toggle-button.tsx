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
            className="flex p-2 text-yellow-400 focus-outline hover:glow"
            onClick={toggleMode}
            aria-label={label}
        >
            {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>
    )
}

export default ThemeToggleButton
