import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="py-12 border-t border-gray-800" style={{ background: '#060606' }}>
            <div className="max-w-6xl mx-auto px-8">
                <div className="flex flex-col items-center gap-6 text-center">
                    <div>
                        <p
                            className="text-white text-xl uppercase"
                            style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}
                        >
                            30-Day Shred<span className="text-accent">.</span>
                        </p>
                        <p
                            className="text-gray-500 text-xs mt-1"
                            style={{ fontFamily: 'var(--font-roboto)' }}
                        >
                            &copy; {new Date().getFullYear()} 30-Day Shred Challenge. All rights reserved.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <Link
                            to="/privacy"
                            className="text-gray-500 hover:text-accent text-xs uppercase tracking-wider transition-colors no-underline"
                            style={{ fontFamily: 'var(--font-roboto)', fontWeight: 500 }}
                        >
                            Privacy
                        </Link>
                        <Link
                            to="/terms"
                            className="text-gray-500 hover:text-accent text-xs uppercase tracking-wider transition-colors no-underline"
                            style={{ fontFamily: 'var(--font-roboto)', fontWeight: 500 }}
                        >
                            Terms
                        </Link>
                        <Link
                            to="/contact"
                            className="text-gray-500 hover:text-accent text-xs uppercase tracking-wider transition-colors no-underline"
                            style={{ fontFamily: 'var(--font-roboto)', fontWeight: 500 }}
                        >
                            Contact
                        </Link>
                    </div>
                </div>

                <p
                    className="text-gray-600 text-[10px] text-center mt-8 leading-relaxed max-w-2xl mx-auto"
                    style={{ fontFamily: 'var(--font-roboto)' }}
                >
                    Disclaimer: Results vary. This program is for informational purposes only and is not medical advice.
                    Consult a physician before starting any new exercise or diet program.
                </p>
            </div>

            {/* Bottom padding for mobile sticky bar */}
            <div className="h-16 md:hidden" />
        </footer>
    );
}
