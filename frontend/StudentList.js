const StudentList = ({ students }) => {
  return (
    <div>
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>Yohj Railey S. Mendones BSIT</p>
      ) : (
        <ul>
          {students.map((student, index) => (
            <li key={index}>{student.name} - {student.course}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default StudentList;