import { useState } from "react";

const App = () => {

  const [employee, setEmployee] = useState({ name: "", id: "", department: "", role: "", salary: "" });

  const [showData, setShowData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({
      ...employee,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowData(employee);
    setEmployee({ name: "", id: "", department: "", role: "", salary: "" });
  };

  return (
    <>
      <h2>Employee Details Form</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Employee Name" value={employee.name} onChange={handleChange} />
        <input type="text" name="id" placeholder="Employee ID" value={employee.id} onChange={handleChange} />
        <input type="text" name="department" placeholder="Department" value={employee.department} onChange={handleChange} />
        <input type="text" name="role" placeholder="Role" value={employee.role} onChange={handleChange} />
        <input type="number" name="salary" placeholder="Salary" value={employee.salary} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>

      <h2>Employee Details</h2>

      {showData.name && (
        <div>
          <p>Name: {showData.name}</p>
          <p>ID: {showData.id}</p>
          <p>Department: {showData.department}</p>
          <p>Role: {showData.role}</p>
          <p>Salary: {showData.salary}</p>
        </div>
      )}
    </>
  );
};

export default App;
