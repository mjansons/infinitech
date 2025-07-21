import classNames from "classnames";
import styles from "./Results.module.css";
import SlidingButton from "../SlidingButton/SlidingButton";

type Props = {
    sectionId: string;
};

export default function Results({ sectionId }: Props) {
    return (
        <section
            id={sectionId}
            className={classNames(styles["results-section"])}
        >
            <a href="#services" className="btn-section">
                Results
            </a>
            <h2>We have experience with bringing results</h2>
            <p>The numbers speak for us.</p>

            <div className={classNames(styles["grid-container"])}>
                <div className={classNames(styles["grid-item"])}>
                    <img src="/svgexport-9.svg" alt="clock" />
                    <h1>5+</h1>
                    <p>Years of experience</p>
                </div>
                <div className={classNames(styles["grid-item"])}>
                    <img src="/svgexport-10.svg" alt="clock" />
                    <h1>10+</h1>
                    <p>Businesses transformed</p>
                </div>
                <div className={classNames(styles["grid-item"])}>
                    <img src="/svgexport-11.svg" alt="clock" />
                    <h1>200k+</h1>
                    <p>EUR generated</p>
                </div>
                <div className={classNames(styles["grid-item"])}>
                    <img src="/svgexport-12.svg" alt="clock" />
                    <h1>30+</h1>
                    <p>Projects Completed</p>
                </div>
            </div>

            <SlidingButton text="Reach out" href="#contact-us" />
        </section>
    );
}
