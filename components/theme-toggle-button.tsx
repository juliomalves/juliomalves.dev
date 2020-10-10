import React from 'react'
import useDarkMode from 'use-dark-mode'

const ThemeToggleButton = () => {
    const { toggle, value } = useDarkMode(false, {
        element: document.documentElement,
        storageKey: 'jma-theme'
    })

    return (
        <button className="font-bold py-2 px-4 border-2 border-midnight dark:border-gray-100 rounded hover:bg-gray-200 dark-hover:bg-gray-800" onClick={toggle}>
            {value ? 'Light' : 'Dark'}
        </button>
    )
}

export default ThemeToggleButton
