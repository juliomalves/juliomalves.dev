import * as React from 'react'
import { useTheme } from 'next-themes'
import SvgIcon, { moonIcon, sunIcon } from '@/components/svg-icon'

const ThemeToggleButton = () => {
    const { theme, setTheme } = useTheme()
    const toggleMode = () => setTheme(theme === 'light' ? 'dark' : 'light')
    const [label, icon, iconLabel] = theme === 'dark' ? ['Light mode', sunIcon, 'Sun icon'] : ['Dark mode', moonIcon, 'Moon icon']

    return (
        <button className="flex p-2 text-yellow-400 focus-outline hover:glow" onClick={toggleMode} aria-label={label}>
            <SvgIcon className="w-5" d={icon} title={iconLabel} viewBox="0 0 512 512" />
        </button>
    )
}

export default ThemeToggleButton
