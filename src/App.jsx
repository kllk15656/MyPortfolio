import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactForm from "./pages/Contact";


function App() {
  return (
    <Router>

      {/* FULL PAGE BACKGROUND */}
      <div className="bg min-h-screen">

        {/* Navigation stays on every page */}
        <NavBar />

        {/* Page content changes depending on the route */}
        <main className="pt-24 max-w-6xl mx-auto px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About/>} />
            <Route path="/Contact" element={<ContactForm/>} />


          </Routes>
        </main>

      </div>

    </Router>
  );
}

export default App;

