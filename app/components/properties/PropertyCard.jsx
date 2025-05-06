// app/components/properties/PropertyCard.jsx
"use client"
import Link from 'next/link';
import Image from 'next/image';

export default function PropertyCard({ property }) {
  return (
    <Link href={`/properties/${property.id}`} className="block">
      <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48">
          <Image 
            src={property.images[0]} 
            alt={property.title}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-black">
            {property.type}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-black">{property.title}</h3>
          <p className="text-gray-600 mb-4">{property.location}</p>
          <div className="flex justify-between text-sm text-gray-500 mb-4">
            <span>{property.bedrooms} Beds</span>
            <span>{property.bathrooms} Baths</span>
            <span>{property.area}</span>
          </div>
          <p className="text-2xl font-bold text-blue-600">{property.price}</p>
        </div>
      </div>
    </Link>
  );
}