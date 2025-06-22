import FirstHeader from "./FirstHeader";
import SubHeader from "./SubHeader";
import ThirdHeader from "./ThirdHeader";
import styles from "./MainHeader.module.css";
import FixedHeader from "./FixedHeader";
import OurCleaning from "./OurCleaning";
import PerfectGift from "./PerfectGift";
import IziBestCleaningCar from "./IziBestCleaningCar";
import WhyChooseUs from "./WhyChooseUse";
import WhyChooseUsFull from "./WhyChooseUsFull";

export default function MainHeader() {
  return (
    <>
      <div className={styles.main}>
        <FirstHeader />

        <div className={styles.fixedHeader}>
          <FixedHeader />
        </div>

        <div className={styles.fixedHeadr}>
          <SubHeader />
        </div>

        <ThirdHeader />

        <OurCleaning />

        <PerfectGift />

        <IziBestCleaningCar />

        <div className={styles.whyChooseUs}>
          <WhyChooseUs />
        </div>

        <div className={styles.whyChooseUsFull}>
          <WhyChooseUsFull />
        </div>
      </div>
    </>
  );
}
