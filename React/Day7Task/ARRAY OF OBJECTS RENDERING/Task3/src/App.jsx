
const App = () => {

  const employees = [
    { id: 1, name: "Arun", department: "IT", salary: 40000 },
    { id: 2, name: "Priya", department: "HR", salary: 35000 },
    { id: 3, name: "Karthik", department: "Finance", salary: 45000 },
    { id: 4, name: "Divya", department: "Marketing", salary: 38000 }
  ];

  return (
    <>
      <h2>Employee Details</h2>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.department}</td>
              <td>₹{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default App;