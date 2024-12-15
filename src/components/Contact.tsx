import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl mb-8">
          Ready to Transform Your Farm?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join thousands of farmers who are already using Murimi to improve their farming practices
        </p>
        <Link
          to="/download"
          className="inline-flex bg-white text-green-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
        >
          Download Now
        </Link>
      </div>
    </section>
  );
}