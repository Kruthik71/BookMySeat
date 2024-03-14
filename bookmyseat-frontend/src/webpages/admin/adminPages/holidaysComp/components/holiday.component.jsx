import React, { useEffect, useState } from "react";
import styles from "../../locationComp/styles/addNewInfo.module.css";
import axios from "axios";
import AddHolidayForm from "./addHoliday.component";
import ViewHolidayTable from "./viewHolidays.component";

const Holidays = () => {
  // States needed in the component
  const [holidays, setHolidays] = useState([]);

  // state to toggle between child component
  const [showAdd, setShowAdd] = useState(true);
  const [addHoliday, setAddHoliday] = useState(false);

  // Function to get and store floors details from server
  useEffect(() => {
    const fetchData = () => {
      const token = sessionStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = token;
      axios
        .get("http://localhost:9006/bookmyseat/getFutureHolidays")
        .then((response) => {
          console.log("response Data", response.data);
          setHolidays(response.data);
        })
        .catch((error) => {
          console.error("Error fetching holidays:", error);
        });
    };
    fetchData();
  }, [addHoliday]);

  // Function to handle click on Add Holiday button
  const handleAddHoliday = (newHoliday) => {
    const data = {
      holidayName: newHoliday.name,
      holidayDate: newHoliday.date,
    };
    console.log("Booking Added : ", data);
    // Setting axios header for authorization
    const token = sessionStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    // console.log(token);

    axios
      .post("http://localhost:9006/bookmyseat/admin/createHoliday", data)
      .then((res) => {
        setAddHoliday(!addHoliday);
        alert(res.data);
      })
      .catch((err) => alert(err.response.data));
  };

  return (
    <div className={styles.comboContainer}>
      {/* Buttons to toggle between child component */}
      <div className={styles.selectNeededOptions}>
        <button
          className={showAdd ? styles.activeButton : styles.selectionBtn}
          onClick={() => setShowAdd(true)}
        >
          Add Holidays
        </button>
        <button
          className={!showAdd ? styles.activeButton : styles.selectionBtn}
          onClick={() => setShowAdd(false)}
        >
          View Holidays
        </button>
      </div>

      {/* Renders AddLocationForm if true otherwise renders ViewLocationTable Component */}
      {showAdd ? (
        <AddHolidayForm onHandleAdd={handleAddHoliday} />
      ) : (
        <ViewHolidayTable holidays={holidays} />
      )}
    </div>
  );
};

export default Holidays;
