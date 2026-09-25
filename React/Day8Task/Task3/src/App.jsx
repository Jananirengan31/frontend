import { useState } from "react";

const App = () => {

  const [show, setShow] = useState(true);

  const toggleText = () => {
    setShow(!show);
  };

  return (
    <>
      <div>
        {show && <h2>This is React content</h2>}

        <button onClick={toggleText}>
          {show ? "Hide" : "Show"}
        </button>
      </div>
    </>
  );
};

export default App;