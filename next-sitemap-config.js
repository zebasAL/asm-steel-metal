module.exports = {
  siteUrl: process.env.VERCEL_URL, // Reemplaza con la URL de tu sitio
  generateRobotsTxt: true,
  exclude: ['/admin/*', '/en/admin/*'], // Excluye estas rutas del sitemap
  changefreq: "weekly",
  robotsTxtOptions: {
    exclude: ['/admin/*', '/en/admin/*'], // Excluye estas rutas de robots.txt
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/admin' },
      { userAgent: '*', disallow: '/en/admin' },
    ]	
  }
};
