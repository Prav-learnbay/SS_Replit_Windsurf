import { Link } from "wouter";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from "lucide-react";

const companyLinks = [
  { name: "About Us", href: "#" },
  { name: "Our Team", href: "#" },
  { name: "Careers", href: "#" },
  { name: "Press", href: "#" },
  { name: "Contact", href: "#" }
];

const resourceLinks = [
  { name: "MBTI Guide", href: "#" },
  { name: "Relationship Blog", href: "#" },
  { name: "Success Stories", href: "#" },
  { name: "Personality Quiz", href: "#" },
  { name: "Compatibility Chart", href: "#" }
];

const legalLinks = [
  { name: "Terms of Service", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Cookie Policy", href: "#" },
  { name: "Data Protection", href: "#" },
  { name: "Accessibility", href: "#" }
];

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-serif font-bold mb-4 block">
              <span className="text-primary">Soul</span>
              <span className="text-white">Sync</span>
              <span className="text-[#4ECDC4] text-sm ml-1">AI</span>
            </Link>
            <p className="text-neutral-200 mb-6">
              Revolutionary AI-powered matrimony platform that uses MBTI personality compatibility to create meaningful, lasting connections.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-primary transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-primary transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-primary transition">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-neutral-200 hover:text-primary transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {resourceLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-neutral-200 hover:text-primary transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-neutral-200 hover:text-primary transition">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-300 text-sm">
            &copy; {new Date().getFullYear()} SoulSync AI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-neutral-300 hover:text-primary text-sm transition">Terms</a>
            <span className="mx-2 text-neutral-500">|</span>
            <a href="#" className="text-neutral-300 hover:text-primary text-sm transition">Privacy</a>
            <span className="mx-2 text-neutral-500">|</span>
            <a href="#" className="text-neutral-300 hover:text-primary text-sm transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
