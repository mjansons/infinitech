import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function PrivacyPolicy() {
    const headerSections = {
        about: { section: "About", href: "about" },
        services: { section: "Services", href: "services" },
        results: { section: "Results", href: "results" },
        faq: { section: "FAQ", href: "faq" },
    };

    return (
        <>
            <Header sectionButtons={headerSections} />
            <main className={styles.main}>
                <article className={styles.article}>
                    <br />
                    <h1>Privacy Policy</h1>
                    <p className={styles.updated}>
                        Last updated: March 30, 2026
                    </p>

                    <section>
                        <h2>1. Who We Are</h2>
                        <p>
                            SIA infinitech (&quot;we&quot;, &quot;us&quot;,
                            &quot;our&quot;) is a company registered in Latvia,
                            Riga. We are committed to protecting and respecting
                            your privacy in accordance with the General Data
                            Protection Regulation (EU) 2016/679
                            (&quot;GDPR&quot;) and applicable Latvian data
                            protection laws.
                        </p>
                    </section>

                    <section>
                        <h2>2. What Data We Collect</h2>
                        <p>
                            We may collect and process the following personal
                            data:
                        </p>
                        <ul>
                            <li>
                                <strong>Contact information</strong> — name,
                                email address, and any details you provide
                                through our contact form.
                            </li>
                            <li>
                                <strong>Technical data</strong> — IP address,
                                browser type and version, operating system, and
                                device information collected automatically when
                                you visit our website.
                            </li>
                            <li>
                                <strong>Usage data</strong> — pages visited,
                                time spent on pages, and navigation paths,
                                collected through analytics cookies (only with
                                your consent).
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. How We Use Your Data</h2>
                        <p>
                            We process your personal data for the following
                            purposes:
                        </p>
                        <ul>
                            <li>
                                To respond to your inquiries submitted via the
                                contact form.
                            </li>
                            <li>
                                To improve our website and services based on
                                aggregated usage analytics (with your consent).
                            </li>
                            <li>To comply with legal obligations.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>4. Legal Basis for Processing</h2>
                        <p>We process your data based on:</p>
                        <ul>
                            <li>
                                <strong>Consent</strong> — for analytics and
                                marketing cookies (Article 6(1)(a) GDPR).
                            </li>
                            <li>
                                <strong>Legitimate interest</strong> — to
                                respond to your contact requests and improve our
                                services (Article 6(1)(f) GDPR).
                            </li>
                            <li>
                                <strong>Legal obligation</strong> — when
                                required by applicable law (Article 6(1)(c)
                                GDPR).
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>5. Cookies</h2>
                        <p>
                            Our website uses cookies to ensure functionality
                            and, with your consent, to analyze site usage and
                            assist with marketing efforts. You can manage your
                            cookie preferences at any time through the cookie
                            consent banner or your browser settings.
                        </p>
                        <p>We use the following types of cookies:</p>
                        <ul>
                            <li>
                                <strong>Necessary cookies</strong> — required
                                for the website to function properly. These
                                cannot be disabled.
                            </li>
                            <li>
                                <strong>Analytics cookies</strong> — help us
                                understand how visitors interact with the
                                website.
                            </li>
                            <li>
                                <strong>Marketing cookies</strong> — used to
                                deliver relevant advertisements and measure
                                campaign effectiveness.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>6. Data Sharing</h2>
                        <p>
                            We do not sell your personal data. We may share your
                            data with trusted third-party service providers who
                            assist us in operating our website and conducting
                            our business, provided they agree to keep your
                            information confidential and comply with GDPR.
                        </p>
                    </section>

                    <section>
                        <h2>7. Data Retention</h2>
                        <p>
                            We retain your personal data only for as long as
                            necessary to fulfill the purposes for which it was
                            collected, or as required by law. Contact form
                            submissions are retained for up to 12 months unless
                            a longer retention period is required.
                        </p>
                    </section>

                    <section>
                        <h2>8. Your Rights</h2>
                        <p>Under the GDPR, you have the right to:</p>
                        <ul>
                            <li>Access the personal data we hold about you.</li>
                            <li>Request correction of inaccurate data.</li>
                            <li>
                                Request deletion of your data (&quot;right to be
                                forgotten&quot;).
                            </li>
                            <li>Restrict or object to processing.</li>
                            <li>Data portability.</li>
                            <li>Withdraw consent at any time.</li>
                            <li>
                                Lodge a complaint with the Data State
                                Inspectorate of Latvia (Datu valsts inspekcija).
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>9. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy
                            or wish to exercise your rights, please contact us
                            through the contact form on our website or reach out
                            to us directly at our registered address in Riga,
                            Latvia.
                        </p>
                    </section>
                </article>
                <Footer sectionButtons={headerSections} />
            </main>
        </>
    );
}
