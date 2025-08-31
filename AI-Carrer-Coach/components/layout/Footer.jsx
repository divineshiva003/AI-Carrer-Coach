// components/Footer.jsx
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-10 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h3 className="text-white font-bold text-xl">AptiGeeks 2.0</h3>
          <p className="text-gray-500 text-sm mt-1">
            From Bits to Brilliance – The 2.0 Way
          </p>
        </div>

        {/* Middle Nav Links */}
        <div className="flex gap-6 text-sm">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#testimonials" className="hover:text-white">Testimonials</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        {/* Right Social Links */}
        <div className="flex gap-4">
          <a href="https://github.com/divineshiva003/AI-Carrer-Coach" target="_blank" rel="noreferrer">
            <Github className="h-6 w-6 hover:text-white transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin className="h-6 w-6 hover:text-white transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter className="h-6 w-6 hover:text-white transition" />
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} AptiGeeks. All rights reserved.
      </div>
    </footer>
  );
}
