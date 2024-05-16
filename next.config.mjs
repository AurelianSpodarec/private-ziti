// @ts-check
import { withSentryConfig } from '@sentry/nextjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects () {
    return [
      {
        source: '/properties',
        destination: '/',
        permanent: true
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ziti.io',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'media.ziti.io',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**'
      }
    ]
  },
  poweredByHeader: false
}

const sentryWebpackPluginOptions = {
  silent: true,
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  include: '.next',
  ignore: ['node_modules'],
  urlPrefix: '~/_next'
}

const sentryConfigOptions = {
  widenClientFileUpload: true,
  transpileClientSDK: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true
}

// Conditionally set the tunnelRoute if NODE_ENV is production
if (process.env.NODE_ENV === 'production') {
  //@ts-ignore
  sentryConfigOptions.tunnelRoute = '/monitoring'
}

export default withSentryConfig(nextConfig, sentryWebpackPluginOptions, sentryConfigOptions)
