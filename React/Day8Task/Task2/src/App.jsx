import { useState } from "react";

const App = () => {

  const [text, setText] = useState("Hello React");

  const changeText = () => {
    setText("Welcome to React");
  };

  return (
    <>
      <div>
        <h2>{text}</h2>

        <button onClick={changeText}>Change Text</button>
      </div>
    </>
  );
};

export default App;
