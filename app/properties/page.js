// app/properties/page.js
'use client'
import PropertyCard from '../components/properties/PropertyCard';
import { properties } from '../data/properties';

export default function PropertiesPage() {
  return (
    <div className="h-full w-screen container mx-auto px-4 py-8 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-black">Featured Properties</h1>
        <p className="text-xl text-gray-600">
          DISCOVER HOMES TAILORED TO YOUR LIFESTYLE AND NEEDS
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}