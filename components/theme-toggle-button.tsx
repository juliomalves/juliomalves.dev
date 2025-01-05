'use client'

import { useTheme } from '@/components/contexts/theme'
import SvgIcon from '@/components/svg-icon'

const themeOptions = {
    dark: { label: 'Light mode', icon: 'icon-sun', iconLabel: 'Sun icon' },
    light: { label: 'Dark mode', icon: 'icon-moon', iconLabel: 'Moon icon' }
} as const

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme()
    const { label, icon, iconLabel } = themeOptions[theme]

    return (
        <button className="flex p-2 text-yellow-400 focus-outline hover:drop-shadow-[0_0_12px]" onClick={toggleTheme} aria-label={label}>
            <SvgIcon className="w-5 h-5" id={icon} title={iconLabel} />
        </button>
    )
}

export default ThemeToggleButton
