import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Services | Al Tamdeen Construction Dubai',
    description: 'Al Tamdeen Construction offers architectural design, authority approvals, fit-out works, MEP services, and construction in Dubai.',
};

export default function ServicesPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="pt-52 pb-20" style={{ background: '#0a1628' }}>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #c9a84c 0%, transparent 60%)' }} />
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="section-tag mb-4">What We Offer</div>
                    <h1 className="text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>Our Services</h1>
                    <p className="text-white/55 max-w-xl mx-auto">Comprehensive construction, design, and regulatory services for projects of all scales across Dubai.</p>
                </div>
            </section>

            {/* Services List */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6 space-y-8">
                    {SERVICES.map((s, i) => (
                        <div
                            key={s.id}
                            className="grid lg:grid-cols-3 gap-8 p-8 rounded-sm group card-lift"
                            style={{ border: '1px solid #e5e7eb', background: i % 2 === 0 ? '#fff' : '#fafafa' }}
                        >
                            <div className="lg:col-span-2">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 flex items-center justify-center rounded-sm text-2xl" style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)' }}>
                                        {s.icon}
                                    </div>
                                    <h2 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#0a1628' }}>{s.title}</h2>
                                </div>
                                <p className="text-gray-500 mb-4 leading-relaxed">{s.fullDesc}</p>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {s.services.map(item => (
                                        <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#c9a84c' }} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col justify-between gap-4">
                                <div className="p-4 rounded-sm" style={{ background: '#f5f5f0', border: '1px solid #e5e7eb' }}>
                                    <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#c9a84c' }}>Key Benefits</div>
                                    {s.benefits.map(b => (
                                        <div key={b} className="flex items-start gap-2 text-xs text-gray-600 mb-2">
                                            <span className="text-green-500 mt-0.5">✓</span>
                                            {b}
                                        </div>
                                    ))}
                                </div>
                                <Link href={`/services/${s.slug}`} target="_blank" className="btn-gold text-sm justify-center">
                                    Full Service Details <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-20" style={{ background: '#0a1628' }}>
                <div className="max-w-2xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Need a Custom Solution?</h2>
                    <p className="text-white/50 mb-8">Our team designs integrated service packages tailored to your project requirements.</p>
                    <Link href="/contact" className="btn-gold">Get a Consultation <ArrowRight size={15} /></Link>
                </div>
            </section>
        </div>
    );
}
