import Employee from "./Components/Employee";

const App = () => {

  const employee = {
    name: "Rahul",
    role: "Frontend Developer",
    salary: 45000,
    city: "Chennai"
  };

  return (
    <>
    <div>
      <h1>Employee Details</h1>

      <Employee employee={employee} />
    </div>
    </>
  );
};

export default App;
