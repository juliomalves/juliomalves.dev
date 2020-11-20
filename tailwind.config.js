const defaultTheme = require('tailwindcss/defaultTheme')

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
            whitelist: ['dark', 'light']
        }
    },
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Lato', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                midnight: '#070919',
                'neon-blue': '#5C61FF',
                cerise: '#E4267B'
            },
            zIndex: {
                '-1': '-1'
            }
        },
        screens: {
            xs: '420px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px'
        },
        opacity: {
            0: '0',
            10: '.1',
            20: '.2',
            30: '.3',
            40: '.4',
            50: '.5',
            60: '.6',
            70: '.7',
            80: '.8',
            90: '.9',
            100: '1'
        }
    }
}
