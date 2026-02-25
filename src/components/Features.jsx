import { motion } from 'framer-motion';

const features = [
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Zero Fluff',
        desc: 'Every rep, every set, every meal — mapped out for 30 days. No guesswork, no filler content. Just results.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: '45-Min Sessions',
        desc: 'Maximum output in minimum time. Designed for busy men who train before dawn or after dark.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
        ),
        title: 'Nutrition Guide',
        desc: 'Complete 30-day meal plan with macros, meal timing, and supplement protocol included.',
    },
    {
        icon: (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
        ),
        title: 'Dumbbells Only',
        desc: 'All you need is a pair of dumbbells. Every workout built around minimal equipment for maximum gains.',
    },
];

export default function Features() {
    return (
        <section className="py-24 sm:py-32" style={{ background: '#0d0d0d' }}>
            <div className="max-w-6xl mx-auto px-8">
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent text-sm tracking-[0.3em] uppercase mb-3"
                        style={{ fontFamily: 'var(--font-roboto)', fontWeight: 500 }}
                    >
                        What You Get
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl uppercase"
                        style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}
                    >
                        Built To <span className="text-accent">Destroy</span> Excuses
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {features.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="p-8 border border-gray-700 rounded-sm hover:border-accent transition-colors duration-300 group text-center sm:text-left"
                            style={{ background: 'linear-gradient(135deg, #141414, #0f0f0f)' }}
                        >
                            <div className="text-accent mb-4 flex justify-center sm:justify-start group-hover:scale-110 transition-transform duration-300">
                                {f.icon}
                            </div>
                            <h3
                                className="text-xl sm:text-2xl uppercase mb-2"
                                style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}
                            >
                                {f.title}
                            </h3>
                            <p
                                className="text-gray-400 text-sm leading-relaxed"
                                style={{ fontFamily: 'var(--font-roboto)', fontWeight: 300 }}
                            >
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
