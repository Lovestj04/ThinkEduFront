import { BrowserRouter, Routes, Route } from "react-router-dom";
import Aboutus from "./components/pages/Aboutus/About";
import Subjects from "./components/pages/subjects/Subjects";
import Error from "./components/pages/Error404/Error";
import Login from "./components/pages/Login/Login";
import Studentstable from "./components/pages/stundentstable/Studentstable";
import Home from "./components/pages/home/Home";
import Footer from "./components/layout/footer/footer";
import "./App.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/Studentstable" element={<Studentstable />} />
            <Route exact path="/Subjects" element={<Subjects />} />
            <Route exact path="/Aboutus" element={<Aboutus />} />
            <Route exact path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
export default App;
