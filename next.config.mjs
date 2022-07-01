import withPreact from 'next-plugin-preact'
import WebpackBar from 'webpackbar'
import nextBundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = nextBundleAnalyzer({
    enabled: process.env.ANALYZE_BUNDLE === 'true'
})

/**
 * @type {import('next').NextConfig}
 */
const config = {
    reactStrictMode: true,
    swcMinify: true,
    poweredByHeader: false,
    webpack: (config, { isServer }) => {
        const name = isServer ? 'server' : 'client'
        config.plugins.push(new WebpackBar({ name }))
        return config
    }
}

export default withBundleAnalyzer(withPreact(config))
