module.exports = {
    future: {
        purgeLayersByDefault: true,
        removeDeprecatedGapUtilities: true
    },
    purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                midnight: '#171923'
            },
            screens: {
                dark: { raw: '(prefers-color-scheme: dark)' }
            }
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
    variants: {},
    plugins: [
        ({ addBase, config }) => {
            addBase({
                body: {
                    color: config('theme.colors.midnight'),
                    backgroundColor: config('theme.colors.white')
                },
                p: {
                    color: config('theme.colors.gray.800')
                },
                '@screen dark': {
                    body: {
                        color: config('theme.colors.gray.100'),
                        backgroundColor: config('theme.colors.midnight')
                    },
                    p: {
                        color: config('theme.colors.gray.500')
                    }
                }
            })
        }
    ]
}
