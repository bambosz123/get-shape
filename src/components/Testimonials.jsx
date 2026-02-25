import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Marcus T.',
        label: 'Lost 14 lbs in 30 days',
        text: "I've tried dozens of programs. This is the first one that didn't waste my time with theory. Dumbbells, clear instructions, and results. By week 3, I looked like a different person.",
    },
    {
        name: 'Jake R.',
        label: 'Visible abs by Week 3',
        text: "The workouts are brutal but efficient. 45 minutes with my dumbbells and done. The nutrition guide alone is worth 10x the price. My wife noticed the difference by Week 2.",
    },
    {
        name: 'Chris D.',
        label: 'Down 3 belt notches',
        text: "Skeptical at first — $9 for a PDF? But this thing is a weapon. 30 days, a pair of dumbbells, and I'm in the best shape of my life. Already bought it for my brother.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 sm:py-32" style={{ background: '#0A0A0A' }}>
            <div className="max-w-6xl mx-auto px-8">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent text-sm tracking-[0.3em] uppercase mb-3"
                        style={{ fontFamily: 'var(--font-roboto)', fontWeight: 500 }}
                    >
                        Real Results
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl uppercase"
                        style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}
                    >
                        Men Who <span className="text-accent">Did The Work</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.12 }}
                            className="p-7 border border-gray-700 rounded-sm relative text-center md:text-left"
                            style={{ background: 'linear-gradient(135deg, #141414, #0f0f0f)' }}
                        >
                            <span
                                className="absolute top-4 right-6 text-accent/20 text-6xl leading-none"
                                style={{ fontFamily: 'serif' }}
                            >
                                &ldquo;
                            </span>

                            <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
                                <div
                                    className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm"
                                    style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}
                                >
                                    {t.name.charAt(0)}
                                </div>
                                <div className="text-left">
                                    <p
                                        className="text-white text-sm"
                                        style={{ fontFamily: 'var(--font-oswald)', fontWeight: 600 }}
                                    >
                                        {t.name}
                                    </p>
                                    <p
                                        className="text-accent text-xs uppercase tracking-wider"
                                        style={{ fontFamily: 'var(--font-roboto)', fontWeight: 500 }}
                                    >
                                        {t.label}
                                    </p>
                                </div>
                            </div>

                            <p
                                className="text-gray-400 text-sm leading-relaxed relative z-10"
                                style={{ fontFamily: 'var(--font-roboto)', fontWeight: 300 }}
                            >
                                &ldquo;{t.text}&rdquo;
                            </p>

                            <div className="flex gap-1 mt-4 justify-center md:justify-start">
                                {[...Array(5)].map((_, j) => (
                                    <svg key={j} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
