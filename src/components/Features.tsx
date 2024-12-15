import React from 'react';
import { CloudSun, Leaf, LineChart, Users } from 'lucide-react';

const features = [
  {
    icon: <CloudSun className="h-8 w-8" />,
    title: "Weather Insights",
    description: "Real-time weather forecasts and agricultural alerts tailored to your location"
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "Crop Management",
    description: "Track crop growth, manage planting schedules, and get personalized recommendations"
  },
  {
    icon: <LineChart className="h-8 w-8" />,
    title: "Market Prices",
    description: "Stay updated with current market prices and trends for your produce"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Farmer Community",
    description: "Connect with other farmers, share experiences, and get expert advice"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Features that Empower Farmers
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Everything you need to manage your farm efficiently
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-green-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}