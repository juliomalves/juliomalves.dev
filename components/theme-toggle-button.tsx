import * as React from 'react'
import type { Theme } from '@/components/contexts/theme'
import { useTheme } from '@/components/contexts/theme'
import SvgIcon from '@/components/svg-icon'

type ThemeIcon = 'icon-sun' | 'icon-moon'

type ThemeOptions = {
    label: string
    icon: ThemeIcon
    iconLabel: string
}

const themeOptions: Record<Theme, ThemeOptions> = {
    dark: { label: 'Light mode', icon: 'icon-sun', iconLabel: 'Sun icon' },
    light: { label: 'Dark mode', icon: 'icon-moon', iconLabel: 'Moon icon' }
}

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useTheme()
    const { label, icon, iconLabel } = themeOptions[theme]

    return (
        <button className="flex p-2 text-yellow-400 focus-outline hover:glow" onClick={toggleTheme} aria-label={label}>
            <SvgIcon className="w-5 h-5" id={icon} title={iconLabel} />
        </button>
    )
}

export default ThemeToggleButton
