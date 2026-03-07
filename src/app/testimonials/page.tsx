"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Quote as QuoteIcon, Star } from "lucide-react";
import logo from "../../assets/images/LOGO 01.png";
import Footer from "../../components/Footer";

// ---- FULL TESTIMONIALS DATA ----
const allTestimonials = [
    {
        id: 1,
        quote:
            "This interior design studio transformed our home into a masterpiece. The attention to detail and creativity exceeded all expectations. Every corner of our house now tells a story.",
        author: "Sarah Johnson",
        role: "Homeowner",
        project: "Sanur House",
        location: "San Francisco, CA",
        projectImage:
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
        authorImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
        rating: 5,
    },
    {
        id: 2,
        quote:
            "Working with Onamkulam Interiors was an incredible experience. They understood our vision perfectly and brought it to life beautifully. Our office space has never felt more inspiring.",
        author: "Michael Chen",
        role: "Business Owner",
        project: "Modern Loft",
        location: "New York, NY",
        projectImage:
            "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
        authorImage: null,
        rating: 5,
    },
    {
        id: 3,
        quote:
            "The team's professionalism and innovative approach to design made our renovation process smooth and enjoyable. They turned a dated space into something truly remarkable.",
        author: "Emily Rodriguez",
        role: "Architect",
        project: "Urban Retreat",
        location: "Los Angeles, CA",
        projectImage:
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
        rating: 5,
    },
    {
        id: 4,
        quote:
            "From the initial consultation to the final walkthrough, the entire experience was seamless. They truly listen and deliver beyond what you imagine. Our villa is now a magazine-worthy home.",
        author: "Priya Nair",
        role: "Homeowner",
        project: "Coastal Villa",
        location: "Kerala, India",
        projectImage:
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
        authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
        rating: 5,
    },
    {
        id: 5,
        quote:
            "Exceptional craftsmanship and a keen eye for aesthetics. The team took our brief and elevated it into something extraordinary. I couldn't be happier with the results.",
        author: "James Whitfield",
        role: "Property Developer",
        project: "The Whitfield Penthouse",
        location: "Dubai, UAE",
        projectImage:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
        authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
        rating: 5,
    },
    {
        id: 6,
        quote:
            "They transformed our restaurant into an inviting, elegant space that our customers constantly compliment. The design perfectly captures our brand identity and ambiance.",
        author: "Aarav Menon",
        role: "Restaurant Owner",
        project: "The Spice Garden",
        location: "Kochi, India",
        projectImage:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
        authorImage: null,
        rating: 5,
    },
    {
        id: 7,
        quote:
            "The bespoke furniture and custom joinery they designed for our living room is simply stunning. Every piece fits perfectly and the quality is outstanding. True artistry at work.",
        author: "Anjali Sharma",
        role: "Interior Enthusiast",
        project: "Heritage Home",
        location: "Bangalore, India",
        projectImage:
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
        authorImage: null,
        rating: 5,
    },
    {
        id: 8,
        quote:
            "Our new office radiates professionalism and creativity. Our team productivity has improved noticeably since the redesign. Onamkulam Interiors truly understands how spaces affect people.",
        author: "David Park",
        role: "Tech Startup CEO",
        project: "Innovation Hub",
        location: "Singapore",
        projectImage:
            "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
        authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
        rating: 5,
    },
    {
        id: 9,
        quote:
            "The master bedroom transformation was breathtaking. They created a serene sanctuary that feels like a luxury hotel suite every single day. Absolutely worth every penny.",
        author: "Fatima Al-Rashid",
        role: "Homeowner",
        project: "Desert Oasis",
        location: "Riyadh, Saudi Arabia",
        projectImage:
            "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=600&fit=crop",
        authorImage: null,
        rating: 5,
    },
];

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
    </div>
);

