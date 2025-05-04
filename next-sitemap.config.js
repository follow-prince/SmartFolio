const BLOG = require('./blog.config');

module.exports = {
  siteUrl: BLOG.link || 'https://princey.me',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  trailingSlash: false,
  exclude: ['/404', '/500'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }
    ],
    additionalSitemaps: [
      `${BLOG.link}/server-sitemap.xml`
    ]
  }
};
