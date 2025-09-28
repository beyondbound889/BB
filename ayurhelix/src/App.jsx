import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "@dr.pogodin/react-helmet";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Innovation from "./pages/Innovation";
import About from "./pages/About";
import Blog from "./pages/Blog";
import "./App.css";
function App() {
  return (
    // Set global styles on the main container
    <div className="bg-[#F4F1DE] text-[#1E2F23] font-['Poppins']">
      <HelmetProvider>
        <Router>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/innovation" element={<Innovation />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </HelmetProvider>
    </div>
  );
}

export default App;
