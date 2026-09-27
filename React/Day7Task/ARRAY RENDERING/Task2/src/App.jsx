const App = () => {

  const cities = ["Chennai", "Bangalore", "Mumbai", "Delhi", "Hyderabad", "Kochi"];

  return (
    <>
      <h2>City Names</h2>

      {cities.map((e, i) => (
        <p key={e.cities}></p>
      ))}
    </>
  );
};

export default App;
