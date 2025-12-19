// Cloudflare Pages Function to serve robots.txt without AI hints injection
export const onRequest: PagesFunction = async () => {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://factoryjet.com/sitemap.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
