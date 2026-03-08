import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Insights & Blog | Al Tamdeen Construction Dubai',
    description: 'Expert insights on Dubai construction trends, authority approval guides, interior design innovations, and MEP engineering from Al Tamdeen Construction.',
};

const extraPosts = [
    { id: 4, title: 'MEP Engineering Best Practices for Commercial Buildings', category: 'MEP Engineering', date: '10 Jan 2025', readTime: '6 min read', excerpt: 'Effective MEP design is the backbone of any successful commercial project. We explore the latest practices for energy-efficient and code-compliant MEP systems in Dubai.', image: '/images/about.png' },
    { id: 5, title: 'How to Plan a Successful Fit-Out Project in Dubai', category: 'Fit-Out', date: '05 Jan 2025', readTime: '7 min read', excerpt: 'From authority approvals to final handover, this guide covers everything you need to plan and execute a successful commercial fit-out in Dubai\'s competitive market.', image: '/images/retail.png' },
    { id: 6, title: 'Dubai Construction Safety Standards: What You Need to Know', category: 'Construction', date: '20 Dec 2024', readTime: '5 min read', excerpt: 'Understanding Dubai\'s Health, Safety & Environment (HSE) requirements is critical for all construction operations. Here\'s a comprehensive overview.', image: '/images/services.png' },
];

const allPosts = [...BLOG_POSTS, ...extraPosts];

export default function BlogPage() {
    return (
        <div className="min-h-screen">
            {/* Hero */}
            <section className="pt-52 pb-20" style={{ background: '#0a1628' }}>
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="section-tag mb-4">Knowledge Hub</div>
                    <h1 className="text-5xl font-bold text-white mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Insights & <span className="gold-text">Expertise</span>
                    </h1>
                    <p className="text-white/55 max-w-xl mx-auto">
                        Expert knowledge on Dubai construction, authority approvals, architectural design, and MEP engineering.
                    </p>
                </div>
            </section>

            {/* Featured Article */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="section-tag mb-6">Featured Article</div>
                    <div className="grid lg:grid-cols-2 gap-10 items-center rounded-sm overflow-hidden" style={{ border: '1px solid #e5e7eb' }}>
                        <div className="relative h-80">
                            <Image src={allPosts[0].image} alt={allPosts[0].title} fill className="object-cover" />
                        </div>
                        <div className="p-10">
                            <span className="text-xs font-semibold px-2.5 py-1 rounded-sm mb-4 inline-block" style={{ background: 'rgba(201,168,76,0.1)', color: '#a87d2e', border: '1px solid rgba(201,168,76,0.25)' }}>
                                {allPosts[0].category}
                            </span>
                            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#0a1628' }}>{allPosts[0].title}</h2>
                            <p className="text-gray-500 leading-relaxed mb-6">{allPosts[0].excerpt}</p>
                            <div className="flex items-center gap-4 text-xs text-gray-400 mb-6">
                                <span>{allPosts[0].date}</span>
                                <span className="flex items-center gap-1"><Clock size={11} /> {allPosts[0].readTime}</span>
                            </div>
                            <Link href="#" className="btn-gold text-sm">Read Article <ArrowRight size={14} /></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* All Posts */}
            <section className="py-16" style={{ background: '#f5f5f0' }}>
                <div className="max-w-7xl mx-auto px-6">
                    <div className="section-tag mb-8">All Articles</div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allPosts.slice(1).map(post => (
                            <div key={post.id} className="bg-white group card-lift rounded-sm overflow-hidden" style={{ border: '1px solid #e5e7eb' }}>
                                <div className="relative h-48 overflow-hidden">
                                    <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute top-3 left-3">
                                        <span className="text-xs font-semibold px-2 py-1 rounded-sm" style={{ background: 'rgba(10,22,40,0.85)', color: '#c9a84c' }}>
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-2.5">
                                        <span>{post.date}</span><span>·</span>
                                        <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                                    </div>
                                    <h3 className="font-bold text-base mb-2 group-hover:text-yellow-700 transition-colors leading-snug" style={{ fontFamily: 'Playfair Display, serif', color: '#0a1628' }}>
                                        {post.title}
                                    </h3>
                                    <p className="text-xs text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
                                    <Link href="#" className="text-xs font-semibold flex items-center gap-1 transition-colors hover:text-yellow-600" style={{ color: '#a87d2e' }}>
                                        Read More <ArrowRight size={12} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
