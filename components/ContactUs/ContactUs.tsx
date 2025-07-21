import classNames from "classnames";
import styles from "./ContactUs.module.css";

type Props = {
    sectionId: string;
};

export default function Results({ sectionId }: Props) {
    return (
        <section id={sectionId} className={classNames(styles["outer-wrapper"])}>
            <div className={classNames(styles["contact-section"])}>
                <a
                    href="#faq"
                    className={classNames(
                        "btn-section",
                        styles["btn-section-override"]
                    )}
                >
                    Contact Us
                </a>
                <h2>Let`s Scale your Business</h2>
                <p>Discover how we can help your business grow.</p>
                <form
                    action="https://formsubmit.co/5c07ccac95812a5c96c9e940928f5dda"
                    method="POST"
                    className={styles["form"]}
                >
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name"
                        autoComplete="off"
                    />
                    <input
                        type="hidden"
                        name="_next"
                        value="https://www.infinitech.lv/success"
                    ></input>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Your Email"
                        autoComplete="off"
                    />
                    <textarea
                        name="message"
                        required
                        placeholder="Your Message"
                        rows={4}
                    />
                    <input
                        type="text"
                        name="_honey"
                        style={{ display: "none" }}
                    />
                    <button type="submit" className={classNames(styles["sliding-button"])}>
                        Submit
                        <span className={styles["sliding-button-icon"]}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="var(--token-76fa1bb2-7c90-4495-ad8b-51dc49d8462f, #fff))"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ width: "32px", height: "32px" }}
                            >
                                <line
                                    x1="8"
                                    y1="12"
                                    x2="16"
                                    y2="12"
                                    stroke="#fff"
                                    fill="none"
                                    strokeWidth="1"
                                />
                                <polyline
                                    points="12 8 16 12 12 16"
                                    stroke="#fff"
                                    fill="none"
                                    strokeWidth="1"
                                />
                            </svg>
                        </span>
                    </button>
                </form>
            </div>
        </section>
    );
}
