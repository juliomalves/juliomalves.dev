const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    future: {
        defaultLineHeights: true,
        purgeLayersByDefault: true,
        removeDeprecatedGapUtilities: true,
        standardFontWeights: true
    },
    purge: {
        content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './assets/svg/*.svg'],
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
            green: '#00CC99',
            'may-green': '#3C873A',
            orange: '#E34C26',
            'red-orange': '#F34F29',
            pink: '#CC6699',
            purple: '#6F1AB1'
        },
        fontFamily: {
            sans: ['Lato', ...defaultTheme.fontFamily.sans]
        },
        screens: {
            xs: '420px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px'
        },
        extend: {
            zIndex: {
                '-1': '-1'
            }
        }
    }
}
