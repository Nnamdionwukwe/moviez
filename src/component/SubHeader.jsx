import AboutUs from "./AboutUs";
import CleaningTips from "./CleaningTips";
import LightCommercial from "./LightCommercial";
import Practically from "./Practically";
import Residential from "./Residential";
import styles from "./SubHeader.module.css";
import WhyHireUs from "./WhyHireUs";

export default function SubHeader() {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.SubMain}>
          <div className={styles.SubHeader2}>
            <div className={styles.sub1}>
              <i class="fa fa-calendar" aria-hidden="true"></i>

              <p className={styles.subP}>Request a Free Estimate</p>
            </div>

            <div className={styles.sub2}>
              <i class="fa fa-phone" aria-hidden="true"></i>
              <p>Call Us</p>
            </div>
          </div>

          <div className={styles.minsDiv}>
            <p className={styles.mins}>In under 2 mins</p>
          </div>
        </div>

        <div className={styles.thirdHeader}>
          <i class="fa fa-map-marker" aria-hidden="true"></i>

          <p>Find My Local IziBest Maid</p>
        </div>
      </div>

      <div className={styles.thirdHeaderMain}>
        <div className={styles.secondMain1}>
          <div className={styles.secondMainLogo}>
            <img
              className={styles.logo}
              alt="Logo"
              src="https://cdn3.vectorstock.com/i/1000x1000/66/62/house-cleaning-logo-vector-47536662.jpg"
            />
          </div>

          <div className={styles.secondMain}>
            <div className={styles.thirdPara1}>
              <p>Gift Certifcates</p>
            </div>

            <div className={styles.thirdPara2}>
              <p>Apply Locally</p>
            </div>

            <div className={styles.thirdPara2}>
              <p>Aplicar Localmente</p>
            </div>

            <div>
              <p className={styles.thirdPara3}>Own a Franchise</p>
            </div>

            <div className={styles.thirdHeader3}>
              <i class="fa fa-map-marker" aria-hidden="true"></i>

              <p>Find My Local IziBest Maid</p>
            </div>
          </div>
        </div>

        <div className={styles.thirdMain}>
          <div className={styles.residence}>
            <p className={styles.thirdMainDiv1}>Residential</p>

            <div className={styles.hoverMain}>
              <Residential />
            </div>
          </div>

          <div className={styles.residence}>
            <p className={styles.thirdMainDiv2}>Light Commercial</p>

            <div className={styles.hoverMain}>
              <LightCommercial />
            </div>
          </div>

          <div className={styles.residence}>
            <p className={styles.thirdMainDiv3}>Why Hire Us</p>

            <div className={styles.hoverMain}>
              <WhyHireUs />
            </div>
          </div>

          <div className={styles.residence}>
            <p className={styles.thirdMainDiv4}>About Us</p>

            <div className={styles.hoverMain}>
              <AboutUs />
            </div>
          </div>

          <div className={styles.residence}>
            <p className={styles.thirdMainDiv5}>Cleaning Tip</p>

            <div className={styles.hoverMain}>
              <CleaningTips />
            </div>
          </div>

          <div className={styles.residence}>
            <p className={styles.thirdMainDiv6}>Practically Spotless Blog</p>

            <div className={styles.hoverMain}>
              <Practically />
            </div>
          </div>

          <div className={styles.SubMain}>
            <div className={styles.SubHeader3}>
              <div className={styles.sub3}>
                <i class="fa fa-calendar" aria-hidden="true"></i>

                <p className={styles.subP3}>Request a Free Estimate</p>
              </div>

              <div className={styles.minsDi}>
                <p className={styles.mins}>In under 2 mins</p>
              </div>
            </div>

            <div>
              <p className={styles.number}>+234 803 0588 774</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
