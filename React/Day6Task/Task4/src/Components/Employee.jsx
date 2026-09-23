const Employee = (props) => {

  const employee = props.employee;

  return (
    <div>
      <p>Name: {employee.name}</p>
      <p>Role: {employee.role}</p>
      <p>Salary: ₹{employee.salary}</p>
      <p>City: {employee.city}</p>
    </div>
  );
};

export default Employee;