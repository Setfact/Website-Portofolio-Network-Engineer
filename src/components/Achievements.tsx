"use client";

import { motion } from "framer-motion";
import { Trophy, Medal, Award, Star, Image as ImageIcon } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";

const achievements = [
    {
        title: "Medallion for Excellence (MoE)",
        event: "LKS Nasional 2024",
        category: "IT Network System Administration",
        type: "medallion",
        highlight: true,
    },
    {
        title: "Top 6 Finalist",
        event: "National ITNSA ITECHNOCUP 2025",
        category: "IT Network Systems Administration",
        type: "finalist",
    },
    {
        title: "Top 5 Finalist",
        event: "National Networking Competition",
        category: "Networking",
        type: "finalist",
    },
    {
        title: "1st Place",
        event: "LKS Provinsi Sulawesi Selatan",
        category: "IT Network System Administration",
        type: "gold",
    },
    {
        title: "Bronze Medalist",
        event: "APJC NetAcad Riders Competition 2024",
        category: "Round 1",
        type: "bronze",
    },
    {
        title: "2nd Place",
        event: "Duta Pelajar Sulawesi Selatan",
        category: "Tahun 2024",
        type: "silver",
    },
    {
        title: "1st Place",
        event: "Duta Pelajar Kabupaten Bulukumba",
        category: "Tahun 2023",
        type: "gold",
    },
    {
        title: "1st Place",
        event: "Duta Genre Kabupaten Bulukumba",
        category: "Tahun 2022",
        type: "gold",
    },
];

const certifications = [
    { name: "MikroTik Certified Network Associate (MTCNA)", issuer: "MikroTik", image: "/certificates/mtcna.png" },
    { name: "MikroTik Certified Routing Engineer (MTCRE)", issuer: "MikroTik", image: "/certificates/mtcre.png" },
    { name: "CCNAv7: Introduction to Networks", issuer: "Cisco", image: "/certificates/ccna-itn.png" },
    { name: "CCNA Switching Routing and Wireless Essentials", issuer: "Cisco", image: "/certificates/ccna-srwe.png" },
    { name: "CCNA Enterprise Networking, Security, and Automation", issuer: "Cisco", image: "/certificates/ccna-ensa.png" },
    { name: "Cisco Cyber Security Essentials", issuer: "Cisco", image: "/certificates/cybersecurity-essentials.png" },
    { name: "Cisco Network Security", issuer: "Cisco", image: "/certificates/cisco-network-security.png" },
    { name: "Cisco CCNA 200-301 (Aguna Course)", issuer: "Aguna", image: "/certificates/ccna-200-301-aguna.png" },
    { name: "Mastering Ansible (Aguna Course)", issuer: "Aguna", image: "/certificates/ansible-automation.png" },
    { name: "Debian & Ubuntu Server Administration (Aguna Course)", issuer: "Aguna", image: "/certificates/debian-ubuntu-admin.png" },
    { name: "Ruijie Certified Network Associate Routing & Switching", issuer: "Ruijie", image: "/certificates/ruijie-rcna-rs.png" },
    { name: "Ruijie Certified Network Associate Wireless Local Area Network", issuer: "Ruijie", image: "/certificates/ruijie-rcna-wlan.png" },
    { name: "Linux System Administration (ADINUSA)", issuer: "ADINUSA", image: "/certificates/linux-sysadmin.png" },
    { name: "Linux On IBM LinuxONE", issuer: "IBM", image: "/certificates/ibm-linuxone.png" },
];

const getTypeIcon = (type: string) => {
    switch (type) {
        case "medallion":
            return <Medal className="w-8 h-8 text-yellow-400" />;
        case "gold":
            return <Trophy className="w-6 h-6 text-yellow-400" />;
        case "silver":
            return <Trophy className="w-6 h-6 text-slate-300" />;
        case "bronze":
            return <Trophy className="w-6 h-6 text-amber-600" />;
        case "finalist":
            return <Star className="w-6 h-6 text-cyan-400" />;
        default:
            return <Award className="w-6 h-6 text-cyan-400" />;
    }
};

