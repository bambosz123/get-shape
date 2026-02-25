import { motion } from 'framer-motion';

export default function CTASection() {
    return (
        <section
            id="cta"
            className="py-24 sm:py-32 relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #120000 50%, #0A0A0A 100%)' }}
        >
            {/* Radial glow */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10"
                style={{ background: 'radial-gradient(circle, #FF2A2A 0%, transparent 70%)' }}
            />

            <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p
                        className="text-accent text-sm tracking-[0.3em] uppercase mb-4"
                        style={{ fontFamily: 'var(--font-roboto)', fontWeight: 500 }}
                    >
                        Stop Overthinking. Start Shredding.
                    </p>
                    <h2
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-[0.85]"
                        style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}
                    >
                        Are You In<span className="text-accent">?</span>
                    </h2>
                    <p
                        className="text-gray-400 text-base sm:text-lg mt-6 max-w-xl mx-auto leading-relaxed"
                        style={{ fontFamily: 'var(--font-roboto)', fontWeight: 300 }}
                    >
                        One PDF. 30 days. A complete protocol for diet, training, and recovery — all you need is
                        a pair of dumbbells and the will to show up.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-10"
                >
                    {/* Price block */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className="text-gray-500 text-2xl line-through" style={{ fontFamily: 'var(--font-oswald)' }}>
                            $49
                        </span>
                        <span
                            className="text-6xl sm:text-7xl text-white"
                            style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}
                        >
                            $9
                        </span>
                        <span
                            className="bg-accent text-white text-xs tracking-wider uppercase px-3 py-1 rounded-sm"
                            style={{ fontFamily: 'var(--font-roboto)', fontWeight: 700 }}
                        >
                            82% Off
                        </span>
                    </div>

                    <a href="https://buy.stripe.com/7sY3cv7WteRe0M59ckeUU02" className="cta-btn px-14 py-5 text-xl sm:text-2xl no-underline inline-block">
                        Access The Challenge — $9
                    </a>

                    {/* Urgency */}
                    <div className="flex items-center justify-center gap-2 mt-6">
                        <span className="inline-block w-3 h-3 rounded-full bg-accent pulse-dot" />
                        <span
                            className="text-sm text-gray-400 uppercase tracking-wider"
                            style={{ fontFamily: 'var(--font-roboto)', fontWeight: 500 }}
                        >
                            Immediate PDF Download
                        </span>
                    </div>

                    {/* Trust badges */}
                    <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-gray-500">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <span className="text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-roboto)' }}>
                                Secure Checkout
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            <span className="text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-roboto)' }}>
                                Instant Delivery
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                            </svg>
                            <span className="text-xs uppercase tracking-wider" style={{ fontFamily: 'var(--font-roboto)' }}>
                                Money-Back Guarantee
                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
