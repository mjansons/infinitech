import classNames from "classnames";
import styles from "./Faq.module.css";

type Props = {
    sectionId: string;
};

export default function Faq({ sectionId }: Props) {
    return (
        <section id={sectionId} className={classNames(styles["faq-section"])}>
            <a href="#contact-us" className="btn-section">
                FAQ
            </a>
            <h2>Unmatched Expertise and Proven Results</h2>
            <p>Find the answers here.</p>

            <div className={styles["faq-container"]}>
                <div className={styles["faq-item"]}>
                    <input
                        type="checkbox"
                        id="faq-1"
                        className={styles["faq-checkbox"]}
                    />
                    <div className={styles["question-row"]}>
                        <label
                            htmlFor="faq-1"
                            className={styles["question-label"]}
                        >
                            <h3>
                                What technologies do you use to build web
                                applications?
                            </h3>
                            <span className={styles["tick-icon"]}>
                                <img src="/tick.svg" alt="toggle" />
                            </span>
                        </label>
                    </div>
                    <div className={styles["faq-answer"]}>
                        We specialize in building scalable web applications
                        using modern technologies such as React for the frontend
                        and Node.js for the backend. This approach ensures fast
                        performance, reliability, and a foundation that can grow
                        as your business evolves.
                    </div>
                </div>

                <div className={styles["faq-item"]}>
                    <input
                        type="checkbox"
                        id="faq-2"
                        className={styles["faq-checkbox"]}
                    />
                    <div className={styles["question-row"]}>
                        <label
                            htmlFor="faq-2"
                            className={styles["question-label"]}
                        >
                            <h3>
                                How long does it take to launch a new website or
                                web app?
                            </h3>
                            <span className={styles["tick-icon"]}>
                                <img src="/tick.svg" alt="toggle" />
                            </span>
                        </label>
                    </div>
                    <div className={styles["faq-answer"]}>
                        Project timelines vary based on complexity, features,
                        and your feedback cycle. Most simple web applications or
                        marketing sites can be launched in a few weeks, while
                        more complex platforms may take several months. We
                        provide clear timelines after understanding your goals
                        and requirements.
                    </div>
                </div>

                <div className={styles["faq-item"]}>
                    <input
                        type="checkbox"
                        id="faq-3"
                        className={styles["faq-checkbox"]}
                    />
                    <div className={styles["question-row"]}>
                        <label
                            htmlFor="faq-3"
                            className={styles["question-label"]}
                        >
                            <h3>
                                Will my website be mobile-friendly and optimized
                                for SEO?
                            </h3>
                            <span className={styles["tick-icon"]}>
                                <img src="/tick.svg" alt="toggle" />
                            </span>
                        </label>
                    </div>
                    <div className={styles["faq-answer"]}>
                        Absolutely. Every project we deliver is responsive by
                        default—meaning it looks and works great on any device.
                        We also follow best practices for technical SEO, site
                        speed, and accessibility to help your business get
                        discovered online.
                    </div>
                </div>

                <div className={styles["faq-item"]}>
                    <input
                        type="checkbox"
                        id="faq-4"
                        className={styles["faq-checkbox"]}
                    />
                    <div className={styles["question-row"]}>
                        <label
                            htmlFor="faq-4"
                            className={styles["question-label"]}
                        >
                            <h3>
                                Can you integrate third-party services and APIs
                                with my web app?
                            </h3>
                            <span className={styles["tick-icon"]}>
                                <img src="/tick.svg" alt="toggle" />
                            </span>
                        </label>
                    </div>
                    <div className={styles["faq-answer"]}>
                        Yes! We have extensive experience connecting web
                        applications to popular third-party services—whether
                        it’s payment gateways, CRM tools, analytics, or other
                        APIs—so your site can automate tasks and unlock new
                        functionality.
                    </div>
                </div>

                <div className={styles["faq-item"]}>
                    <input
                        type="checkbox"
                        id="faq-5"
                        className={styles["faq-checkbox"]}
                    />
                    <div className={styles["question-row"]}>
                        <label
                            htmlFor="faq-5"
                            className={styles["question-label"]}
                        >
                            <h3>
                                Do you offer ongoing maintenance and support
                                after launch?
                            </h3>
                            <span className={styles["tick-icon"]}>
                                <img src="/tick.svg" alt="toggle" />
                            </span>
                        </label>
                    </div>
                    <div className={styles["faq-answer"]}>
                        Definitely. We provide ongoing support, updates, and
                        monitoring to ensure your site stays secure and performs
                        at its best. You can reach out for technical help,
                        feature improvements, or troubleshooting any time after
                        launch.
                    </div>
                </div>
            </div>
        </section>
    );
}
