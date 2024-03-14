import { useEffect, useRef, useState } from "react";
import styles from "../styles/adminNavbar.module.css";
import {
  Armchair,
  Bell,
  History,
  LayoutDashboard,
  MapPinned,
  Snowflake,
  Users,
  User,
  CalendarOff,
  Menu
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const AdminNavbar = ({ onLinkClick }) => {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("/admin/dashboard");
  const [toggle, setToggle] = useState(false);
  const navbarRef = useRef(null);

  const handleClick = (link) => {
    setActiveLink(link);
    onLinkClick(link);
  };

  const handleNavigateClick = (path) => {
    const token = sessionStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;

    axios
      .get(`http://localhost:9006/bookmyseat/userInfo`)
      .then((res) => {
        console.log(res.data.roleName);
        if (res.data.roleName === "ADMIN/EMPLOYEE") {
          navigate(path);
        } else {
          alert("You are not user here");
        }
      })
      .catch((err) => console.log(err));
  };

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
        className={`${styles.adminNavbar} ${toggle ? styles.toggled : ""}`}
        onClick={toggleNavbar}
      >
        <ul>
          <div>
            <li>
              <div
                className={`${styles.link} ${
                  activeLink === "/admin/dashboard" ? styles.active : ""
                }`}
                onClick={() => handleClick("/admin/dashboard")}
              >
                <LayoutDashboard size={30} className={styles.icons} />
                <span> DashBoard</span>
              </div>
            </li>
            <li>
              <div
                className={`${styles.link} ${
                  activeLink === "/admin/actioncenter" ? styles.active : ""
                }`}
                onClick={() => handleClick("/admin/actioncenter")}
              >
                <Bell size={30} className={styles.icons} />
                <span> Action Center</span>
              </div>
            </li>
            <li>
              <div
                className={`${styles.link} ${
                  activeLink === "/admin/userInfo" ? styles.active : ""
                }`}
                onClick={() => handleClick("/admin/userInfo")}
              >
                <Users size={30} className={styles.icons} />
                <span> User Info</span>
              </div>
            </li>
            <li>
              <div
                className={`${styles.link} ${
                  activeLink === "/admin/seats" ? styles.active : ""
                }`}
                onClick={() => handleClick("/admin/seats")}
              >
                <Armchair size={30} className={styles.icons} />
                <span> Seat Reservation</span>
              </div>
            </li>
            <li>
              <div
                className={`${styles.link} ${
                  activeLink === "/admin/modifyshifts" ? styles.active : ""
                }`}
                onClick={() => handleClick("/admin/modifyshifts")}
              >
                <History size={30} className={styles.icons} />
                <span> Modify Shifts</span>
              </div>
            </li>
            <li>
              <div
                className={`${styles.link} ${
                  activeLink === "/admin/editlocations" ? styles.active : ""
                }`}
                onClick={() => handleClick("/admin/editlocations")}
              >
                <MapPinned size={30} className={styles.icons} />
                <span> Edit Locations</span>
              </div>
            </li>
            <li>
              <div
                className={`${styles.link} ${
                  activeLink === "/admin/editprojects" ? styles.active : ""
                }`}
                onClick={() => handleClick("/admin/editprojects")}
              >
                <Snowflake size={30} className={styles.icons} />
                <span> Edit Projects</span>
              </div>
            </li>
            <li>
              <div
                className={`${styles.link} ${
                  activeLink === "/admin/holidays" ? styles.active : ""
                }`}
                onClick={() => handleClick("/admin/holidays")}
              >
                <CalendarOff size={30} className={styles.icons} />
                <span> Edit Holidays</span>
              </div>
            </li>
          </div>
          <div>
            <li>
              <div
                className={`${styles.link}`}
                onClick={() => handleNavigateClick("/user")}
              >
                <User size={30} className={styles.icons} />
                <span> Login As User</span>
              </div>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
};
