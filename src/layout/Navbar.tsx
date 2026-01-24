import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  // { href: "#experience", label: "Experience" },
];

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll",handleScroll)
  })
  return (
    <header className ={`fixed left-0 top-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3" : "bg-transparent py-5" } bg-transparent py-5 z-50`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
          SAJJAN <span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a href={link.href} key={index} className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                {" "}
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Button className="hidden md:block">Contact Me</Button>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMenu(!isMenu)} className="md:hidden p-2 text-foreground">
          {isMenu ? <X size={24}/> :<Menu size={24} /> }
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenu && (
        <div className="md;hidden glass-strong animate-fade-ininst">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a href={link.href} key={index} className="text-lg py-2  text-muted-foreground hover:text-foreground rounded-full">
                {" "}
                {link.label}
              </a>
            ))}
            <Button>Contact Me</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
