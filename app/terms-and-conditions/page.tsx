import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./page.module.css";

export default function TermsAndConditions() {
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
                    <h1>Terms &amp; Conditions</h1>
                    <p className={styles.updated}>
                        Last updated: March 30, 2026
                    </p>

                    <section>
                        <h2>1. Introduction</h2>
                        <p>
                            These Terms &amp; Conditions (&quot;Terms&quot;)
                            govern your use of the website operated by SIA
                            infinitech (&quot;we&quot;, &quot;us&quot;,
                            &quot;our&quot;), a company registered in Latvia,
                            Riga. By accessing or using our website, you agree
                            to be bound by these Terms.
                        </p>
                    </section>

                    <section>
                        <h2>2. Services</h2>
                        <p>
                            We provide full-stack software development
                            solutions. The specific scope, deliverables, and
                            terms of any engagement will be defined in a
                            separate agreement between you and SIA infinitech.
                        </p>
                    </section>

                    <section>
                        <h2>3. Intellectual Property</h2>
                        <p>
                            All content on this website — including text,
                            graphics, logos, icons, images, and software — is
                            the property of SIA infinitech or its content
                            suppliers and is protected by applicable
                            intellectual property laws. You may not reproduce,
                            distribute, or create derivative works from any
                            content without our prior written consent.
                        </p>
                    </section>

                    <section>
                        <h2>4. Use of the Website</h2>
                        <p>
                            You agree to use our website only for lawful
                            purposes and in a way that does not:
                        </p>
                        <ul>
                            <li>
                                Infringe the rights of, restrict, or inhibit
                                anyone else&apos;s use of the website.
                            </li>
                            <li>
                                Breach any applicable local, national, or
                                international law or regulation.
                            </li>
                            <li>
                                Transmit any material that is defamatory,
                                offensive, or otherwise objectionable.
                            </li>
                            <li>
                                Attempt to gain unauthorized access to our
                                systems or networks.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2>5. Contact Form</h2>
                        <p>
                            When you submit information through our contact
                            form, you confirm that the information provided is
                            accurate and that you consent to us using this
                            information to respond to your inquiry. For details
                            on how we handle your personal data, please refer to
                            our <a href="/privacy-policy">Privacy Policy</a>.
                        </p>
                    </section>

                    <section>
                        <h2>6. Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted by law, SIA
                            infinitech shall not be liable for any indirect,
                            incidental, special, consequential, or punitive
                            damages arising from your use of the website. We
                            make no warranties or representations about the
                            accuracy or completeness of the content on this
                            website.
                        </p>
                    </section>

                    <section>
                        <h2>7. Third-Party Links</h2>
                        <p>
                            Our website may contain links to third-party
                            websites. We have no control over the content or
                            practices of these sites and accept no
                            responsibility for them. Your use of third-party
                            websites is at your own risk.
                        </p>
                    </section>

                    <section>
                        <h2>8. Modifications</h2>
                        <p>
                            We reserve the right to modify these Terms at any
                            time. Changes will be effective immediately upon
                            posting on this page. Your continued use of the
                            website after changes are posted constitutes your
                            acceptance of the updated Terms.
                        </p>
                    </section>

                    <section>
                        <h2>9. Governing Law</h2>
                        <p>
                            These Terms are governed by and construed in
                            accordance with the laws of the Republic of Latvia.
                            Any disputes arising from these Terms shall be
                            subject to the exclusive jurisdiction of the courts
                            of Latvia.
                        </p>
                    </section>

                    <section>
                        <h2>10. Contact</h2>
                        <p>
                            If you have any questions about these Terms, please
                            contact us through the contact form on our website
                            or reach out to us directly at our registered
                            address in Riga, Latvia.
                        </p>
                    </section>
                </article>
                <Footer sectionButtons={headerSections} />
            </main>
        </>
    );
}
