import * as React from 'react'
import { useDarkMode } from '@/components/hooks/use-dark-mode'
import SvgIcon, { moonIcon, sunIcon } from '@/components/svg-icon'

const ThemeToggleButton = () => {
    const [isDarkMode, setDarkMode] = useDarkMode({ storageKey: 'jma-theme' })
    const toggleMode = () => setDarkMode(!isDarkMode)
    const [label, icon] = isDarkMode ? ['Light mode', sunIcon] : ['Dark mode', moonIcon]

    return (
        <button className="flex p-2 text-yellow-400 focus-outline hover:glow" onClick={toggleMode} aria-label={label}>
            <SvgIcon className="w-5" d={icon} viewBox="0 0 512 512" />
        </button>
    )
}

export default ThemeToggleButton
