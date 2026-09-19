const Home = () =>{
    const stringName="React"
    const num =12345
    return (
        <>
          <div className="bg-blue-500 p-5 text-white">
            <h1>This is React Home Page</h1>
            <h1>{stringName}</h1>
            <h2>{num}</h2>
          </div>

        </>
    )
}
export default Home()