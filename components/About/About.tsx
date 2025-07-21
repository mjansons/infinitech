import classNames from "classnames";
import styles from "./About.module.css";
import SlidingButton from "../SlidingButton/SlidingButton";

type Props = {
    sectionId: string;
};

export default function About({ sectionId }: Props) {
    return (
        <section id={sectionId} className={classNames(styles["about-section"])}>
            <div className={classNames(styles["left-content"])}>
                <a href="#results" className="btn-section">
                    About us
                </a>
                <h2>Your Partner in Digital Success</h2>
                <p>
                    From concept to deployment, we deliver cutting-edge web and
                    mobile experiences designed to grow your business and
                    captivate your users.
                </p>
                <SlidingButton text="Get in touch" href="#contact-us" />
            </div>
            <div className={classNames(styles["image"])}>
                <img src="/blue-jibberish.png" alt="filler image" />
            </div>
        </section>
    );
}
