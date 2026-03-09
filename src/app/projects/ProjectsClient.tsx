'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const categories = ['All', 'Residential Villa', 'Commercial Office', 'Retail Fit-Out', 'Industrial Building'];

export default function ProjectsClient({ projects }: { projects: any[] }) {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="pt-40 pb-16 relative overflow-hidden" style={{ background: '#0a1628' }}>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #c9a84c 0%, transparent 60%)' }} />
                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <div className="section-tag mb-4">Our Portfolio</div>
                    <h1 className="text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Featured <span className="gold-text">Projects</span>
                    </h1>
                    <p className="text-white/55 max-w-xl mx-auto">
                        A curated selection of projects showcasing our expertise across residential, commercial, hospitality, and industrial construction.
                    </p>
                </div>
            </section>

            {/* Category Filter Visual */}
            <section className="py-6 bg-white border-b" style={{ borderColor: '#e5e7eb' }}>
                <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-3 justify-center">
                    {categories.map(c => (
                        <button
                            key={c}
                            onClick={() => setActiveCategory(c)}
                            className="px-4 py-2 text-xs font-semibold tracking-wide rounded-sm transition-all"
                            style={{
                                border: '1px solid #e5e7eb',
                                color: activeCategory === c ? '#fff' : '#6b7280',
                                background: activeCategory === c ? '#0a1628' : 'transparent',
                                borderColor: activeCategory === c ? '#0a1628' : '#e5e7eb'
                            }}
                        >
                            {c}
                        </button>
                    ))}
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-12" style={{ background: '#f5f5f0' }}>
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map(p => (
                        <div key={p.id} className="group card-lift rounded-sm overflow-hidden bg-white" style={{ border: '1px solid #e5e7eb' }}>
                            <div className="relative h-60 overflow-hidden">
                                <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(10,22,40,0.5)' }} />
                                <div className="absolute top-3 left-3">
                                    <span className="text-xs font-semibold px-2.5 py-1 rounded-sm" style={{ background: 'rgba(10,22,40,0.85)', color: '#c9a84c', border: '1px solid rgba(201,168,76,0.3)' }}>
                                        {p.category}
                                    </span>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-white font-semibold text-sm">View Project</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="text-xs text-gray-400 mb-1.5 flex items-center gap-1">📍 {p.location}</div>
                                <h3 className="font-bold text-lg mb-2 group-hover:text-yellow-700 transition-colors" style={{ fontFamily: 'Playfair Display, serif', color: '#0a1628' }}>
                                    {p.title}
                                </h3>
                                <div className="text-xs font-semibold mb-2" style={{ color: '#c9a84c' }}>{p.type}</div>
                                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-16" style={{ background: '#0a1628' }}>
                <div className="max-w-2xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Have a Project in Mind?</h2>
                    <p className="text-white/50 mb-8">Tell us about your vision and let our team build an exceptional solution for you.</p>
                    <Link href="/contact" className="btn-gold">Start a Conversation <ArrowRight size={15} /></Link>
                </div>
            </section>
        </div>
    );
}
