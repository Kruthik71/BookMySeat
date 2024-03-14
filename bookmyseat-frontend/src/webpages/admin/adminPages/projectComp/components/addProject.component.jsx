import React, { useState } from "react";
import styles from "../../locationComp/styles/addNewInfo.module.css";

const AddProjectForm = ({ onHandleAdd }) => {
  // States needed in the component
  const [projectName, setProjectName] = useState("");

  // Function to handle click on Add Project button
  const handleAdd = () => {
    if (projectName) {
      onHandleAdd({ name: projectName.trim() });
      setProjectName("");
    } else {
      alert("Fill the details");
    }
  };

  return (
    <div className={styles.addContainer}>
      <div className={styles.addName}>
        <h1>Add Project</h1>

        {/* Input to take user input for project name */}
        <div className={styles.inputLabelCombo}>
          <label htmlFor="addProject">Project Name: </label>
          <input
            type="text"
            name="addProject"
            id="addProject"
            placeholder="Project Name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>

        {/* Button to add Project */}
        <button className={styles.addBtn} onClick={handleAdd}>
          Add Project
        </button>
      </div>
    </div>
  );
};

export default AddProjectForm;
