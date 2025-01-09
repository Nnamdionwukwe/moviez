import styles from "./header.module.css";

const img =
  "	https://www.logoai.com/uploads/output/2023/04/18/d6dd08497d6655f82a0686a868efa8a1.jpg";

const ham =
  "https://gimgs2.nohat.cc/thumb/f/640/menu-hamburger-icon-svg-white--m2H7G6A0A0Z5N4i8.jpg";

export default function Header() {
  return (
    <div>
      <div className={styles.imgDiv1}>
        <img src={img} alt="image" />
      </div>

      <div className={styles.imgDiv2}>
        <img src={ham} alt="image" />
      </div>
    </div>
  );
}
