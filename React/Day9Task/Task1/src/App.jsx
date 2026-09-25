import { useState } from "react";

const App = () => {

  const [name, setName] = useState("")
  const [showData,setShowData]=useState("")


  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleBtn =()=>{
    setShowData(name)
  }

  return (
    <div>
      <h2>Name </h2>

      <input type="text" placeholder="Enter your name"  onChange={handleName}/>
      <button onClick={handleBtn}>Click</button>

      <p>Your Name: {showData}</p>
    </div>
  );
};

export default App;
