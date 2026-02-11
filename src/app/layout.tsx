import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import '../index.css';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-poppins',
    display: 'swap',
});

export const metadata: Metadata = {
    // Base URL for relative images
    metadataBase: new URL('https://onamkulam.com'),

    // Basic metadata
    title: 'OnamKulam Interiors - Premium Interior Design & Architecture',
    description: 'Transform your space with OnamKulam Interiors. We specialize in premium residential and commercial interior design, bringing your vision to life with innovative solutions.',

    // Keywords for SEO
    keywords: [
        'interior design',
        'architecture',
        'home decor',
        'commercial interiors',
        'residential design',
        'OnamKulam',
        'interior designer',
        'space planning',
        'furniture design'
    ],

    // Authors
    authors: [{ name: 'OnamKulam Interiors' }],

    // Creator
    creator: 'OnamKulam Interiors',

    // Publisher
    publisher: 'OnamKulam Interiors',

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
        url: 'https://onamkulam.com', // Replace with your actual domain
        siteName: 'OnamKulam Interiors',
        title: 'OnamKulam Interiors - Premium Interior Design & Architecture',
        description: 'Transform your space with OnamKulam Interiors. We specialize in premium residential and commercial interior design, bringing your vision to life with innovative solutions.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'OnamKulam Interiors - Premium Interior Design',
                type: 'image/png',
            },
        ],
    },

    // Twitter Card
    twitter: {
        card: 'summary_large_image',
        title: 'OnamKulam Interiors - Premium Interior Design & Architecture',
        description: 'Transform your space with OnamKulam Interiors. We specialize in premium residential and commercial interior design.',
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
            <body className={poppins.className}>{children}</body>
        </html>
    );
}
