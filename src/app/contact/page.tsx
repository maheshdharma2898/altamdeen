'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

const projectTypes = [
    'Residential Villa',
    'Commercial Office',
    'Retail Fit-Out',
    'Hospitality',
    'Industrial / Warehouse',
    'Authority Approvals Only',
    'Architectural Design',
    'MEP Services',
    'Other',
];

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', phone: '', projectType: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative pt-52 pb-20 overflow-hidden" style={{ background: '#0a1628' }}>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="section-tag mb-4">Contact Us</div>
                    <h1 className="text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Get in Touch <span className="gold-text">With Us</span>
                    </h1>
                    <p className="text-white/55 max-w-xl mx-auto">
                        Our expert team is ready to discuss your project. Reach out for a complimentary consultation.
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
                    {/* Info */}
                    <div>
                        <div className="section-tag mb-4">Our Office</div>
                        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#0a1628' }}>
                            Dubai Headquarters
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Al Tamdeen Construction is based in Dubai, UAE. We serve residential, commercial, and industrial clients across all Emirates and manage authority approvals with every major Dubai regulatory body.
                        </p>

                        <div className="space-y-5 mb-10">
                            {[
                                { icon: MapPin, label: 'Address', value: 'Dubai, United Arab Emirates' },
                                { icon: Phone, label: 'Phone', value: '+971 4 XXX XXXX' },
                                { icon: Mail, label: 'Email', value: 'info@altamdeen.ae' },
                            ].map(c => (
                                <div key={c.label} className="flex items-start gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-sm flex-shrink-0" style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
                                        <c.icon size={18} style={{ color: '#c9a84c' }} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-semibold tracking-widest uppercase mb-0.5" style={{ color: '#c9a84c' }}>{c.label}</div>
                                        <div className="text-sm text-gray-700">{c.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Service badges */}
                        <div>
                            <div className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: '#6b7280' }}>Areas of Service</div>
                            <div className="flex flex-wrap gap-2">
                                {['Construction', 'Fit-Out Works', 'MEP Services', 'Arch. Design', 'Authority Approvals'].map(s => (
                                    <span key={s} className="text-xs px-3 py-1.5 rounded-sm" style={{ background: '#f5f5f0', color: '#0a1628', border: '1px solid #e5e7eb', fontWeight: 600 }}>
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="rounded-sm p-8" style={{ background: '#f5f5f0', border: '1px solid #e5e7eb' }}>
                        {submitted ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-10">
                                <div className="w-16 h-16 flex items-center justify-center rounded-full mb-5" style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)' }}>
                                    <CheckCircle size={32} style={{ color: '#c9a84c' }} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#0a1628' }}>Message Sent!</h3>
                                <p className="text-gray-500 text-sm">Thank you for reaching out. Our team will contact you within 24 hours.</p>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#0a1628' }}>Request a Consultation</h3>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold mb-1.5" style={{ color: '#6b7280' }}>Full Name *</label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="Your full name"
                                                value={form.name}
                                                onChange={e => setForm({ ...form, name: e.target.value })}
                                                className="w-full px-4 py-3 text-sm rounded-sm bg-white outline-none transition-all focus:ring-1"
                                                style={{ border: '1px solid #e5e7eb', color: '#0a1628' }}
                                                onFocus={e => (e.target.style.borderColor = '#c9a84c')}
                                                onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold mb-1.5" style={{ color: '#6b7280' }}>Email Address *</label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="your@email.com"
                                                value={form.email}
                                                onChange={e => setForm({ ...form, email: e.target.value })}
                                                className="w-full px-4 py-3 text-sm rounded-sm bg-white outline-none"
                                                style={{ border: '1px solid #e5e7eb', color: '#0a1628' }}
                                                onFocus={e => (e.target.style.borderColor = '#c9a84c')}
                                                onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-semibold mb-1.5" style={{ color: '#6b7280' }}>Phone Number</label>
                                            <input
                                                type="tel"
                                                placeholder="+971 50 XXX XXXX"
                                                value={form.phone}
                                                onChange={e => setForm({ ...form, phone: e.target.value })}
                                                className="w-full px-4 py-3 text-sm rounded-sm bg-white outline-none"
                                                style={{ border: '1px solid #e5e7eb', color: '#0a1628' }}
                                                onFocus={e => (e.target.style.borderColor = '#c9a84c')}
                                                onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold mb-1.5" style={{ color: '#6b7280' }}>Project Type</label>
                                            <select
                                                value={form.projectType}
                                                onChange={e => setForm({ ...form, projectType: e.target.value })}
                                                className="w-full px-4 py-3 text-sm rounded-sm bg-white outline-none"
                                                style={{ border: '1px solid #e5e7eb', color: form.projectType ? '#0a1628' : '#9ca3af' }}
                                                onFocus={e => (e.target.style.borderColor = '#c9a84c')}
                                                onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
                                            >
                                                <option value="">Select project type</option>
                                                {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold mb-1.5" style={{ color: '#6b7280' }}>Message *</label>
                                        <textarea
                                            required
                                            placeholder="Tell us about your project, location, timeline, and any specific requirements..."
                                            rows={5}
                                            value={form.message}
                                            onChange={e => setForm({ ...form, message: e.target.value })}
                                            className="w-full px-4 py-3 text-sm rounded-sm bg-white outline-none resize-none"
                                            style={{ border: '1px solid #e5e7eb', color: '#0a1628' }}
                                            onFocus={e => (e.target.style.borderColor = '#c9a84c')}
                                            onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
                                        />
                                    </div>
                                    <button type="submit" className="btn-gold w-full justify-center text-sm">
                                        Send Message <Send size={14} />
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-64" style={{ background: '#0a1628', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
                <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                        <MapPin size={32} style={{ color: '#c9a84c' }} className="mx-auto mb-2" />
                        <div className="text-white/40 text-sm">Dubai, United Arab Emirates</div>
                    </div>
                </div>
            </section>
        </div>
    );
}
