import classNames from "classnames";
import styles from "./SlidingButton.module.css";

type SlidingButtonProps = {
  text?: string;
  href: string;
};

export default function SlidingButton({
  text = "Click Me",
  href,
}: SlidingButtonProps) {
  return (
    <a
      className={classNames(styles["sliding-button"])}
      href={href}
      type="button"
    >
      {text}
      <span className={styles["sliding-button-icon"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--token-76fa1bb2-7c90-4495-ad8b-51dc49d8462f, rgb(65, 55, 255))"
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
            stroke="#4137FF"
            fill="none"
            strokeWidth="1.7"
          />
          <polyline
            points="12 8 16 12 12 16"
            stroke="#4137FF"
            fill="none"
            strokeWidth="1.7"
          />
        </svg>
      </span>
    </a>
  );
}
