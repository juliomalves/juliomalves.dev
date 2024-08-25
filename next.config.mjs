import nextBundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = nextBundleAnalyzer({
    enabled: process.env.ANALYZE_BUNDLE === 'true'
})

/** @type {import('next').NextConfig} */
const config = {
    output: 'export',
    images: {
        unoptimized: true
    },
    poweredByHeader: false
}

export default withBundleAnalyzer(config)
