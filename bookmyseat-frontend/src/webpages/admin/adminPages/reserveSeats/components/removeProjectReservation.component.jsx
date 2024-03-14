import React, { useEffect, useState } from "react";
import userListStyles from "../styles/userList.module.css";
import styles from "../styles/removeProjectReservation.module.css";
import paginationStyles from "../styles/pagination.module.css"
import axios from "axios";
import ResponseModal from "../../../../messageModal/responseModal";
import ReserveSeatModal from "./reserveSeatModal.component";
import { ChevronDown } from "lucide-react";

export const RemoveProjectReservation = () => {
  const [projectReservedSeat, setProjectReservedSeats] = useState([]);

  // states to manage response message modal and meaasge for reservation from admins side
  const [reserveModalMessage, serReserveModalMessage] = useState("");
  const [showReserveModal, setShowReserveModal] = useState(false);
  const [reserveModalHeading, setReserveModalHeading] = useState("");
  // state to store custom dropdown visibility - for projects
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);

  // states to manage response message modal and meaasge
  const [modalHeading, setModalHeading] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [projects, setProjects] = useState([]);
  // state to store selected project
  const [selectedProject, setSelectedProject] = useState(null);

  // state to store current page index - for pagination purpose
  const [currentPage, setCurrentPage] = useState(1);
  // defining total number of list items per page
  const [itemsPerPage] = useState(10);
  // calculating total number of pages required
  const totalPages = Math.ceil(projectReservedSeat.length / itemsPerPage);
  // maintaining indexs
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // items to display in current page
  const currentItems = projectReservedSeat
    ? projectReservedSeat.slice(indexOfFirstItem, indexOfLastItem)
    : [];
  // paginating between pages
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // function to close modal
  const closeReserveModal = () => {
    alert("close called");
    setShowReserveModal(false);
  };

  // function to close modal
  const closeModal = () => {
    setShowModal(false);
  };
  const token = sessionStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = token;

  //Function to get and store Project details from server
  useEffect(() => {
    const fetchData = () => {
      axios
        .get("http://localhost:9006/bookmyseat/admin/projects")
        .then((response) => {
          setProjects(response.data);
          // console.log(response.data);
        })
        .catch((error) => {
          console.error("Error fetching projects:", error);
        });
    };
    fetchData();
  }, []);
  // getting seats data associated with projects
  useEffect(() => {
    const fetchData = () => {
      axios
        .get("http://localhost:9006/bookmyseat/admin/seatrestriction/remove")
        .then((response) => {
          const data = response.data;
          setProjectReservedSeats(data.projectReservedSeats);
          console.log(response);
        })
        .catch((error) => {
          console.error("Error :", error);
        });
    };
    fetchData();
  }, []);
  // removing Reservation for any seat - Admin Side Functionality
  const removeReservedSeat = (seatData) => {
    const seatId = seatData.id;
    console.log(seatId);
    try {
      axios
        .post(
          "http://localhost:9006/bookmyseat/admin/seatrestriction/project/remove",
          {
            seatId,
          }
        )
        .then((res) => {
          setModalHeading("Success");
          setModalMessage(
            "The Reservation For the seat is removed successfully."
          );
          setShowModal(true);
        })
        .catch((err) => {
          setModalHeading("Error");
          setModalMessage("Something went wrong Please try again.");
          setShowModal(true);
          console.log(err);
        });
      setShowReserveModal(false);
    } catch (err) {
      console.log(err);
    }
  };

  const removeProjectReservation = (seatData) => {
    removeReservedSeat(seatData);
  };
  const handleProjectSelection = (projectId, projectName) => {
    setSelectedProject(projectId);
    setProjectDropdownOpen(false);
  };
  const removeWholeProjectReservation = () => {
    if (!selectedProject) {
      alert("project not filled");
    } else {
      try {
        const projectId = selectedProject;
        console.log(projectId);
        axios
          .post(
            "http://localhost:9006/bookmyseat/admin/seatrestriction/project/remove",
            {
              projectId,
            }
          )
          .then((res) => {
            console.log(res);
            setModalHeading("Success");
            setModalMessage(
              "The Reservation For the seat is removed successfully."
            );
            setShowModal(true);
          })
          .catch((err) => {
            setModalHeading("Error");
            setModalMessage("Something went wrong Please try again.");
            setShowModal(true);
          });
        setShowReserveModal(false);
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <>
      {/* project list dropdown */}
      <h1 className={styles.heading}>Remove Project Reservation</h1>
      <div className={styles.formContainer}>
        <label htmlFor="project" className={styles.formLabel}>
          Select Project
        </label>
        <div className={styles.customDropdown}>
          <div
            className={styles.formInput}
            onClick={() => setProjectDropdownOpen(!projectDropdownOpen)}
          >
            {selectedProject
              ? projects.find((project) => project.id === selectedProject)
                  .projectName
              : "Select Project"}{" "}
            <ChevronDown />
          </div>
          {projectDropdownOpen && (
            <div className={styles.dropdownList}>
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={styles.dropdownItem}
                  onClick={() => {
                    handleProjectSelection(project.id, project.projectName);
                  }}
                >
                  {project.projectName}
                </div>
              ))}
            </div>
          )}
        </div>
        <button
          className={styles.removeReserveButton}
          onClick={removeWholeProjectReservation}
        >
          Remove Reservation
        </button>
      </div>
      <div>
        {/* list containing details of all employees */}
        <div className={userListStyles.userList}>
          <div className={userListStyles.employeedetails}>
            <table className={userListStyles.usertable}>
              {/* table heading */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Seat Number</th>
                  <th>Floor</th>
                  <th>Action</th>
                </tr>
              </thead>
              {/* table body */}
              <tbody>
                {currentItems.map((detail, index) => (
                  <React.Fragment key={index}>
                    <tr>
                      <td>{detail.restrictedSeat.project.projectName}</td>
                      <td>{detail.seatNumber}</td>
                      <td>{detail.floor.floorName}</td>
                      <td>
                        <button
                          onClick={() => removeProjectReservation(detail)}
                          className={userListStyles.removeReserveButton}
                        >
                          Remove Reservation
                        </button>
                      </td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
          {/* pagination buttons container */}
          <div className={paginationStyles.pagination}>
            {projectReservedSeat.length > itemsPerPage && (
              <>
                {currentPage > 1 && (
                  <button
                    className={paginationStyles.paginationButton}
                    onClick={() => paginate(currentPage - 1)}
                  >
                    &lt;
                  </button>
                )}
                {[currentPage - 1, currentPage, currentPage + 1].map((page) => {
                  if (page > 0 && page <= totalPages) {
                    return (
                      <button
                        key={page}
                        className={`${paginationStyles.paginationButton} ${
                          currentPage === page
                            ? paginationStyles.activePage
                            : ""
                        }`}
                        onClick={() => paginate(page)}
                      >
                        {page}
                      </button>
                    );
                  }
                  return null;
                })}
                {currentPage < totalPages && (
                  <button
                    className={paginationStyles.paginationButton}
                    onClick={() => paginate(currentPage + 1)}
                  >
                    &gt;
                  </button>
                )}
              </>
            )}
          </div>
        </div>
        {/* modal for showimg click event on reserve button by admin */}
        {showReserveModal && (
          <ReserveSeatModal
            heading={reserveModalHeading}
            message={reserveModalMessage}
            onCancel={closeReserveModal}
            onConfirm={removeReservedSeat}
            // userDetail={selectedUser}
          />
        )}
        {showModal && (
          <ResponseModal
            message={modalMessage}
            onClose={closeModal}
            heading={modalHeading}
            // selectedUserData={selectedUser}
          />
        )}
      </div>
    </>
  );
};
