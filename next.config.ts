import type { NextConfig } from 'next'
import nextBundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = nextBundleAnalyzer({
    enabled: process.env.ANALYZE_BUNDLE === 'true'
})

const config: NextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    poweredByHeader: false
}

export default withBundleAnalyzer(config)
