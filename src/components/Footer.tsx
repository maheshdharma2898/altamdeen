'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowRight, Building2, ClipboardCheck, Hammer, Zap, HardHat, Globe, Instagram, Facebook, Twitter } from 'lucide-react';

const footerServices = [
    { label: 'Architectural Design', href: '/services/architectural-design' },
    { label: 'Authority Approvals', href: '/services/authority-approvals' },
    { label: 'Fit-Out Works', href: '/services/fit-out-works' },
    { label: 'MEP Services', href: '/services/mep-services' },
    { label: 'Construction & Renovation', href: '/services/construction-renovation' },
];

const footerAuthorities = [
    { label: 'Dubai Municipality (DM)', href: '/authorities#dm' },
    { label: 'Dubai Civil Defense (DCD)', href: '/authorities#dcd' },
    { label: 'Trakhees', href: '/authorities#trakhees' },
    { label: 'DEWA', href: '/authorities#dewa' },
    { label: 'RTA Approvals', href: '/authorities#rta' },
    { label: 'JAFZA', href: '/authorities#jafza' },
];

export default function Footer() {
    return (
        <footer style={{ background: '#060e1e' }}>
            {/* CTA Band */}
            <div className="border-b" style={{ background: 'linear-gradient(135deg, #0d1f3c 0%, #112244 100%)', borderColor: 'rgba(201,168,76,0.2)' }}>
                <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                            Speak with our expert team today for a customized consultation.
                        </p>
                    </div>
                    <Link href="/contact" className="btn-gold flex-shrink-0">
                        Request Consultation <ArrowRight size={16} />
                    </Link>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="block mb-6">
                            <div className="relative w-40 h-10">
                                <Image
                                    src="/images/logo-brand-source.png"
                                    alt="Al Tamdeen Construction"
                                    fill
                                    className="object-contain object-left"
                                    style={{
                                        filter: "invert(1) brightness(1.5) sepia(1) saturate(5) hue-rotate(5deg)",
                                        mixBlendMode: 'screen'
                                    }}
                                    priority
                                />
                            </div>
                        </Link>
                        <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
                            Dubai's trusted partner for end-to-end construction, design, fit-out, MEP services, and authority approvals across all Emirates.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                                <MapPin size={15} className="flex-shrink-0 mt-0.5" style={{ color: '#c9a84c' }} />
                                <div>
                                    Dubai – U.A.E<br />
                                    <span className="text-[10px] opacity-60">P.O. Box: 12996</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                                <Phone size={15} style={{ color: '#c9a84c' }} />
                                +971 4 451 1000
                            </div>
                            <div className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                                <Mail size={15} style={{ color: '#c9a84c' }} />
                                info@altamdeenco.com
                            </div>
                            <div className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                                <Globe size={15} style={{ color: '#c9a84c' }} />
                                www.altamdeenco.com
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="mt-8 flex gap-4">
                            <a href="https://www.instagram.com/altamdeen_construction/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-sm transition-all hover:scale-110" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.2)', color: '#c9a84c' }}>
                                <Instagram size={18} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100090629438463" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-sm transition-all hover:scale-110" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.2)', color: '#c9a84c' }}>
                                <Facebook size={18} />
                            </a>
                            <a href="https://x.com/AltamdeenCo" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-sm transition-all hover:scale-110" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(201,168,76,0.2)', color: '#c9a84c' }}>
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-3">
                        <h4 className="text-sm font-semibold tracking-widest uppercase mb-5" style={{ color: '#c9a84c' }}>Services</h4>
                        <ul className="space-y-2.5">
                            {footerServices.map(s => (
                                <li key={s.href}>
                                    <Link href={s.href} className="text-sm transition-colors hover:text-yellow-300 flex items-center gap-1.5 group" style={{ color: 'rgba(255,255,255,0.55)' }}>
                                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#c9a84c' }} />
                                        {s.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Authorities */}
                    <div className="lg:col-span-3">
                        <h4 className="text-sm font-semibold tracking-widest uppercase mb-5" style={{ color: '#c9a84c' }}>Authority Approvals</h4>
                        <ul className="space-y-2.5">
                            {footerAuthorities.map(a => (
                                <li key={a.href}>
                                    <Link href={a.href} className="text-sm transition-colors hover:text-yellow-300 flex items-center gap-1.5 group" style={{ color: 'rgba(255,255,255,0.55)' }}>
                                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#c9a84c' }} />
                                        {a.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-semibold tracking-widest uppercase mb-5" style={{ color: '#c9a84c' }}>Company</h4>
                        <ul className="space-y-2.5">
                            {[
                                { label: 'About Us', href: '/about' },
                                { label: 'Projects', href: '/projects' },
                                { label: 'Gallery', href: '/gallery' },
                                { label: 'Insights', href: '/blog' },
                                { label: 'Contact', href: '/contact' },
                            ].map(l => (
                                <li key={l.href}>
                                    <Link href={l.href} className="text-sm transition-colors hover:text-yellow-300 flex items-center gap-1.5 group" style={{ color: 'rgba(255,255,255,0.55)' }}>
                                        <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#c9a84c' }} />
                                        {l.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t" style={{ borderColor: 'rgba(201,168,76,0.1)' }}>
                <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
                    <p>© {new Date().getFullYear()} Al Tamdeen Construction LLC. All rights reserved.</p>
                    <p>Registered in Dubai, United Arab Emirates</p>
                </div>
            </div>
        </footer>
    );
}
