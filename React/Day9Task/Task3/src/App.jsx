import { useState } from "react";

const App = () => {

  const [age, setAge] = useState("");
  const [showData, setShowData] = useState([]);

  const handleAge = (e) => {
    setAge(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   if (age === "") {
      return;
    }

    const obj = [...ages];
    obj.push(age);

    setAges(obj);
    setAge("");

  };

  return (
    <>
      <div>
        <h2>Age </h2>

        <form onSubmit={handleSubmit}>

          <input type="number" placeholder="Enter your age" value={age} onChange={handleAge} />
          <button type="submit">Submit</button>

        </form>

        <h3>{showData}</h3>

        {ages.map((e, i) => (
          <p key={i}>{e}</p>
        ))}
      </div>
    </>
  );
};

export default App;