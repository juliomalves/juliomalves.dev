const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
})
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE_BUNDLE === 'true'
})

module.exports = withPlugins(
    [
        withImages,
        withBundleAnalyzer,
        [
            withMDX,
            {
                pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
            }
        ]
    ],
    {
        poweredByHeader: false
    }
)
