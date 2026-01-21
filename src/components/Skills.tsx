"use client";

import { motion } from "framer-motion";
import { Cpu, Check } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";

const skillCategories = [
    {
        title: "Network Engineering",
        subtitle: "Cisco & MikroTik",
        color: "cyan",
        skills: [
            "Routing Protocols (OSPF, EIGRP, BGP)",
            "BGP Attributes & Policy",
            "MikroTik Advanced Routing",
            "Redundancy & Traffic Control",
            "Tunneling & VPN (DMVPN, GRE, L2TP, OVPN)",
            "Network Security & Port Security",
            "VLAN Management & EtherChannel",
            "Load Balancing & Failover",
            "QoS & Bandwidth Management",
        ],
    },
    {
        title: "Systems & Server",
        subtitle: "Linux & Windows",
        color: "blue",
        skills: [
            "Linux Administration (IPTables, UFW, WireGuard)",
            "Windows Server (AD, GPO, CA)",
            "Web & Proxy Services (Nginx, Apache, HAProxy)",
            "Network Services (DNS, DHCP, Mail, LDAP)",
            "High Availability (Keepalived)",
            "Master/Slave DNS Configuration",
            "Certificate Authority Management",
        ],
    },
    {
        title: "Automation & Infrastructure",
        subtitle: "Modern DevOps",
        color: "purple",
        skills: [
            "Docker & Docker Compose",
            "Prometheus & Grafana Monitoring",
            "Network Automation (Ansible)",
            "CloudPanel & Hosting",
            "The Dude Network Monitoring",
            "Infrastructure as Code",
        ],
    },
];

const techLogos = [
    { name: "Cisco", color: "#049FD9" },
    { name: "MikroTik", color: "#293239" },
    { name: "Linux", color: "#FCC624" },
    { name: "Docker", color: "#2496ED" },
    { name: "Nginx", color: "#009639" },
    { name: "Grafana", color: "#F46800" },
    { name: "Prometheus", color: "#E6522C" },
    { name: "Ansible", color: "#EE0000" },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20 md:py-32 relative">
            {/* Background decoration */}
            <div className="absolute inset-0 network-grid opacity-30" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <SectionTitle
                    title="Technical Skills"
                    subtitle="Keahlian teknis yang saya kuasai dalam bidang Network Engineering dan System Administration"
                    icon={Cpu}
                />

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="glass rounded-xl p-6 card-hover"
                        >
                            <div className="mb-6">
                                <h3 className={`text-xl font-bold mb-1 ${category.color === "cyan"
                                        ? "text-cyan-400"
                                        : category.color === "blue"
                                            ? "text-blue-400"
                                            : "text-purple-400"
                                    }`}>
                                    {category.title}
                                </h3>
                                <p className="text-sm text-slate-500">{category.subtitle}</p>
                            </div>

                            <ul className="space-y-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.li
                                        key={skill}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                                        }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-3 text-slate-300 text-sm"
                                    >
                                        <div className={`mt-0.5 p-1 rounded ${category.color === "cyan"
                                                ? "bg-cyan-500/20"
                                                : category.color === "blue"
                                                    ? "bg-blue-500/20"
                                                    : "bg-purple-500/20"
                                            }`}>
                                            <Check className={`w-3 h-3 ${category.color === "cyan"
                                                    ? "text-cyan-400"
                                                    : category.color === "blue"
                                                        ? "text-blue-400"
                                                        : "text-purple-400"
                                                }`} />
                                        </div>
                                        {skill}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Logos */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h3 className="text-lg text-slate-400 mb-8">
                        Technologies I Work With
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {techLogos.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="glass px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer hover:border-cyan-500/30 transition-colors"
                            >
                                <div
                                    className="w-3 h-3 rounded-full"
                                    style={{ backgroundColor: tech.color }}
                                />
                                <span className="text-sm text-slate-300">{tech.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
