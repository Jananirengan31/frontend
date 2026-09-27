const App = () => {

  const courses = ["HTML", "CSS", "JavaScript", "React", "Python"];

  return (
    <>
      <h2>Available Courses</h2>

      {courses.map((e, i) => (
        <div key={e.courses}>
          <h3>{e}</h3>
        </div>
      ))}
    </>
  );
};

export default App;
