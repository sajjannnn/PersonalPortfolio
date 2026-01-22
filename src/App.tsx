import Navbar from "@/layout/Navbar";
import Hero from "@/sections/Hero";
import About from "./sections/About";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}

export default App;
