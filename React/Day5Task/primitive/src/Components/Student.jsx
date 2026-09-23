const Student = () => {
  const studentName = "Arun";
  const age = 22;
  const course = "React JS";
  const isActive = true;
  const fees = 15000;

  return (
    <div>
      <p>Student Name: {studentName}</p>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <p>Status: {isActive ? "Active" : "Inactive"}</p>
      <p>Fees: {fees}</p>
    </div>
  );
};

export default Student;