"use client"
import React from 'react';
import { Search } from 'lucide-react';
import Link from 'next/link';


const imageFiles = [
    'https://rishihood.edu.in/wp-content/uploads/2024/05/Aryan.jpg',
    'https://rishihood.edu.in/wp-content/uploads/2024/12/Bhavishya-Rao.png',
    "https://rishihood.edu.in/wp-content/uploads/2024/12/Neeraj-Rawat-2.png",
    'https://rishihood.edu.in/wp-content/uploads/2024/05/Gladden.png',
    'https://rishihood.edu.in/wp-content/uploads/2002/04/Siddharth-Maheshwari-600x600.png',

];

export default function HeroSection() {
    return (
        <div id='home' className="min-h-screen w-full px-4">
            <div className="max-w-6xl mx-auto pt-32 relative">

                <div className="text-center max-w-4xl mx-auto relative">
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-5">
                        Ignite Innovation<br />
                        Through Collective Learning Courses
                    </h1>

                    <p className="text-gray-700 mb-10 max-w-2xl mx-auto">
                        Discover a vibrant community where learning, collaboration, and creativity fuel progress. Start your journey toward meaningful impact today.
                    </p>

                    <div className="absolute left-0 top-10 -translate-x-1/2 opacity-90">
                        <div className="w-10 h-10 bg-blue-300 rotate-12 rounded shadow-md flex items-center justify-center">
                            <span className="text-white font-semibold text-sm">★</span>
                        </div>
                    </div>

                    <div className="absolute right-0 top-10 translate-x-1/2 opacity-90">
                        <div className="flex space-x-1">
                            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        </div>
                    </div>

                    <div className="max-w-md mx-auto mb-16 text-center">
                        <Link href="/findCourses">
                            <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                                <Search size={18} />
                                Find Courses
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="flex w-full flex-wrap justify-center gap-4 absolute -bottom-60 left-1/2 -translate-x-1/2">
                    {imageFiles.map((imgName, index) => (
                        <div
                            key={index}
                            className={`rounded-full overflow-hidden w-24 h-24 md:w-36 md:h-36 shadow-sm`}
                        >
                            <div
                                className="w-full h-full bg-cover bg-center"
                                style={{
                                    backgroundImage: `url(${imgName})`
                                }}
                            ></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
