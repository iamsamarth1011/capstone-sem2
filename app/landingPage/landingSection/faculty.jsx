"use client"
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function MentorShowcase() {
  const [mentors] = useState([
    {
      id: 1,
      name: 'Aisha Khan',
      role: 'Frontend Developer',
      avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=3000',
      skills: ['React', 'GSAP', 'Tailwind CSS']
    },
    {
      id: 2,
      name: 'Daniel Lee',
      role: 'Product Designer',
      avatar: 'https://images.unsplash.com/photo-1603415526960-f7e0328f7d8f?q=80&w=3000',
      skills: ['Figma', 'Illustrator', 'UX Research']
    },
    {
      id: 3,
      name: 'Fatima Rahman',
      role: 'Data Analyst',
      avatar: 'https://images.unsplash.com/photo-1614287599986-dc64d5a8145e?q=80&w=3000',
      skills: ['Python', 'Excel', 'Tableau']
    },
    {
      id: 4,
      name: 'Leo Martinez',
      role: 'Marketing Strategist',
      avatar: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?q=80&w=3000',
      skills: ['SEO', 'Copywriting', 'Analytics']
    },
    {
      id: 5,
      name: 'Sophia Chen',
      role: 'AI Researcher',
      avatar: 'https://images.unsplash.com/photo-1589461156072-8a4d7c6a2f93?q=80&w=3000',
      skills: ['Machine Learning', 'Python', 'TensorFlow']
    },
    {
      id: 6,
      name: 'Omar Yusuf',
      role: 'DevOps Engineer',
      avatar: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde18?q=80&w=3000',
      skills: ['Docker', 'AWS', 'Kubernetes']
    },
    {
      id: 7,
      name: 'Meera Patel',
      role: 'Business Analyst',
      avatar: 'https://images.unsplash.com/photo-1590080875893-d933c096f713?q=80&w=3000',
      skills: ['Business Strategy', 'Jira', 'SQL']
    },
    {
      id: 8,
      name: 'Chris Johnson',
      role: 'Full Stack Developer',
      avatar: 'https://images.unsplash.com/photo-1614285315465-42d1e41a3745?q=80&w=3000',
      skills: ['Node.js', 'React', 'MongoDB']
    }
  ]);

  const getAvatarBgColor = (index) => {
    const colors = ['bg-orange-100', 'bg-green-100', 'bg-yellow-100', 'bg-red-100'];
    return colors[index % colors.length];
  };

  return (
    <div id='mentors' className="w-full mx-auto px-4 sm:px-8 md:px-16 lg:px-32 py-16 md:py-32 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Meet the Visionaries Behind <br /> Our Community Growth
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto px-4">
          These mentors are not only skilled professionals but also passionate educators ready to guide you through your journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mentors.map((mentor, index) => (
          <div key={mentor.id} className="rounded-lg shadow-sm p-6 py-12 flex flex-col items-center">
            <div className={`w-16 h-16 rounded-full ${getAvatarBgColor(index)} mb-4 flex items-center justify-center`}>
              <img 
                src={mentor.avatar} 
                alt={mentor.name} 
                className="rounded-full w-14 h-14 object-cover"
              />
            </div>
            <h3 className="font-bold text-lg">{mentor.name}</h3>
            <p className="text-gray-600 mb-4">{mentor.role}</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {mentor.skills.map((skill, idx) => (
                <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="flex items-center bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition-colors">
          <span className="mr-2">Explore More Mentors</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}