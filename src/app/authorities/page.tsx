'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    ArrowRight,
    CheckCircle,
    ChevronDown,
    ChevronUp,
    Landmark,
    ShieldCheck,
    Building2,
    Anchor,
    Route,
    Waypoints,
    Zap,
    Factory,
    Cpu,
    FileText,
    Palette,
    Award,
    Target,
    Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AUTHORITIES } from '@/lib/data';

const authorityIcons: Record<string, any> = {
    'dm': Landmark,
    'dcd': ShieldCheck,
    'dda': Building2,
    'trakhees': Anchor,
    'rta': Route,
    'rta-row': Waypoints,
    'dewa': Zap,
    'jafza': Factory,
    'dso': Cpu,
    'developer-noc': FileText,
    'fitout-approvals': Palette
};

const stats = [
    { value: '11+', label: 'Authorities Managed', icon: Building2 },
    { value: '100+', label: 'Projects Approved', icon: Award },
    { value: '10+', label: 'Years Experience', icon: Target },
    { value: '100%', label: 'Success Rate', icon: Activity },
];

export default function AuthoritiesPage() {
    const [expandedIds, setExpandedIds] = useState<string[]>([]);

    const toggleExpand = (id: string) => {
        setExpandedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    return (
        <div className="min-h-screen bg-[#f9fafb]">
            {/* Hero & Header Section */}
            <section className="relative pt-60 pb-44 overflow-hidden bg-navy">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/10 to-transparent pointer-events-none" />
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="section-tag mb-6 inline-block">Regulatory Intelligence</div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Dubai Authority <span className="gold-text">Approvals</span>
                        </h1>
                        <p className="text-white/60 max-w-3xl mx-auto leading-relaxed text-lg font-light italic">
                            "Navigating the complexity of Dubai's regulatory landscape with precision, speed, and absolute compliance."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Overlay */}
            <section className="relative -mt-16 z-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-white rounded-xl shadow-2xl shadow-navy/10 border border-gray-100 p-6 md:p-8 flex flex-wrap justify-center md:justify-between items-center gap-6">
                        {stats.map((s, idx) => (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                key={s.label}
                                className="flex flex-col items-center text-center px-4"
                            >
                                <div className="w-8 h-8 rounded-full bg-gold/5 flex items-center justify-center mb-2">
                                    <s.icon size={16} className="text-gold" />
                                </div>
                                <div className="text-2xl font-bold text-navy mb-0.5" style={{ fontFamily: 'Playfair Display, serif' }}>{s.value}</div>
                                <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400">{s.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content Section - DARK THEME */}
            <section className="py-24 relative bg-navy pt-40 -mt-24 overflow-hidden">
                {/* Subtle background flair */}
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[120px] -ml-48 pointer-events-none" />
                <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] -mr-64 pointer-events-none" />

                <div className="max-w-full lg:max-w-[1440px] mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                                Regulatory Partner <span className="gold-text">Network</span>
                            </h2>
                            <p className="text-white/40 max-w-xl mx-auto font-light leading-relaxed text-sm">
                                We maintain proactive relationships with all primary government bodies to facilitate expedited approvals for construction, fit-out, and technical works.
                            </p>
                            <div className="gold-line w-16 mx-auto mt-6 h-[1px] bg-gold/30" />
                        </motion.div>
                    </div>

                    <div className="space-y-4 max-w-full lg:max-w-7xl mx-auto">
                        {AUTHORITIES.map((a, idx) => {
                            const isExpanded = expandedIds.includes(a.id);
                            const IconComponent = authorityIcons[a.id] || Landmark;
                            return (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                                    key={a.id}
                                    id={a.id}
                                    className={`group rounded-xl border transition-all duration-500 overflow-hidden ${isExpanded ? 'bg-white/5 border-gold/30 shadow-2xl' : 'bg-[#0f1d33] border-white/5 hover:border-gold/20 hover:bg-[#152642]'}`}
                                >
                                    {/* Header Trigger */}
                                    <button
                                        onClick={() => toggleExpand(a.id)}
                                        className="w-full text-left p-4 lg:p-5 flex items-center justify-between gap-5 cursor-pointer"
                                    >
                                        <div className="flex items-center gap-5 lg:gap-8">
                                            <div
                                                className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${isExpanded ? 'bg-gold text-navy' : 'bg-white/5 text-white group-hover:bg-gold/10 group-hover:text-gold'}`}
                                            >
                                                <IconComponent size={24} strokeWidth={1.5} />
                                            </div>

                                            <div>
                                                <div className="flex items-center gap-2 mb-0.5">
                                                    <span className={`text-[9px] font-black tracking-widest uppercase transition-colors duration-300 ${isExpanded ? 'text-gold' : 'text-white/20 group-hover:text-gold/50'}`}>
                                                        {a.abbr}
                                                    </span>
                                                    <div className={`h-[1px] transition-all duration-500 ${isExpanded ? 'w-8 bg-gold' : 'w-4 bg-white/10 group-hover:w-8 group-hover:bg-gold/30'}`} />
                                                </div>
                                                <h2 className="text-xl lg:text-2xl font-bold text-white transition-colors duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>
                                                    {a.name}
                                                </h2>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <span className={`hidden md:block text-[9px] font-bold uppercase tracking-widest transition-all duration-500 ${isExpanded ? 'opacity-100 text-gold' : 'opacity-0 text-white/10 translate-x-1'}`}>
                                                Explorer
                                            </span>
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-500 ${isExpanded ? 'bg-gold border-gold text-navy rotate-180 shadow-lg' : 'bg-transparent border-white/10 text-white group-hover:border-gold group-hover:text-gold'}`}>
                                                <ChevronDown size={16} strokeWidth={2} />
                                            </div>
                                        </div>
                                    </button>

                                    {/* Collapsible Content */}
                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-5 lg:px-8 pb-8 pt-6 border-t border-white/5">
                                                    <div className="grid lg:grid-cols-12 gap-8">
                                                        {/* Left: Overview */}
                                                        <div className="lg:col-span-12 xl:col-span-5 space-y-6">
                                                            <div>
                                                                <div className="text-[9px] font-black uppercase tracking-widest text-gold mb-3">Authority Overview</div>
                                                                <div className="space-y-3">
                                                                    {a.overview.split('\n\n').map((paragraph, idx) => (
                                                                        <p key={idx} className="text-white/50 leading-relaxed text-xs md:text-sm font-light">{paragraph}</p>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            <div className="p-6 rounded-xl bg-white/5 border border-white/5">
                                                                <div className="text-[9px] font-black uppercase tracking-widest text-white mb-4">Approved Service Categories</div>
                                                                <ul className="grid sm:grid-cols-2 lg:grid-cols-1 gap-2 xl:grid-cols-2">
                                                                    {a.services.map(s => (
                                                                        <li key={s} className="flex items-start gap-2 text-xs text-white/70">
                                                                            <CheckCircle size={14} className="mt-0.5 text-gold shrink-0" />
                                                                            <span className="leading-tight">{s}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>

                                                        {/* Right: Technical Range */}
                                                        <div className="lg:col-span-12 xl:col-span-7 space-y-6">
                                                            {/*@ts-ignore*/}
                                                            {a.detailedApprovals ? (
                                                                <div className="bg-white/5 border border-white/5 rounded-xl p-6">
                                                                    <div className="text-[9px] font-black uppercase tracking-widest text-white mb-4 pb-3 border-b border-white/5 flex justify-between items-center">
                                                                        <span className="text-white/60">Scope of {a.abbr} Approval Coverage</span>
                                                                        <span className="bg-gold text-navy text-[8px] px-1.5 py-0.5 rounded font-black italic">CERTIFIED</span>
                                                                    </div>
                                                                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                                                                        {/*@ts-ignore*/}
                                                                        {a.detailedApprovals.map((approval, idx) => {
                                                                            const parts = approval.split('–');
                                                                            return (
                                                                                <div key={idx} className="text-xs group/item">
                                                                                    <div className="flex flex-col">
                                                                                        <span className="font-semibold text-white/90 group-hover/item:text-gold transition-colors">{parts[0]}</span>
                                                                                        {parts[1] && <span className="text-white/30 text-[10px] font-light mt-0.5">{parts[1].trim()}</span>}
                                                                                    </div>
                                                                                </div>
                                                                            );
                                                                        })}
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                a.benefits && (
                                                                    <div className="p-8 rounded-xl bg-white/5 border border-white/5 flex gap-4 relative overflow-hidden group/ben">
                                                                        <div className="absolute top-0 right-0 p-6 text-gold/5 pointer-events-none group-hover/ben:scale-110 transition-transform duration-700">
                                                                            <IconComponent size={80} />
                                                                        </div>
                                                                        <div className="text-xs text-white/40 leading-relaxed font-light italic relative z-10 px-4 border-l-2 border-gold/30">"{a.benefits}"</div>
                                                                    </div>
                                                                )
                                                            )}

                                                            {/* Why Choose Us within accordion */}
                                                            {/*@ts-ignore*/}
                                                            {a.whyChooseUs && (
                                                                <div className="rounded-xl bg-gold p-6 text-navy relative overflow-hidden shadow-xl shadow-gold/10">
                                                                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full blur-2xl" />
                                                                    <div className="relative z-10">
                                                                        <h3 className="text-[10px] font-black tracking-widest uppercase mb-4 flex items-center gap-2">
                                                                            <span className="text-navy/60">Al Tamdeen</span> Advantage
                                                                        </h3>
                                                                        <div className="grid sm:grid-cols-2 gap-3">
                                                                            {/*@ts-ignore*/}
                                                                            {a.whyChooseUs.map((reason, idx) => (
                                                                                <div key={idx} className="flex items-start gap-1.5">
                                                                                    <div className="w-1 h-1 rounded-full bg-navy/30 mt-1.5 shrink-0" />
                                                                                    <span className="text-[11px] text-navy/80 leading-snug font-medium">{reason}</span>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden bg-white border-t border-gray-50">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Ready to <span className="gold-text">Streamline</span> Your Entry?
                        </h2>
                        <p className="text-gray-400 mb-12 text-lg max-w-2xl mx-auto font-light leading-relaxed">
                            Our team handles the bureaucracy so you can focus on building. Contact our regulatory specialists for a custom strategy.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            <Link href="/contact" className="btn-gold group px-12 py-5 shadow-2xl shadow-gold/20">
                                Secure Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform ml-2" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
