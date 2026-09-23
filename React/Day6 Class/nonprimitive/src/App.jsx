
const App  =()=>{

  const Student=[{Studentid:123,Name:"Jan",Age:22,Email:"jan123@gmail.com"},
                {Studentid:124,Name:"Priya",Age:21,Email:"priya124@gmail.com"},
                {Studentid:125,Name:"Jaya",Age:20,Email:"jaya1235@gmail.com"},
                {Studentid:123,Name:"Jan",Age:22,Email:"jan123@gmail.com"},
                {Studentid:123,Name:"Jan",Age:22,Email:"jan123@gmail.com"},
                {Studentid:123,Name:"Jan",Age:22,Email:"jan123@gmail.com"},
                {Studentid:123,Name:"Jan",Age:22,Email:"jan123@gmail.com"},
                {Studentid:123,Name:"Jan",Age:22,Email:"jan123@gmail.com"},
                {Studentid:123,Name:"Jan",Age:22,Email:"jan123@gmail.com"},
                {Studentid:123,Name:"Jan",Age:22,Email:"jan123@gmail.com"}
                 ]
  return (
    <> 
    <div className="bg-blue-500 flex justify-between items-align gap-4 h-150 flex-wrap ">
          {Student.map((e,i)=>(
            <div key={i} className="bg-yellow-200 p-3 w-60 h-40 rounded-[20px] m-4">
           <h2>{e.Studentid}</h2>
           <p>{e.Name}</p>
           <p>{e.Age}</p>
           <p>{e.Email}</p>
           <button className="bg-black text-white w-25 rounded-[15px]" >Click Me</button>
           </div>

          )
          
          
          )}
          </div>
    </>
  )
}
export default App