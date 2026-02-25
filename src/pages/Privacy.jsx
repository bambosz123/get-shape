import { Link } from 'react-router-dom';

export default function Privacy() {
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
                    Privacy Policy
                </h1>

                <div
                    className="text-gray-400 text-sm leading-relaxed space-y-6"
                    style={{ fontFamily: 'var(--font-roboto)', fontWeight: 300 }}
                >
                    <p><strong className="text-white">Last Updated:</strong> February 2026</p>

                    <h2 className="text-white text-xl uppercase mt-8" style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}>
                        1. Information We Collect
                    </h2>
                    <p>
                        When you purchase or interact with the 30-Day Shred Challenge, we may collect personal information
                        such as your name, email address, and payment details. Payment processing is handled securely through
                        Stripe and we do not store your credit card information on our servers.
                    </p>

                    <h2 className="text-white text-xl uppercase mt-8" style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}>
                        2. How We Use Your Information
                    </h2>
                    <p>
                        We use your information to deliver your purchased product (PDF), send order confirmations,
                        provide customer support, and — with your consent — send occasional updates about related
                        products. We never sell your personal data to third parties.
                    </p>

                    <h2 className="text-white text-xl uppercase mt-8" style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}>
                        3. Cookies
                    </h2>
                    <p>
                        Our website may use essential cookies to ensure the site functions properly and analytics
                        cookies to understand how visitors use the site. You can control cookie settings through
                        your browser preferences.
                    </p>

                    <h2 className="text-white text-xl uppercase mt-8" style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}>
                        4. Data Security
                    </h2>
                    <p>
                        We take reasonable measures to protect your personal information using encryption and
                        secure protocols. Payment processing is handled by Stripe, which is PCI-DSS compliant.
                    </p>

                    <h2 className="text-white text-xl uppercase mt-8" style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}>
                        5. Your Rights
                    </h2>
                    <p>
                        You have the right to access, correct, or delete your personal data at any time.
                        To exercise these rights, contact us at the email address provided on our Contact page.
                    </p>

                    <h2 className="text-white text-xl uppercase mt-8" style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}>
                        6. Changes to This Policy
                    </h2>
                    <p>
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page
                        with an updated revision date.
                    </p>
                </div>
            </div>
        </div>
    );
}
