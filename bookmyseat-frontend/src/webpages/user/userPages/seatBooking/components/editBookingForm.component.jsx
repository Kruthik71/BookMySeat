import React, { useEffect, useState } from "react";
import styles from "../styles/editBookingForm.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import ResponseModal from "../../../../messageModal/responseModal";

const EditBooking = ({ bookingId, handleCancelEdit }) => {
  const [bookingData, setBookingData] = useState([]);
  const [bookingStartDate, setBookingStartDate] = useState("");
  const [bookingEndDate, setBookingEndDate] = useState("");

  const [shifts, setShifts] = useState([]);
  // states to manage response message modal and meaasge
  const [modalHeading, setModalHeading] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  // function to close modal
  const closeModal = () => {
    setShowModal(false);
  };

  const [formData, setFormData] = useState({
    bookedDate: bookingStartDate,
    startDate: "",
    endDate: "",
    shiftDetails: 0,
    additionalDesktop: false,
    lunch: false,
    beverage: false,
    parking: false,
    vehicleType: "none",
  });

  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = token;
      try {
        const response = await axios.get(
          "http://localhost:9006/bookmyseat/user/seatbooking"
        );
        setShifts(response.data.shiftDetails);
        // console.log(response.data.shiftDetails);
      } catch (error) {
        setModalHeading("Error");
        setModalMessage(
          "Something went wrong while fetching shifts. Please try again."
        );
        setShowModal(true);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const token = sessionStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = token;
      try {
        const response = await axios.get(
          `http://localhost:9006/bookmyseat/user/edit/${bookingId}`
        );
        const responseData = response.data;
        // console.log("acnsdklnsd ", responseData);

        // Extract booked dates
        const bookedDates = responseData.bookingMappings.map(
          (mapping) => mapping.bookedDate
        );

        // console.log("bookedDates: ", bookedDates);

        // Find minimum and maximum booked dates
        const minBookedDate = bookedDates.reduce((minDate, currentDate) => {
          return minDate < currentDate ? minDate : currentDate;
        }, bookedDates[0]);
        const maxBookedDate = bookedDates.reduce((maxDate, currentDate) => {
          return maxDate > currentDate ? maxDate : currentDate;
        }, bookedDates[0]);

        // console.log("minBookedDate", minBookedDate);
        // console.log("maxBookedDate", maxBookedDate);

        // Set booking data, start/end dates, and booked dates
        setBookingData(responseData);
        setBookingStartDate(minBookedDate);
        setBookingEndDate(maxBookedDate);

        // setBookingMappingID(responseData.bookingMappings[0].id);
        setFormData({
          bookedDate: responseData.bookingMappings[0].bookedDate,
          startDate: responseData.bookingMappings[0].booking.startDate,
          endDate: responseData.bookingMappings[0].booking.endDate,
          lunch: responseData.bookingMappings[0].lunch,
          beverage: responseData.bookingMappings[0].beverage,
          parking: responseData.bookingMappings[0].parking,
          vehicleType: responseData.bookingMappings[0].vehicleType,
          additionalDesktop: responseData.bookingMappings[0].additionalDesktop,
          shift: responseData.bookingMappings[0].shiftDetails.id,
        });
      } catch (error) {
        setModalHeading("Error");
        setModalMessage(
          "Something went wrong while fetching formData. Please try again."
        );
        setShowModal(true);
      }
    };
    fetchData();
  }, []);

  // console.log("Hello from axios ", bookingData);
  // console.log("Hello from axios1 ", bookingStartDate);
  // console.log("Hello from axios2 ", bookingEndDate);

  const handleSubmit = async () => {
    // Find the booking mapping ID based on the selected date
    const selectedBooking = bookingData.bookingMappings.find(
      (mapping) => mapping.bookedDate === formData.bookedDate
    );

    if (!selectedBooking) {
      // Handle the case where no booking is found for the selected date
      console.error("No booking found for the selected date");
      return;
    }

    const user = {
      lunch: formData.lunch,
      beverage: formData.beverage,
      parking: formData.parking,
      vehicleType: formData.vehicleType,
      additionalDesktop: formData.additionalDesktop,
      shiftId: formData.shift,
    };

    if (formData.parking == "false") {
      user.vehicleType = "none";
    }

    try {
      const token = sessionStorage.getItem("token");
      axios.defaults.headers.common["Authorization"] = token;
      const res = await axios.put(
        `http://localhost:9006/bookmyseat/user/edit/${bookingId}/${selectedBooking.id}`,
        user
      );
      setModalHeading("Success");
      setModalMessage(res.data);
      setShowModal(true);
      // navigate("/dashboard");
      // handleCancelEdit();
    } catch (err) {
      setModalHeading("Error");
      setModalMessage(err.response.data);
      setShowModal(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue =
      value === "true" ? true : value === "false" ? false : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
    console.log("After updating: ", formData);
  };

  return (
    <>
      <div className={styles.BookingPage}>
        <div className={styles.formHeading}>
          <h3>Edit Your Booking</h3>
        </div>
        <div className={styles.bookingContent}>
          <div className={styles.ribbon}>
            {/* Date Selection for Editing Booking of that day*/}
            <div className={styles.dateSelection}>
              <label className={styles.selectLabels} htmlFor="dateSelection">
                Selected Date:{" "}
              </label>
              <input
                type="date"
                name="bookedDate"
                id="bookedDate"
                className={styles.registerationInput}
                value={formData.bookedDate}
                min={bookingStartDate}
                max={bookingEndDate}
                onChange={handleChange}
              />
            </div>

            {/* Shift Selection */}
            <div className={styles.shiftSelection}>
              <label className={styles.selectLabels} htmlFor="shift">
                Shift:
              </label>
              <select
                className={styles.registerationInput}
                name="shift"
                id="shift"
                value={formData.shiftDetails}
                onChange={handleChange}
              >
                {shifts &&
                  shifts.map((shift) => (
                    <option
                      className={styles.selectOptions}
                      key={shift.id}
                      value={shift.id}
                    >
                      {shift.startTime + " To " + shift.endTime}
                    </option>
                  ))}
              </select>
            </div>

            {/* Monitor Options */}
            <div className={styles.monitorOptions}>
              <label
                className={styles.selectLabels}
                htmlFor="additionalDesktop"
              >
                Monitor:
              </label>
              <select
                className={styles.registerationInput}
                name="additionalDesktop"
                id="additionalDesktop"
                value={formData.additionalDesktop ? true : false}
                onChange={handleChange}
              >
                <option className={styles.selectOptions} value={true}>
                  Yes
                </option>
                <option className={styles.selectOptions} value={false}>
                  No
                </option>
              </select>
            </div>

            {/* Lunch Options */}
            <div className={styles.lunchOptions}>
              <label className={styles.selectLabels} htmlFor="lunch">
                Lunch:
              </label>
              <select
                className={styles.registerationInput}
                name="lunch"
                id="lunch"
                value={formData.lunch ? "true" : "false"}
                onChange={handleChange}
              >
                <option className={styles.selectOptions} value="true">
                  Yes
                </option>
                <option className={styles.selectOptions} value="false">
                  No
                </option>
              </select>
            </div>

            {/* Beverages Options */}
            <div className={styles.beveragesOptions}>
              <label className={styles.selectLabels} htmlFor="beverage">
                Beverages:
              </label>
              <select
                className={styles.registerationInput}
                name="beverage"
                id="beverage"
                value={formData.beverage ? "true" : "false"}
                onChange={handleChange}
              >
                <option className={styles.selectOptions} value="true">
                  Yes
                </option>
                <option className={styles.selectOptions} value="false">
                  No
                </option>
              </select>
            </div>

            {/* Parking Options */}
            <div className={styles.parkingOptions}>
              <label className={styles.selectLabels} htmlFor="parking">
                Parking:
              </label>
              <div className={styles.parkingInputs}>
                <select
                  className={styles.registerationInput}
                  name="parking"
                  id="parking"
                  value={formData.parking ? true : false}
                  onChange={handleChange}
                >
                  <option className={styles.selectOptions} value="true">
                    Yes
                  </option>
                  <option className={styles.selectOptions} value="false">
                    No
                  </option>
                </select>
                {formData.parking && (
                  <div className={styles.parkingType}>
                    <select
                      className={styles.registerationInput}
                      name="vehicleType"
                      id="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleChange}
                    >
                      <option value="WHEELER_2">2 Wheeler</option>
                      <option value="WHEELER_4">4 Wheeler</option>
                    </select>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Booking Data */}
          <div className={styles.bookingDetails}>
            <p className={styles.heading}>Booking Details</p>

            <div className={styles.bookingContentData}>
              <div className={styles.choosenInputs}>
                <div className={styles.choosenInputLabel}>Date</div>
                <div className={styles.choosenInputValue}>
                  {formData.bookedDate}
                </div>
              </div>

              <div className={styles.choosenInputs}>
                <div className={styles.choosenInputLabel}>Shift</div>
                <div className={styles.choosenInputValue}>
                  {formData.shift &&
                    shifts.find((shift) => shift.id == formData.shift) && (
                      <>
                        {`${
                          shifts.find((shift) => shift.id == formData.shift)
                            .startTime
                        } To ${
                          shifts.find((shift) => shift.id == formData.shift)
                            .endTime
                        }`}
                      </>
                    )}
                </div>
              </div>

              <div className={styles.choosenInputs}>
                <div className={styles.choosenInputLabel}>Monitor</div>
                <div className={styles.choosenInputValue}>
                  {formData.additionalDesktop ? "Yes" : "No"}
                </div>
              </div>

              <div className={styles.choosenInputs}>
                <div className={styles.choosenInputLabel}>Lunch</div>
                <div className={styles.choosenInputValue}>
                  {formData.lunch ? "Yes" : "No"}
                </div>
              </div>

              <div className={styles.choosenInputs}>
                <div className={styles.choosenInputLabel}>Beverages</div>
                <div className={styles.choosenInputValue}>
                  {formData.beverage ? "Yes" : "No"}
                </div>
              </div>

              <div className={styles.choosenInputs}>
                <div className={styles.choosenInputLabel}>Parking</div>
                <div className={styles.choosenInputValue}>
                  {formData.parking
                    ? formData.vehicleType === "WHEELER_2"
                      ? "2 Wheeler"
                      : "4 Wheeler"
                    : "No"}
                </div>
              </div>
            </div>

            <div className={styles.RegisterationBtn}>
              <button
                className={styles.registerationSubmitBtn}
                onClick={handleSubmit}
              >
                Update
              </button>
              <button
                className={styles.registerationResetBtn}
                onClick={handleCancelEdit}
              >
                Cancel
              </button>
            </div>
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
    </>
  );
};

export default EditBooking;
