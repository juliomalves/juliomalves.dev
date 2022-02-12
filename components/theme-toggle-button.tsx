import * as React from 'react'
import { useTheme } from '@/components/contexts/theme'
import SvgIcon from '@/components/svg-icon'

type ThemeIcon = 'icon-sun' | 'icon-moon'

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme()
    const [label, icon, iconLabel]: [string, ThemeIcon, string] =
        theme === 'dark' ? ['Light mode', 'icon-sun', 'Sun icon'] : ['Dark mode', 'icon-moon', 'Moon icon']

    return (
        <button className="flex p-2 text-yellow-400 focus-outline hover:glow" onClick={toggleTheme} aria-label={label}>
            <SvgIcon className="w-5 h-5" id={icon} title={iconLabel} />
        </button>
    )
}

export default ThemeToggleButton
