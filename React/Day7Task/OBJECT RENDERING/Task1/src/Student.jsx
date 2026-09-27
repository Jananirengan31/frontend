const Student = (props) => {

  return (
    <>
      <p>Name: {props.student.name}</p>
      <p>Age: {props.student.age}</p>
      <p>Course: {props.student.course}</p>
      <p>City: {props.student.city}</p>
    </>
  );
};

export default Student;