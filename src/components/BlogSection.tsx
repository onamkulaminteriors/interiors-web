import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    author: {
        name: string;
        role: string;
    };
}

const blogPosts: BlogPost[] = [
    {
        id: '01',
        slug: 'minimalist-living-spaces',
        title: 'The Art of Minimalist Living Spaces',
        excerpt: 'Discover how less can truly be more when it comes to creating serene, functional living environments that nurture the soul.',
        category: 'Design Philosophy',
        date: 'Feb 8, 2026',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop',
        author: {
            name: 'Sarah Mitchell',
            role: 'Lead Designer'
        }
    },
    {
        id: '02',
        slug: 'sustainable-materials',
        title: 'Sustainable Materials in Modern Interior Design',
        excerpt: 'Exploring eco-friendly choices that don\'t compromise on style or luxury in contemporary home design.',
        category: 'Sustainability',
        date: 'Feb 5, 2026',
        readTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
        author: {
            name: 'Michael Chen',
            role: 'Sustainability Expert'
        }
    },
    {
        id: '03',
        slug: 'color-psychology',
        title: 'Color Psychology in Home Interiors',
        excerpt: 'How the right color palette can transform mood, productivity, and overall well-being in your living spaces.',
        category: 'Color Theory',
        date: 'Feb 1, 2026',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
        author: {
            name: 'Emma Rodriguez',
            role: 'Color Specialist'
        }
    },
    {
        id: '04',
        slug: 'smart-home-integration',
        title: 'Smart Home Integration for Luxury Living',
        excerpt: 'Seamlessly blending cutting-edge technology with elegant design for the modern smart home experience.',
        category: 'Technology',
        date: 'Jan 28, 2026',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
        author: {
            name: 'David Park',
            role: 'Tech Integration Specialist'
        }
    },
    {
        id: '05',
        slug: 'heritage-homes-renovation',
        title: 'Reviving Heritage Homes with Contemporary Flair',
        excerpt: 'The delicate balance of preserving historical charm while introducing modern comfort and functionality.',
        category: 'Renovation',
        date: 'Jan 25, 2026',
        readTime: '9 min read',
        image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop',
        author: {
            name: 'Olivia Thompson',
            role: 'Heritage Specialist'
        }
    },
    {
        id: '06',
        slug: 'lighting-design',
        title: 'Lighting Design: The Invisible Architecture',
        excerpt: 'Understanding how strategic lighting can sculpt spaces, create ambiance, and highlight architectural features.',
        category: 'Lighting',
        date: 'Jan 20, 2026',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
        author: {
            name: 'James Wilson',
            role: 'Lighting Designer'
        }
    }
];

const BlogSection = () => {
    return (
        <section className="min-h-screen bg-white py-16 sm:py-20 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-12 lg:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-4">
                            Stories & Insights
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto font-light">
                            Exploring the intersection of design, lifestyle, and craftsmanship
                        </p>
                    </motion.div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {blogPosts.map((post, index) => (
                        <Link href={`/blogs/${post.slug}`} key={post.id}>
                            <motion.article
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group cursor-pointer"
                            >
                                {/* Image Container */}
                                <div className="relative overflow-hidden mb-4 sm:mb-5 aspect-[4/3] bg-gray-100">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/95 backdrop-blur-sm text-gray-900 text-xs font-medium px-3 py-1.5 rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="space-y-3">
                                    {/* Meta Info */}
                                    <div className="flex items-center gap-4 text-xs sm:text-sm text-gray-500">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl sm:text-2xl font-light text-gray-900 leading-tight group-hover:text-gray-700 transition-colors duration-300">
                                        {post.title}
                                    </h3>

                                    {/* Excerpt */}
                                    <p className="text-gray-600 text-sm sm:text-base font-light leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    {/* Author & Read More */}
                                    <div className="flex items-center justify-between pt-2">
                                        <div>
                                            <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                                            <p className="text-xs text-gray-500">{post.author.role}</p>
                                        </div>

                                        <div className="flex items-center gap-2 text-gray-900 group-hover:gap-3 transition-all duration-300">
                                            <span className="text-sm font-medium">Read</span>
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        </Link>
                    ))}
                </div>

                {/* Load More Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-12 lg:mt-16 text-center"
                >
                    <button className="inline-flex items-center gap-3 px-8 py-4 bg-[#8B6F47] text-white font-light text-sm sm:text-base tracking-wide hover:bg-[#6F5838] transition-colors duration-300 rounded-lg group">
                        <span>Explore More Stories</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogSection;
