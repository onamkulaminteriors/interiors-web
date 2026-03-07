"use client";

import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import imgKerala from "@/assets/blogs/kerala_modern.png";
import imgSmallHome from "@/assets/blogs/small_home.png";
import imgKitchen from "@/assets/blogs/modular_kitchen.png";
import imgMaterials from "@/assets/blogs/materials.png";
import imgLighting from "@/assets/blogs/lighting.png";

// Blog post data (same as in BlogSection.tsx)
const blogPosts = [
    {
        id: '01',
        slug: 'modern-kerala-home-interior-design-ideas',
        title: 'Modern Interior Design Ideas for Kerala Homes',
        excerpt: 'Kerala homes are evolving rapidly with modern design concepts while still maintaining their traditional charm. Here are the best interior ideas homeowners are adopting today.',
        category: 'Interior Design',
        date: 'Mar 1, 2026',
        readTime: '6 min read',
        image: imgKerala.src,
        author: {
            name: 'Onamkulam Interiors',
            role: 'Interior Design Team'
        },
        content: `
<p>Interior design in Kerala has undergone a significant transformation in recent years. Homeowners now seek a perfect balance between modern aesthetics and traditional architectural elements. A well-designed home is not just about beauty—it also improves comfort, functionality, and lifestyle.</p>

<h2>Blending Tradition with Modern Design</h2>
<p>Kerala homes traditionally feature wooden elements, sloped roofs, and spacious verandas. Modern interiors enhance these features by adding contemporary furniture, clean lines, and subtle lighting without removing the home’s cultural identity.</p>

<h2>Popular Interior Trends in Kerala</h2>

<p><strong>Open Living Spaces</strong><br/>
Modern homes are moving away from closed layouts. Combining living, dining, and kitchen areas creates a more spacious and welcoming environment.</p>

<p><strong>Neutral Color Palettes</strong><br/>
Soft shades like beige, cream, grey, and pastel tones create a calm atmosphere and make spaces appear larger.</p>

<p><strong>Natural Materials</strong><br/>
Wood, stone, and textured finishes remain popular in Kerala homes as they complement the region’s climate and culture.</p>

<h2>Importance of Professional Interior Design</h2>
<p>Working with experienced designers ensures your space is both beautiful and functional. At Onamkulam Interiors, we carefully plan layouts, materials, and lighting to create interiors that reflect your lifestyle and personality.</p>
`
    },

    {
        id: '02',
        slug: 'space-saving-interior-design-small-homes',
        title: 'Smart Space-Saving Interior Ideas for Small Homes',
        excerpt: 'Smart interior planning can transform compact homes into spacious and functional living spaces. Discover clever design ideas for maximizing every inch.',
        category: 'Home Planning',
        date: 'Feb 24, 2026',
        readTime: '5 min read',
        image: imgSmallHome.src,
        author: {
            name: 'Onamkulam Interiors',
            role: 'Design Experts'
        },
        content: `
<p>Many modern homes and apartments have limited space, making efficient interior design more important than ever. With the right design approach, even small homes can feel spacious and comfortable.</p>

<h2>Use Multi-Functional Furniture</h2>
<p>Furniture that serves multiple purposes is essential in compact homes. Sofa beds, foldable dining tables, and storage ottomans help maximize functionality without crowding the room.</p>

<h2>Built-In Storage Solutions</h2>
<p>Custom wardrobes, wall cabinets, and under-bed storage help keep spaces organized while maintaining a clean visual appearance.</p>

<h2>Use Mirrors and Lighting</h2>
<p>Mirrors reflect light and create the illusion of a larger space. Combined with proper lighting, they significantly enhance openness.</p>

<h2>Minimal Clutter</h2>
<p>Keeping décor simple prevents spaces from feeling crowded. Choose fewer decorative elements but make them meaningful and visually appealing.</p>

<p>Smart interior planning ensures that even a small home can feel comfortable, stylish, and functional.</p>
`
    },

    {
        id: '03',
        slug: 'modular-kitchen-design-guide',
        title: 'Complete Guide to Designing a Modular Kitchen',
        excerpt: 'A modular kitchen combines efficiency, style, and smart storage solutions. Here is everything you need to know before designing one.',
        category: 'Kitchen Design',
        date: 'Feb 18, 2026',
        readTime: '7 min read',
        image: imgKitchen.src,
        author: {
            name: 'Onamkulam Interiors',
            role: 'Kitchen Design Specialists'
        },
        content: `
<p>The kitchen is often considered the heart of the home. Modern homeowners prefer modular kitchens because they combine functionality with a sleek, organized appearance.</p>

<h2>Popular Kitchen Layouts</h2>

<p><strong>L-Shaped Kitchen</strong><br/>
Ideal for small to medium homes, this layout maximizes corner space while maintaining an efficient work triangle.</p>

<p><strong>U-Shaped Kitchen</strong><br/>
Provides more storage and workspace, perfect for larger kitchens.</p>

<p><strong>Straight Kitchen</strong><br/>
Best suited for compact apartments where space is limited.</p>

<h2>Choosing the Right Materials</h2>
<p>Materials such as marine plywood, laminates, acrylic finishes, and quartz countertops offer durability while maintaining style.</p>

<h2>Smart Storage Features</h2>
<p>Modern modular kitchens include pull-out cabinets, carousel units, tall pantry storage, and soft-close drawers to maximize convenience.</p>

<p>A well-designed kitchen improves workflow, enhances aesthetics, and adds long-term value to your home.</p>
`
    },

    {
        id: '04',
        slug: 'best-materials-for-home-interiors',
        title: 'Choosing the Best Materials for Home Interiors',
        excerpt: 'The durability and elegance of your interiors depend largely on the materials used. Learn about the best options available for modern homes.',
        category: 'Materials & Finishes',
        date: 'Feb 10, 2026',
        readTime: '6 min read',
        image: imgMaterials.src,
        author: {
            name: 'Onamkulam Interiors',
            role: 'Material Experts'
        },
        content: `
<p>Material selection plays a crucial role in interior design. The right materials ensure durability, aesthetics, and long-term performance.</p>

<h2>Plywood</h2>
<p>Plywood is one of the most commonly used materials in interior design due to its strength and resistance to warping.</p>

<h2>MDF</h2>
<p>MDF is widely used for decorative panels and furniture components because of its smooth finish and affordability.</p>

<h2>Laminates and Acrylic Finishes</h2>
<p>Laminates offer a wide range of colors and textures while acrylic finishes provide a glossy, premium look ideal for kitchens and wardrobes.</p>

<h2>Quartz and Granite Countertops</h2>
<p>These materials are durable, scratch resistant, and perfect for kitchens and bathrooms.</p>

<p>Choosing high-quality materials ensures that your interiors remain beautiful and functional for many years.</p>
`
    },

    {
        id: '05',
        slug: 'lighting-tips-for-beautiful-home-interiors',
        title: 'Lighting Tips to Transform Your Home Interiors',
        excerpt: 'Lighting plays a major role in creating the mood and ambiance of a home. Learn how to design lighting effectively for modern interiors.',
        category: 'Lighting Design',
        date: 'Feb 2, 2026',
        readTime: '5 min read',
        image: imgLighting.src,
        author: {
            name: 'Onamkulam Interiors',
            role: 'Lighting Design Team'
        },
        content: `
<p>Lighting is one of the most powerful tools in interior design. Proper lighting enhances architecture, highlights décor, and improves the overall atmosphere of a space.</p>

<h2>Layered Lighting Approach</h2>

<p><strong>Ambient Lighting</strong><br/>
Provides general illumination throughout the room using ceiling lights or chandeliers.</p>

<p><strong>Task Lighting</strong><br/>
Focused lighting for specific tasks such as reading, cooking, or working.</p>

<p><strong>Accent Lighting</strong><br/>
Used to highlight artwork, textured walls, or decorative elements.</p>

<h2>Use Warm Lighting for Comfort</h2>
<p>Warm white lighting creates a cozy and inviting environment, especially in living rooms and bedrooms.</p>

<h2>Natural Light Matters</h2>
<p>Maximizing natural light with large windows and light-colored interiors makes homes feel more open and refreshing.</p>

<p>A well-planned lighting design can dramatically transform the way your home looks and feels.</p>
`
    }
];

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts.find(p => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="relative bg-white min-h-screen">
            {/* Back Button */}
            <div className="fixed top-6 left-4 sm:left-6 lg:left-8 z-50">
                <Link
                    href="/blogs"
                    className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full text-gray-900 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md group"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    <span className="text-sm font-light">Back to Blogs</span>
                </Link>
            </div>

            {/* Hero Image */}
            <div className="relative w-full h-[50vh] sm:h-[60vh] bg-gray-900">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-16 pb-8 sm:pb-12">
                    <div className="max-w-4xl mx-auto">
                        <span className="inline-block bg-[#8B6F47] text-white text-xs sm:text-sm font-medium px-3 py-1.5 rounded-full mb-4">
                            {post.category}
                        </span>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight mb-4">
                            {post.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Content */}
            <article className="px-4 sm:px-6 lg:px-16 py-12 sm:py-16">
                <div className="max-w-4xl mx-auto">

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <div>
                                <span className="font-medium text-gray-900">{post.author.name}</span>
                                <span className="text-gray-500"> • {post.author.role}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    {/* Blog Content */}
                    <div
                        className="prose prose-lg max-w-none
              prose-headings:font-light prose-headings:text-gray-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-gray-900 prose-strong:font-medium
              prose-a:text-[#8B6F47] prose-a:no-underline hover:prose-a:underline"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* Author Bio */}
                    <div className="mt-16 pt-8 border-t border-gray-200">
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8B6F47] to-[#6F5838] flex items-center justify-center text-white text-xl font-medium">
                                {post.author.name.charAt(0)}
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-gray-900 mb-1">{post.author.name}</h3>
                                <p className="text-gray-600 mb-2">{post.author.role}</p>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    A passionate expert in interior design, bringing years of experience and creativity to every project.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            {/* Footer */}
            <Footer />
        </div>
    );
}
