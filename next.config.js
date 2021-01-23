const withPlugins = require('next-compose-plugins')
const withPrefresh = require('@prefresh/next')
const withImages = require('next-images')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE_BUNDLE === 'true'
})

module.exports = withPlugins([withImages, withPrefresh, withBundleAnalyzer], {
    poweredByHeader: false,
    webpack: (config, { dev, isServer }) => {
        // Move Preact into the framework chunk instead of duplicating in routes
        const splitChunks = config.optimization && config.optimization.splitChunks
        if (splitChunks) {
            const cacheGroups = splitChunks.cacheGroups
            const test = /[\\/]node_modules[\\/](preact|preact-render-to-string|preact-context-provider)[\\/]/
            if (cacheGroups.framework) {
                cacheGroups.preact = { ...cacheGroups.framework, test }
                // Merge the 2 small commons+framework chunks
                cacheGroups.commons.name = 'framework'
            }
        }

        // Mark Preact libs as external for server bundle to prevent duplicate copies of preact
        if (isServer) {
            config.externals.push(/^(preact|preact-render-to-string|preact-context-provider)([\\/]|$)/)
        }

        // Setup webpack aliases
        config.resolve.alias = {
            ...(config.resolve.alias || {}),
            react: 'preact/compat',
            'react-dom': 'preact/compat'
        }

        // Automatically inject Preact devtools
        if (dev && !isServer) {
            const entry = config.entry
            config.entry = () =>
                entry().then(entries => {
                    entries['main.js'] = ['preact/debug', ...(entries['main.js'] || [])]
                    return entries
                })
        }

        return config
    }
})
