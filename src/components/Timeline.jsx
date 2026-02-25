import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const weeks = [
    {
        week: 1,
        title: 'FOUNDATION',
        desc: 'Build the base. Master form, fire up your metabolism, and establish the habits that carry you through 30 days.',
        detail: 'Full-Body Dumbbell Circuits + Nutrition Setup',
        workouts: ['Push/Pull Split', 'Core & Conditioning', 'Full-Body Strength', 'Active Recovery'],
    },
    {
        week: 2,
        title: 'ESCALATION',
        desc: 'Volume goes up. Intensity goes up. Your body starts adapting — we make sure it can\'t get comfortable.',
        detail: 'Progressive Overload + Supersets + HIIT',
        workouts: ['Upper Hypertrophy', 'Lower Power', 'Metabolic Conditioning', 'Dumbbell Complexes'],
    },
    {
        week: 3,
        title: 'WAR PHASE',
        desc: 'The hardest week. Drop sets, giant sets, and metabolic finishers designed to shatter plateaus.',
        detail: 'Giant Sets + EMOM + Tabata Finishers',
        workouts: ['Push Destroy', 'Pull Annihilate', 'Legs & Core Warfare', 'Full-Body AMRAP'],
    },
    {
        week: 4,
        title: 'THE REVEAL',
        desc: 'Peak week. Strategic deload, carb timing, and final conditioning to reveal the physique you built.',
        detail: 'Peak Protocol + Benchmark Tests + Progress Photos',
        workouts: ['Strength Test', 'Shred Circuit', 'Active Recovery', 'Final Assessment'],
    },
];

function WeekItem({ item, index }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <div ref={ref} className="flex flex-col items-center text-center">
            {/* Week circle */}
            <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                className="w-16 h-16 rounded-full bg-accent flex items-center justify-center z-10 border-4 border-bg text-sm mb-5"
                style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}
            >
                W{item.week}
            </motion.div>

            {/* Card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="w-full max-w-2xl"
            >
                <div
                    className="p-8 rounded-sm border border-gray-700 hover:border-accent transition-colors duration-300 text-center"
                    style={{ background: 'linear-gradient(135deg, #1a1a1a, #111111)' }}
                >
                    <p
                        className="text-accent text-xs tracking-[0.2em] uppercase mb-1"
                        style={{ fontFamily: 'var(--font-roboto)', fontWeight: 500 }}
                    >
                        Week {item.week}
                    </p>
                    <h3
                        className="text-3xl sm:text-4xl uppercase"
                        style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}
                    >
                        {item.title}
                    </h3>
                    <p
                        className="text-gray-400 text-sm mt-3 leading-relaxed max-w-lg mx-auto"
                        style={{ fontFamily: 'var(--font-roboto)', fontWeight: 300 }}
                    >
                        {item.desc}
                    </p>

                    {/* Workout tags */}
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                        {item.workouts.map((w) => (
                            <span
                                key={w}
                                className="bg-gray-800 text-gray-400 text-xs px-3 py-1 rounded-sm uppercase tracking-wider"
                                style={{ fontFamily: 'var(--font-roboto)' }}
                            >
                                {w}
                            </span>
                        ))}
                    </div>

                    <div
                        className="mt-4 inline-block border border-accent/30 text-accent text-xs px-4 py-1.5 rounded-sm uppercase tracking-wider"
                        style={{ fontFamily: 'var(--font-roboto)', fontWeight: 500 }}
                    >
                        {item.detail}
                    </div>
                </div>
            </motion.div>

            {/* Connector line (except last item) */}
            {index < weeks.length - 1 && (
                <div className="w-1 h-12 bg-gray-700 relative">
                    <motion.div
                        className="absolute inset-0 bg-accent origin-top"
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    />
                </div>
            )}
        </div>
    );
}

export default function Timeline() {
    return (
        <section id="program" className="py-24 sm:py-32 relative">
            <div className="max-w-6xl mx-auto px-8">
                {/* Section heading */}
                <div className="text-center mb-16">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-accent text-sm tracking-[0.3em] uppercase mb-3"
                        style={{ fontFamily: 'var(--font-roboto)', fontWeight: 500 }}
                    >
                        The Complete Program
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl sm:text-5xl md:text-6xl uppercase"
                        style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}
                    >
                        4 Weeks. <span className="text-accent">Zero Mercy.</span>
                    </motion.h2>
                </div>

                {/* Timeline — single centered column */}
                <div className="flex flex-col items-center">
                    {weeks.map((item, i) => (
                        <WeekItem key={item.week} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
