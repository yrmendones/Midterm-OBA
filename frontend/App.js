import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const App = () => {
  const [students, setStudents] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const addStudent = async (name, course) => {
    try {
      await axios.post("http://127.0.0.1:5000/api/students", { name, course });
      fetchStudents(); // Refresh student list
      setMessage(`${name} enrolled in ${course} successfully!`);
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "Yellow",
        textAlign: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>Student Recording System</h1>
      <StudentForm addStudent={addStudent} />

      {/* Message after adding student */}
      {message && <p style={{ fontWeight: "bold", color: "DarkBlue" }}>{message}</p>}

      {/* Student List (Heading will be inside StudentList.js) */}
      <StudentList students={students} />

      {/* Logo */}
      <img
        src="https://www.paterostechnologicalcollege.edu.ph/ASSETS/IMAGES/LOGO/logo-ptc.png"
        alt="Online logo"
        width="200"
      />
    </div>
  );
};

export default App;