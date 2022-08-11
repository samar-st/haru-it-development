import styles from "../navbar/Navbar.module.scss";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Logo from '../../assets/Logo Haru.png';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <a href="#" className={styles.logo}>
          <img src={Logo} alt="" />
        </a>
      </div>

      <div className={styles.mobileBars} onClick={() => setNavOpen(true)}>
        <FaBars />
      </div>

      <ul
        className={`${navOpen ? styles.menuMobileActive : undefined} ${styles.menu
          }`}
      >
        <li className={styles.mobileFaTimes} onClick={() => setNavOpen(false)}>
          <FaTimes />
        </li>
        <li><a href="#">Портфолио</a></li>
        <li><a href="#">Команда</a></li>
        <li><a href="#">Контакты</a></li>
        
      </ul>
      {/* Language */}
      {/* <select name="languages" id="languages">
        <option value="Eng">Eng</option>
        <option value="Rus">Rus</option>
        <option value="Uzb">Uzb</option>
      </select> */}
    </nav>
  );
};

export default Navbar;
