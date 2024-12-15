import React from 'react';
import { Download } from 'lucide-react';

interface DownloadCardProps {
  platform: string;
  icon: React.ReactNode;
  description: string;
  downloadUrl: string;
}

export default function DownloadCard({ platform, icon, description, downloadUrl }: DownloadCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
      <div className="flex flex-col items-center text-center">
        <div className="text-green-600 mb-4 text-4xl">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">{platform}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <a
          href={downloadUrl}
          className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
        >
          <Download className="h-5 w-5" />
          <span>Download for {platform}</span>
        </a>
      </div>
    </div>
  );
}