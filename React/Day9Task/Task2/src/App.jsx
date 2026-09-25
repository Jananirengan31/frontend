import { useState } from "react";

const App = () => {

  const [email, setEmail] = useState("")
  const [showData, setShowData] = useState("")

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowData(email);
  };

  return (
    <>
      <div>
        <h2>Email</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Enter your email"
            onChange={handleEmail}
          />

          <button type="submit">Submit</button>

        </form>

        <p>Your Email: {showData}</p>
      </div>
    </>
  );
};

export default App;