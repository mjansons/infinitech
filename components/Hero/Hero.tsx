import classNames from "classnames";
import styles from "./Hero.module.css";
import SlidingButton from "../SlidingButton/SlidingButton";
import Carousel from "../Carousel/Carousel";

export default function Hero() {
    return (
        <section className={classNames(styles["hero-section"])}>
            <a href="#about" className="btn-section">
                Development for start-ups
            </a>
            <h1>Web App Development That Drives Results</h1>
            <p>Building digital products that move your business forward.</p>
            <SlidingButton text="Find out more" href="#contact-us" />

            <p className={styles["p"]}>TRUSTED BY MANY</p>
            <Carousel
                images={[
                    {
                        src: "/logos/august.png",
                        alt: "Logo 1",
                        link: "https://www.augustapp.com/",
                    },
                    {
                        src: "/logos/folierung.png",
                        alt: "Logo 2",
                        link: "https://autofolierung.de/",
                    },
                    {
                        src: "/logos/emma.png",
                        alt: "Logo 3",
                        link: "https://emma-app.com/",
                    },
                    {
                        src: "/logos/enigmatic.png",
                        alt: "Logo 4",
                        link: "https://www.beyondenigmatic.com/",
                    },
                    {
                        src: "/logos/incogni.png",
                        alt: "Logo 5",
                        link: "https://incogni.com/",
                    },
                    {
                        src: "/logos/surf.png",
                        alt: "Logo 6",
                        link: "https://surfshark.com/",
                    },
                ]}
            />
        </section>
    );
}
