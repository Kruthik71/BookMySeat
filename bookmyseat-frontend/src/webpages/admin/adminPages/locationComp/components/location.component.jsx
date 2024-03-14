import React, { useEffect, useState } from "react";
import styles from "../styles/addNewInfo.module.css";
import AddLocationForm from "./addLocation.component";
import ViewLocationTable from "./viewLocations.component";
import axios from "axios";

const Locations = () => {
  // States needed in the component
  const [locations, setLocations] = useState([]);

  // state to toggle between child component
  const [showAdd, setShowAdd] = useState(true);
  const [addLocation, setAddLocation] = useState(false);

  //  Function to get Data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Setting axios header for authorization
        const token = sessionStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = token;
        // console.log(token);

        // Axios request to get data from server
        const response = await axios.get(
          "http://localhost:9006/bookmyseat/admin/buildings"
        );

        // Filtering useful Data from the axios response
        const filteredData = response.data.map((location) => ({
          id: location.id,
          buildingName: location.buildingName,
          locationName: location.locationName,
        }));

        // Setting filtered data to employeeBookings
        setLocations(filteredData);
        console.log("Locations Data: ", response.data);
      } catch (error) {
        console.error("Error fetching locations Data:", error);
      }
    };
    fetchData();
  }, [addLocation]);

  // Function to handle click on Add Location button
  const handleAddLocation = (newLocation) => {
    const data = {
      buildingName: newLocation.name,
      locationName: newLocation.city,
    };
    console.log("New Location: ", newLocation);
    console.log("Data Name: ", data);
    // Setting axios header for authorization
    const token = sessionStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    // console.log(token);

    axios
      .post("http://localhost:9006/bookmyseat/admin/addbuilding", data)
      .then((res) => {
        setAddLocation(!addLocation);
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
          Add Locations
        </button>
        <button
          className={!showAdd ? styles.activeButton : styles.selectionBtn}
          onClick={() => setShowAdd(false)}
        >
          View Locations
        </button>
      </div>

      {/* Renders AddLocationForm if true otherwise renders ViewLocationTable Component */}
      {showAdd ? (
        <AddLocationForm onHandleAdd={handleAddLocation} />
      ) : (
        <ViewLocationTable locations={locations} />
      )}
    </div>
  );
};

export default Locations;
