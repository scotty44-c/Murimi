import React from 'react';
import DownloadCard from '../components/DownloadCard';
import { Smartphone, Monitor, Apple } from 'lucide-react';

export default function Download() {
  const downloads = [
    {
      platform: 'Android',
      icon: <Smartphone className="h-12 w-12" />,
      description: 'Download Murimi for your Android device from the Google Play Store',
      downloadUrl: 'https://play.google.com/store/apps/details?id=com.murimi.app'
    },
    {
      platform: 'iOS',
      icon: <Apple className="h-12 w-12" />,
      description: 'Get Murimi from the Apple App Store for your iPhone or iPad',
      downloadUrl: 'https://apps.apple.com/app/murimi/id123456789'
    },
    {
      platform: 'Desktop',
      icon: <Monitor className="h-12 w-12" />,
      description: 'Access Murimi on your computer for a full-featured experience',
      downloadUrl: 'https://download.murimi.com/desktop'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Download Murimi
          </h1>
          <p className="text-xl text-gray-600">
            Choose your platform and start transforming your farming journey today
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {downloads.map((download, index) => (
            <DownloadCard key={index} {...download} />
          ))}
        </div>
      </div>
    </div>
  );
}