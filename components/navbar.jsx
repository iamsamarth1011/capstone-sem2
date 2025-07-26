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

    <nav className="w-full bg-blue-600 px-6 md:px-12 py-4 flex justify-between items-center fixed top-0 z-50 ">
      <Link href="/">
        <div className="flex items-center gap-3">

          <h1 className="text-2xl font-semibold text-white">CoursePlus</h1>


        </div>
      </Link>

      <ul className="hidden md:flex gap-8 font-medium text-gray-100">
        <li><a href="#home" className="hover:text-indigo-500 transition">Home</a></li>
        <li><a href="#courses" className="hover:text-indigo-500 transition">Courses</a></li>
        <li><a href="#mentors" className="hover:text-indigo-500 transition">Mentors</a></li>
        <li><a href="#benefit" className="hover:text-indigo-500 transition">Benefits</a></li>
        <li><a href="#about" className="hover:text-indigo-500 transition">About</a></li>
      </ul>

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
