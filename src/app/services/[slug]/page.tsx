import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SERVICES, TESTIMONIALS } from '@/lib/data';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
    return SERVICES.map(s => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = SERVICES.find(s => s.slug === slug);
    if (!service) return {};
    return {
        title: `${service.title} | Al Tamdeen Construction Dubai`,
        description: service.shortDesc,
    };
}

const processSteps = [
    { step: '01', title: 'Initial Consultation', desc: 'We meet to understand your project goals, site conditions, and timeline requirements.' },
    { step: '02', title: 'Scope & Proposal', desc: 'A detailed scope of work and fee proposal is prepared within 48 hours.' },
    { step: '03', title: 'Design & Planning', desc: 'Our team develops design concepts and authority submission packages.' },
    { step: '04', title: 'Authority Approvals', desc: 'We manage all regulatory submissions and follow-up with Dubai authorities.' },
    { step: '05', title: 'Construction / Execution', desc: 'Works commence under our expert supervision with real-time client reporting.' },
    { step: '06', title: 'Handover & Completion', desc: 'Final completion certificate obtained and keys handed over on time.' },
];

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const baseService = SERVICES.find(s => s.slug === slug);
    if (!baseService) notFound();

    // Typecast to access custom optional fields added for specific services
    const service = baseService as any;
    const currentProcess = service.customProcess || processSteps;

    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="relative pt-60 pb-28 overflow-hidden">
                <Image src={service.image} alt={service.title} fill className="object-cover opacity-25" style={{ filter: 'brightness(0.4)' }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0a1628 60%, #112244 100%)' }} />
                <div className="relative z-10 max-w-7xl mx-auto px-6">
                    <div className="section-tag mb-4">Service Details</div>
                    <div className="flex items-center gap-5 mb-5">
                        <div className="w-16 h-16 flex items-center justify-center rounded-sm text-3xl flex-shrink-0" style={{ background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)' }}>
                            {service.icon}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                            {service.title}
                        </h1>
                    </div>
                    <p className="text-white/60 text-lg max-w-2xl">{service.shortDesc}</p>
                </div>
            </section>

            {/* Overview & Services */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
                    <div>
                        <div className="section-tag mb-3">Service Overview</div>
                        <h2 className="text-3xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif', color: '#0a1628' }}>What We Provide</h2>

                        <div className="mb-10 space-y-4">
                            {service.fullDesc.split('\n\n').map((para: string, idx: number) => (
                                <p key={idx} className="text-gray-600 leading-relaxed">{para}</p>
                            ))}
                        </div>

                        <div className="section-tag mb-3">Detailed Service List</div>

                        {service.detailedServices ? (
                            <div className="space-y-8 mt-6">
                                {service.detailedServices.map((ds: any, idx: number) => (
                                    <div key={idx}>
                                        <h3 className="text-xl font-bold mb-3" style={{ color: '#0a1628', fontFamily: 'Playfair Display, serif' }}>
                                            {idx + 1}. {ds.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{ds.desc}</p>
                                        <ul className="space-y-2">
                                            {ds.items.map((item: string, i: number) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                                    <CheckCircle size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#c9a84c' }} />
                                                    <span className="leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <ul className="space-y-3 mt-4">
                                {service.services.map((item: string) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                                        <CheckCircle size={16} style={{ color: '#c9a84c', flexShrink: 0 }} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div>
                        <div className="section-tag mb-3">Key Benefits</div>
                        <h2 className="text-3xl font-bold mb-5" style={{ fontFamily: 'Playfair Display, serif', color: '#0a1628' }}>Why Choose Al Tamdeen</h2>
                        <div className="space-y-4 mb-8">
                            {service.benefits.map((b: string) => {
                                const parts = b.split(':');
                                return (
                                    <div key={b} className="flex items-start gap-3 p-4 rounded-sm" style={{ background: '#f5f5f0', border: '1px solid #e5e7eb' }}>
                                        <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: '#c9a84c' }} />
                                        <span className="text-sm text-gray-700 leading-relaxed">
                                            {parts.length > 1 ? (
                                                <>
                                                    <strong style={{ color: '#0a1628' }}>{parts[0]}:</strong>
                                                    {parts.slice(1).join(':')}
                                                </>
                                            ) : (
                                                b
                                            )}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {service.whyChooseUs && (
                            <div className="mb-8">
                                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#0a1628' }}>Why Choose Us</h3>
                                <ul className="space-y-3">
                                    {service.whyChooseUs.map((wcu: string, idx: number) => {
                                        const parts = wcu.split(':');
                                        return (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                                                <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#c9a84c' }} />
                                                <span className="leading-relaxed">
                                                    {parts.length > 1 ? (
                                                        <>
                                                            <strong style={{ color: '#0a1628' }}>{parts[0]}:</strong>
                                                            {parts.slice(1).join(':')}
                                                        </>
                                                    ) : wcu}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        )}

                        <div className="relative rounded-sm overflow-hidden h-64 lg:h-80">
                            <Image src={service.image} alt={service.title} fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Timeline */}
            <section className="py-20" style={{ background: '#f5f5f0' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-14">
                        <div className="section-tag mb-3">How We Work</div>
                        <h2 className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#0a1628' }}>Our Process</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentProcess.map((step: any) => (
                            <div key={step.step} className="bg-white p-7 rounded-sm card-lift" style={{ border: '1px solid #e5e7eb' }}>
                                <div className="text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: 'rgba(201,168,76,0.3)' }}>{step.step}</div>
                                <h3 className="font-bold text-base mb-2" style={{ color: '#0a1628', fontFamily: 'Playfair Display, serif' }}>{step.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className="py-20" style={{ background: '#0a1628' }}>
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <div className="section-tag mb-6">Client Experience</div>
                    <blockquote className="text-2xl text-white leading-relaxed mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                        "{TESTIMONIALS[0].text}"
                    </blockquote>
                    <div className="text-sm font-semibold" style={{ color: '#c9a84c' }}>{TESTIMONIALS[0].name}</div>
                    <div className="text-xs text-white/40 mt-1">{TESTIMONIALS[0].role}</div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white">
                <div className="max-w-2xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#0a1628' }}>
                        Ready to Start Your {service.title.split(' ')[0]} Project?
                    </h2>
                    <p className="text-gray-500 mb-8">Contact our team for a tailored consultation and project assessment.</p>
                    <Link href="/contact" className="btn-gold">
                        Request a Consultation <ArrowRight size={15} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
