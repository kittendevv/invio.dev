import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = () => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://invio.dev/</loc>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://invio.dev/templates</loc>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
    </url>
    <url>
        <loc>https://invio.dev/license</loc>
        <changefreq>weekly</changefreq>
        <priority>0.3</priority>
    </url>
</urlset>`;

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml'
        }
    });
};