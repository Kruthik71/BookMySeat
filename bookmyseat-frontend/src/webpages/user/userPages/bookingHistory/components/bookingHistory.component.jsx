import React, { useEffect, useState } from "react";
import styles from "../styles/bookingHistory.module.css";
import {
  faPenToSquare,
  faBan,
  faUser,
  faArrowUpRightFromSquare,
  faCouch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import ResponseModal from "../../../../messageModal/responseModal";

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  if (totalItems <= 10) {
    return null;
  }

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <li key={number} className={styles.pageitem}>
            <a onClick={() => paginate(number)} className={styles.pagelink}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default function BookingHistory() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // states to manage response message modal and meaasge
  const [modalHeading, setModalHeading] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [showMessageModal, setShowMessageModal] = useState(false);

  // function to close modal
  const closeMessageModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    console.log(token);

    axios
      .get("http://localhost:9006/bookmyseat/user/bookinghistory")
      .then((res) => {
        setData(res.data);
        console.log("booking history", res.data);
      })
      .catch((err) => {
        setModalHeading("Error");
        setModalMessage(
          "Something went wrong. Please try again."
        );
        setShowMessageModal(true);
      });
  }, []);

  // console.log("selected user is", selectedUser);

  const handleOpenModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const filterDataByDateRange = () => {
    const filteredData = data?.filter((detail) => {
      const fromDate = new Date(detail.startDate);
      const toDate = new Date(detail.endDate);
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;
      if (start && end) {
        return fromDate >= start && toDate <= end;
      } else if (start) {
        return fromDate >= start;
      } else if (end) {
        return toDate <= end;
      }
      return true;
    });
    return filteredData;
  };

  const filteredData = filterDataByDateRange();
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    //main container for booking history
    <div className={styles.bookingHistory}>
      <div className={styles.bookingHeader}>
        <label htmlFor="start-date">Start Date:</label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label htmlFor="end-date">End Date:</label>
        <input
          type="date"
          id="end-date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <table className={styles.usertable}>
        <thead>
          <tr>
            <th>Booking Type</th>
            <th>Shift</th>
            <th>Status</th>
            <th>From</th>
            <th>To</th>
            <th>Seat Number</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((booking, index) => (
            <React.Fragment key={index}>
              <tr>
                <td
                  className={styles.empid}
                  onClick={() => handleOpenModal(booking)}
                >
                  {booking.bookingRange}{" "}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    fontSize={14}
                    color="blue"
                  />
                </td>
                <td>
                  {booking.bookingMappings.shiftDetails.startTime} to{" "}
                  {booking.bookingMappings.shiftDetails.endTime}
                </td>
                <td>{booking.bookingStatus ? "ACTIVE" : "CANCELLED"}</td>
                <td>{booking.startDate}</td>
                <td>{booking.endDate}</td>
                <td>{booking.seat.seatNumber}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        paginate={paginate}
      />

      {showModal && selectedUser && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon
                icon={faCouch}
                fontSize={30}
                className={styles.centerIcon}
                color="#a8bfee"
              />
            </div>
            <hr />
            <h2>More Booking Details</h2>
            <p>
              Additional Desktop:{" "}
              {selectedUser.bookingMappings.additionalDesktop ? "Yes" : "No"}
            </p>
            <p>Lunch: {selectedUser.bookingMappings.lunch ? "Yes" : "No"}</p>
            <p>
              Beverage: {selectedUser.bookingMappings.beverage ? "Yes" : "No"}
            </p>
            <p>
              Parking: {selectedUser.bookingMappings.parking ? "Yes" : "No"}
            </p>
            {selectedUser.bookingMappings.parking && (
              <p>
                Vehicle Type:{" "}
                {selectedUser.bookingMappings.vehicleType === "WHEELER_2"
                  ? "2 Wheeler"
                  : "4 Wheeler"}
              </p>
            )}

            {/* Add more employee details here */}
            <div className={styles.empidButton}>
              <button
                className={styles.close}
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {showMessageModal && (
        <ResponseModal
          message={modalMessage}
          onClose={closeMessageModal}
          heading={modalHeading}
        />
      )}
    </div>
  );
}
