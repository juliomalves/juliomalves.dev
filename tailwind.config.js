const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
const config = {
    content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    safelist: ['dark', 'light'],
    darkMode: 'class',
    theme: {
        colors: {
            white: colors.white,
            gray: colors.slate,
            yellow: colors.amber,
            midnight: '#070919',
            'neon-blue': '#5C61FF',
            green: '#00CC99'
        },
        fontFamily: {
            sans: ['Lato', ...defaultTheme.fontFamily.sans]
        },
        screens: {
            tablet: '640px'
        }
    }
}

module.exports = config
