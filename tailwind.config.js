const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    purge: {
        content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
        options: {
            safelist: ['dark', 'light']
        }
    },
    darkMode: 'class',
    theme: {
        colors: {
            white: colors.white,
            gray: colors.blueGray,
            yellow: colors.yellow,
            'energy-yellow': '#F0DB4F',
            midnight: '#070919',
            'neon-blue': '#5C61FF',
            'navy-blue': '#007ACC',
            'royal-blue': '#2965F1',
            'sky-blue': '#61DBFB',
            'cerulean-blue': '#06B6D4',
            green: '#00CC99',
            'may-green': '#3C873A',
            orange: '#E34C26',
            pink: '#CC6699',
            purple: '#6F1AB1'
        },
        fontFamily: {
            sans: ['Lato', ...defaultTheme.fontFamily.sans]
        },
        screens: {
            tablet: '640px'
        },
        extend: {
            zIndex: {
                '-1': '-1'
            }
        }
    }
}
