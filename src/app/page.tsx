import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, CheckCircle, Award, ChevronRight, MapPin, Phone, Mail,
  Landmark, ShieldCheck, Building2, Anchor, Route, Waypoints, Zap,
  Factory, Cpu, FileText, Palette, Construction, Ruler, ClipboardList, PenTool
} from 'lucide-react';
import { SERVICES, AUTHORITIES, PROJECTS, TESTIMONIALS, BLOG_POSTS } from '@/lib/data';
import TestimonialSlider from '@/components/TestimonialSlider';
import AnimatedStats from '@/components/AnimatedStats';
import WhyChooseUs from '@/components/WhyChooseUs';

const iconMap: Record<string, any> = {
  'architectural': Ruler,
  'approvals': ClipboardList,
  'fitout': PenTool,
  'mep': Zap,
  'construction': Construction,
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

const renderIcon = (iconKey: string, size = 24) => {
  const IconComponent = iconMap[iconKey] || Landmark;
  return <IconComponent size={size} strokeWidth={1.5} />;
};

export default function HomePage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="Al Tamdeen Construction — Dubai Skyscraper"
          fill
          priority
          className="object-cover object-center scale-105"
          style={{ filter: 'brightness(0.65)' }}
        />
        <div className="absolute inset-0 hero-overlay" />

        {/* Decorative gold line left */}
        <div className="absolute left-0 top-1/4 h-px w-24" style={{ background: 'linear-gradient(90deg, transparent, #c9a84c)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <div className="section-tag mb-5 opacity-90">Dubai — United Arab Emirates</div>

            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-[1.08] mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Building Visions,{' '}
              <span className="gold-text">Delivering</span>{' '}
              Excellence
            </h1>

            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-lg">
              Comprehensive construction, design, and fit-out solutions in Dubai — with complete authority approval management.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn-gold text-sm">
                Get a Consultation <ArrowRight size={15} />
              </Link>
              <Link href="/services" className="btn-outline text-sm">
                View Services
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-yellow-400/50" />
          <div className="w-1 h-1 rounded-full bg-yellow-400/60" />
        </div>
      </section>

      {/* ── COMPANY INTRO ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-tag mb-4">About Us</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif', color: '#0a1628' }}>
                Your Trusted Partner for Dubai{' '}
                <span className="gold-text">Authority Approvals</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Established in 2011 in Dubai, UAE, Al Tamdeen Construction is a multidisciplinary company specializing in building contracting, architectural design, decoration, and design implementation. We seamlessly integrate architecture with interior design, focusing on functionality, natural light, and aesthetic harmony to create inspiring, liveable spaces.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                With extensive experience in authority approvals, our team has successfully managed numerous submissions across major Dubai authorities — including design documentation, NOCs, permits, inspections, and completion certificates. This expertise gives us a strong edge and proven capability to handle even the most complex approval processes with efficiency and confidence.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                At Al Tamdeen, we combine creativity, technical expertise, and regulatory knowledge to deliver projects that are innovative, compliant, and built to the highest standards.
              </p>
              <div className="p-5 mb-8 rounded-sm" style={{ background: '#f5f5f0', borderLeft: '3px solid #c9a84c' }}>
                <strong className="block text-sm font-semibold mb-1" style={{ color: '#0a1628' }}>Our Approach:</strong>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  We blend creativity, practicality, and compliance to deliver projects that are aesthetically stunning, functionally efficient, and fully aligned with client requirements.
                </p>
                <div className="grid grid-cols-2 gap-4 border-t pt-4" style={{ borderColor: 'rgba(201,168,76,0.1)' }}>
                  <div className="flex items-start gap-2">
                    <MapPin size={14} className="mt-0.5" style={{ color: '#c9a84c' }} />
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Location</div>
                      <div className="text-xs text-[#0a1628] font-medium">Dubai – U.A.E</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award size={14} className="mt-0.5" style={{ color: '#c9a84c' }} />
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Postbox</div>
                      <div className="text-xs text-[#0a1628] font-medium">12996</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone size={14} className="mt-0.5" style={{ color: '#c9a84c' }} />
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Phone</div>
                      <div className="text-xs text-[#0a1628] font-medium">+971 4 451 1000</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mail size={14} className="mt-0.5" style={{ color: '#c9a84c' }} />
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Email</div>
                      <div className="text-xs text-[#0a1628] font-medium">info@altamdeenco.com</div>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/about" className="btn-gold text-sm">
                Learn More About Us <ArrowRight size={15} />
              </Link>
            </div>
            <div className="relative h-96 lg:h-full min-h-[600px] rounded-sm overflow-hidden">
              <Image
                src="/images/about.png"
                alt="Al Tamdeen Construction Dubai"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: 'linear-gradient(to top, rgba(10,22,40,0.9) 0%, transparent 100%)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 flex items-center justify-center rounded-sm" style={{ background: 'linear-gradient(135deg, #a87d2e, #e4c36a)' }}>
                    <Award size={18} className="text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Established 2011</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Dubai Authority Approved Partner</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <AnimatedStats />

      {/* ── SERVICES OVERVIEW ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag mb-4">What We Do</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#0a1628' }}>
              Our Core Services
            </h2>
            <div className="gold-line w-20 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <Link
                key={s.id}
                href={`/services/${s.slug}`}
                target="_blank"
                className="group card-lift block rounded-sm overflow-hidden"
                style={{ border: '1px solid #e5e7eb', background: '#fff' }}
              >
                <div className="p-8">
                  <div className="w-14 h-14 flex items-center justify-center rounded-sm mb-5 text-gold transition-all duration-300 group-hover:scale-110" style={{ background: 'rgba(10,22,40,0.05)', border: '1px solid rgba(201,168,76,0.2)' }}>
                    {renderIcon(s.icon, 28)}
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-yellow-700 transition-colors" style={{ fontFamily: 'Playfair Display, serif', color: '#0a1628' }}>
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{s.shortDesc}</p>
                  <div className="flex items-center gap-1.5 text-sm font-semibold transition-colors group-hover:text-yellow-600" style={{ color: '#a87d2e' }}>
                    Explore Service <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
                <div className="h-1 w-0 group-hover:w-full transition-all duration-500" style={{ background: 'linear-gradient(90deg, #a87d2e, #e4c36a)' }} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUTHORITY APPROVALS ── */}
      <section className="py-16" style={{ background: '#f5f5f0' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag mb-4">Regulatory Expertise</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#0a1628' }}>
              Dubai Authority Approvals
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              We manage the complete approval process with every Dubai regulatory body, ensuring your project proceeds without delays.
            </p>
            <div className="gold-line w-20 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {AUTHORITIES.map(a => (
              <Link
                key={a.id}
                href={`/authorities#${a.id}`}
                className="group card-lift rounded-sm p-5 text-center transition-all duration-300"
                style={{ background: '#fff', border: '1px solid #e5e7eb' }}
              >
                <div className="text-gold mb-3 flex justify-center">
                  {renderIcon(a.icon, 32)}
                </div>
                <div className="font-bold text-sm mb-1 group-hover:text-yellow-700 transition-colors" style={{ color: '#0a1628', fontFamily: 'Inter, sans-serif' }}>
                  {a.abbr}
                </div>
                <div className="text-xs leading-snug" style={{ color: '#6b7280' }}>{a.name}</div>
                <div className="mt-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#c9a84c' }}>
                  View Details →
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/authorities" className="btn-gold text-sm">
              All Authority Approvals <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="section-tag mb-4">Our Portfolio</div>
              <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#0a1628' }}>
                Featured Projects
              </h2>
            </div>
            <Link href="/projects" className="flex items-center gap-1.5 text-sm font-semibold transition-colors hover:text-yellow-600" style={{ color: '#a87d2e' }}>
              View All Projects <ChevronRight size={15} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.slice(0, 6).map(p => (
              <div key={p.id} className="group card-lift rounded-sm overflow-hidden" style={{ border: '1px solid #e5e7eb' }}>
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-sm" style={{ background: 'rgba(10,22,40,0.85)', color: '#c9a84c', border: '1px solid rgba(201,168,76,0.3)' }}>
                      {p.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-gray-400 mb-1.5">📍 {p.location}</div>
                  <h3 className="font-bold text-base mb-2 group-hover:text-yellow-700 transition-colors" style={{ fontFamily: 'Playfair Display, serif', color: '#0a1628' }}>{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── WHY CHOOSE US ── */}
      <WhyChooseUs />


      {/* ── TESTIMONIALS ── */}
      <section className="py-16" style={{ background: '#0a1628' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="section-tag mb-4">Client Feedback</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#fff' }}>
              What Our Clients Say
            </h2>
            <div className="gold-line w-20 mx-auto" />
          </div>
          <TestimonialSlider testimonials={TESTIMONIALS} />
        </div>
      </section>

      {/* ── RECENT BLOG ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="section-tag mb-4">Knowledge Hub</div>
              <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#0a1628' }}>
                Latest Insights
              </h2>
            </div>
            <Link href="/blog" className="flex items-center gap-1.5 text-sm font-semibold" style={{ color: '#a87d2e' }}>
              View All Articles <ChevronRight size={15} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {BLOG_POSTS.map(post => (
              <div key={post.id} className="group card-lift rounded-sm overflow-hidden" style={{ border: '1px solid #e5e7eb' }}>
                <div className="relative h-44 overflow-hidden">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-semibold px-2 py-1 rounded-sm" style={{ background: 'rgba(10,22,40,0.85)', color: '#c9a84c' }}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-2.5">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-sm mb-2 leading-snug group-hover:text-yellow-700 transition-colors" style={{ fontFamily: 'Playfair Display, serif', color: '#0a1628' }}>{post.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT GALLERY ── */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="section-tag mb-4">Visual Portfolio</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#0a1628' }}>
              Project <span className="gold-text">Gallery</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Experience the quality of our craftsmanship through these featured snapshots of our architectural and fit-out projects across Dubai.
            </p>
            <div className="gold-line w-20 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[800px] md:h-[600px]">
            {/* Main Featured Image */}
            <div className="md:col-span-7 relative group overflow-hidden rounded-sm hover-lift cursor-pointer shadow-lg">
              <Image
                src="/images/gallery-main.png"
                alt="Luxury Villa Interior"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                <div>
                  <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-1">Interior Fit-Out</div>
                  <h4 className="text-white text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Palm Jumeirah Villa</h4>
                </div>
              </div>
            </div>

            {/* Vertical Stack */}
            <div className="md:col-span-5 flex flex-col gap-6">
              <div className="relative h-1/2 group overflow-hidden rounded-sm hover-lift cursor-pointer shadow-lg">
                <Image
                  src="/images/gallery-2.png"
                  alt="Dubai Skyscraper"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-1">Architecture</div>
                    <h4 className="text-white text-lg font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>Business Bay Tower</h4>
                  </div>
                </div>
              </div>
              <div className="relative h-1/2 group overflow-hidden rounded-sm hover-lift cursor-pointer shadow-lg">
                <Image
                  src="/images/gallery-3.png"
                  alt="Modern Office"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-1">Commercial</div>
                    <h4 className="text-white text-lg font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>DIFC Corporate Office</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/projects" className="btn-outline">
              Explore All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="py-16 relative overflow-hidden" style={{ background: '#0d1f3c' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 60% 50%, #c9a84c 0%, transparent 60%)' }} />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="section-tag mb-5">Get Started</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Build Your Vision?
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            Our expert team is ready to guide your project from planning through completion. Contact us today for a customized consultation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-gold">
              Request Consultation <ArrowRight size={15} />
            </Link>
            <Link href="/services" className="btn-outline">
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
