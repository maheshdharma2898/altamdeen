'use client';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

type Testimonial = {
    name: string;
    role: string;
    project: string;
    text: string;
    rating: number;
};

export default function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
    const [current, setCurrent] = useState(0);
    const prev = () => setCurrent(i => (i - 1 + testimonials.length) % testimonials.length);
    const next = () => setCurrent(i => (i + 1) % testimonials.length);
    const t = testimonials[current];

    return (
        <div className="max-w-3xl mx-auto">
            <div
                className="relative p-10 rounded-sm"
                style={{ background: '#fff', border: '1px solid #e5e7eb', boxShadow: '0 20px 60px rgba(0,0,0,0.06)' }}
            >
                {/* Quote icon */}
                <div className="absolute -top-5 left-10">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: 'linear-gradient(135deg, #a87d2e, #e4c36a)' }}>
                        <Quote size={18} className="text-white" />
                    </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} size={16} fill="#c9a84c" style={{ color: '#c9a84c' }} />
                    ))}
                </div>

                <blockquote className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                    "{t.text}"
                </blockquote>

                <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                        <div className="font-bold text-sm" style={{ color: '#0a1628' }}>{t.name}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{t.role}</div>
                        <div className="text-xs mt-1 font-medium" style={{ color: '#c9a84c' }}>{t.project}</div>
                    </div>

                    <div className="flex items-center gap-2">
                        <button onClick={prev} className="w-9 h-9 flex items-center justify-center rounded-sm transition-all hover:scale-105" style={{ border: '1px solid #e5e7eb', color: '#6b7280' }}>
                            <ChevronLeft size={18} />
                        </button>
                        <div className="flex gap-1.5">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    className="h-1.5 rounded-full transition-all duration-300"
                                    style={{ width: i === current ? '24px' : '6px', background: i === current ? '#c9a84c' : '#e5e7eb' }}
                                />
                            ))}
                        </div>
                        <button onClick={next} className="w-9 h-9 flex items-center justify-center rounded-sm transition-all hover:scale-105" style={{ border: '1px solid #e5e7eb', color: '#6b7280' }}>
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
