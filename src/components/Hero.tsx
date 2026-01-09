import { ArrowRight, Home } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-emerald-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
                Your Trusted Property Partner
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Find Your
              <span className="text-emerald-600"> Dream Property</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              Building Life Value, Realizing Dream Homes. We help you discover the perfect property that fits your lifestyle and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#properties"
                className="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg group"
              >
                Explore Properties
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-white text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-all duration-300 border-2 border-emerald-600 font-semibold text-lg"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-emerald-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-slate-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-2xl border border-slate-100">
              <div className="flex items-center justify-center h-64 md:h-96 bg-gradient-to-br from-emerald-100 to-slate-100 rounded-xl">
                <Home className="h-32 w-32 text-emerald-600 opacity-20" />
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-emerald-600">50+</p>
                  <p className="text-sm text-slate-600">Properties</p>
                </div>
                <div className="text-center border-x border-slate-200">
                  <p className="text-2xl font-bold text-emerald-600">1000+</p>
                  <p className="text-sm text-slate-600">Happy Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-emerald-600">15+</p>
                  <p className="text-sm text-slate-600">Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
