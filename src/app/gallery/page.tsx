'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Camera, ArrowRight, Expand } from 'lucide-react';

const GALLERY_IMAGES = [
  {
    id: 1,
    src: '/images/gallery-main.png',
    title: 'Palm Jumeirah Villa',
    category: 'Interior Fit-Out',
    span: 'md:col-span-8 md:row-span-2',
  },
  {
    id: 2,
    src: '/images/gallery-2.png',
    title: 'Business Bay Tower',
    category: 'Architecture',
    span: 'md:col-span-4 md:row-span-1',
  },
  {
    id: 3,
    src: '/images/gallery-3.png',
    title: 'DIFC Corporate Office',
    category: 'Commercial',
    span: 'md:col-span-4 md:row-span-1',
  },
  {
    id: 4,
    src: '/images/about.png',
    title: 'Dubai Commercial Hub',
    category: 'Construction',
    span: 'md:col-span-4 md:row-span-1',
  },
  {
    id: 5,
    src: '/images/hero.png',
    title: 'Skyline Excellence',
    category: 'Design',
    span: 'md:col-span-8 md:row-span-1',
  }
];

export default function GalleryPage() {
  return (
    <div className="bg-white pt-24">
      {/* ── HEADER ── */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/hero.png" alt="Overlay" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="section-tag mb-5 mx-auto">Portfolio Showcase</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Project <span className="gold-text">Gallery</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            A visual journey through Al Tamdeen's most prestigious projects, showcasing our commitment to architectural excellence and premium fit-out solutions in Dubai.
          </p>
        </div>
      </section>

      {/* ── GRID ── */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] gap-6">
          {GALLERY_IMAGES.map((img) => (
            <div 
              key={img.id} 
              className={`${img.span} relative group overflow-hidden rounded-sm shadow-xl cursor-pointer`}
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="text-xs font-bold text-yellow-500 tracking-widest uppercase mb-2">{img.category}</div>
                  <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>{img.title}</h3>
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white backdrop-blur-md border border-white/20">
                    <Expand size={18} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#0a1628' }}>
            Have a Project in Mind?
          </h2>
          <p className="text-gray-600 mb-10">
            Let our experts bring your vision to life with the same level of detail and quality shown in our portfolio.
          </p>
          <Link href="/contact" className="btn-gold inline-flex">
            Get Started Now <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