const TestimonialCard = ({
    testimonial,
    index,
}: {
    testimonial: (typeof allTestimonials)[0];
    index: number;
}) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div
            className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-gray-100"
            style={{
                animationDelay: `${index * 80}ms`,
            }}
        >
            {/* Project Image */}
            <div className="relative h-52 overflow-hidden">
                <div
                    className={`absolute inset-0 bg-gray-200 transition-opacity duration-500 ${imageLoaded ? "opacity-0" : "opacity-100"
                        }`}
                />
                <img
                    src={testimonial.projectImage}
                    alt={testimonial.project}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${imageLoaded ? "opacity-100" : "opacity-0"
                        }`}
                    onLoad={() => setImageLoaded(true)}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Project tag */}
                <div className="absolute bottom-3 left-4">
                    <span className="text-white font-semibold text-sm tracking-wide">
                        {testimonial.project}
                    </span>
                    <p className="text-white/70 text-xs">{testimonial.location}</p>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-6 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                    <StarRating rating={testimonial.rating} />
                    <QuoteIcon className="w-6 h-6 text-gray-200 flex-shrink-0" />
                </div>

                <p className="text-gray-700 text-sm leading-relaxed italic line-clamp-4">
                    &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="pt-2 border-t border-gray-100 flex items-center gap-3">
                    {/* Avatar Component */}
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 border border-black/5 flex items-center justify-center">
                        {testimonial.authorImage ? (
                            <img
                                src={testimonial.authorImage}
                                alt={testimonial.author}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <span className="text-gray-500 font-semibold text-xs tracking-wider">
                                {testimonial.author
                                    .split(" ")
                                    .map((n: string) => n[0])
                                    .join("")
                                    .toUpperCase()
                                    .slice(0, 2)}
                            </span>
                        )}
                    </div>

                    <div>
                        <p className="font-semibold text-gray-900 text-sm">
                            {testimonial.author}
                        </p>
                        <p className="text-gray-500 text-xs mt-0.5">{testimonial.role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function TestimonialsPage() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(t);
    }, []);

    return (
        <div className="min-h-screen bg-[#f9f8f6]">
            {/* ---- TOP NAVBAR ---- */}
            <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                            <ArrowLeft className="w-4 h-4 text-gray-700" />
                        </div>
                        <span className="text-gray-500 text-sm font-medium hidden sm:block">
                            Back to Home
                        </span>
                    </Link>

                    <Link href="/">
                        <img
                            src={logo.src}
                            alt="Onamkulam Interiors"
                            className="h-8 w-auto object-contain"
                        />
                    </Link>

                    <Link
                        href="/"
                        className="text-sm font-medium text-gray-900 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors hidden sm:block"
                    >
                        Begin Your Story
                    </Link>
                    <div className="sm:hidden w-8" />
                </div>
            </nav>

            {/* ---- HERO / HEADER ---- */}
            <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
                <div
                    className={`max-w-4xl mx-auto text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                >
                    <p className="text-xs tracking-[0.3em] uppercase text-gray-400 font-medium mb-4">
                        Client Stories
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                        What Our Clients
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500">
                            Say About Us
                        </span>
                    </h1>
                    <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
                        Real stories from homeowners, business owners, and architects who
                        trusted us to transform their spaces into something extraordinary.
                    </p>

                    {/* Stats bar */}
                    <div className="mt-10 flex flex-wrap justify-center gap-8 sm:gap-16">
                        {[
                            { value: "500+", label: "Projects Delivered" },
                            { value: "98%", label: "Client Satisfaction" },
                            { value: "12+", label: "Years of Excellence" },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---- DECORATIVE DIVIDER ---- */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
            </div>

            {/* ---- TESTIMONIALS GRID ---- */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div
                    className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                        }`}
                >
                    {allTestimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            index={index}
                        />
                    ))}
                </div>

                {/* ---- FEATURED QUOTE ---- */}
                <div className="mt-16 bg-black rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                    {/* Background pattern */}
                    <div
                        className="absolute inset-0 opacity-5"
                        style={{
                            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                            backgroundSize: "32px 32px",
                        }}
                    />
                    <div className="relative z-10 max-w-3xl mx-auto text-center">
                        <QuoteIcon className="w-12 h-12 text-yellow-400 mx-auto mb-6 opacity-80" />
                        <p className="text-white text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed italic mb-8">
                            &ldquo;We don&apos;t just design spaces — we craft experiences
                            that speak to the soul of every family and business we work
                            with.&rdquo;
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <div className="h-px w-12 bg-white/30" />
                            <div>
                                <p className="text-white font-semibold">Onamkulam Interiors</p>
                                <p className="text-gray-400 text-sm">Our Design Philosophy</p>
                            </div>
                            <div className="h-px w-12 bg-white/30" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ---- FOOTER ---- */}
            <Footer />
        </div>
    );
}
