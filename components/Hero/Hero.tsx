import classNames from "classnames";
import styles from "./Hero.module.css";
import SlidingButton from "../SlidingButton/SlidingButton";
import Carousel from "../Carousel/Carousel";

export default function Hero() {
    return (
        <section className={classNames(styles["hero-section"])}>
            <a href="#about"className="btn-section">
                Development for start-ups
            </a>
            <h1>Web & App Development That Drives Results</h1>
            <p>Building digital products that move your business forward.</p>
            <SlidingButton text="Find out more" href="#contact-us" />

            <p className={styles["p"]}>
                TRUSTED BY LEADING INNOVATORS IN THE WEB SPACE
            </p>
            <Carousel
                images={[
                    { src: "/logos/svgexport-27.svg", alt: "Logo 1" },
                    { src: "/logos/svgexport-28.svg", alt: "Logo 2" },
                    { src: "/logos/svgexport-29.svg", alt: "Logo 3" },
                    { src: "/logos/svgexport-30.svg", alt: "Logo 4" },
                    { src: "/logos/svgexport-27.svg", alt: "Logo 1" },
                    { src: "/logos/svgexport-28.svg", alt: "Logo 2" },
                    { src: "/logos/svgexport-29.svg", alt: "Logo 3" },
                    { src: "/logos/svgexport-30.svg", alt: "Logo 4" },
                ]}
            />
        </section>
    );
}
