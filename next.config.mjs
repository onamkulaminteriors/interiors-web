/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Serve modern formats: AVIF (smallest) → WebP → original
        formats: ['image/avif', 'image/webp'],
        // Responsive breakpoints for srcset generation
        deviceSizes: [375, 640, 768, 1024, 1280, 1440, 1920],
        imageSizes: [48, 96, 128, 256, 384, 512],
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
