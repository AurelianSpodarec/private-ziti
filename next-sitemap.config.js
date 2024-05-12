/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL !== undefined && process.env.SITE_URL !== null && process.env.SITE_URL !== '' ? process.env.SITE_URL : 'https://ziti.io',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '',
        allow: '/'
      },
      {
        userAgent: 'Googlebot',
        disallow: '',
        allow: '/'
      },
      {
        userAgent: 'Bingbot',
        disallow: '',
        allow: '/'
      },
      {
        userAgent: 'Baiduspider',
        disallow: '',
        allow: '/'
      },
      {
        userAgent: 'Yahoo Slurp',
        disallow: '',
        allow: '/'
      },
      {
        userAgent: 'YandexBot',
        disallow: '',
        allow: '/'
      },
      {
        userAgent: 'DuckDuckBot',
        disallow: '',
        allow: '/'
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
