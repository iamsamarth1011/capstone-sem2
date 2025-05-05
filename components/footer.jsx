import React from 'react';
import { Phone, Mail, MapPin, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-white  py-12 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                C+
              </div>
              <h2 className="text-2xl font-bold text-gray-900">CoursePlus</h2>
            </div>
            <p className="text-gray-600 text-sm text-center lg:text-left">
              Unlock knowledge with expert-led online courses, anytime, anywhere.
            </p>

            <div className="mt-6 flex gap-4 justify-center lg:justify-start">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

      
          <div>
            <h3 className="font-semibold text-xl mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-indigo-500 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-700 hover:text-indigo-500 transition-colors">Courses</a></li>
              <li><a href="#" className="text-gray-700 hover:text-indigo-500 transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-700 hover:text-indigo-500 transition-colors">About Us</a></li>
            </ul>
          </div>

         
          <div>
            <h3 className="font-semibold text-xl mb-4 text-gray-900">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-700 hover:text-indigo-500 transition-colors">Mentors</a></li>
              <li><a href="#" className="text-gray-700 hover:text-indigo-500 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-700 hover:text-indigo-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-700 hover:text-indigo-500 transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

        
          <div>
            <h3 className="font-semibold text-xl mb-4 text-gray-900">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700">
                <Phone size={18} className="text-gray-600" />
                <span>+87682860128</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <Mail size={18} className="text-gray-600" />
                <a href="mailto:hello@courseadda.co" className=" hover:underline">coursepluse@gmail.co</a>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <MapPin size={18} className="text-gray-600" />
                <span>Delhi,NCR INDIA 001920</span>
              </li>
            </ul>
          </div>
        </div>

       
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Course Plus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
