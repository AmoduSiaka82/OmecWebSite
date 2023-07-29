import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import About from "./pages/About/About";
import Appointment from "./pages/Appointment/Appointment";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Homepage from "./pages/Homepage";
import Services from "./pages/Services/Services";
import NotFound from "./pages/NotFound/NotFound";
import Carousel from "./components/carousel/Carousel";
import { CarouselData } from "./components/carousel/CarouselData";


function App() {
  return (
    // <Homepage />
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
                  <Route path="*" element={<NotFound />} />
                  
        </Routes>
      </Router>
    </>
  );
}

export default App;
