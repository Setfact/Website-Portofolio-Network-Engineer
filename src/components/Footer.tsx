"use client";

import { motion } from "framer-motion";
import { Network, Heart, ArrowUp } from "lucide-react";

const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative py-12 border-t border-slate-800">
            {/* Background */}
            <div className="absolute inset-0 network-grid opacity-10" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo & Copyright */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <a href="#home" className="flex items-center gap-2 group">
                            <div className="relative w-8 h-8 rounded-full overflow-hidden group-hover:animate-pulse-glow transition-all ring-2 ring-cyan-500/20">
                                <img src="/phinisi-logo-v2.png" alt="Phinisi Network Logo" className="w-full h-full object-cover" />
                            </div>
                            <span className="text-xl font-bold">
                                <span className="text-white">Phinisi</span>
                                <span className="text-cyan-400"> Network</span>
                            </span>
                        </a>
                        <p className="text-sm text-slate-500 text-center md:text-left">
                            © {new Date().getFullYear()} Phinisi Network. All rights reserved.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Back to Top */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 glass rounded-full hover:border-cyan-500/30 transition-colors group"
                        aria-label="Back to top"
                    >
                        <ArrowUp className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                    </motion.button>
                </div>

                {/* Made with love */}
                <div className="mt-8 pt-8 border-t border-slate-800/50 text-center">
                    <p className="text-sm text-slate-500 flex items-center justify-center gap-1">
                        Made with{" "}
                        <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />{" "}
                        using Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
