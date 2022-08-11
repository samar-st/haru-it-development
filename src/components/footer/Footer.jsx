import styles from "../footer/Footer.module.scss";
import {  FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa";
import Logo from '../../assets/Logo Haru.png';


const Footer = () => {
  return (
    <>
    <div className={styles.footer}>
      <div className={styles.links}>
      <img src={Logo} className={styles.brand} alt="" />
        <ul className={styles.menu}>
          <li><a href="#">О Haru</a></li>
          <li><a href="#">Команда</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
      </div>
      <div className={styles.iconki}>
          <ul className={styles.socialicons}>
            <li><a href="#"><FaLinkedinIn /></a></li>
            <li><a href="#"><FaFacebook /></a></li>
            <li><a href="#"><FaTwitter /></a></li>
          </ul>
        </div>
    </div>
    <div className={styles.line}></div>
    <div className={styles.ending}>
        <span>Сделано командой</span>
        <span>Haru IT</span>
        <span>Лицензия</span>
        <span>© 2022 - Haru IT</span>
    </div>
    </>
  );
};

export default Footer;
