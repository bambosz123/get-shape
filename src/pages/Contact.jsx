import { Link } from 'react-router-dom';

export default function Contact() {
    return (
        <div className="min-h-screen bg-bg text-txt">
            <div className="max-w-3xl mx-auto px-8 py-20">
                <Link
                    to="/"
                    className="text-accent text-sm uppercase tracking-wider no-underline hover:opacity-80 transition-opacity"
                    style={{ fontFamily: 'var(--font-roboto)', fontWeight: 500 }}
                >
                    ← Back to Home
                </Link>

                <h1
                    className="text-4xl sm:text-5xl uppercase mt-8 mb-8"
                    style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}
                >
                    Contact Us
                </h1>

                <div
                    className="text-gray-400 text-sm leading-relaxed space-y-8"
                    style={{ fontFamily: 'var(--font-roboto)', fontWeight: 300 }}
                >
                    <p className="text-base text-gray-300">
                        Got questions about the 30-Day Shred Challenge? Need help with your order?
                        We're here for you.
                    </p>

                    <div
                        className="p-8 border border-gray-700 rounded-sm"
                        style={{ background: 'linear-gradient(135deg, #141414, #0f0f0f)' }}
                    >
                        <h2 className="text-white text-xl uppercase mb-6" style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}>
                            Get In Touch
                        </h2>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div>
                                    <p className="text-white text-sm uppercase tracking-wider mb-1" style={{ fontFamily: 'var(--font-oswald)', fontWeight: 600 }}>
                                        Email
                                    </p>
                                    <a href="mailto:support@30dayshred.com" className="text-accent hover:underline">
                                        support@30dayshred.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <div>
                                    <p className="text-white text-sm uppercase tracking-wider mb-1" style={{ fontFamily: 'var(--font-oswald)', fontWeight: 600 }}>
                                        Response Time
                                    </p>
                                    <p>We typically respond within 24 hours.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                                </svg>
                                <div>
                                    <p className="text-white text-sm uppercase tracking-wider mb-1" style={{ fontFamily: 'var(--font-oswald)', fontWeight: 600 }}>
                                        Refunds
                                    </p>
                                    <p>100% money-back guarantee within 30 days. Just email us and we'll process it — no questions asked.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="p-8 border border-gray-700 rounded-sm"
                        style={{ background: 'linear-gradient(135deg, #141414, #0f0f0f)' }}
                    >
                        <h2 className="text-white text-xl uppercase mb-4" style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}>
                            FAQ
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <p className="text-white text-sm mb-1" style={{ fontFamily: 'var(--font-oswald)', fontWeight: 600 }}>
                                    What equipment do I need?
                                </p>
                                <p>A pair of dumbbells is all you need. Adjustable dumbbells are recommended but not required.</p>
                            </div>
                            <div>
                                <p className="text-white text-sm mb-1" style={{ fontFamily: 'var(--font-oswald)', fontWeight: 600 }}>
                                    How do I receive the program?
                                </p>
                                <p>After payment, you'll be redirected to download the PDF instantly. You'll also receive it via email.</p>
                            </div>
                            <div>
                                <p className="text-white text-sm mb-1" style={{ fontFamily: 'var(--font-oswald)', fontWeight: 600 }}>
                                    Is this suitable for beginners?
                                </p>
                                <p>The program includes modifications for different fitness levels. However, some prior training experience is recommended.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
