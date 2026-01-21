"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    icon?: LucideIcon;
    align?: "left" | "center";
}

export default function SectionTitle({
    title,
    subtitle,
    icon: Icon,
    align = "center",
}: SectionTitleProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
        >
            <div
                className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : "justify-start"
                    }`}
            >
                {Icon && (
                    <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                        <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                )}
                <h2 className="text-3xl md:text-4xl font-bold gradient-text">{title}</h2>
            </div>
            {subtitle && (
                <p className="text-slate-400 max-w-2xl mx-auto">{subtitle}</p>
            )}
            <div
                className={`mt-4 h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full ${align === "center" ? "mx-auto" : ""
                    }`}
            />
        </motion.div>
    );
}
