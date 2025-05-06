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
      avatar: 'https://wwd.com/wp-content/uploads/2021/12/daniel-lee-portrait-300dpi-2.jpeg?crop=0px%2C23px%2C1024px%2C573px&resize=1000%2C563',
      skills: ['Figma', 'Illustrator', 'UX Research']
    },
    {
      id: 3,
      name: 'Fatima Rahman',
      role: 'Data Analyst',
      avatar: 'https://www.soka.edu/sites/default/files/styles/318x406/public/faculty-staff/Fatima4.png?h=866b2820&itok=DgxFWwsB',
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
      avatar: 'https://www.societyforscience.org/wp-content/uploads/2024/03/STS-2024_HS_0009_Sophie-Chen.jpg.webp',
      skills: ['Machine Learning', 'Python', 'TensorFlow']
    },
    {
      id: 6,
      name: 'Omar Yusuf',
      role: 'DevOps Engineer',
      avatar: 'https://accidentalmuslims.com/wp-content/uploads/2019/08/yusuf-omar-250x250.jpg',
      skills: ['Docker', 'AWS', 'Kubernetes']
    },
    {
      id: 7,
      name: 'Meera Patel',
      role: 'Business Analyst',
      avatar: 'https://mh-llp.com/wp-content/uploads/2022/05/Meera.jpg',
      skills: ['Business Strategy', 'Jira', 'SQL']
    },
    {
      id: 8,
      name: 'Chris Johnson',
      role: 'Full Stack Developer',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHYTFqvXiKYXJBlUpEe7vwp6TG97d8BN8_1g&s',
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