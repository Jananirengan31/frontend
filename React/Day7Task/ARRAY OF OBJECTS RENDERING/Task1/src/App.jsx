const App = () => {

  const students = [
    { id: 1, name: "Arun", age: 22, course: "React JS" },
    { id: 2, name: "Priya", age: 21, course: "Java" },
    { id: 3, name: "Karthik", age: 23, course: "Python" },
    { id: 4, name: "Divya", age: 22, course: "JavaScript" }
  ];

  return (
    <>
      <h2>Student Details</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;