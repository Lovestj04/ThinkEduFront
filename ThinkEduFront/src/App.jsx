import {BrowserRouter, Routes, Route} from "react-router-dom"
import Aboutus from "../src/components/pages/Aboutus"
import Subjects from "../src/components/pages/Subjects"
import Error from "../src/components/pages/Error404"
import Home from "./components/pages/Login/Login"
import Studentstable from "../src/components/pages/stundentstable/studentstable"
import Navbar from "../src/components/layout/navbar/navbar"
import Footer from "./components/layout/footer/footer"
import './app.css'

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route>
          <Route exact path="/" element={<Home />} />
      <Route exact path="/Studentstable" element={<Studentstable />} />
      <Route exact path="/Subjects" element={<Subjects />} />
      <Route exact path="/Aboutus" element={<Aboutus />} />
      <Route exact path="*" element={<Error />} />



            
          </Route>




        </Routes>

        
        
          
        
      </BrowserRouter>
    <Footer/>
  
    </div>
  )
}

export default App
