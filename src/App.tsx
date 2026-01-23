import Navbar from "@/layout/Navbar";
import Hero from "@/sections/Hero";
import About from "./sections/About";
import Project from "./sections/Project";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Project/>
        <Experience/>
        <Contact/>
      </main>
    </div>
  );
}

export default App;
