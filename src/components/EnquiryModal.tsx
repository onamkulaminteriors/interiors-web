"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface EnquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        details: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    // Reset form when closed
    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setStep(1);
                setIsSuccess(false);
                setFormData({ name: "", email: "", phone: "", details: "" });
            }, 500);
        }
    }, [isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("/api/enquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSuccess(true);
            } else {
                // Handle error (optional: show toast)
                console.error("Submission failed");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const nextStep = () => {
        if (step === 1 && formData.name) setStep(2);
        else if (step === 2 && formData.email) setStep(3);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        ref={modalRef}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-lg bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors z-20"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Success State */}
                        {isSuccess ? (
                            <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                    className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6"
                                >
                                    <Check className="w-10 h-10 text-green-400" />
                                </motion.div>
                                <h3 className="text-2xl font-light text-white mb-2">Message Sent</h3>
                                <p className="text-white/60 mb-8">
                                    Thank you, {formData.name.split(" ")[0]}. We'll be in touch soon to discuss your vision.
                                </p>
                                <button
                                    onClick={onClose}
                                    className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            /* Form State */
                            <div className="p-8 sm:p-10">
                                <div className="mb-8">
                                    <h2 className="text-2xl sm:text-3xl font-light text-white mb-2">Let's Connect</h2>
                                    <p className="text-white/60 text-sm">Tell us about your dream space.</p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Progress Indicator */}
                                    <div className="flex gap-2 mb-6">
                                        {[1, 2, 3].map((s) => (
                                            <div
                                                key={s}
                                                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${step >= s ? "bg-[#8B6F47]" : "bg-white/10"
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    <div className="space-y-4">
                                        {/* Step 1: Name */}
                                        {step === 1 && (
                                            <motion.div
                                                initial={{ x: 20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                exit={{ x: -20, opacity: 0 }}
                                            >
                                                <label className="block text-xs uppercase tracking-wider text-white/50 mb-2">
                                                    Your Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="John Doe"
                                                    autoFocus
                                                    className="w-full bg-transparent border-b border-white/20 py-3 text-white text-lg placeholder-white/30 focus:outline-none focus:border-[#8B6F47] transition-colors"
                                                />
                                                <div className="mt-6 flex justify-end">
                                                    <button
                                                        type="button"
                                                        onClick={nextStep}
                                                        disabled={!formData.name}
                                                        className="flex items-center gap-2 text-white disabled:opacity-30 hover:text-[#8B6F47] transition-colors"
                                                    >
                                                        Next <ArrowRight className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* Step 2: Contact Info */}
                                        {step === 2 && (
                                            <motion.div
                                                initial={{ x: 20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                exit={{ x: -20, opacity: 0 }}
                                            >
                                                <div className="space-y-4">
                                                    <div>
                                                        <label className="block text-xs uppercase tracking-wider text-white/50 mb-2">
                                                            Email Address
                                                        </label>
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            placeholder="john@example.com"
                                                            autoFocus
                                                            className="w-full bg-transparent border-b border-white/20 py-3 text-white text-lg placeholder-white/30 focus:outline-none focus:border-[#8B6F47] transition-colors"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="block text-xs uppercase tracking-wider text-white/50 mb-2">
                                                            Phone Number (Optional)
                                                        </label>
                                                        <input
                                                            type="tel"
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            placeholder="+1 (555) 000-0000"
                                                            className="w-full bg-transparent border-b border-white/20 py-3 text-white text-lg placeholder-white/30 focus:outline-none focus:border-[#8B6F47] transition-colors"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mt-6 flex justify-between">
                                                    <button
                                                        type="button"
                                                        onClick={() => setStep(1)}
                                                        className="text-white/50 hover:text-white transition-colors text-sm"
                                                    >
                                                        Back
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={nextStep}
                                                        disabled={!formData.email}
                                                        className="flex items-center gap-2 text-white disabled:opacity-30 hover:text-[#8B6F47] transition-colors"
                                                    >
                                                        Next <ArrowRight className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}

                                        {/* Step 3: Details */}
                                        {step === 3 && (
                                            <motion.div
                                                initial={{ x: 20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                exit={{ x: -20, opacity: 0 }}
                                            >
                                                <label className="block text-xs uppercase tracking-wider text-white/50 mb-2">
                                                    Project Details (Optional)
                                                </label>
                                                <textarea
                                                    name="details"
                                                    value={formData.details}
                                                    onChange={handleChange}
                                                    placeholder="Tell us a bit about your project..."
                                                    rows={4}
                                                    autoFocus
                                                    className="w-full bg-transparent border border-white/20 rounded-lg p-4 text-white placeholder-white/30 focus:outline-none focus:border-[#8B6F47] transition-colors resize-none"
                                                />
                                                <div className="mt-6 flex justify-between items-center">
                                                    <button
                                                        type="button"
                                                        onClick={() => setStep(2)}
                                                        className="text-white/50 hover:text-white transition-colors text-sm"
                                                    >
                                                        Back
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                        className="px-6 py-3 bg-[#8B6F47] text-white font-medium rounded-full hover:bg-[#6F5838] transition-colors disabled:opacity-50 flex items-center gap-2"
                                                    >
                                                        {isSubmitting ? (
                                                            <>
                                                                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                                Sending...
                                                            </>
                                                        ) : (
                                                            "Send Enquiry"
                                                        )}
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </div>
                                </form>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
