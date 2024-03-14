import React, { useEffect, useState } from "react";
import styles from "../styles/toaster.module.css";

const Toaster = ({ message, heading, setShowToaster }) => {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClosed(true);
      setShowToaster(false);
    }, 5000); // Close after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setClosed(true);
  };

  return (
    <>
      {!closed && (
        <div className={styles.toaster}>
          <div className={styles.toast}>
            <div className={styles.toastHeader}>
              <strong>{heading}</strong>
            </div>
            <div>{message}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Toaster;
