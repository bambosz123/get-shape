import { motion } from 'framer-motion';

export default function WarningMarquee() {
    const text = 'WARNING: DUMBBELLS REQUIRED • NOT FOR THE UNCOMMITTED • ';
    const repeated = text.repeat(12);

    return (
        <div className="diagonal-ribbon bg-accent py-3 select-none">
            <div className="marquee-track whitespace-nowrap flex">
                <span
                    className="text-white text-sm tracking-[0.2em] uppercase"
                    style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}
                >
                    {repeated}
                </span>
            </div>
        </div>
    );
}
