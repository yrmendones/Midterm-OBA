import React, { useState } from "react";

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !course) {
      setMessage("Please fill in all fields.");
      return;
    }
    
    await addStudent(name, course); // Calls function from App.js

    // Show dynamic success message
    setMessage(`${name} enrolled in ${course} successfully!`);

    setName(""); // Clear input fields
    setCourse("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Student Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Course" value={course} onChange={(e) => setCourse(e.target.value)} />
        <button type="submit">Add Student</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default StudentForm;