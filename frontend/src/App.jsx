import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import Navbar from "../components/Navbar"
import ItemPage from "./pages/ItemPage"

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={"/"} element={ <HomePage/> } />
        <Route path={"/create"} element={ <CreatePage/> } />
        <Route path={"item/:id"} element={<ItemPage/>}></Route>
      </Routes>
      
      
    </>
  )
}

export default App
