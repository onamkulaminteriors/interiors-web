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
        slug: 'modern-kerala-home-interior-design-ideas',
        title: 'Modern Kerala Home Interior Design Ideas for 2026',
        excerpt: 'Discover how modern design blends with traditional Kerala architecture to create elegant, functional homes that feel both contemporary and timeless.',
        category: 'Interior Design',
        date: 'Mar 2, 2026',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop',
        author: {
            name: 'Onamkulam Interiors',
            role: 'Design Team'
        }
    },
    {
        id: '02',
        slug: 'space-saving-interior-design-small-homes',
        title: 'Space-Saving Interior Design Ideas for Small Homes',
        excerpt: 'Smart interior planning can make even compact homes feel spacious. Learn how clever layouts, built-in storage, and multifunctional furniture transform small spaces.',
        category: 'Home Planning',
        date: 'Feb 25, 2026',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
        author: {
            name: 'Onamkulam Interiors',
            role: 'Interior Design Experts'
        }
    },
    {
        id: '03',
        slug: 'modular-kitchen-design-guide',
        title: 'Complete Guide to Designing a Perfect Modular Kitchen',
        excerpt: 'A modular kitchen is the heart of a modern home. From layout planning to material selection, explore everything you need to create a functional and stylish kitchen.',
        category: 'Kitchen Design',
        date: 'Feb 18, 2026',
        readTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&h=600&fit=crop',
        author: {
            name: 'Onamkulam Interiors',
            role: 'Kitchen Design Specialists'
        }
    },
    {
        id: '04',
        slug: 'best-materials-for-home-interiors',
        title: 'Choosing the Best Materials for Home Interiors',
        excerpt: 'The durability and beauty of your interiors depend heavily on material choices. Learn about plywood, laminates, acrylic, and other materials used in premium interiors.',
        category: 'Materials & Finishes',
        date: 'Feb 10, 2026',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&h=600&fit=crop',
        author: {
            name: 'Onamkulam Interiors',
            role: 'Material Consultants'
        }
    },
    {
        id: '05',
        slug: 'lighting-tips-for-beautiful-home-interiors',
        title: 'Lighting Tips to Transform Your Home Interiors',
        excerpt: 'Lighting can dramatically influence how a space looks and feels. Discover how layered lighting techniques enhance aesthetics and functionality in modern homes.',
        category: 'Lighting Design',
        date: 'Feb 1, 2026',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop',
        author: {
            name: 'Onamkulam Interiors',
            role: 'Lighting & Design Team'
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

                {/* End of Blog Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-16 lg:mt-24 flex flex-col items-center justify-center text-center space-y-4"
                >
                    <div className="w-12 h-[1px] bg-gray-300"></div>
                    <p className="text-gray-400 text-sm font-light tracking-widest uppercase">
                        End of Articles
                    </p>
                    <div className="w-12 h-[1px] bg-gray-300"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogSection;
