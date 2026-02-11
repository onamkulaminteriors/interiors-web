"use client";

import Footer from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Blog post data (same as in BlogSection.tsx)
const blogPosts = [
    {
        id: '01',
        slug: 'minimalist-living-spaces',
        title: 'The Art of Minimalist Living Spaces',
        excerpt: 'Discover how less can truly be more when it comes to creating serene, functional living environments that nurture the soul.',
        category: 'Design Philosophy',
        date: 'Feb 8, 2026',
        readTime: '5 min read',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&h=800&fit=crop',
        author: {
            name: 'Sarah Mitchell',
            role: 'Lead Designer'
        },
        content: `
      <p>In a world filled with constant stimulation and endless possessions, the art of minimalist living has emerged as a sanctuary for those seeking peace, clarity, and intentionality in their homes. But minimalism isn't just about having less—it's about making room for more of what truly matters.</p>

      <h2>The Philosophy Behind Minimalist Design</h2>
      <p>Minimalist design is rooted in the Japanese concept of "Ma"—the beauty of empty space. It's about creating breathing room in your environment, allowing each element to shine and serve a purpose. When we remove the excess, we create space not just physically, but mentally and emotionally.</p>

      <h2>Key Principles of Minimalist Living Spaces</h2>
      <p><strong>1. Quality Over Quantity</strong><br/>Instead of filling rooms with numerous items, invest in fewer, high-quality pieces that bring joy and function. A well-crafted chair, a beautiful lamp, or a carefully chosen artwork can transform a space more effectively than a room full of mediocre furnishings.</p>

      <p><strong>2. Intentional Color Palettes</strong><br/>Minimalist spaces often feature neutral color schemes—whites, beiges, grays—that create a calm, cohesive atmosphere. These palettes aren't boring; they serve as a backdrop that highlights architectural features and chosen accent pieces.</p>

      <p><strong>3. Natural Light and Open Spaces</strong><br/>Maximizing natural light is essential in minimalist design. Large windows, sheer curtains, and strategic mirror placement can make spaces feel larger and more connected to nature.</p>

      <h2>Creating Your Minimalist Sanctuary</h2>
      <p>Start small. You don't need to overhaul your entire home overnight. Begin with one room or even one corner. Ask yourself: Does this item serve a purpose or bring me joy? If the answer is no, it's time to let it go.</p>

      <p>Remember, minimalism isn't about deprivation—it's about liberation. It's about creating a home that supports your lifestyle, reduces stress, and allows you to focus on experiences rather than possessions.</p>
    `
    },
    {
        id: '02',
        slug: 'sustainable-materials',
        title: 'Sustainable Materials in Modern Interior Design',
        excerpt: 'Exploring eco-friendly choices that don\'t compromise on style or luxury in contemporary home design.',
        category: 'Sustainability',
        date: 'Feb 5, 2026',
        readTime: '7 min read',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
        author: {
            name: 'Michael Chen',
            role: 'Sustainability Expert'
        },
        content: `
      <p>The future of interior design is green. As awareness of environmental impact grows, homeowners and designers are increasingly seeking materials that are both beautiful and sustainable. The good news? You no longer have to choose between style and sustainability.</p>

      <h2>The Rise of Eco-Conscious Design</h2>
      <p>Sustainable interior design has evolved from a niche trend to a mainstream movement. Today's eco-friendly materials offer the same—if not better—aesthetic appeal as traditional options, while significantly reducing environmental impact.</p>

      <h2>Top Sustainable Materials for Modern Homes</h2>
      <p><strong>Bamboo</strong><br/>Fast-growing and incredibly versatile, bamboo is a standout in sustainable design. From flooring to furniture to decorative elements, bamboo offers durability and a distinctive natural beauty.</p>

      <p><strong>Reclaimed Wood</strong><br/>Salvaged from old buildings, barns, or factories, reclaimed wood adds character and history to modern spaces while preventing new deforestation.</p>

      <p><strong>Cork</strong><br/>Harvested from cork oak trees without harming them, cork is renewable, biodegradable, and naturally antimicrobial—perfect for flooring and wall coverings.</p>

      <p><strong>Recycled Glass and Metal</strong><br/>These materials can be recycled indefinitely without loss of quality, making them excellent choices for countertops, tiles, and fixtures.</p>

      <h2>Making Sustainable Choices</h2>
      <p>When selecting materials, look for certifications like FSC (Forest Stewardship Council) for wood products, or Cradle to Cradle for overall sustainability. Consider the entire lifecycle: sourcing, production, transportation, and eventual disposal or recycling.</p>

      <p>Sustainable design is an investment in both your home and the planet—one that pays dividends in beauty, health, and peace of mind.</p>
    `
    },
    {
        id: '03',
        slug: 'color-psychology',
        title: 'Color Psychology in Home Interiors',
        excerpt: 'How the right color palette can transform mood, productivity, and overall well-being in your living spaces.',
        category: 'Color Theory',
        date: 'Feb 1, 2026',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&fit=crop',
        author: {
            name: 'Emma Rodriguez',
            role: 'Color Specialist'
        },
        content: `
      <p>Color is more than decoration—it's a powerful tool that influences our emotions, behaviors, and even physical responses. Understanding color psychology can transform your home from merely attractive to truly transformative.</p>

      <h2>The Science of Color</h2>
      <p>Studies have shown that different colors trigger distinct psychological and physiological responses. Warm colors like red and orange can increase heart rate and energy, while cool colors like blue and green promote calmness and concentration.</p>

      <h2>Color by Room</h2>
      <p><strong>Living Rooms: Warm Neutrals and Earth Tones</strong><br/>Create inviting, conversational spaces with beiges, taupes, and warm grays. These colors foster connection and comfort.</p>

      <p><strong>Bedrooms: Cool Blues and Soft Greens</strong><br/>Promote restful sleep with calming hues. Light blues reduce stress, while sage greens create a serene, nature-inspired atmosphere.</p>

      <p><strong>Home Offices: Energizing Yellows and Focused Blues</strong><br/>Yellow stimulates creativity and optimism, while blue enhances focus and productivity. Consider an accent wall or accessories in these shades.</p>

      <p><strong>Kitchens: Appetite-Stimulating Reds and Oranges</strong><br/>Warm colors in dining areas can increase appetite and encourage social interaction, making them perfect for family gathering spaces.</p>

      <h2>Creating Your Perfect Palette</h2>
      <p>Start with how you want to feel in each space. Consider natural light—rooms with abundant sunlight can handle darker or cooler colors, while dim spaces benefit from lighter, warmer tones.</p>

      <p>Remember the 60-30-10 rule: 60% dominant color, 30% secondary color, and 10% accent color. This creates visual balance and prevents overwhelm.</p>
    `
    },
    {
        id: '04',
        slug: 'smart-home-integration',
        title: 'Smart Home Integration for Luxury Living',
        excerpt: 'Seamlessly blending cutting-edge technology with elegant design for the modern smart home experience.',
        category: 'Technology',
        date: 'Jan 28, 2026',
        readTime: '8 min read',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop',
        author: {
            name: 'David Park',
            role: 'Tech Integration Specialist'
        },
        content: `
      <p>The modern luxury home is intelligent, intuitive, and invisible. Today's smart home technology has evolved beyond bulky gadgets and complex controls to become seamlessly integrated into elegant design.</p>

      <h2>The Invisible Smart Home</h2>
      <p>The best smart home technology is the kind you don't see. Built-in voice assistants, hidden charging stations, and discreet sensors create functionality without compromising aesthetics.</p>

      <h2>Essential Smart Home Features</h2>
      <p><strong>Lighting Control Systems</strong><br/>Programmable lighting adapts throughout the day, mimicking natural light patterns to support circadian rhythms and create perfect ambiance for any occasion.</p>

      <p><strong>Climate Management</strong><br/>Smart thermostats learn your preferences and adjust automatically, optimizing comfort while reducing energy consumption.</p>

      <p><strong>Integrated Audio</strong><br/>Whole-home audio systems with hidden speakers deliver exceptional sound quality without visible equipment cluttering your design.</p>

      <p><strong>Automated Window Treatments</strong><br/>Motorized shades and blinds adjust based on time of day, temperature, and privacy needs, all controlled from your phone or voice commands.</p>

      <h2>Design-Forward Integration</h2>
      <p>Work with designers who understand both technology and aesthetics. The goal is to enhance your lifestyle while maintaining the integrity of your interior design vision.</p>

      <p>Consider future-proofing by installing infrastructure like in-wall conduits and centralized wiring hubs, making updates and additions easier down the line.</p>
    `
    },
    {
        id: '05',
        slug: 'heritage-homes-renovation',
        title: 'Reviving Heritage Homes with Contemporary Flair',
        excerpt: 'The delicate balance of preserving historical charm while introducing modern comfort and functionality.',
        category: 'Renovation',
        date: 'Jan 25, 2026',
        readTime: '9 min read',
        image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&h=800&fit=crop',
        author: {
            name: 'Olivia Thompson',
            role: 'Heritage Specialist'
        },
        content: `
      <p>Heritage homes carry stories in their bones—intricate moldings, original hardwood floors, and architectural details that modern construction rarely replicates. Renovating these treasures requires respecting the past while embracing the future.</p>

      <h2>The Philosophy of Respectful Renovation</h2>
      <p>The key is balance. Preserve what makes the home special—original features, craftsmanship, architectural character—while upgrading systems, layout, and functionality for contemporary living.</p>

      <h2>What to Preserve</h2>
      <p><strong>Original Architectural Details</strong><br/>Crown moldings, ceiling medallions, original doors, and staircase balusters tell the home's story. Repair rather than replace whenever possible.</p>

      <p><strong>Historic Materials</strong><br/>Old-growth hardwood floors, original tile work, and vintage fixtures often surpass modern equivalents in quality and character.</p>

      <p><strong>Structural Elements</strong><br/>Exposed beams, brick walls, and other structural features can become stunning design focal points in a contemporary context.</p>

      <h2>Modern Updates</h2>
      <p><strong>Infrastructure</strong><br/>Upgrade electrical, plumbing, and HVAC systems to meet current codes and efficiency standards without compromising original character.</p>

      <p><strong>Open Floor Plans</strong><br/>Carefully remove non-structural walls to create modern flow while maintaining the home's essential character.</p>

      <p><strong>Contemporary Kitchens and Baths</strong><br/>These spaces can embrace modern design while complementing the home's historic aesthetic through thoughtful material and style choices.</p>

      <h2>The Art of Contrast</h2>
      <p>Don't be afraid of intentional contrast. A sleek, modern kitchen island can beautifully complement original hardwood floors and vintage lighting. The juxtaposition creates visual interest and honors both past and present.</p>
    `
    },
    {
        id: '06',
        slug: 'lighting-design',
        title: 'Lighting Design: The Invisible Architecture',
        excerpt: 'Understanding how strategic lighting can sculpt spaces, create ambiance, and highlight architectural features.',
        category: 'Lighting',
        date: 'Jan 20, 2026',
        readTime: '6 min read',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop',
        author: {
            name: 'James Wilson',
            role: 'Lighting Designer'
        },
        content: `
      <p>Lighting is often the most underrated element of interior design, yet it has the power to completely transform a space. Good lighting design is invisible—you feel its effects without necessarily noticing the source.</p>

      <h2>The Three Layers of Lighting</h2>
      <p><strong>Ambient Lighting</strong><br/>The foundation layer provides overall illumination. Think recessed ceiling lights, chandeliers, or wall-mounted fixtures that fill the room with general light.</p>

      <p><strong>Task Lighting</strong><br/>Focused illumination for specific activities—reading lights, under-cabinet kitchen lighting, or desk lamps. Task lighting should be bright enough for the activity without creating glare.</p>

      <p><strong>Accent Lighting</strong><br/>Creates drama and highlights architectural features, artwork, or decorative elements. Track lighting, picture lights, and uplighting fall into this category.</p>

      <h2>The Psychology of Light</h2>
      <p>Color temperature dramatically affects mood. Warm light (2700-3000K) creates cozy, intimate atmospheres perfect for living rooms and bedrooms. Cool light (4000-5000K) promotes alertness and focus, ideal for offices and kitchens.</p>

      <h2>Natural Light Integration</h2>
      <p>Always start by maximizing natural light. Position furniture to take advantage of windows, use mirrors to reflect and multiply daylight, and choose window treatments that offer privacy without blocking light unnecessarily.</p>

      <h2>Layering for Flexibility</h2>
      <p>The best lighting plans offer flexibility. Use dimmers, multiple switches, and smart controls to adjust layers based on time of day, mood, and activity. A well-lit room should never rely on a single overhead fixture.</p>

      <h2>Common Mistakes to Avoid</h2>
      <p>Don't rely solely on overhead lighting—it creates harsh shadows and feels institutional. Avoid placing all lights at the same height; vary elevations for visual interest. And never forget that the fixture itself is part of the design—choose lights that complement your aesthetic even when turned off.</p>
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
