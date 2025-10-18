import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home.jsx";
import About from "@/pages/About.jsx";
import Projects from "@/pages/Projects.jsx";
import ProjectDetail from "@/pages/ProjectDetail.jsx";
import Contact from "@/pages/Contact.jsx";
import NotFound from "@/pages/NotFound.jsx";

export default function AppRouter() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}..
