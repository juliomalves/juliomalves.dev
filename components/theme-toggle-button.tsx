import React from 'react'
import useDarkMode from '@/components/use-dark-mode'

import MoonIcon from '@/assets/svg/moon-icon.svg'
import SunIcon from '@/assets/svg/sun-icon.svg'

const ThemeToggleButton = () => {
    const [mode, setMode] = useDarkMode({ storageKey: 'jma-theme' })

    const toggleMode = () => setMode(mode === 'dark' ? 'light' : 'dark')

    return (
        <button className="p-4 transition-colors duration-300 ease-in-out focus:outline-none" onClick={toggleMode}>
            {mode === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
    )
}

export default ThemeToggleButton