export default function Achievements() {
    return (
        <section id="achievements" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 network-grid opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <SectionTitle
                    title="Achievements"
                    subtitle="Prestasi dan penghargaan yang telah saya raih dalam perjalanan karir"
                    icon={Trophy}
                />

                {/* Main Achievement - Medallion for Excellence */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="relative max-w-3xl mx-auto">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 via-amber-500/20 to-yellow-500/20 rounded-2xl blur-xl animate-pulse-glow" />

                        <div className="relative glass rounded-2xl p-8 border border-yellow-500/30 hover:border-yellow-500/50 transition-colors">
                            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                                {/* Medal Icon */}
                                <div className="relative">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 flex items-center justify-center animate-network-pulse">
                                        <Medal className="w-12 h-12 text-white trophy-glow" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-sm">
                                        ★
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="text-sm text-yellow-400 font-mono mb-2">
                                        🏆 HIGHLIGHT ACHIEVEMENT
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                                        Medallion for Excellence
                                    </h3>
                                    <p className="text-lg text-slate-300 mb-1">
                                        LKS (Lomba Kompetensi Siswa) Nasional 2024
                                    </p>
                                    <p className="text-cyan-400">
                                        Bidang: IT Network System Administration
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Other Achievements Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                    {achievements
                        .filter((a) => !a.highlight)
                        .map((achievement, index) => (
                            <motion.div
                                key={achievement.title + achievement.event}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="glass rounded-xl p-5 card-hover group"
                            >
                                <div className="flex items-start gap-3">
                                    <div
                                        className={`p-2 rounded-lg ${achievement.type === "gold"
                                            ? "bg-yellow-500/20"
                                            : achievement.type === "silver"
                                                ? "bg-slate-400/20"
                                                : achievement.type === "bronze"
                                                    ? "bg-amber-600/20"
                                                    : "bg-cyan-500/20"
                                            }`}
                                    >
                                        {getTypeIcon(achievement.type)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors">
                                            {achievement.title}
                                        </h4>
                                        <p className="text-sm text-slate-400 mt-1">
                                            {achievement.event}
                                        </p>
                                        <p className="text-xs text-slate-500 mt-0.5">
                                            {achievement.category}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                </div>

                {/* Certifications */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold text-center text-white mb-8 flex items-center justify-center gap-3">
                        <Award className="w-6 h-6 text-cyan-400" />
                        Certifications
                    </h3>

                    {/* Certificate Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={cert.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.03 }}
                                viewport={{ once: true }}
                                className="glass rounded-xl overflow-hidden card-hover group flex flex-col h-full"
                            >
                                {/* Certificate Image */}
                                <div className="relative aspect-[4/3] bg-slate-900 group-hover:bg-cyan-500/5 transition-colors overflow-hidden">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    {/* using img for simplicity with dynamic local paths if needed, but Image is better. 
                                        using Image requires Import. I will restart block to include import if I select everything.
                                        Wait, I can just use img to be safe or Image with unoptimized if needed. 
                                        Let's use Image but need import. 
                                        I'll stick to img for now to match the Navbar style I did earlier, or add import manually.
                                        Actually, let's use standard img tag as it's easier to drop in without layout shift issues if configured with object-cover
                                     */ }
                                    <div className="w-full h-full p-2">
                                        <img
                                            src={cert.image}
                                            alt={cert.name}
                                            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>

                                {/* Certificate Info */}
                                <div className="p-4 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h4 className="font-medium text-sm text-white group-hover:text-cyan-400 transition-colors line-clamp-2" title={cert.name}>
                                            {cert.name}
                                        </h4>
                                        <p className="text-xs text-slate-500 mt-1">
                                            Issued by {cert.issuer}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
