import { User, GraduationCap, LineChart, Plus } from "lucide-react";
import { useState } from "react";

export default function LearningPlatform() {
   const studentAvatars = [
    "https://i.pravatar.cc/100?img=1",
    "https://i.pravatar.cc/100?img=2",
    "https://i.pravatar.cc/100?img=3",
    "https://i.pravatar.cc/100?img=4",
  ];

  return (
    <div id="benefit" className="flex flex-col md:flex-row items-center justify-center min-h-screen   p-4">
       <div className="w-full md:w-1/2 relative p-6">
         <div className="bg-white rounded-3xl shadow-md overflow-hidden mb-6">
          <img 
            src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D" 
            alt="Person working on laptop" 
            className="w-full h-auto object-cover"
          />
        </div>

         <div className="absolute top-12 right-8 bg-white rounded-xl shadow-lg p-3">
          <div className="flex items-center">
            <p className="font-semibold mr-2">100K Students</p>
            <div className="flex -space-x-2">
              {studentAvatars.map((avatar, index) => (
                <div key={index} className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                  <img src="https://images.unsplash.com/photo-1600870187251-b55f9c574638?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt={`Student ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border-2 border-white">
                <Plus size={16} />
              </div>
            </div>
          </div>
        </div>

         <div className="bg-white rounded-3xl shadow-md overflow-hidden">
         
        </div>
      </div>

       <div className="w-full md:w-1/2 p-6">
        <div className="max-w-lg mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Take Your Expertise to the Next Level
          </h1>

           <div className="flex items-start mb-10">
            <div className="bg-green-50 p-3 rounded-full mr-4">
              <User className="text-green-600" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-1">Sign up and get started</h2>
              <p className="text-gray-600">Create your account, and start learning instantly.</p>
            </div>
          </div>

          {/* Explore courses section */}
          <div className="flex items-start mb-10">
            <div className="bg-red-50 p-3 rounded-full mr-4">
              <GraduationCap className="text-red-600" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-1">Explore courses tailored to you</h2>
              <p className="text-gray-600">Browse a range of courses across various fields</p>
            </div>
          </div>

         
          <div className="flex items-start">
            <div className="bg-purple-50 p-3 rounded-full mr-4">
              <LineChart className="text-purple-600" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-1">Keep learning and growing</h2>
              <p className="text-gray-600">Continue exploring and advancing your skills!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}