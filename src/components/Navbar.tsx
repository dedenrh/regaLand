import { Menu, X, Home, Building2, Users } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-emerald-600" />
            <span className="ml-2 text-2xl font-bold text-slate-800">RegaLand</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
              Home
            </a>
            <a href="#properties" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
              Properties
            </a>
            <a href="#services" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
              Services
            </a>
            <a href="#contact" className="text-slate-700 hover:text-emerald-600 transition-colors font-medium">
              Contact
            </a>
            <a
              href="#contact"
              className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
            >
              Get Started
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-emerald-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a
              href="#home"
              className="block px-3 py-2 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#properties"
              className="block px-3 py-2 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Properties
            </a>
            <a
              href="#services"
              className="block px-3 py-2 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-slate-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
