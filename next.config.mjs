import nextBundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = nextBundleAnalyzer({
    enabled: process.env.ANALYZE_BUNDLE === 'true'
})

/** @type {import('next').NextConfig} */
const config = {
    experimental: {
        appDir: true
    },
    output: 'export',
    images: {
        unoptimized: true
    },
    reactStrictMode: true,
    swcMinify: true,
    poweredByHeader: false
}

export default withBundleAnalyzer(config)
