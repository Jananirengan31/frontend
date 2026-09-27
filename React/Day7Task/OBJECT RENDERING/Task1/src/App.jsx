
import Student from "./Student";

const App = () => {

  const student = {
    name: "Jan",
    age: 22,
    course: "CSE",
    city: "Chennai"
  };

  return (
    <>
      <h2>Student Details</h2>

      <Student student={student} />
    </>
  );
};

export default App;