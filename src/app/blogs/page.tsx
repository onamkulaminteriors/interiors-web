"use client";

import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BlogsPage() {
    return (
        <div className="relative bg-white">
            {/* Back Button */}
            <div className="fixed top-6 left-4 sm:left-6 lg:left-8 z-50">
                <Link
                    href="/"
                    className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full text-gray-900 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md group"
                >
                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    <span className="text-sm font-light">Back to Home</span>
                </Link>
            </div>

            {/* Main Content */}
            <main className="pt-4">
                <BlogSection />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
