/** @type {import('next').NextConfig} */
const nextConfig = {
    // Gzip/Brotli compress all responses (JS, CSS, HTML)
    compress: true,

    // Don't expose the Next.js version in response headers
    poweredByHeader: false,

    images: {
        // Serve modern formats: AVIF (smallest) → WebP → original
        formats: ['image/avif', 'image/webp'],
        // Responsive breakpoints for srcset generation
        deviceSizes: [375, 480, 640, 768, 1024, 1280, 1440, 1920],
        // Small fixed sizes for avatars, logos, inline thumbnails
        imageSizes: [16, 32, 48, 96, 128, 256, 384, 512],
        // Cache optimised images for 1 month
        minimumCacheTTL: 2592000,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
};

export default nextConfig;
