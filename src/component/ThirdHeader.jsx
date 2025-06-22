import { useState } from "react";
import styles from "./ThirdHeader.module.css";

export default function ThirdHeader() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <>
          <div className={styles.ThirdHeader}>
            <div className={styles.ThirdHeaderDiv}>
              <div className={styles.ThirdHeaderDiv}>
                <div className={styles.i}>
                  <i class="fa fa-calendar" aria-hidden="true"></i>
                </div>

                <div className={styles.spark}>
                  <p>
                    Sparking homes start with us - let us handle the cleaning!
                  </p>
                </div>
              </div>

              <div
                value={isOpen}
                onClick={() => setIsOpen((is) => !is)}
                className={styles.times}
              >
                &times;
              </div>
            </div>

            <div className={styles.more}>
              <p>Learn More</p>
            </div>
          </div>
        </>
      )}

      {isOpen && (
        <>
          <div className={styles.ThirdHeader2}>
            <div className={styles.ThirdHeaderDiv}>
              <div className={styles.ThirdHeaderDiv}>
                <div className={styles.i}>
                  <i class="fa fa-calendar" aria-hidden="true"></i>
                </div>

                <div className={styles.spark}>
                  <p>
                    Sparking homes start with us - let us handle the cleaning!
                  </p>
                </div>

                <div className={styles.more}>Learn More</div>
              </div>
            </div>

            <div
              className={styles.times}
              onClick={() => setIsOpen((is) => !is)}
            >
              <p> &times;</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
