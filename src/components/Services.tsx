import { Banknote, Paintbrush, Wrench, Users } from 'lucide-react';

const services = [
  {
    icon: Banknote,
    title: 'Mortgage Assistance',
    description: 'We help you navigate the mortgage process with our banking partners for the best rates and terms.',
    color: 'emerald'
  },
  {
    icon: Paintbrush,
    title: 'Interior Design',
    description: 'Professional interior design services to transform your new property into your dream home.',
    color: 'blue'
  },
  {
    icon: Wrench,
    title: 'Renovation Services',
    description: 'Complete renovation solutions from planning to execution with experienced contractors.',
    color: 'amber'
  },
  {
    icon: Users,
    title: 'Consultation',
    description: 'Free property consultation to help you make informed decisions about your investment.',
    color: 'rose'
  }
];

const colorMap = {
  emerald: {
    bg: 'bg-emerald-100',
    text: 'text-emerald-600',
    hover: 'group-hover:bg-emerald-600'
  },
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
    hover: 'group-hover:bg-blue-600'
  },
  amber: {
    bg: 'bg-amber-100',
    text: 'text-amber-600',
    hover: 'group-hover:bg-amber-600'
  },
  rose: {
    bg: 'bg-rose-100',
    text: 'text-rose-600',
    hover: 'group-hover:bg-rose-600'
  }
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We provide comprehensive services to make your property ownership journey smooth and enjoyable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorMap[service.color as keyof typeof colorMap];

            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:-translate-y-2"
              >
                <div className={`${colors.bg} ${colors.hover} w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300`}>
                  <Icon className={`h-8 w-8 ${colors.text} group-hover:text-white transition-colors duration-300`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
