'use client';
import { useState, useEffect, useRef } from 'react';

const stats = [
    { value: 10, suffix: '+', label: 'Years Experience', desc: 'Serving Dubai\'s construction market' },
    { value: 100, suffix: '+', label: 'Authority Approvals', desc: 'DM, DCD, Trakhees, DEWA & more' },
    { value: 200, suffix: '+', label: 'Projects Delivered', desc: 'Residential, commercial & industrial' },
    { value: 50, suffix: '+', label: 'Expert Team Members', desc: 'Architects, engineers & specialists' },
];

function useCountUp(target: number, duration = 2000, start: boolean = false) {
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCurrent(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [target, duration, start]);
    return current;
}

function StatCard({ stat, active }: { stat: typeof stats[0]; active: boolean }) {
    const count = useCountUp(stat.value, 1800, active);
    return (
        <div className="text-center p-8">
            <div className="text-5xl md:text-6xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#c9a84c' }}>
                {count}{stat.suffix}
            </div>
            <div className="text-white font-semibold text-lg mb-1">{stat.label}</div>
            <div className="text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>{stat.desc}</div>
        </div>
    );
}

export default function AnimatedStats() {
    const [active, setActive] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setActive(true); },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} className="py-20" style={{ background: '#0a1628', borderTop: '1px solid rgba(201,168,76,0.15)', borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0" style={{ '--tw-divide-opacity': '0.15', borderColor: 'rgba(201,168,76,0.15)' } as React.CSSProperties}>
                    {stats.map(s => (
                        <StatCard key={s.label} stat={s} active={active} />
                    ))}
                </div>
            </div>
        </section>
    );
}
