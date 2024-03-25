/** @type {import('next').NextConfig} */
const nextConfig = {
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
        hostname: 'profile.ziti.io',
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

export default nextConfig
