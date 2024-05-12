/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL !== undefined && process.env.SITE_URL !== null && process.env.SITE_URL !== '' ? process.env.SITE_URL : 'https://ziti.io',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        Allow: '/'
      },
      {
        userAgent: 'Googlebot',
        Allow: '/'
      },
      {
        userAgent: 'Bingbot',
        Allow: '/'
      },
      {
        userAgent: 'Baiduspider',
        Allow: '/'
      },
      {
        userAgent: 'Yahoo Slurp',
        Allow: '/'
      },
      {
        userAgent: 'YandexBot',
        Allow: '/'
      },
      {
        userAgent: 'DuckDuckBot',
        Allow: '/'
      }
    ]
  },
  exclude: [
    '/about',
    '/properties',
    '/community-guidelines',
    '/pricing',
    '/help',
    '/uikit',
    '/uikit/*',
    '/careers',
    '/privacy-policy',
    '/testimonials',
    '/brand-guide',
    '/faq',
    '/contact',
    '/sitemap'
  ]
}
