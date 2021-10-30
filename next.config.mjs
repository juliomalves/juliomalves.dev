import withPreact from 'next-plugin-preact'
import WebpackBar from 'webpackbar'
import nextBundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = nextBundleAnalyzer({
    enabled: process.env.ANALYZE_BUNDLE === 'true'
})

export default withBundleAnalyzer(
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
