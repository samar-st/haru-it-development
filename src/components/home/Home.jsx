import Navbar from "../navbar/Navbar";
import styles from "../home/Home.module.scss";
import HeroImg from "../../assets/Frame.png";
import EcoImg from "../../assets/Group 1.png";

const Home = () => {
  return (
        <div className="container">
          <div className={styles.home}>
      <div className={styles.nav}>
        <Navbar />
      </div>
      <div className={styles.bg1}>
          <div className={styles.photoContainer}>
            <img src={HeroImg} alt="eating" />
          </div>
      </div>
      <div className={styles.slogan}>
        <h1>Haru IT- Профессия будущего у тебя в Браузере.</h1>
        <p>
        Haru IT - Эта команда и ЭКО система для реализации ваших продуктов. 
        </p>
        </div>
    </div>
        </div>
  );
};

export default Home;
