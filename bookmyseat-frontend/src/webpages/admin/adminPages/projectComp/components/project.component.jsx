import React, { useEffect, useState } from "react";
import styles from "../../locationComp/styles/addNewInfo.module.css";
import AddProjectForm from "./addProject.component";
import axios from "axios";
import ViewProjectTable from "./viewProjects.component";

const Projects = () => {
  // States needed in the component
  const [projects, setProjects] = useState([]);
  // state to toggle between child component
  const [showAdd, setShowAdd] = useState(true);

  // Setting axios header for authorization
  const token = sessionStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = token;
  //  Function to get Data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        // console.log(token);

        // Axios request to get data from server
        const response = await axios.get(
          "http://localhost:9006/bookmyseat/admin/projects"
        );

        // Filtering useful Data from the axios response
        const filteredData = response.data.map((project) => ({
          id: project.id,
          name: project.projectName,
          startDate: project.startDate,
        }));

        // Setting filtered data to employeeBookings
        setProjects(filteredData);
        // console.log(response.data);
      } catch (error) {
        console.error("Error fetching User Data:", error);
      }
    };
    fetchData();
  }, []);

  // Function to handle click on Add Project button
  const handleAddProject = (newProject) => {
    const projectName = {
      projectName: newProject.name,
    };
    console.log("New Project: ", newProject);
    console.log("Project Name: ", projectName);
    // Setting axios header for authorization
    const token = sessionStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = token;
    // console.log(token);

    axios
      .post("http://localhost:9006/bookmyseat/admin/createProject", projectName)
      .then((res) => alert(res.data))
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
          Add Projects
        </button>
        <button
          className={!showAdd ? styles.activeButton : styles.selectionBtn}
          onClick={() => setShowAdd(false)}
        >
          View Projects
        </button>
      </div>

      {/* Renders AddProjectForm if true otherwise renders ViewProjectTable Component */}
      {showAdd ? (
        <AddProjectForm onHandleAdd={handleAddProject} />
      ) : (
        <ViewProjectTable projects={projects} />
      )}
    </div>
  );
};

export default Projects;
