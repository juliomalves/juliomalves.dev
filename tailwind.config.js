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
            whitelist: ['dark-mode', 'light-mode']
        }
    },
    theme: {
        darkSelector: '.dark-mode',
        extend: {
            fontFamily: {
                sans: ['Lato', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                midnight: '#171923'
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
    },
    variants: {
        backgroundColor: ['dark', 'dark-hover', 'responsive', 'hover', 'focus'],
        borderColor: ['dark', 'dark-hover', 'responsive', 'hover', 'focus'],
        textColor: ['dark', 'dark-hover', 'responsive', 'hover', 'focus']
    },
    plugins: [
        ({ addBase, config }) => {
            addBase({
                '.dark-mode': {
                    body: {
                        color: config('theme.colors.gray.100'),
                        backgroundColor: config('theme.colors.midnight')
                    },
                    p: {
                        color: config('theme.colors.gray.500')
                    }
                }
            })
        },
        require('tailwindcss-dark-mode')()
    ]
}
