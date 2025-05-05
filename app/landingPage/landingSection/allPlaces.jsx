"use client";
import { useState } from 'react';
import { Clock, FileText, Flame, ArrowRight } from 'lucide-react';

export default function MentorshipHub() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Career', 'Tech', 'Leadership', 'Freelance', 'Branding', 'Network'];

  const allSessions = [
    {
      title: 'Strategic Career Mentorship',
      desc: 'Accelerate your career with expert guidance tailored to your goals.',
      price: '$120',
      duration: '1h 30min',
      type: '1-on-1',
      category: 'Career',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      featured: true,
    },
    {
      title: 'Breaking Into Tech',
      price: '$100',
      duration: '2hr',
      type: '2 sessions',
      category: 'Tech',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Personal Branding Masterclass',
      price: '$95',
      duration: '1h 45min',
      type: '1 session',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1636247499734-893da2bcfc1c?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Freelancing Kickstart',
      price: '$85',
      duration: '2hr',
      type: '2 sessions',
      category: 'Freelance',
      image: 'https://images.unsplash.com/photo-1610473068872-908afb1a7317?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  const filtered = activeCategory === 'All' ? allSessions : allSessions.filter(s => s.category === activeCategory);

  return (
    <section id='courses' className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Find Your Perfect Mentor</h1>
          <p className="text-lg text-gray-600">Expert-led sessions designed to guide your growth in tech, branding, freelancing, and more.</p>
        </header>


        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm rounded-full border transition ${activeCategory === cat
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>


        {filtered.find(session => session.featured) && (
          <div className="bg-white rounded-xl shadow-lg mb-12 overflow-hidden flex flex-col md:flex-row">
            <div className="p-8 flex w-[60%] flex-col justify-between">
              <div>
                <span className="inline-flex items-center mb-3 text-sm text-white font-medium bg-indigo-600 px-3 py-1 rounded-full">
                  <Flame className="w-4 h-4 mr-1" /> Featured
                </span>
                <h2 className="text-3xl font-bold mb-3">{filtered.find(s => s.featured).title}</h2>
                <p className="text-gray-600 mb-6">{filtered.find(s => s.featured).desc}</p>
                <div className="flex gap-6 text-gray-500 text-sm mb-6">
                  <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{filtered.find(s => s.featured).duration}</span>
                  <span className="flex items-center"><FileText className="w-4 h-4 mr-1" />{filtered.find(s => s.featured).type}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-indigo-600">{filtered.find(s => s.featured).price}</span>
                <button className="flex items-center text-sm font-medium text-indigo-600 hover:underline">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
            <img
              src={filtered.find(s => s.featured).image}
              alt="Featured Mentor"
              className="w-full md:w-1/2 h-80 object-cover"
            />

          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filtered.filter(s => !s.featured).map((s, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg">
              <img src={s.image} alt={s.title} className="h-60 w-full object-cover" />
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-500">{s.category}</span>
                  <span className="text-lg font-semibold text-indigo-600">{s.price}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                <div className="flex gap-4 text-gray-500 text-sm">
                  <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{s.duration}</span>
                  <span className="flex items-center"><FileText className="w-4 h-4 mr-1" />{s.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="text-center">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all flex items-center justify-center mx-auto">
            Browse All Mentorships <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
