import React, { useEffect, useState } from "react";
import styles from "../styles/modifyShiftsMain.module.css";
import axios from "axios";
import { ShiftData } from "./modifyShifts.component";

const ModifyShiftsMain = () => {
  // Required States
  const [searchQuery, setSearchQuery] = useState("");
  const [userData, setUserData] = useState([]);
  const [shifts, setShifts] = useState([]);

  // function for users
  useEffect(() => {
    const fetchData = () => {
      const token = sessionStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = token;
      axios
        .get("http://localhost:9006/bookmyseat/admin/listofshiftdetails")
        .then((response) => {
          const data = response.data;
          setShifts(data);
          console.log("Shifts Detail: ", response.data);
        })
        .catch((error) => {
          console.error("Error getting shifts  :", error);
        });
    };
    fetchData();
  }, []);

  // function for users
  useEffect(() => {
    const fetchData = () => {
      const token = sessionStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = token;
      axios
        .get("http://localhost:9006/bookmyseat/admin/users")
        .then((response) => {
          const data = response.data.users;
          setUserData(data);
          console.log("users: ", response.data);
        })
        .catch((error) => {
          console.error("Error :", error);
        });
    };
    fetchData();
  }, []);

  // Function to filter attendees based on search query
  const filteredData = userData.filter((user) => {
    return user.employeeId.toString().includes(searchQuery.toString());
  });

  return (
    <div className={styles.editShiftDetails}>
      <h1>Map Shifts</h1>
      {/* Header for Page */}
      <div className={styles.shiftHeader}>
        {/* Input for search query */}
        <input
          type="number"
          id="employeeId"
          name="employeeId"
          placeholder="Employee ID to search"
          autoComplete="off"
          pattern="[0-9]*"
          inputMode="numeric"
          maxLength={5}
          value={searchQuery}
          onChange={(e) => {
            const maxLength = 5;
            const inputQuery = e.target.value;
            if (inputQuery.length <= maxLength) {
              setSearchQuery(inputQuery);
            }
          }}
        />
      </div>
      <ShiftData
        filteredData={filteredData}
        shifts={shifts}
        setShifts={setShifts}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default ModifyShiftsMain;
