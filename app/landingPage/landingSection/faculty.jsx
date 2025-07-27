"use client"
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function MentorShowcase() {
  const [mentors] = useState([
    {
      id: 1,
      name: 'Rashmi Kumari',
      role: 'Frontend Developer',
      avatar: 'https://rishihood.edu.in/wp-content/uploads/2024/12/Rashmi-Kumari-2.png',
      skills: ['React', 'GSAP', 'Tailwind CSS']
    },
    {
      id: 2,
      name: 'Vishal Sharma',
      role: 'Product Manager',
      avatar: 'https://media.licdn.com/dms/image/v2/D5603AQEoNR8PBS78Tw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701871448005?e=1756339200&v=beta&t=9QqZ6PVh9NIsk9htb_LqRR0IdHJ2ksEys8SEcCRAUa8',
      skills: ['Figma', 'Illustrator', 'UX Research']
    },
    {
      id: 3,
      name: 'Swati Priya',
      role: 'Backend Developer',
      avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQGCIa5v0qMtgQ/profile-displayphoto-shrink_800_800/B4DZYF3v_THAAc-/0/1743855224979?e=1756339200&v=beta&t=pekC-bkvgLZcZ4CjgZlCAau6X-qFmpcFG92-VYVWmXA',
      skills: ['Python', 'Excel', 'Tableau']
    },
    {
      id: 4,
      name: 'Rahul Kumar',
      role: 'Fullstack Developer',
      avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQHeHaSMo9AMcQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1682998229812?e=1756339200&v=beta&t=QalpS35nY21l9LxX9BcqXseyVdkamh6xhp7SmqwJNuI',
      skills: ['SEO', 'Copywriting', 'Analytics']
    },
    {
      id: 5,
      name: 'Bhavesh Bansal',
      role: 'AI Researcher',
      avatar: 'https://media.licdn.com/dms/image/v2/D4D03AQHxENtOEKx4Hg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1695733138379?e=1756339200&v=beta&t=0jvkLlJP4IERCqmMUlk8NDBJyssnDfLnC3KFJKtrTyE',
      skills: ['Machine Learning', 'Python', 'TensorFlow']
    },
    {
      id: 6,
      name: 'Shivam Gupta',
      role: 'Professional Cloud Engineer',
      avatar: 'https://media.licdn.com/dms/image/v2/D5635AQEMpStcGa_YSw/profile-framedphoto-shrink_800_800/B56ZhC3NxSHcAg-/0/1753468427612?e=1754211600&v=beta&t=no7Ta9dhUsR5mrgK-zUeEb1lyUBCy_-9sfjsFTgSGCw',
      skills: ['Docker', 'AWS', 'Kubernetes']
    },
    {
      id: 7,
      name: 'Sai Bargav',
      role: 'DSA Instructor',
      avatar: 'https://media.licdn.com/dms/image/v2/D5603AQFwaYpyGaNdEQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723380591630?e=1756339200&v=beta&t=b3_S2TkMRH61Fh88o4XuXD3_d1I-wDF5tU_drBmoumY',
      skills: ['Business Strategy', 'Jira', 'SQL']
    },
    {
      id: 8,
      name: 'Badal Kumar',
      role: 'Statician',
      avatar: 'https://media.licdn.com/dms/image/v2/D5603AQGaMZLHw71QnA/profile-displayphoto-shrink_800_800/B56ZW8MNrCHoAc-/0/1742619074729?e=1756339200&v=beta&t=D6FXN1yMf6J22LPeerU5iA4lXn9Lv8qS24j5SZEI-J4',
      skills: ['Node.js', 'React', 'MongoDB']
    }
  ]);

  const getAvatarBgColor = (index) => {
    const colors = ['bg-orange-100', 'bg-green-100', 'bg-yellow-100', 'bg-red-100'];
    return colors[index % colors.length];
  };

  return (
    <div id='mentors' className="w-full mx-auto px-4 sm:px-8 md:px-16 lg:px-32 py-8 md:py-10 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Mentors
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto px-4">
          These are the best mentors in all of India. They provide expert services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {mentors.map((mentor, index) => (
          <div key={mentor.id} className="rounded-lg shadow-sm p-6 py-12 flex flex-col items-center">
            <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center`}>
              <img 
                src={mentor.avatar} 
                alt={mentor.name} 
                className="rounded-full w-14 h-14 object-cover"
              />
            </div>
            <h3 className="font-bold text-lg">{mentor.name}</h3>
            <p className="text-gray-600 mb-4">{mentor.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}