import Link from "next/link";
import classNames from "classnames";
import styles from "./page.module.css";

export default function Success() {
  return (
    <>
      <section className={classNames(styles["outer-wrapper"])}>
        <div className={classNames(styles["success-section"])}>
          <div
            className={classNames(
              "btn-section",
              styles["btn-section-override"]
            )}
          >
            Success
          </div>
          <h2>Success!</h2>
          <p>Your form has been successfully submitted.</p>
          <Link href="/" className={classNames(styles["sliding-button"])}>
            Return
            <span className={styles["sliding-button-icon"]}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--token-76fa1bb2-7c90-4495-ad8b-51dc49d8462f, #fff)"
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
          </Link>
        </div>
      </section>
    </>
  );
}
