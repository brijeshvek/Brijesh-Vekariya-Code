import "./App.css";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import MyDetalis from "./Components/MyDetalis";
import Skills from "./Components/Skills";
import Protfolio from "./Components/Portfolio";
import Whatsapp from "./Components/Whatsapp";
import About from "./Components/About";
import Phonemanubar from "./Components/Phonemanubar";

function App() {
  return(
  <>
    <Router>
      <Navbar/>
      <Whatsapp/>
      <Routes>
        <Route index element={<MyDetalis/>}/>
        <Route path="/home" element={<MyDetalis/>}/>
        <Route path="/skill" element={<Skills/>}/>
        <Route path="/portfolio" element={<Protfolio/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
      <Phonemanubar/>
    </Router>
  </>
  );
}

export default App;
