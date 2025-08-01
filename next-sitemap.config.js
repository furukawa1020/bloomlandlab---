/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://bloomlandlabo.netlify.app',
  generateRobotsTxt: false, // robots.txtは手動で作成済み
  outDir: './out',
  generateIndexSitemap: false,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  
  // 除外するページ
  exclude: [
    '/admin/*',
    '/api/*',
    '/404',
    '/500'
  ],

  // 追加するページ
  additionalPaths: async (config) => [
    await config.transform(config, '/', {
      priority: 1.0,
      changefreq: 'daily',
    }),
    await config.transform(config, '/product', {
      priority: 0.9,
      changefreq: 'weekly',
    }),
    await config.transform(config, '/nfc-tour-rally', {
      priority: 0.9,
      changefreq: 'weekly',
    }),
    await config.transform(config, '/projects', {
      priority: 0.8,
      changefreq: 'weekly',
    }),
    await config.transform(config, '/about', {
      priority: 0.7,
      changefreq: 'monthly',
    }),
    await config.transform(config, '/contact', {
      priority: 0.8,
      changefreq: 'monthly',
    }),
    await config.transform(config, '/careers', {
      priority: 0.6,
      changefreq: 'weekly',
    }),
    await config.transform(config, '/news', {
      priority: 0.7,
      changefreq: 'daily',
    }),
    await config.transform(config, '/blog', {
      priority: 0.6,
      changefreq: 'daily',
    }),
    await config.transform(config, '/faq', {
      priority: 0.5,
      changefreq: 'monthly',
    }),
  ],

  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },
}
