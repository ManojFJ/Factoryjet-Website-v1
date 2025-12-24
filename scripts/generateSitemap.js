/**
 * Generate sitemap.xml with all service + location combinations
 */

const fs = require('fs');
const path = require('path');

// Service slugs (must match seoConfig.ts)
const services = [
  'web-development',
  'web-design',
  'ecommerce-development',
  'wordpress-development',
  'shopify-development',
  'mobile-app-development',
  'seo-services',
  'digital-marketing'
];

// City slugs (must match seoConfig.ts)
const cities = [
  'mumbai',
  'pune',
  'bangalore',
  'ahmedabad',
  'surat'
];

// Static pages
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.8', changefreq: 'monthly' },
  { url: '/pricing', priority: '0.9', changefreq: 'weekly' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/blog', priority: '0.7', changefreq: 'daily' },
  { url: '/case', priority: '0.7', changefreq: 'weekly' },
  { url: '/web-design', priority: '0.8', changefreq: 'weekly' },
  { url: '/ecommerce', priority: '0.8', changefreq: 'weekly' },
  { url: '/mumbai', priority: '0.9', changefreq: 'weekly' },
  { url: '/pune', priority: '0.9', changefreq: 'weekly' },
  { url: '/bangalore', priority: '0.9', changefreq: 'weekly' },
  { url: '/ahmedabad', priority: '0.9', changefreq: 'weekly' },
  { url: '/surat', priority: '0.9', changefreq: 'weekly' },
  { url: '/terms', priority: '0.3', changefreq: 'yearly' },
  { url: '/privacy', priority: '0.3', changefreq: 'yearly' },
  { url: '/sitemap', priority: '0.3', changefreq: 'monthly' }
];

// Base URL
const baseUrl = 'https://factoryjet.com';

// Generate service + location URLs
const serviceLocationUrls = [];
services.forEach(service => {
  cities.forEach(city => {
    serviceLocationUrls.push({
      url: `/services/${service}/${city}`,
      priority: '0.9',
      changefreq: 'weekly'
    });
  });
});

// Combine all URLs
const allUrls = [...staticPages, ...serviceLocationUrls];

// Generate XML
const currentDate = new Date().toISOString().split('T')[0];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

allUrls.forEach(page => {
  xml += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
});

xml += `</urlset>`;

// Write to file
const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, xml, 'utf8');

console.log('✅ Sitemap generated successfully!');
console.log(`📄 Total URLs: ${allUrls.length}`);
console.log(`   - Static pages: ${staticPages.length}`);
console.log(`   - Service + Location pages: ${serviceLocationUrls.length}`);
console.log(`📍 Output: ${outputPath}`);
