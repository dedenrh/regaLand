import { Building2, MapPin, Phone, Mail, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Building2 className="h-8 w-8 text-emerald-400" />
              <span className="ml-2 text-2xl font-bold">RegaLand</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed max-w-md">
              Building Life Value, Realizing Dream Homes. Your trusted partner in finding the perfect property across Lampung region.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-lg hover:bg-emerald-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-lg hover:bg-emerald-600 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#properties" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Properties
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-slate-400 text-sm">
                  Jl. H Sulaiman Perum Puspita Residence Rajabasa Bandar Lampung
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-400 mr-2" />
                <span className="text-slate-400 text-sm">0815 7000 9200</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-400 mr-2" />
                <span className="text-slate-400 text-sm">info@regaland.id</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              {currentYear} RegaLand. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
