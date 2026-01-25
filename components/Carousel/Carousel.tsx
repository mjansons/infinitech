import classNames from "classnames";
import styles from "./Carousel.module.css";

type CarouselProps = {
    images: { src: string; alt: string; link?: string }[];
  };

  export default function Carousel({ images }: CarouselProps) {
    return (
      <div className={styles["carousel"]}>
        <div className={classNames(styles["logo-carousel-track"])}>
          {[...images, ...images].map((img, i) => (
            <a href={img.link || undefined} target="_blank" key={i}>
              <img className={styles["carousel-img"]} src={img.src} alt={img.alt} />
            </a>
          ))}
        </div>
      </div>
    );
  }