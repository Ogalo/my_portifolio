import "./App.css";
import { Box } from "@mui/material";
import { Home, ContactPage, ServicePage, AboutPage, Blog, Experience } from "./pages";
import { About, Contact, NavBar, Services } from "../src/components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Projects } from "../src/pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/experience" element={<Experience />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
