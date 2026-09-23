const App = () => {

  const courses = ["HTML","CSS","JavaScript","React","Tailwind CSS"];

  return (
    <>
    <div>
      <h1>Courses</h1>

      {courses.map((e, i) => (
        <p key={i}>{e}</p>
      ))}
    </div>

    </>
  );
};

export default App;
