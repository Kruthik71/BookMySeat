import React, { useState } from "react";
import styles from "../../locationComp/styles/addNewInfo.module.css";

const AddHolidayForm = ({ onHandleAdd }) => {
  // States needed in the component
  const [holidayName, setHolidayName] = useState("");
  const [holidayDate, setHolidayDate] = useState("");

  //Current Date
  const todayDate = new Date().toISOString().split("T")[0];

  // Function to handle click on Add Holiday button
  const handleAdd = () => {
    if (holidayName && holidayDate) {
      onHandleAdd({ name: holidayName.trim(), date: holidayDate.trim() });
      setHolidayName("");
      setHolidayDate("");
    } else {
      alert("Fill the details");
    }
  };

  return (
    <div className={styles.addContainer}>
      <div className={styles.addName}>
        <h1>Add Holiday</h1>

        {/* Input to take user input for holiday name */}
        <div className={styles.inputLabelCombo}>
          <label htmlFor="addHoliday">Holiday Name: </label>
          <input
            type="text"
            name="addHoliday"
            id="addHoliday"
            placeholder="Holiday Title"
            value={holidayName}
            onChange={(e) => setHolidayName(e.target.value)}
          />
        </div>

        {/* Input to take user input for holiday name */}
        <div className={styles.inputLabelCombo}>
          <label htmlFor="holidayDate">Holiday Date: </label>
          <input
            type="date"
            name="holidayDate"
            id="holidayDate"
            min={todayDate}
            value={holidayDate}
            onChange={(e) => setHolidayDate(e.target.value)}
          />
        </div>

        {/* Button to add Holiday */}
        <button className={styles.addBtn} onClick={handleAdd}>
          Add Holiday
        </button>
      </div>
    </div>
  );
};

export default AddHolidayForm;
