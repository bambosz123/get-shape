import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0A0A0A 0%, #111111 50%, #0A0A0A 100%)' }}
        >
            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative z-10 w-full max-w-6xl mx-auto px-8 py-24">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20">
                    {/* LEFT — Copy */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                        >
                            <p
                                className="text-accent text-sm tracking-[0.3em] uppercase mb-5"
                                style={{ fontFamily: 'var(--font-roboto)', fontWeight: 500 }}
                            >
                                Limited Time — Instant Access
                            </p>
                            <h1
                                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl uppercase leading-[0.85] tracking-tight"
                                style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}
                            >
                                No
                                <br />
                                Excuses.
                                <br />
                                <span className="text-accent">30 Days.</span>
                            </h1>
                            <p
                                className="text-gray-400 text-base sm:text-lg mt-7 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                                style={{ fontFamily: 'var(--font-roboto)', fontWeight: 300 }}
                            >
                                The raw, no-BS shred protocol that transforms your physique in 30 days.
                                Designed for men who have a pair of dumbbells and zero excuses.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mt-8 flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start"
                        >
                            <a href="https://buy.stripe.com/7sY3cv7WteRe0M59ckeUU02" className="cta-btn px-10 py-4 text-lg sm:text-xl no-underline">
                                Get The Shred — $9
                            </a>
                            <div className="flex items-center gap-2">
                                <span className="inline-block w-3 h-3 rounded-full bg-accent pulse-dot" />
                                <span
                                    className="text-sm text-gray-400 uppercase tracking-wider"
                                    style={{ fontFamily: 'var(--font-roboto)', fontWeight: 500 }}
                                >
                                    Immediate PDF Download
                                </span>
                            </div>
                        </motion.div>

                        {/* Social proof chips */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start"
                        >
                            {['2,400+ Downloads', '4.9 ★ Rating', '100% Money-Back'].map((t) => (
                                <span
                                    key={t}
                                    className="text-xs uppercase tracking-widest border border-gray-700 rounded-full px-4 py-2 text-gray-400"
                                    style={{ fontFamily: 'var(--font-roboto)' }}
                                >
                                    {t}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT — 3D Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex-shrink-0"
                    >
                        <div className="mockup-float" style={{ perspective: '1200px' }}>
                            <div
                                className="relative w-[280px] sm:w-[320px] lg:w-[360px] rounded-sm overflow-hidden"
                                style={{
                                    transformStyle: 'preserve-3d',
                                    boxShadow: '20px 30px 80px rgba(255,42,42,0.18), 0 0 120px rgba(255,42,42,0.06)',
                                }}
                            >
                                <div
                                    className="w-full aspect-[3/4] relative flex flex-col items-center justify-center p-8"
                                    style={{
                                        background: 'linear-gradient(160deg, #1a1a1a 0%, #0a0a0a 60%, #1a0000 100%)',
                                        border: '2px solid rgba(255,42,42,0.3)',
                                    }}
                                >
                                    <div
                                        className="absolute top-0 right-0 w-full h-full overflow-hidden"
                                        style={{ clipPath: 'polygon(60% 0, 100% 0, 100% 50%)' }}
                                    >
                                        <div className="w-full h-full bg-accent opacity-20" />
                                    </div>

                                    <span
                                        className="absolute top-6 left-0 bg-accent text-white text-[10px] tracking-[0.25em] uppercase px-4 py-1"
                                        style={{ fontFamily: 'var(--font-roboto)', fontWeight: 700 }}
                                    >
                                        Official Program
                                    </span>

                                    <div className="text-center z-10 mt-4">
                                        <p
                                            className="text-accent text-3xl sm:text-4xl leading-none"
                                            style={{ fontFamily: 'var(--font-teko)', fontWeight: 700 }}
                                        >
                                            30-DAY
                                        </p>
                                        <h2
                                            className="text-white text-5xl sm:text-6xl leading-[0.9] mt-1"
                                            style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}
                                        >
                                            SHRED
                                        </h2>
                                        <h2
                                            className="text-white text-5xl sm:text-6xl leading-[0.9]"
                                            style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}
                                        >
                                            CHALLENGE
                                        </h2>
                                        <div className="w-12 h-[3px] bg-accent mx-auto mt-3" />
                                        <p
                                            className="text-gray-400 text-[10px] tracking-[0.2em] uppercase mt-3"
                                            style={{ fontFamily: 'var(--font-roboto)' }}
                                        >
                                            The Ultimate Fat Loss Protocol
                                        </p>
                                    </div>

                                    <div className="absolute bottom-6 flex items-center gap-2">
                                        <span
                                            className="bg-accent text-white text-lg px-3 py-1"
                                            style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}
                                        >
                                            $9
                                        </span>
                                        <span className="text-gray-500 text-xs line-through">$49</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-gray-600 text-xs uppercase tracking-widest" style={{ fontFamily: 'var(--font-roboto)' }}>
                    Scroll
                </span>
                <div className="w-[1px] h-8 bg-gradient-to-b from-accent to-transparent" />
            </motion.div>
        </section>
    );
}
