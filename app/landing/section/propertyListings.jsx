'use client';
import Link from 'next/link';
import Image from 'next/image';
import { properties } from '../../data/properties';

export default function PropertyListings() {
  return (
    <section id='properties' className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className=" mb-12">
          <h2 className="text-md border border-1 inline px-4 py-2 rounded rounded-full font-bold mb-4">Featured Properties</h2>
          <p className="text-lg text-gray-600 mt-8">
            DISCOVER HOMES TAILORED TO YOUR LIFESTYLE AND NEEDS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.slice(0, 6).map((property) => (
            <div key={property.id} className=" overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Link href={`/properties/${property.id}`} className="block">
                <div className="relative h-60 bg-gray-200">
                  <Image
                    src={property.images[0]}  
                    alt={`${property.title} - ${property.location}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={property.id === 1}  
                  />
                  <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
                    {property.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                  <p className="text-gray-600 mb-4">{property.location}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{property.bedrooms} Beds</span>
                    <span>{property.bathrooms} Baths</span>
                    <span>{property.area}</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-600">{property.price}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/properties" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
}