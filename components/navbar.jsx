import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#F8FAFC] shadow-md px-6 md:px-12 py-4 flex justify-between items-center fixed top-0 z-50">
 <Link href="/">
      <div className="flex items-center gap-3">
        <div className="bg-indigo-500 p-2 rounded-full shadow-sm">
          <span className="text-white font-bold text-lg">C+</span>
        </div>
       
        <h1 className="text-2xl font-semibold text-gray-800">CoursePlus</h1>
     
      
      </div>
      </Link>

      <ul className="hidden md:flex gap-8 font-medium text-gray-600">
        <li><a href="#home" className="hover:text-indigo-500 transition">Home</a></li>
        <li><a href="#courses" className="hover:text-indigo-500 transition">Courses</a></li>
        <li><a href="#mentors" className="hover:text-indigo-500 transition">Mentors</a></li>
        <li><a href="#benefit" className="hover:text-indigo-500 transition">Benefits</a></li>
        <li><a href="#about" className="hover:text-indigo-500 transition">About</a></li>
      </ul>

       
      <Link href="/login" className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition text-sm shadow">
        Join now
      </Link>
    </nav>
  );
};

export default Navbar;
