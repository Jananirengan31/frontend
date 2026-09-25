
import {useState} from "react"
const App = ()=>{

 const datas = 10;

  //console.log(data);
  

  const [count,setCount]=useState(0)

  const handleClick =()=>{
       
      setCount(datas+1)
  }

  const handleDec =()=>{
       
      setCount(datas-1)
  }

   const handleReset =()=>{
       
      setCount(0)
  }


  return(
    <>

    <div>
      <h1>{datas}</h1>
      <button onClick={handleClick}>{datas ++}</button>
      <button onClick={handleDec}>{datas --}</button>
      <button onClick={handleReset}>{Reset}</button>
    </div>
    </>
  )
}

export default App;
