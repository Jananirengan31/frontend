const App ()=>{
  return(
    <>
    </NavBar>
    <Routes>
    <Route Path="/" elements={<Home/>}/>
    <Route Path="/About" elements={<About/>}/>
    </Routes>
    </>
  )
}