import { useEffect, useRef, useState } from "react";
import styles from "../styles/userNavbar.module.css";
import {
  History,
  LayoutDashboard,
  ArmchairIcon,
  CalendarOff,
  Menu,
} from "lucide-react";

export const UserNavbar = ({ activeLink, setActiveLink, onLinkClick }) => {
  // const [activeLink, setActiveLink] = useState("/user/dashboard");
  const [toggle, setToggle] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = (link) => {
    setActiveLink(link);
    onLinkClick(link);
  };

  const toggleNavbar = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log("Toggling");
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };

  return (
    <>
      <ul className={styles.toggleMenu}>
        <li>
          <div className={`${styles.link}`} onClick={toggleNavbar}>
            <Menu size={30} className={styles.icons} />
            <span> NavBar</span>
          </div>
        </li>
      </ul>

      <nav
        ref={navbarRef}
        className={`${styles.userNavbar} ${toggle ? styles.toggled : ""}`}
        onClick={toggleNavbar}
      >
        <ul>
          <li>
            <div
              className={`${styles.link} ${
                activeLink === "/user/dashboard" ? styles.active : ""
              }`}
              onClick={() => handleClick("/user/dashboard")}
            >
              <LayoutDashboard size={30} className={styles.icons} />
              <span> DashBoard</span>
            </div>
          </li>

          <li>
            <div
              className={`${styles.link} ${
                activeLink === "/user/bookaseat" ? styles.active : ""
              }`}
              onClick={() => handleClick("/user/bookaseat")}
            >
              <ArmchairIcon size={30} className={styles.icons} />
              <span> Book Seat</span>
            </div>
          </li>

          <li>
            <div
              className={`${styles.link} ${
                activeLink === "/user/bookinghistory" ? styles.active : ""
              }`}
              onClick={() => handleClick("/user/bookinghistory")}
            >
              <History size={30} className={styles.icons} />
              <span> Booking History</span>
            </div>
          </li>
          <li>
            <div
              className={`${styles.link} ${
                activeLink === "/user/holidays" ? styles.active : ""
              }`}
              onClick={() => handleClick("/user/holidays")}
            >
              <CalendarOff size={30} className={styles.icons} />
              <span> Holidays</span>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};
