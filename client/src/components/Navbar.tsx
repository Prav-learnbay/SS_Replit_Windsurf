import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full bg-white bg-opacity-95 shadow-sm z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-serif font-bold">
            <span className="text-primary">Soul</span>
            <span className="text-[#6A4C93]">Sync</span>
            <span className="text-[#4ECDC4] text-sm ml-1">AI</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#how-it-works" className="text-neutral-800 hover:text-primary transition">How It Works</a>
          <a href="#features" className="text-neutral-800 hover:text-primary transition">Features</a>
          <a href="#testimonials" className="text-neutral-800 hover:text-primary transition">Success Stories</a>
          <a href="#faq" className="text-neutral-800 hover:text-primary transition">FAQ</a>
          <a href="#signup">
            <Button className="bg-primary text-white px-5 py-2 rounded-full hover:bg-opacity-90 transition shadow-md">
              Sign Up
            </Button>
          </a>
        </nav>
        
        <button 
          className="md:hidden text-neutral-800" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <a 
              href="#how-it-works" 
              className="text-neutral-800 hover:text-primary transition py-2 border-b border-neutral-200"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#features" 
              className="text-neutral-800 hover:text-primary transition py-2 border-b border-neutral-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              className="text-neutral-800 hover:text-primary transition py-2 border-b border-neutral-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Success Stories
            </a>
            <a 
              href="#faq" 
              className="text-neutral-800 hover:text-primary transition py-2 border-b border-neutral-200"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <a 
              href="#signup" 
              className="bg-primary text-white px-5 py-2 rounded-full hover:bg-opacity-90 transition shadow-md text-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
