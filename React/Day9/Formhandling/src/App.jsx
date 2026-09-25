const App =()=>{
    
  const[userName,setUserName] = useState("")
  const[userAge,setUserAge] = useState("")
  const[showData,setShowData] = useState([])


  const handleChange =(e)=>{
    setUserName(e.target.value)
         
  }

  const handleAge = (e)=>{
         setUserAge(e.target.value)
  }

  const handleClick= ()=>{

    const obj ={id.Data.now(),Name:userName,Age:userAge}

    const copy =[...showData]

    copy.push(obj)

    setShowData(copy)

  }

  return(
    <>

   <div>
    <input type="text" onChange={handleChange} placeholder="Enter the Name"/>
    <input type="number" onChange={handleAge} placeholder="Enter the Age"/>
    <button onClick={handleClick} >Click</button>
   </div>

   <div>
    <table>
      <thead>
        <tr>
          <th>userId</th>
          <th>userName</th>
          <th>userAge</th>
        </tr>
      </thead>

      <tbody>
        {showData.map((e)=>(
          <tr{Key=e.userId}>
            <td>{userId}</td>
            <td>{userName}</td>
            <td>{userAge}</td>
          </tr>
        ))}
      </tbody>
    </table>
   </div>


    </>
  )
}
exprot default App