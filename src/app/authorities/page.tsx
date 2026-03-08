'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { AUTHORITIES } from '@/lib/data';

export default function AuthoritiesPage() {
    const [expandedIds, setExpandedIds] = useState<string[]>([]);

    const toggleExpand = (id: string) => {
        setExpandedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="pt-52 pb-20" style={{ background: '#0a1628' }}>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="section-tag mb-4">Regulatory Services</div>
                    <h1 className="text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Dubai Authority <span className="gold-text">Approvals</span>
                    </h1>
                    <p className="text-white/55 max-w-2xl mx-auto leading-relaxed">
                        We manage the complete authority approval process with every Dubai regulatory body — DM, DCD, Trakhees, DEWA, RTA, JAFZA, DSO and more — ensuring your project proceeds without regulatory delays.
                    </p>
                </div>
            </section>

            {/* Intro Stats */}
            <section className="py-12 bg-white border-b" style={{ borderColor: '#e5e7eb' }}>
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {[
                        { value: '11+', label: 'Authorities Managed' },
                        { value: '100+', label: 'Approval Projects' },
                        { value: '10+', label: 'Years Experience' },
                        { value: '100%', label: 'Compliance Rate' },
                    ].map(s => (
                        <div key={s.label} className="p-4">
                            <div className="text-3xl font-bold mb-1 gold-text" style={{ fontFamily: 'Playfair Display, serif' }}>{s.value}</div>
                            <div className="text-xs text-gray-500">{s.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Authorities Detail */}
            <section className="py-20" style={{ background: '#f5f5f0' }}>
                <div className="max-w-7xl mx-auto px-6 space-y-12">
                    {AUTHORITIES.map((a) => {
                        const isExpanded = expandedIds.includes(a.id);
                        return (
                            <div
                                key={a.id}
                                id={a.id}
                                className="bg-white rounded-sm p-8 lg:p-10 card-lift"
                                style={{ border: '1px solid #e5e7eb', borderTop: `4px solid ${a.color}` }}
                            >
                                {/* Header Row (Clickable for Accordion) */}
                                <button
                                    onClick={() => toggleExpand(a.id)}
                                    className="w-full flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-6 border-b text-left group transition-colors"
                                    style={{ borderColor: '#e5e7eb' }}
                                >
                                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                                        <div className="text-6xl">{a.icon}</div>
                                        <div>
                                            <div className="text-sm font-bold tracking-widest uppercase mb-1" style={{ color: a.color }}>{a.abbr}</div>
                                            <h2 className="text-3xl font-bold group-hover:text-gold-500 transition-colors" style={{ fontFamily: 'Playfair Display, serif', color: '#0a1628' }}>{a.name}</h2>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm font-medium transition-colors" style={{ color: a.color }}>
                                        {isExpanded ? 'Hide Details' : 'View Details'}
                                        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                    </div>
                                </button>

                                {/* Collapsible Content */}
                                {isExpanded && (
                                    <div className="grid lg:grid-cols-12 gap-10">
                                        {/* Left Column: Overview and Top-Level Info */}
                                        <div className="lg:col-span-5 flex flex-col gap-8">
                                            <div className="space-y-4">
                                                {a.overview.split('\n\n').map((paragraph, idx) => (
                                                    <p key={idx} className="text-gray-600 leading-relaxed text-sm md:text-base">{paragraph}</p>
                                                ))}
                                            </div>

                                            <div className="p-6 rounded-sm" style={{ background: '#f8f9fa', border: '1px solid #e5e7eb' }}>
                                                <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#c9a84c' }}>Our Core Services</div>
                                                <ul className="space-y-3">
                                                    {a.services.map(s => (
                                                        <li key={s} className="flex items-start gap-3 text-sm text-gray-700">
                                                            <CheckCircle size={16} className="mt-0.5" style={{ color: '#c9a84c', flexShrink: 0 }} />
                                                            <span className="leading-snug">{s}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/*@ts-ignore*/}
                                            {a.whyImportantDetailed && (
                                                <div>
                                                    <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#0a1628' }}>Why Authority Approval Matters</div>
                                                    <ul className="space-y-3">
                                                        {/*@ts-ignore*/}
                                                        {a.whyImportantDetailed.map((item, idx) => (
                                                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 italic">
                                                                <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: a.color }} />
                                                                <span className="leading-snug">{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                            {/*@ts-ignore*/}
                                            {!a.whyImportantDetailed && a.importance && (
                                                <div>
                                                    <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#0a1628' }}>Why It Matters</div>
                                                    <p className="text-sm text-gray-600 leading-relaxed italic border-l-2 pl-4 py-1" style={{ borderColor: a.color }}>{a.importance}</p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Right Column: Detailed Lists */}
                                        <div className="lg:col-span-7 flex flex-col gap-8">
                                            {/*@ts-ignore*/}
                                            {a.detailedApprovals ? (
                                                <div>
                                                    <div className="text-sm font-bold uppercase mb-5 tracking-wide" style={{ color: '#0a1628', borderBottom: '1px solid #e5e7eb', paddingBottom: '10px' }}>
                                                        Range of {a.abbr} Approvals We Handle
                                                    </div>
                                                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                                                        {/*@ts-ignore*/}
                                                        {a.detailedApprovals.map((approval, idx) => {
                                                            const parts = approval.split('–');
                                                            const title = parts[0]?.trim() || '';
                                                            const desc = parts[1]?.trim() || '';
                                                            return (
                                                                <div key={idx} className="text-sm">
                                                                    <strong style={{ color: '#0a1628' }}>{title}</strong>
                                                                    {desc && <span className="text-gray-500"> – {desc}</span>}
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            ) : (
                                                a.benefits && (
                                                    <div className="p-6 rounded-sm bg-gray-50 border border-gray-200">
                                                        <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#c9a84c' }}>Al Tamdeen Advantage</div>
                                                        <p className="text-sm text-gray-600 leading-relaxed">{a.benefits}</p>
                                                    </div>
                                                )
                                            )}

                                            {/*@ts-ignore*/}
                                            {a.whyChooseUs && (
                                                <div className="mt-auto">
                                                    <div className="text-sm font-bold uppercase mb-4 tracking-wide" style={{ color: '#0a1628' }}>
                                                        Why Choose Al Tamdeen for {a.abbr} Approvals?
                                                    </div>
                                                    <div className="p-6 rounded-sm" style={{ background: '#0a1628' }}>
                                                        <ul className="space-y-3">
                                                            {/*@ts-ignore*/}
                                                            {a.whyChooseUs.map((reason, idx) => (
                                                                <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                                                                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#c9a84c' }} />
                                                                    <span className="leading-snug">{reason}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20" style={{ background: '#0a1628' }}>
                <div className="max-w-2xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Need Authority Approval Support?</h2>
                    <p className="text-white/50 mb-8">Our specialists manage the complete regulatory process so you can focus on your business.</p>
                    <Link href="/contact" className="btn-gold">Request a Consultation <ArrowRight size={15} /></Link>
                </div>
            </section>
        </div>
    );
}
