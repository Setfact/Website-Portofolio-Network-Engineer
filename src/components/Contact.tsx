"use client";

import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Github,
    Send,
    MessageCircle,
} from "lucide-react";
import SectionTitle from "./ui/SectionTitle";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "calvinum26@gmail.com",
        href: "mailto:calvinum26@gmail.com",
        color: "cyan",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+62 857 9288 1853",
        href: "tel:+6285792881853",
        color: "blue",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Sulawesi Selatan, Indonesia",
        href: "#",
        color: "purple",
    },
];

const socialLinks = [
    {
        icon: Linkedin,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/calvin-umboh",
        color: "#0A66C2",
    },
    {
        icon: Github,
        label: "GitHub",
        href: "https://github.com/calvinumboh",
        color: "#333",
    },
];

export default function Contact() {
    return (
        <section id="contact" className="py-20 md:py-32 relative">
            {/* Background */}
            <div className="absolute inset-0 network-grid opacity-20" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <SectionTitle
                    title="Get In Touch"
                    subtitle="Tertarik untuk berkolaborasi atau punya pertanyaan? Jangan ragu untuk menghubungi saya"
                    icon={MessageCircle}
                />

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Left - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">
                            Let&apos;s Connect
                        </h3>
                        <p className="text-slate-400 mb-8">
                            Saya selalu terbuka untuk diskusi mengenai proyek baru, peluang
                            kerja, atau sekadar berbagi pengetahuan seputar network
                            engineering.
                        </p>

                        {/* Contact Cards */}
                        <div className="space-y-4 mb-8">
                            {contactInfo.map((contact, index) => (
                                <motion.a
                                    key={contact.label}
                                    href={contact.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4 glass rounded-xl p-4 card-hover group"
                                >
                                    <div
                                        className={`p-3 rounded-lg ${contact.color === "cyan"
                                                ? "bg-cyan-500/20"
                                                : contact.color === "blue"
                                                    ? "bg-blue-500/20"
                                                    : "bg-purple-500/20"
                                            }`}
                                    >
                                        <contact.icon
                                            className={`w-5 h-5 ${contact.color === "cyan"
                                                    ? "text-cyan-400"
                                                    : contact.color === "blue"
                                                        ? "text-blue-400"
                                                        : "text-purple-400"
                                                }`}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500">{contact.label}</p>
                                        <p className="text-white group-hover:text-cyan-400 transition-colors">
                                            {contact.value}
                                        </p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    className="p-3 glass rounded-xl hover:border-cyan-500/30 transition-colors"
                                    title={social.label}
                                >
                                    <social.icon className="w-6 h-6 text-slate-400 hover:text-cyan-400 transition-colors" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="glass rounded-2xl p-8"
                    >
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm text-slate-400 mb-2"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your name"
                                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm text-slate-400 mb-2"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm text-slate-400 mb-2"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="What's this about?"
                                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm text-slate-400 mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="Tell me about your project or inquiry..."
                                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
