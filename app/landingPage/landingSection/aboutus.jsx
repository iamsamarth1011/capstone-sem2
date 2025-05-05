"use client";
import { Globe, MessageCircle, LifeBuoy, Video, BarChart2 } from 'lucide-react';

export default function MastersHub() {
  return (
    <div id="about" className="bg-gradient-to-b from-white to-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Why Join Course+</h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-12">
          Unlock your potential with hands-on projects, expert mentors, and a vibrant community focused on real-world skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Globe size={28} className="text-blue-500" />}
            title="100K+ Learners"
            description="Join a global network of passionate learners and mentors."
          />
          <FeatureCard
            icon={<MessageCircle size={28} className="text-green-500" />}
            title="Collaboration"
            description="Engage in real projects and grow through teamwork."
          />
          <FeatureCard
            icon={<LifeBuoy size={28} className="text-purple-500" />}
            title="Lifetime Support"
            description="We stay with you even after course completion."
          />
          <FeatureCard
            icon={<Video size={28} className="text-red-500" />}
            title="Video Library"
            description="Access a rich library of high-quality content anytime."
          />
          <FeatureCard
            icon={<BarChart2 size={28} className="text-yellow-500" />}
            title="Career Growth"
            description="Grow fast with a structured learning path and resume projects."
          />
          <FeatureCard
            icon={<Globe size={28} className="text-indigo-500" />}
            title="Industry Insights"
            description="Learn from professionals working at top companies."
          />
        </div>

        <div className="mt-12">
          <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-300">
            Explore Courses
          </button>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-6 text-left hover:scale-105 transform transition-all duration-300 border border-gray-200">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-gray-100 rounded-full">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
