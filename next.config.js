const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE_BUNDLE === 'true'
})

module.exports = withPlugins([withImages, withBundleAnalyzer], {
    compress: true,
    poweredByHeader: false
})
