import { Link } from 'react-router-dom';

export default function Terms() {
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
                    Terms of Service
                </h1>

                <div
                    className="text-gray-400 text-sm leading-relaxed space-y-6"
                    style={{ fontFamily: 'var(--font-roboto)', fontWeight: 300 }}
                >
                    <p><strong className="text-white">Last Updated:</strong> February 2026</p>

                    <h2 className="text-white text-xl uppercase mt-8" style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}>
                        1. Product Description
                    </h2>
                    <p>
                        The 30-Day Shred Challenge is a digital fitness program delivered as a downloadable PDF document.
                        The program includes workout routines, nutritional guidance, and recovery protocols designed for
                        individuals with access to basic equipment (dumbbells).
                    </p>

                    <h2 className="text-white text-xl uppercase mt-8" style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}>
                        2. Purchase & Delivery
                    </h2>
                    <p>
                        Upon successful payment, you will receive immediate access to download the PDF. All payments
                        are processed securely through Stripe. The purchase is a one-time payment with no recurring charges.
                    </p>

                    <h2 className="text-white text-xl uppercase mt-8" style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}>
                        3. Refund Policy
                    </h2>
                    <p>
                        We offer a 100% money-back guarantee. If you are not satisfied with the product, contact us
                        within 30 days of purchase for a full refund. No questions asked.
                    </p>

                    <h2 className="text-white text-xl uppercase mt-8" style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}>
                        4. Disclaimer
                    </h2>
                    <p>
                        This program is for informational purposes only and is not a substitute for professional medical
                        advice. Always consult a physician before starting any new exercise or diet program. Results may
                        vary depending on individual effort, body type, and adherence to the program.
                    </p>

                    <h2 className="text-white text-xl uppercase mt-8" style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}>
                        5. Intellectual Property
                    </h2>
                    <p>
                        All content within the 30-Day Shred Challenge PDF is protected by copyright. You may not
                        reproduce, distribute, or resell the content without written permission from the author.
                    </p>

                    <h2 className="text-white text-xl uppercase mt-8" style={{ fontFamily: 'var(--font-oswald)', fontWeight: 700 }}>
                        6. Limitation of Liability
                    </h2>
                    <p>
                        We are not responsible for any injury, health issue, or adverse effect resulting from following
                        the program. By purchasing, you agree that you use the program at your own risk and assume full
                        responsibility for your actions.
                    </p>
                </div>
            </div>
        </div>
    );
}
