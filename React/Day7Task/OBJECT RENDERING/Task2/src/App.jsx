const App = () => {

  const employee = { name: "Jan", role: "Frontend Developer", salary: 30000, location: "Chennai" };

  return (
    <>
      <h2>Employee Details</h2>

      <p>Name: {employee.name}</p>
      <p>Role: {employee.role}</p>
      <p>Salary: {employee.salary}</p>
      <p>Location: {employee.location}</p>
    </>
  );
};

export default App;
