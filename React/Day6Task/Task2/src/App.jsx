
const App = () => {

  const student = {name: "Janani",age: 22,course: "Computer Science",city: "Chennai"};

  return (
    <>
    <div>
      <h1>Student Details</h1>

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Course: {student.course}</p>
      <p>City: {student.city}</p>
    </div>
    </>
  );
};

export default App;