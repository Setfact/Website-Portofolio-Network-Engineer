"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Code2 } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";
import GlowingCard from "./ui/GlowingCard";

const stats = [
    { icon: Award, value: "6+", label: "Prestasi Nasional" },
    { icon: Briefcase, value: "2+", label: "Pengalaman Kerja" },
    { icon: Code2, value: "14+", label: "Sertifikasi" },
    { icon: GraduationCap, value: "3.59", label: "IPK Saat Ini" },
];

export default function About() {
    return (
        <section id="about" className="py-20 md:py-32 relative">
            <div className="container mx-auto px-4 md:px-6">
                <SectionTitle
                    title="About Me"
                    subtitle="Mengenal lebih dekat tentang perjalanan dan passion saya di dunia Network Engineering"
                />

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-6 text-slate-300">
                            <p className="text-lg leading-relaxed">
                                Saya adalah mahasiswa{" "}
                                <span className="text-cyan-400 font-semibold">
                                    Teknologi Rekayasa Komputer
                                </span>{" "}
                                di Sekolah Vokasi IPB University dengan rekam jejak prestasi nasional,
                                termasuk peraih{" "}
                                <span className="text-yellow-400 font-semibold">
                                    Medallion for Excellence di LKS Nasional 2024
                                </span>{" "}
                                bidang IT Network System Administration.
                            </p>

                            <p className="leading-relaxed">
                                Memiliki pengalaman praktis dalam membangun infrastruktur Network,
                                mengelola jaringan skala menengah hingga enterprise menggunakan
                                perangkat <span className="text-cyan-400">Cisco</span>,{" "}
                                <span className="text-cyan-400">MikroTik</span>, dan{" "}
                                <span className="text-cyan-400">Ruijie</span>.
                            </p>

                            <p className="leading-relaxed">
                                Dapat melakukan implementasi Network Automation, Docker, serta
                                sistem monitoring menggunakan{" "}
                                <span className="text-blue-400">Prometheus & Grafana</span>. Fokus
                                pada efisiensi infrastruktur, keamanan jaringan (Firewall/VPN), dan{" "}
                                <span className="text-purple-400">High Availability</span>.
                            </p>

                            {/* Education Timeline */}
                            <div className="mt-8 space-y-4">
                                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                                    Pendidikan
                                </h3>

                                <div className="relative pl-6 border-l-2 border-cyan-500/30 space-y-6">
                                    {/* IPB */}
                                    <div className="relative">
                                        <div className="absolute -left-[29px] w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900" />
                                        <div className="glass p-4 rounded-lg">
                                            <div className="flex justify-between items-start flex-wrap gap-2">
                                                <div>
                                                    <h4 className="font-semibold text-white">IPB University</h4>
                                                    <p className="text-sm text-slate-400">Teknologi Rekayasa Komputer</p>
                                                </div>
                                                <span className="text-xs text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded">
                                                    2024 - Sekarang
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-500 mt-2">IPK: 3.59 / 4.00</p>
                                        </div>
                                    </div>

                                    {/* SMK */}
                                    <div className="relative">
                                        <div className="absolute -left-[29px] w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900" />
                                        <div className="glass p-4 rounded-lg">
                                            <div className="flex justify-between items-start flex-wrap gap-2">
                                                <div>
                                                    <h4 className="font-semibold text-white">SMK Teknologi Informatika Bulukumba</h4>
                                                    <p className="text-sm text-slate-400">Teknik Komputer dan Jaringan</p>
                                                </div>
                                                <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                                                    2021 - 2024
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side - Stats */}
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, index) => (
                            <GlowingCard
                                key={stat.label}
                                delay={index * 0.1}
                                className="text-center"
                            >
                                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 mb-4">
                                    <stat.icon className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-slate-400">{stat.label}</div>
                            </GlowingCard>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
