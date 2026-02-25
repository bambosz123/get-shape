import { useState, useEffect } from 'react';

export default function StickyMobileBar() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setShow(window.scrollY > 400);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${show ? 'translate-y-0' : 'translate-y-full'
                }`}
        >
            <div className="bg-accent flex items-center justify-between px-5 py-3 safe-area-bottom">
                <div>
                    <p
                        className="text-white text-xs uppercase tracking-wider opacity-80"
                        style={{ fontFamily: 'var(--font-roboto)', fontWeight: 500 }}
                    >
                        30-Day Shred Challenge
                    </p>
                    <div className="flex items-center gap-2">
                        <span
                            className="text-white text-2xl"
                            style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}
                        >
                            $9
                        </span>
                        <span className="text-white/60 text-sm line-through" style={{ fontFamily: 'var(--font-oswald)' }}>
                            $49
                        </span>
                    </div>
                </div>
                <a
                    href="https://buy.stripe.com/7sY3cv7WteRe0M59ckeUU02"
                    className="bg-white text-accent px-6 py-2.5 uppercase text-sm no-underline tracking-wider"
                    style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}
                >
                    Access Now
                </a>
            </div>
        </div>
    );
}
