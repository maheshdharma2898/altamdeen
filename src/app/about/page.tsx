import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Users, Award, Globe, Clock, MapPin, Phone, Mail } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Al Tamdeen Construction | Dubai Construction Company',
    description: 'Learn about Al Tamdeen Construction — Dubai\'s trusted partner for construction, fit-out, MEP, and authority approvals with 10+ years of excellence.',
};

const values = [
    { icon: Award, title: 'Integrity', desc: 'We operate with complete transparency, building trust with every client and authority interaction.' },
    { icon: CheckCircle, title: 'Quality', desc: 'Every project is held to the highest construction and design standards with rigorous QA processes.' },
    { icon: Clock, title: 'Reliability', desc: 'On-time delivery and clear communication are non-negotiable commitments to our clients.' },
    { icon: Globe, title: 'Expertise', desc: 'Deep knowledge of Dubai\'s regulatory landscape, construction codes, and design standards.' },
];

const team = [
    { name: 'Ahmed Al Tamdeen', role: 'Founder & Managing Director', desc: 'Over 20 years in Dubai\'s construction sector with deep authority relationships.' },
    { name: 'Eng. Khalid Hassan', role: 'Head of Engineering', desc: 'Licensed structural engineer specializing in complex Dubai residential and commercial projects.' },
    { name: 'Sara Al Mansoori', role: 'Head of Authority Approvals', desc: 'Authority approvals specialist with 100+ successful DM, DCD, and Trakhees submissions.' },
    { name: 'James Thornton', role: 'Head of Fit-Out & Interior', desc: 'Luxury fit-out expert delivering premium commercial and hospitality spaces across Dubai.' },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative pt-40 pb-16 overflow-hidden" style={{ background: '#0a1628' }}>
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 80% 50%, #c9a84c 0%, transparent 60%)' }} />
                <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="section-tag mb-4">About Us</div>
                        <h1 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Building Dubai's Skyline for{' '}
                            <span className="gold-text">Over a Decade</span>
                        </h1>
                        <p className="text-white/60 leading-relaxed mb-5">
                            Established in 2011 in Dubai, UAE, Al Tamdeen Construction is a multidisciplinary company specializing in building contracting, architectural design, decoration, and design implementation. We seamlessly integrate architecture with interior design, focusing on functionality, natural light, and aesthetic harmony to create inspiring, liveable spaces.
                        </p>
                        <p className="text-white/60 leading-relaxed mb-5">
                            With extensive experience in authority approvals, our team has successfully managed numerous submissions across major Dubai authorities — including design documentation, NOCs, permits, inspections, and completion certificates. This expertise gives us a strong edge and proven capability to handle even the most complex approval processes with efficiency and confidence.
                        </p>
                        <p className="text-white/60 leading-relaxed mb-8">
                            At Al Tamdeen, we combine creativity, technical expertise, and regulatory knowledge to deliver projects that are innovative, compliant, and built to the highest standards.
                        </p>
                    </div>
                    <div className="relative h-80 lg:h-[480px] rounded-sm overflow-hidden">
                        <Image src="/images/services.png" alt="Al Tamdeen team" fill className="object-cover" />
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
                    {[
                        { label: 'Our Vision', text: 'To be Dubai\'s foremost integrated construction and authority approval partner — recognized for excellence, innovation, and flawless delivery.' },
                        { label: 'Our Mission', text: 'To provide clients with end-to-end construction, design, and regulatory services that are transparent, efficient, and consistently delivered to the highest quality standards.' },
                    ].map(item => (
                        <div key={item.label} className="p-10 rounded-sm" style={{ background: '#f5f5f0', borderLeft: '4px solid #c9a84c' }}>
                            <div className="section-tag mb-3">{item.label}</div>
                            <p className="text-gray-700 leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16" style={{ background: '#f5f5f0' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <div className="section-tag mb-3">What We Stand For</div>
                        <h2 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#0a1628' }}>Our Core Values</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map(v => (
                            <div key={v.title} className="bg-white p-7 rounded-sm card-lift" style={{ border: '1px solid #e5e7eb' }}>
                                <div className="w-12 h-12 flex items-center justify-center rounded-sm mb-4" style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.25)' }}>
                                    <v.icon size={20} style={{ color: '#c9a84c' }} />
                                </div>
                                <h3 className="font-bold mb-2" style={{ color: '#0a1628', fontFamily: 'Playfair Display, serif' }}>{v.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <div className="section-tag mb-3">Leadership</div>
                        <h2 className="text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#0a1628' }}>Our Expert Team</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map(m => (
                            <div key={m.name} className="rounded-sm overflow-hidden card-lift" style={{ border: '1px solid #e5e7eb' }}>
                                <div className="h-14" style={{ background: 'linear-gradient(135deg, #0a1628, #112244)' }} />
                                <div className="p-6">
                                    <div className="w-14 h-14 rounded-full flex items-center justify-center -mt-10 mb-4 text-xl font-bold text-white" style={{ background: 'linear-gradient(135deg, #a87d2e, #e4c36a)', border: '3px solid white' }}>
                                        {m.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                    </div>
                                    <h3 className="font-bold text-sm mb-0.5" style={{ color: '#0a1628', fontFamily: 'Playfair Display, serif' }}>{m.name}</h3>
                                    <div className="text-xs font-semibold mb-2" style={{ color: '#c9a84c' }}>{m.role}</div>
                                    <p className="text-xs text-gray-500 leading-relaxed">{m.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Contact Details Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-[#0a1628] rounded-sm p-12 text-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #c9a84c 0%, transparent 50%)' }} />
                        <h2 className="text-3xl font-bold text-white mb-10 relative z-10" style={{ fontFamily: 'Playfair Display, serif' }}>Our Office Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
                            {[
                                { icon: MapPin, label: 'Location', value: 'Dubai – U.A.E' },
                                { icon: Award, label: 'Post Box', value: '12996' },
                                { icon: Phone, label: 'Telephone', value: '+971 4 451 1000' },
                                { icon: Mail, label: 'Email', value: 'info@altamdeenco.com' },
                                { icon: Globe, label: 'Website', value: 'www.altamdeenco.com' },
                            ].map(item => (
                                <div key={item.label} className="flex flex-col items-center">
                                    <div className="w-12 h-12 rounded-full mb-4 flex items-center justify-center" style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)' }}>
                                        <item.icon size={22} style={{ color: '#c9a84c' }} />
                                    </div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-1">{item.label}</div>
                                    <div className="text-sm font-medium text-white/80">{item.value}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16" style={{ background: '#0a1628' }}>
                <div className="max-w-2xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Let's Build Something Extraordinary</h2>
                    <p className="text-white/50 mb-8">Ready to partner with Dubai's trusted construction and approvals experts?</p>
                    <Link href="/contact" className="btn-gold">Request a Consultation <ArrowRight size={15} /></Link>
                </div>
            </section>
        </div>
    );
}
