import { useEffect, useState } from "react";
import styles from "../styles/receptionDashboard.module.css";
import axios from "axios";
import ReceptionStatistics from "./receptionStatistics.component";
import ReceptionAttendanceBarChart from "./receptionAttendanceBarChart.component";
import ReceptionAttendancePieChart from "./receptionAttendancePieChart.component";
import ResponseModal from "../../../../messageModal/responseModal";

export const ReceptionDashBoardMain = () => {
  // state to store data
  const [remainingAttendeesData, setRemainingAttendeesData] = useState(0);
  const [attendeesData, setAttendeesData] = useState(0);

  // states to manage response message modal and meaasge
  const [modalHeading, setModalHeading] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  // function to close modal
  const closeModal = () => {
    setShowModal(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Adding header for authorization
        const token = sessionStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = token;
        // console.log(token);

        //storing response from the axios request
        const response = await axios.get(
          "http://localhost:9006/bookmyseat/markattendance"
        );

        // setting total to employeeBookings
        setRemainingAttendeesData(response.data.length);
        // console.log(response.data);

        // console.log(response.data.seat.id);
        // console.log(response.data.seat.seatNumber);
        // console.log(response.data.seat.floor.floorName);
      } catch (error) {
        setModalHeading("Error");
        setModalMessage(
          "Something went wrong while fetching Remaining Attendees Data. Please try again."
        );
        setShowModal(true);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Setting axios header for authorization
        const token = sessionStorage.getItem("token");
        axios.defaults.headers.common["Authorization"] = token;
        // console.log(token);

        // Axios request to get data from server
        const response = await axios.get(
          "http://localhost:9006/bookmyseat/attendancemarked"
        );

        // Setting total attendees marked to employeeBookings
        setAttendeesData(response.data.length);
        // console.log(response.data);
        // console.log(response.data.seat.id);
        // console.log(response.data.seat.seatNumber);
        // console.log(response.data.seat.floor.floorName);
      } catch (error) {
        setModalHeading("Error");
        setModalMessage(
          "Something went wrong while fetching total Attendees Data. Please try again."
        );
        setShowModal(true);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.receptionStatistics}>
      <ReceptionStatistics
        remainingAttendeesData={remainingAttendeesData}
        attendeesData={attendeesData}
      />
      <div className={styles.statisticsCharts}>
        <div style={{ width: "100%", height: "100%" }}>
          <ReceptionAttendanceBarChart
            remainingAttendeesData={remainingAttendeesData}
            attendeesData={attendeesData}
          />
        </div>
        <div style={{ width: "100%", height: "100%" }}>
          <ReceptionAttendancePieChart
            remainingAttendeesData={remainingAttendeesData}
            attendeesData={attendeesData}
          />
        </div>
      </div>
      {showModal && (
        <ResponseModal
          message={modalMessage}
          onClose={closeModal}
          heading={modalHeading}
        />
      )}
    </div>
  );
};
