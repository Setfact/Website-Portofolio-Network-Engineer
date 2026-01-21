"use client";

import { motion } from "framer-motion";
import { Briefcase, ExternalLink, Calendar, MapPin } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";

const experiences = [
    {
        company: "SUA CervoSys",
        role: "Network and System Administrator",
        location: "Bogor, Jawa Tengah",
        period: "September 2024 – Juni 2025",
        type: "Full-time",
        description: [
            "Membangun infrastruktur data center perusahaan dari awal bersama tim IT",
            "Mendesain dan membangun infrastruktur jaringan menggunakan perangkat MikroTik (CCR1009, RB3011) dan Cisco (Catalyst 2960-48TC-L, WS-C3850-48P-E)",
            "Core Infrastructure Deployment: Merancang dan membangun infrastruktur jaringan enterprise dari nol",
            "Advanced Layer 2/3 Switching: Mengimplementasikan topologi switching kompleks dengan VLAN Management, VTP, EtherChannel (L3), serta optimasi port menggunakan Port Fast dan SVI",
            "Network Security Enforcement: Memperkuat keamanan akses port dengan Port Security dan menerapkan aturan Firewall ketat untuk membatasi akses client ke IP VLAN utama",
            "Routing & Network Services: Mengelola layanan jaringan esensial termasuk Inter-VLAN Routing, DHCP, NTP Server, Load Balancing, NAT, serta manajemen bandwidth melalui QoS",
            "Traffic & Infrastructure Monitoring: Melakukan pengawasan trafik dan performa perangkat secara real-time menggunakan The Dude, Prometheus, dan Grafana",
            "Mengelola dan melakukan deployment aplikasi yang di-containerized menggunakan Docker, dengan orchestration dan hosting melalui CloudPanel",
            "Mengonfigurasi sistem monitoring dan alerting menggunakan Prometheus dan Grafana untuk memastikan keandalan layanan dan respons insiden secara proaktif",
            "Mengamankan infrastruktur server dengan menerapkan aturan firewall dan network policy menggunakan iptables dan UFW",
        ],
        technologies: ["MikroTik", "Cisco", "Docker", "Prometheus", "Grafana", "Linux"],
    },
    {
        company: "PT Citraweb Solusi Teknologi",
        role: "Intern - Technical Support",
        location: "Sleman, Yogyakarta",
        period: "Juni 2023 – Desember 2023",
        type: "Internship",
        description: [
            "Melakukan research and development terkait solusi jaringan dan pengembangan perangkat wireless",
            "Membantu dalam perakitan router, server, dan hardware pendukung lainnya, serta memastikan semua perangkat berfungsi dengan baik",
            "Mendukung proses impor data perangkat Mikrotik, Mikrobits, Ruijie, Teltonika, Cambium, dan RF Elements, termasuk pengecekan teknis awal",
            "Menjawab pertanyaan pelanggan serta memberikan konsultasi teknis, baik secara langsung, melalui telepon, email, website, maupun media sosial",
            "Berpartisipasi dalam pengembangan jaringan di kampus Universitas Nahdlatul Ulama Yogyakarta. Seperti perakitan rackmon, konfigurasi vlan pada perangkat switch ruijie dan konfigurasi accesspoint ruijie",
            "Menjadi panitia pada kegiatan Olimpiade Jaringan Mikrotik Indonesia 2023",
            "Menulis artikel teknis tentang: Mikrotik WiFi 6 Konfigurasi dasar WiFiWave 2 Konfigurasi OWE Authentication",
        ],
        technologies: ["MikroTik", "Ruijie", "Teltonika", "Cambium", "RF Elements"],
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 md:py-32 relative">
            <div className="container mx-auto px-4 md:px-6">
                <SectionTitle
                    title="Work Experience"
                    subtitle="Pengalaman profesional saya dalam membangun dan mengelola infrastruktur jaringan"
                    icon={Briefcase}
                />

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass rounded-xl overflow-hidden card-hover"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-slate-700/50">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                            <span
                                                className={`text-xs px-2 py-1 rounded-full ${exp.type === "Full-time"
                                                        ? "bg-green-500/20 text-green-400"
                                                        : "bg-blue-500/20 text-blue-400"
                                                    }`}
                                            >
                                                {exp.type}
                                            </span>
                                        </div>
                                        <p className="text-cyan-400 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm text-slate-400">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            {exp.location}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {exp.period}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <ul className="space-y-3 mb-6">
                                    {exp.description.slice(0, 5).map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                    {exp.description.length > 5 && (
                                        <li className="text-slate-500 text-sm pl-4">
                                            + {exp.description.length - 5} more responsibilities...
                                        </li>
                                    )}
                                </ul>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs rounded-full bg-slate-800 text-slate-300 border border-slate-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Projects Note */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <div className="glass inline-flex items-center gap-3 px-6 py-3 rounded-full">
                        <ExternalLink className="w-5 h-5 text-cyan-400" />
                        <span className="text-slate-300">
                            Ingin melihat proyek detail?{" "}
                            <a href="#contact" className="text-cyan-400 hover:underline">
                                Hubungi saya
                            </a>
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
