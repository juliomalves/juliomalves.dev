module.exports = {
    future: {
        purgeLayersByDefault: true,
        removeDeprecatedGapUtilities: true
    },
    purge: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'accent-1': '#666'
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
    plugins: []
}
