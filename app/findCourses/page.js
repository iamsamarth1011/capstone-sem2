"use client";
import { useState, useEffect } from 'react';
import { Clock, FileText, Flame, ArrowRight, Search, X, Star, User, Calendar, MapPin, Users } from 'lucide-react';

export default function MentorshipHub() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const categories = ['All', 'Career', 'Tech', 'Leadership', 'Freelance', 'Branding', 'Network', 'Design', 'Startups', 'Finance'];

  const allSessions = [
    {
      id: 1,
      title: 'Strategic Career Mentorship',
      desc: 'Accelerate your career with expert guidance tailored to your goals. Learn resume building, interview techniques, and career path planning.',
      price: '$120',
      duration: '1h 30min',
      type: '1-on-1',
      category: 'Career',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      featured: true,
      mentor: 'Sarah Johnson',
      rating: 4.9,
      reviews: 128,
      mentorImage: 'https://randomuser.me/api/portraits/women/44.jpg',
      date: 'June 15, 2023',
      location: 'Online',
      capacity: '1 person',
      skills: ['Career Planning', 'Interview Prep', 'Networking'],
    },
    {
      id: 2,
      title: 'Breaking Into Tech',
      desc: 'Comprehensive guide to transitioning into tech industry. Covers coding basics, tech roles, and portfolio building.',
      price: '$100',
      duration: '2hr',
      type: '2 sessions',
      category: 'Tech',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      mentor: 'Michael Chen',
      rating: 4.8,
      reviews: 95,
      mentorImage: 'https://randomuser.me/api/portraits/men/32.jpg',
      date: 'June 20, 2023',
      location: 'Online',
      capacity: '10 people',
      skills: ['Coding', 'Tech Careers', 'Portfolio'],
    },
    {
      id: 3,
      title: 'Personal Branding Masterclass',
      desc: 'Build a powerful personal brand that stands out. Learn social media strategies, content creation, and audience engagement.',
      price: '$95',
      duration: '1h 45min',
      type: '1 session',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1636247499734-893da2bcfc1c?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      mentor: 'Emma Rodriguez',
      rating: 4.7,
      reviews: 76,
      mentorImage: 'https://randomuser.me/api/portraits/women/63.jpg',
      date: 'June 25, 2023',
      location: 'Online',
      capacity: '15 people',
      skills: ['Social Media', 'Content Creation', 'Networking'],
    },
    {
      id: 4,
      title: 'Freelancing Kickstart',
      desc: 'Everything you need to launch your freelance career. Includes finding clients, pricing strategies, and contract basics.',
      price: '$85',
      duration: '2hr',
      type: '2 sessions',
      category: 'Freelance',
      image: 'https://images.unsplash.com/photo-1610473068872-908afb1a7317?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      mentor: 'David Wilson',
      rating: 4.6,
      reviews: 64,
      mentorImage: 'https://randomuser.me/api/portraits/men/75.jpg',
      date: 'July 1, 2023',
      location: 'Online',
      capacity: '12 people',
      skills: ['Client Acquisition', 'Pricing', 'Contracts'],
    },
    {
      id: 5,
      title: 'Leadership in Tech Teams',
      desc: 'Develop essential leadership skills for managing tech teams effectively. Covers communication, agile methodologies, and team motivation.',
      price: '$150',
      duration: '3hr',
      type: '3 sessions',
      category: 'Leadership',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      mentor: 'Lisa Wong',
      rating: 4.9,
      reviews: 112,
      mentorImage: 'https://randomuser.me/api/portraits/women/68.jpg',
      date: 'July 5, 2023',
      location: 'Online',
      capacity: '8 people',
      skills: ['Team Management', 'Agile', 'Communication'],
    },
    {
      id: 6,
      title: 'UX/UI Design Fundamentals',
      desc: 'Master the basics of user experience and interface design. Hands-on exercises with Figma and design thinking principles.',
      price: '$110',
      duration: '4hr',
      type: '2 sessions',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      mentor: 'James Peterson',
      rating: 4.7,
      reviews: 89,
      mentorImage: 'https://randomuser.me/api/portraits/men/22.jpg',
      date: 'July 10, 2023',
      location: 'Online',
      capacity: '10 people',
      skills: ['Figma', 'User Research', 'Wireframing'],
    },
    {
      id: 7,
      title: 'Startup Funding Strategies',
      desc: 'Learn how to secure funding for your startup. Covers venture capital, angel investors, and crowdfunding approaches.',
      price: '$135',
      duration: '2h 30min',
      type: '1 session',
      category: 'Startups',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=3155&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      mentor: 'Robert Taylor',
      rating: 4.8,
      reviews: 72,
      mentorImage: 'https://randomuser.me/api/portraits/men/45.jpg',
      date: 'July 15, 2023',
      location: 'Online',
      capacity: '15 people',
      skills: ['Venture Capital', 'Pitching', 'Financial Planning'],
    },
    {
      id: 8,
      title: 'Financial Literacy for Creatives',
      desc: 'Essential financial skills for freelancers and creative professionals. Budgeting, taxes, and retirement planning made simple.',
      price: '$90',
      duration: '2hr',
      type: '1 session',
      category: 'Finance',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      mentor: 'Jennifer Kim',
      rating: 4.6,
      reviews: 58,
      mentorImage: 'https://randomuser.me/api/portraits/women/33.jpg',
      date: 'July 20, 2023',
      location: 'Online',
      capacity: '20 people',
      skills: ['Budgeting', 'Taxes', 'Retirement'],
    },
    {
      id: 9,
      title: 'Advanced JavaScript Concepts',
      desc: 'Deep dive into modern JavaScript patterns, async programming, and performance optimization techniques.',
      price: '$125',
      duration: '3hr',
      type: '2 sessions',
      category: 'Tech',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      mentor: 'Alex Morgan',
      rating: 4.9,
      reviews: 104,
      mentorImage: 'https://randomuser.me/api/portraits/men/65.jpg',
      date: 'July 25, 2023',
      location: 'Online',
      capacity: '12 people',
      skills: ['JavaScript', 'Async Programming', 'Performance'],
    },
    {
      id: 10,
      title: 'Networking for Introverts',
      desc: 'Proven strategies for building professional relationships even if you hate networking events. Authentic connection techniques.',
      price: '$80',
      duration: '1h 30min',
      type: '1 session',
      category: 'Network',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      mentor: 'Olivia Smith',
      rating: 4.7,
      reviews: 91,
      mentorImage: 'https://randomuser.me/api/portraits/women/28.jpg',
      date: 'August 1, 2023',
      location: 'Online',
      capacity: '25 people',
      skills: ['Networking', 'Communication', 'Relationship Building'],
    },
     {
      id: 11,
      title: 'React Native Mobile Development',
      desc: 'Build cross-platform mobile apps with React Native. Covers core concepts, navigation, and native module integration.',
      price: '$140',
      duration: '4hr',
      type: '3 sessions',
      category: 'Tech',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      mentor: 'Daniel Lee',
      rating: 4.8,
      reviews: 87,
      mentorImage: 'https://randomuser.me/api/portraits/men/54.jpg',
      date: 'August 5, 2023',
      location: 'Online',
      capacity: '10 people',
      skills: ['React Native', 'Mobile Development', 'JavaScript'],
    },
    {
      id: 12,
      title: 'Content Marketing Strategy',
      desc: 'Develop a content marketing plan that drives traffic and conversions. SEO, content calendars, and performance tracking.',
      price: '$110',
      duration: '2h 30min',
      type: '2 sessions',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      mentor: 'Sophia Martinez',
      rating: 4.6,
      reviews: 63,
      mentorImage: 'https://randomuser.me/api/portraits/women/42.jpg',
      date: 'August 10, 2023',
      location: 'Online',
      capacity: '15 people',
      skills: ['Content Strategy', 'SEO', 'Marketing'],
    },
    // "20-25 aur add krna hai"
  ];

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSuggestions([]);
      return;
    }
    
    const timer = setTimeout(() => {
      const results = allSessions.filter(session =>
        session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        session.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        session.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setSuggestions(results.slice(0, 5));
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const filtered = activeCategory === 'All' 
    ? allSessions.filter(s => 
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allSessions.filter(s => 
        s.category === activeCategory && 
        (s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.category.toLowerCase().includes(searchQuery.toLowerCase()))
      );

  const handleSuggestionClick = (session) => {
    setSelectedSession(session);
    setSearchQuery('');
    setSuggestions([]);
  };

  const closeDetails = () => {
    setSelectedSession(null);
  };

  return (
    <section className="bg-gray-50 py-16 pt-32 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Find Your Perfect Mentor</h1>
          <p className="text-lg text-gray-600">Expert-led sessions designed to guide your growth in tech, branding, freelancing, and more.</p>
        </header>

        <div className="relative max-w-2xl mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for mentorship sessions..."
              className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200">
              {suggestions.map((session) => (
                <div
                  key={session.id}
                  className="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 flex items-center"
                  onClick={() => handleSuggestionClick(session)}
                >
                  <img 
                    src={session.image} 
                    alt={session.title} 
                    className="w-10 h-10 rounded-md object-cover mr-3"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{session.title}</p>
                    <p className="text-sm text-gray-500">{session.category}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm rounded-full border transition ${
                activeCategory === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {selectedSession ? (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="relative">
              <img 
                src={selectedSession.image} 
                alt={selectedSession.title} 
                className="w-full h-96 object-cover"
              />
              <button 
                onClick={closeDetails}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 mb-3">
                    {selectedSession.category}
                  </span>
                  <h2 className="text-3xl font-bold mb-2">{selectedSession.title}</h2>
                  <p className="text-gray-600 text-lg mb-4">{selectedSession.desc}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-indigo-600">{selectedSession.price}</p>
                  <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition">
                    Book Session
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Mentor Details</h3>
                  <div className="flex items-center mb-4">
                    <img 
                      src={selectedSession.mentorImage} 
                      alt={selectedSession.mentor} 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-medium">{selectedSession.mentor}</p>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="text-sm text-gray-700">
                          {selectedSession.rating} ({selectedSession.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{selectedSession.mentor} has been mentoring professionals in this field for over 5 years with proven results.</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Session Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-gray-500 mr-3" />
                      <span>{selectedSession.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-gray-500 mr-3" />
                      <span>{selectedSession.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-gray-500 mr-3" />
                      <span>{selectedSession.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-gray-500 mr-3" />
                      <span>{selectedSession.capacity}</span>
                    </div>
                    <div className="flex items-center">
                      <FileText className="w-5 h-5 text-gray-500 mr-3" />
                      <span>{selectedSession.type}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">What You&apos;ll Learn</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedSession.skills.map((skill, index) => (
                    <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">About This Session</h3>
                <p className="text-gray-600 mb-4">
                  This comprehensive session will provide you with practical knowledge and actionable steps to improve your skills in {selectedSession.category.toLowerCase()}. 
                  The mentor will share real-world examples and personalized feedback to help you achieve your goals.
                </p>
                <p className="text-gray-600">
                  After completing this session, you&apos;ll receive a certificate of completion and access to additional resources to continue your learning journey.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <>
            {filtered.find(session => session.featured) && (
              <div className="bg-white rounded-xl shadow-lg mb-12 overflow-hidden flex flex-col md:flex-row">
                <div className="p-8 flex w-full md:w-[60%] flex-col justify-between">
                  <div>
                    <span className="inline-flex items-center mb-3 text-sm text-white font-medium bg-indigo-600 px-3 py-1 rounded-full">
                      <Flame className="w-4 h-4 mr-1" /> Featured
                    </span>
                    <h2 className="text-3xl font-bold mb-3">{filtered.find(s => s.featured).title}</h2>
                    <p className="text-gray-600 mb-6">{filtered.find(s => s.featured).desc}</p>
                    <div className="flex gap-6 text-gray-500 text-sm mb-6">
                      <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{filtered.find(s => s.featured).duration}</span>
                      <span className="flex items-center"><FileText className="w-4 h-4 mr-1" />{filtered.find(s => s.featured).type}</span>
                      <span className="flex items-center"><User className="w-4 h-4 mr-1" />{filtered.find(s => s.featured).mentor}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-indigo-600">{filtered.find(s => s.featured).price}</span>
                    <button 
                      className="flex items-center text-sm font-medium text-indigo-600 hover:underline"
                      onClick={() => setSelectedSession(filtered.find(s => s.featured))}
                    >
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
                <img
                  src={filtered.find(s => s.featured).image}
                  alt="Featured Mentor"
                  className="w-full md:w-[40%] h-80 object-cover cursor-pointer"
                  onClick={() => setSelectedSession(filtered.find(s => s.featured))}
                />
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filtered
                .filter(s => !s.featured)
                .map((s) => (
                  <div 
                    key={s.id} 
                    className="bg-white rounded-xl shadow-md overflow-hidden transition hover:shadow-lg cursor-pointer"
                    onClick={() => setSelectedSession(s)}
                  >
                    <img src={s.image} alt={s.title} className="h-60 w-full object-cover" />
                    <div className="p-5">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-gray-500">{s.category}</span>
                        <span className="text-lg font-semibold text-indigo-600">{s.price}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                      <div className="flex gap-4 text-gray-500 text-sm mb-3">
                        <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{s.duration}</span>
                        <span className="flex items-center"><FileText className="w-4 h-4 mr-1" />{s.type}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <User className="w-4 h-4 mr-1" /> {s.mentor}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No mentorship sessions found matching your criteria.</p>
                <button 
                  className="mt-4 text-indigo-600 hover:underline"
                  onClick={() => {
                    setActiveCategory('All');
                    setSearchQuery('');
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}

            <div className="text-center">
              <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all flex items-center justify-center mx-auto">
                Browse All Mentorships <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}