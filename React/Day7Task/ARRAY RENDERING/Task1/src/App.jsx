const App = () => {

  const languages = ["Java", "Python", "JavaScript", "C++", "C"];

  return (
    <>
      <h2>Programming Languages</h2>

      {languages.map((e, i) => (
        <p key={e.languages}></p>
      ))}
    </>
  );
};

export default App;
