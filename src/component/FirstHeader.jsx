import styles from "./FirstHeader.module.css";

export default function FirstHeader() {
  return (
    <div>
      <div className={styles.header1}>IziBest</div>
      <div className={styles.header2}>
        <p className={styles.headerP}>IziBest</p>
      </div>
    </div>
  );
}
