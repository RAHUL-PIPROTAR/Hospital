import "./App.css";
import "../src/Components/asset/css/Style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import Upcoming from "./Components/Upcoming";
import Specialist from "./Components/Specialist";
import Gallery from "./Components/Gallery";
import Doctors from "./Components/Doctors";
import ScrollTop from "./Components/ScrollTop";
import Contectus from "./Components/Contectus";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Navbar firstmenu="Home" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contectus" element={<Contectus />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="upcoming" element={<Upcoming />} />
          <Route path="specialities" element={<Specialist />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="doctors" element={<Doctors />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
