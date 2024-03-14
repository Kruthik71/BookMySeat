import React, { useState } from "react";
import styles from "../styles/addNewInfo.module.css";

const AddLocationForm = ({ onHandleAdd }) => {
  // States needed in the component
  const [locationName, setLocationName] = useState("");
  const [cityName, setCityName] = useState("");

  // Function to handle click on Add Location button
  const handleAdd = () => {
    if (locationName && cityName) {
      onHandleAdd({ name: locationName.trim(), city: cityName.trim() });
      setLocationName("");
      setCityName("");
    } else {
      alert("Fill the details");
    }
  };

  return (
    <div className={styles.addContainer}>
      <div className={styles.addName}>
        <h1>Add Location</h1>

        {/* Input to take user input for location name */}
        <div className={styles.inputLabelCombo}>
          <label htmlFor="addLocation">Location Name: </label>
          <input
            type="text"
            name="addLocation"
            id="addLocation"
            placeholder="Location Name"
            value={locationName}
            onChange={(e) => setLocationName(e.target.value)}
          />
        </div>

        {/* Input to take user input for city name */}
        <div className={styles.inputLabelCombo}>
          <label htmlFor="locationCity">Location City: </label>
          <input
            type="text"
            name="locationCity"
            id="locationCity"
            placeholder="City Name"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
        </div>

        {/* Button to add location */}
        <button className={styles.addBtn} onClick={handleAdd}>
          Add Location
        </button>
      </div>
    </div>
  );
};

export default AddLocationForm;
