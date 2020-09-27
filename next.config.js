const path = require('path')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withReactSvg = require('next-react-svg')
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
})
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE_BUNDLE === 'true'
})

module.exports = withPlugins(
    [
        [
            withImages,
            {
                exclude: path.resolve(__dirname, 'assets/svg')
            }
        ],
        [
            withReactSvg,
            {
                include: path.resolve(__dirname, 'assets/svg')
            }
        ],
        [
            withMDX,
            {
                pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
            }
        ],
        withBundleAnalyzer
    ],
    {
        poweredByHeader: false
    }
)
