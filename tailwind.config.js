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
            midnight: '#070919',
            'neon-blue': '#5C61FF',
            green: '#00CC99'
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
