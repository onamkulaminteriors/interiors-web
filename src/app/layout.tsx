import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import '../index.css';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700'],
    variable: '--font-poppins',
    display: 'swap',
});

export const metadata: Metadata = {
    // Base URL for relative images
    metadataBase: new URL('https://onamkulaminteriors.com'),

    // Basic metadata
    title: 'Onamkulam Interiors - Premium Interior Design & Architecture',
    description: 'Transform your space with Onamkulam Interiors. We specialize in premium residential and commercial interior design, bringing your vision to life with innovative solutions.',

    // Keywords for SEO
    keywords: [
        'interior design',
        'architecture',
        'home decor',
        'commercial interiors',
        'residential design',
        'Onamkulam',
        'interior designer',
        'space planning',
        'furniture design'
    ],

    // Authors
    authors: [{ name: 'Onamkulam Interiors' }],

    // Creator
    creator: 'Onamkulam Interiors',

    // Publisher
    publisher: 'Onamkulam Interiors',

    // Robots
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    // Open Graph (for WhatsApp, Facebook, LinkedIn, etc.)
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://onamkulaminteriors.com',
        siteName: 'Onamkulam Interiors',
        title: 'Onamkulam Interiors - Premium Interior Design & Architecture',
        description: 'Transform your space with Onamkulam Interiors. We specialize in premium residential and commercial interior design, bringing your vision to life with innovative solutions.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Onamkulam Interiors - Premium Interior Design',
                type: 'image/png',
            },
        ],
    },

    // Twitter Card
    twitter: {
        card: 'summary_large_image',
        title: 'Onamkulam Interiors - Premium Interior Design & Architecture',
        description: 'Transform your space with Onamkulam Interiors. We specialize in premium residential and commercial interior design.',
        creator: '@onamkulam',
        images: ['/og-image.png'],
    },


};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="https://images.unsplash.com" />
            </head>
            <body className={poppins.className}>{children}</body>
        </html>
    );
}
