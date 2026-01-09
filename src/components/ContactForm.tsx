import { MessageCircle, User, Phone, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { name, whatsapp, message } = formData;
    const waMessage = `Hello RegaLand! My name is ${name}.\n\n${message}\n\nWhatsApp: ${whatsapp}`;
    const encodedMessage = encodeURIComponent(waMessage);
    const waUrl = `https://wa.me/6281570009200?text=${encodedMessage}`;

    window.open(waUrl, '_blank');

    setTimeout(() => {
      setFormData({ name: '', whatsapp: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-4">
              <span className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold">
                Get In Touch
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Ready to Find Your Dream Property?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Fill out the form and our team will get back to you within 24 hours via WhatsApp. We're here to help you every step of the way.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                  <p className="text-slate-600">0815 7000 9200</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                  <MessageCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">WhatsApp</h3>
                  <p className="text-slate-600">Available 24/7 for quick responses</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-slate-50 rounded-2xl p-8 shadow-xl border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors bg-white"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-semibold text-slate-700 mb-2">
                  WhatsApp Number
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="tel"
                    id="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors bg-white"
                    placeholder="e.g., 081234567890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors resize-none bg-white"
                  placeholder="Tell us about your property requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 text-white py-4 rounded-lg hover:bg-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
