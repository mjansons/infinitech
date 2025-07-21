import classNames from "classnames";
import styles from "./Services.module.css";
import SlidingButton from "../SlidingButton/SlidingButton";

type Props = {
    sectionId: string;
};

export default function Services({ sectionId }: Props) {
    return (
        <section
            id={sectionId}
            className={classNames(styles["services-section"])}
        >
            <a
                href="#faq"
                className={classNames(
                    "btn-section",
                    styles["btn-section-override"]
                )}
            >
                Services
            </a>
            <h2>Ways How we can Help you</h2>
            <p>Tailored solutions for your decentralized journey.</p>

            <div className={classNames(styles["grid-container"])}>
                <a
                    href="#contact-us"
                    className={classNames(styles["grid-item"])}
                >
                    <h3>Custom Web Application Development</h3>
                    <p>
                        Build robust, scalable web applications using React and
                        Node.js—fully tailored to your business goals.
                    </p>
                    <span>Learn more</span>
                </a>
                <a
                    href="#contact-us"
                    className={classNames(styles["grid-item"])}
                >
                    <h3>Frontend Development</h3>
                    <p>
                        Develop interactive, high-performance interfaces with
                        React for a seamless user experience across all devices.
                    </p>
                    <span>Learn more</span>
                </a>
                <a
                    href="#contact-us"
                    className={classNames(styles["grid-item"])}
                >
                    <h3>Backend Development</h3>
                    <p>
                        Create secure, efficient backends and APIs with Node.js
                        to power your applications and manage data reliably.
                    </p>
                    <span>Learn more</span>
                </a>
                <a
                    href="#contact-us"
                    className={classNames(styles["grid-item"])}
                >
                    <h3>API Development & Integration</h3>
                    <p>
                        Design and implement RESTful APIs, and seamlessly
                        connect third-party services to extend your platform’s
                        functionality.
                    </p>
                    <span>Learn more</span>
                </a>
                <a
                    href="#contact-us"
                    className={classNames(styles["grid-item"])}
                >
                    <h3>Performance Optimization</h3>
                    <p>
                        Boost application speed, responsiveness, and SEO to
                        deliver a faster, more reliable experience for your
                        users.
                    </p>
                    <span>Learn more</span>
                </a>
                <a
                    href="#contact-us"
                    className={classNames(styles["grid-item"])}
                >
                    <h3>Ongoing Maintenance & Support</h3>
                    <p>
                        Receive proactive updates, bug fixes, and continuous
                        technical support to keep your applications running
                        smoothly.
                    </p>
                    <span>Learn more</span>
                </a>
            </div>

            <SlidingButton text="Reach out" href="#contact-us" />
        </section>
    );
}
