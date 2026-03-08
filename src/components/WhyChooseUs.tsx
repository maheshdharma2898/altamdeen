'use client';
import { Users, Shield, Layers, Award, Clock, TrendingUp } from 'lucide-react';

const features = [
    { icon: Users, title: 'Expert Architects & Engineers', desc: 'Multi-disciplinary team of licensed architects, structural engineers, MEP specialists, and project managers with deep Dubai expertise.' },
    { icon: Shield, title: 'Authority Approval Expertise', desc: 'Established relationships with DM, DCD, Trakhees, DEWA, RTA, JAFZA and all Dubai authorities for faster approvals.' },
    { icon: Layers, title: 'End-to-End Project Management', desc: 'Single point of accountability from project inception through authority approvals, construction, fit-out, and final handover.' },
    { icon: Award, title: 'Quality Construction Standards', desc: 'ISO-aligned quality management systems and rigorous HSE protocols across every project phase.' },
    { icon: Clock, title: 'Timely Project Delivery', desc: 'Proven track record of on-time delivery using structured project planning, milestone tracking, and proactive risk management.' },
    { icon: TrendingUp, title: 'Integrated Design + Build', desc: 'Seamless coordination between design, engineering, approvals, and construction teams — eliminating gaps and delays.' },
];

function FeatureCard({ f }: { f: typeof features[0] }) {
    return (
        <div
            className="p-6 rounded-sm transition-all duration-300 cursor-default group"
            style={{ border: '1px solid rgba(201,168,76,0.15)', background: 'rgba(255,255,255,0.03)' }}
            onMouseOver={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.4)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; }}
            onMouseOut={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.15)'; (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.03)'; }}
        >
            <div className="w-12 h-12 flex items-center justify-center rounded-sm mb-5" style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
                <f.icon size={20} style={{ color: '#c9a84c' }} />
            </div>
            <h3 className="font-bold text-white text-base mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{f.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{f.desc}</p>
        </div>
    );
}

export default function WhyChooseUs() {
    return (
        <section className="py-24" style={{ background: '#0a1628' }}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="section-tag mb-4">Our Advantage</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Why Choose Al Tamdeen
                    </h2>
                    <div className="gold-line w-20 mx-auto" />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map(f => <FeatureCard key={f.title} f={f} />)}
                </div>
            </div>
        </section>
    );
}
