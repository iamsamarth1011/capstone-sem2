import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

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


      {/* <Link href="/login" className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition text-sm shadow">
        Join now
      </Link> */}
      <header className="flex justify-end items-center p-4 gap-4 h-16">
        <SignedOut>
          <SignInButton />
          <SignUpButton>
            <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
      </header>
    </nav>
  );
};

export default Navbar;
