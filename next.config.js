const withPreact = require('next-plugin-preact')
const WebpackBar = require('webpackbar')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE_BUNDLE === 'true'
})

module.exports = withBundleAnalyzer(
    withPreact({
        reactStrictMode: true,
        poweredByHeader: false,
        webpack: (config, { isServer }) => {
            const name = isServer ? 'server' : 'client'
            config.plugins.push(new WebpackBar({ name }))
            return config
        }
    })
)
