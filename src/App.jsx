import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainLayout from "./components/MainLayout";
import BlankLayout from "./components/BlankLayout";
import AdminLayout from "./components/AdminLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import ContactForm from "./pages/Contact";
import Services from "./pages/Service";
import Projects from "./pages/Portfolio";
import ProjectInfo from "./pages/ProjectInfo";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>

        {/* PUBLIC PAGES */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/About" element={<MainLayout><About /></MainLayout>} />
        <Route path="/Service" element={<MainLayout><Services /></MainLayout>} />
        <Route path="/Portfolio" element={<MainLayout><Projects /></MainLayout>} />
        <Route path="/ProjectInfo" element={<MainLayout><ProjectInfo /></MainLayout>} />
        <Route path="/Contact" element={<MainLayout><ContactForm /></MainLayout>} />

        {/* ADMIN LOGIN (NO NAVBAR) */}
        <Route path="/Login" element={<BlankLayout><Login /></BlankLayout>} />

        {/* ADMIN DASHBOARD (SIDEBAR) */}
        <Route path="/Dashboard" element={<AdminLayout><Dashboard /></AdminLayout>} />

      </Routes>
    </Router>
  );
}

export default App;
