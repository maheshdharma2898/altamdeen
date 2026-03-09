'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Ruler, ClipboardList, PenTool, Zap, Construction, Phone } from 'lucide-react';

const serviceItems = [
    { title: 'Architectural Design & Interior', href: '/services/architectural-design', icon: Ruler, desc: 'Bespoke design and interior solutions' },
    { title: 'Authority Approval Works', href: '/services/authority-approvals', icon: ClipboardList, desc: 'All Dubai authority permits managed' },
    { title: 'Fit-Out Works', href: '/services/fit-out-works', icon: PenTool, desc: 'Premium commercial & residential fit-outs' },
    { title: 'MEP Services', href: '/services/mep-services', icon: Zap, desc: 'Mechanical, electrical & plumbing engineering' },
    { title: 'Construction & Renovation', href: '/services/construction-renovation', icon: Construction, desc: 'Full-cycle construction management' },
];

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services', hasMega: true },
    { label: 'Authorities', href: '/authorities' },
    { label: 'Projects', href: '/projects' },
    { label: 'Insights', href: '/blog' },
    { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [megaOpen, setMegaOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

    const pathname = usePathname();
    const isHome = pathname === '/';

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', onScroll);
        // Initialization check
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const isSolid = !isHome || scrolled;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isSolid
                ? 'bg-navy shadow-2xl shadow-black/30'
                : 'bg-transparent'
                }`}
        >
            {/* Top Bar */}
            <div className={`border-b transition-all duration-300 ${scrolled ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'}`} style={{ borderColor: 'rgba(201,168,76,0.2)' }}>
                <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
                    <div className="flex items-center gap-6 text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
                        <span className="flex items-center gap-1.5">
                            <Phone size={11} style={{ color: '#c9a84c' }} />
                            +971 4 451 1000
                        </span>
                        <span>info@altamdeenco.com</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
                        <span>Dubai – U.A.E</span>
                    </div>
                </div>
            </div>

            {/* Main Nav */}
            <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center group">
                    <div className="relative w-52 h-16">
                        <Image
                            src="/images/logo.png"
                            alt="Al Tamdeen Construction"
                            fill
                            className="object-contain object-left"
                            style={{ filter: "brightness(0) saturate(100%) invert(70%) sepia(30%) saturate(800%) hue-rotate(5deg) brightness(100%) contrast(100%)" }}
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-1">
                    {navLinks.map((link) =>
                        link.hasMega ? (
                            <div
                                key={link.label}
                                className="relative"
                                onMouseEnter={() => setMegaOpen(true)}
                                onMouseLeave={() => setMegaOpen(false)}
                            >
                                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded group">
                                    {link.label}
                                    <ChevronDown size={14} className={`transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} style={{ color: '#c9a84c' }} />
                                </button>

                                {/* Mega Menu */}
                                {megaOpen && (
                                    <div
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-4 w-[700px]"
                                        style={{ zIndex: 100 }}
                                    >
                                        <div className="rounded-sm overflow-hidden shadow-2xl" style={{ background: '#0a1628', border: '1px solid rgba(201,168,76,0.2)' }}>
                                            <div className="p-6">
                                                <div className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#c9a84c' }}>Our Services</div>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {serviceItems.map((s) => (
                                                        <Link
                                                            key={s.href}
                                                            href={s.href}
                                                            className="flex items-start gap-3 p-3 rounded-sm group transition-all duration-200 hover:bg-white/5"
                                                            style={{ border: '1px solid transparent', borderColor: 'transparent' }}
                                                            onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.3)')}
                                                            onMouseLeave={e => (e.currentTarget.style.borderColor = 'transparent')}
                                                        >
                                                            <div className="w-9 h-9 flex items-center justify-center rounded-sm flex-shrink-0 mt-0.5" style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
                                                                <s.icon size={16} style={{ color: '#c9a84c' }} />
                                                            </div>
                                                            <div>
                                                                <div className="text-sm font-semibold text-white group-hover:text-yellow-400 transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>{s.title}</div>
                                                                <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.desc}</div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                                <div className="mt-4 pt-4" style={{ borderTop: '1px solid rgba(201,168,76,0.15)' }}>
                                                    <Link href="/services" className="text-sm font-medium transition-colors hover:text-yellow-300" style={{ color: '#c9a84c' }}>
                                                        View All Services →
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-4 right-4 h-px scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{ background: '#c9a84c' }} />
                            </Link>
                        )
                    )}
                </div>

                {/* CTA */}
                <div className="hidden lg:flex items-center gap-4">
                    <Link
                        href="/contact"
                        className="btn-gold text-sm px-5 py-2.5"
                    >
                        Get a Quote
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white p-2"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle Menu"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="lg:hidden border-t" style={{ background: '#0a1628', borderColor: 'rgba(201,168,76,0.2)' }}>
                    <div className="px-6 py-4 space-y-1">
                        {navLinks.map((link) =>
                            link.hasMega ? (
                                <div key={link.label}>
                                    <button
                                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                        className="flex items-center justify-between w-full px-2 py-3 text-white/80 text-sm font-medium border-b"
                                        style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                                    >
                                        {link.label}
                                        <ChevronDown size={14} style={{ color: '#c9a84c' }} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                                    </button>
                                    {mobileServicesOpen && (
                                        <div className="pl-4 space-y-1 pt-1 pb-2">
                                            {serviceItems.map((s) => (
                                                <Link
                                                    key={s.href}
                                                    href={s.href}
                                                    onClick={() => setMobileOpen(false)}
                                                    className="flex items-center gap-2 py-2 text-sm"
                                                    style={{ color: 'rgba(255,255,255,0.6)' }}
                                                >
                                                    <s.icon size={14} style={{ color: '#c9a84c' }} />
                                                    {s.title}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-2 py-3 text-sm text-white/80 border-b"
                                    style={{ borderColor: 'rgba(255,255,255,0.06)' }}
                                >
                                    {link.label}
                                </Link>
                            )
                        )}
                        <div className="pt-4">
                            <Link href="/contact" onClick={() => setMobileOpen(false)} className="btn-gold w-full text-center justify-center">
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
