'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Minimum loading time for the splash effect
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a1628]"
                >
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="flex flex-col items-center"
                        >
                            <div className="relative w-48 h-48 mb-8">
                                <Image
                                    src="/images/logo.png"
                                    alt="Al Tamdeen Logo"
                                    fill
                                    className="object-contain"
                                    style={{ filter: "brightness(0) saturate(100%) invert(70%) sepia(30%) saturate(800%) hue-rotate(5deg) brightness(100%) contrast(100%)" }}
                                    priority
                                />
                            </div>

                            {/* Premium Loading Bar */}
                            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                    className="h-full bg-gradient-to-r from-[#a87d2e] to-[#e4c36a]"
                                />
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="mt-4 text-[10px] tracking-[0.3em] uppercase text-white/40 font-medium"
                            >
                                Building Visions
                            </motion.div>
                        </motion.div>

                        {/* Background subtle glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold/5 rounded-full blur-[80px] -z-10" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
