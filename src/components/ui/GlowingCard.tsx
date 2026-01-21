"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlowingCardProps {
    children: ReactNode;
    className?: string;
    glowColor?: string;
    delay?: number;
}

export default function GlowingCard({
    children,
    className = "",
    glowColor = "cyan",
    delay = 0,
}: GlowingCardProps) {
    const glowStyles: Record<string, string> = {
        cyan: "hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]",
        blue: "hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
        purple: "hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]",
        gold: "hover:shadow-[0_0_30px_rgba(234,179,8,0.3)]",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className={`
        glass rounded-xl p-6 
        transition-all duration-300 
        card-hover
        ${glowStyles[glowColor] || glowStyles.cyan}
        ${className}
      `}
        >
            {children}
        </motion.div>
    );
}
