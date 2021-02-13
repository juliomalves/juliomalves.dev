import * as React from 'react'
import { ThemeContext, Theme } from '@/components/theme-context'
import SvgIcon, { moonIcon, sunIcon } from '@/components/svg-icon'

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = React.useContext(ThemeContext)
    const [label, icon, iconLabel] = theme === Theme.Dark ? ['Light mode', sunIcon, 'Sun icon'] : ['Dark mode', moonIcon, 'Moon icon']

    return (
        <button className="flex p-2 text-yellow-400 focus-outline hover:glow" onClick={toggleTheme} aria-label={label}>
            <SvgIcon className="w-5" d={icon} title={iconLabel} viewBox="0 0 512 512" />
        </button>
    )
}

export default ThemeToggleButton
