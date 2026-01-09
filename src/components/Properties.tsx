import { MapPin, Ruler, Bed, Bath } from 'lucide-react';

interface Property {
  name: string;
  location: string;
  price: string;
  area: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
}

const properties: Property[] = [
  {
    name: 'AULIA RESIDENCE',
    location: 'Bandar Lampung',
    price: 'Rp 2,500,000',
    area: '72 m²',
    bedrooms: 3,
    bathrooms: 2,
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'PURI INDAH 3',
    location: 'Natar',
    price: 'Rp 1,100,000',
    area: '60 m²',
    bedrooms: 2,
    bathrooms: 1,
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'GRIYA INDUSTRI',
    location: 'Itera',
    price: 'Rp 1,100,000',
    area: '65 m²',
    bedrooms: 2,
    bathrooms: 1,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'AYODIA LESTARI',
    location: 'Metro',
    price: 'Rp 1,100,000',
    area: '58 m²',
    bedrooms: 2,
    bathrooms: 1,
    image: 'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'BERINGIN RAYA',
    location: 'Rajabasa',
    price: 'Rp 1,100,000',
    area: '70 m²',
    bedrooms: 2,
    bathrooms: 2,
    image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'HAJIMENA GARDEN',
    location: 'Way Halim',
    price: 'Rp 2,200,000',
    area: '80 m²',
    bedrooms: 3,
    bathrooms: 2,
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    name: 'JAHA RESIDENCE',
    location: 'Sukabumi',
    price: 'Rp 1,200,000',
    area: '62 m²',
    bedrooms: 2,
    bathrooms: 1,
    image: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export default function Properties() {
  return (
    <section id="properties" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover our carefully selected properties across Lampung region. Find your perfect home with flexible payment options.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Available
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{property.name}</h3>
                <div className="flex items-center text-slate-600 mb-4">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-slate-200">
                  <div className="flex items-center text-slate-600">
                    <Ruler className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.area}</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Bed className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.bedrooms} Beds</span>
                  </div>
                  <div className="flex items-center text-slate-600">
                    <Bath className="h-4 w-4 mr-1" />
                    <span className="text-sm">{property.bathrooms} Bath</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Monthly Installment</p>
                    <p className="text-2xl font-bold text-emerald-600">{property.price}</p>
                  </div>
                  <a
                    href="#contact"
                    className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors text-sm font-semibold"
                  >
                    Inquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
