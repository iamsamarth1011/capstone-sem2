import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function SignupComponent() {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
   alert("Email submitted:", email);
   };

  return (
    <div className="w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-lg">
      <div className="bg-gradient-to-r from-blue-100 via-purple-50 to-pink-100 p-12 text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Join Driven Professionals & Launch
          <br />
          Your Dream Career Today!
        </h1>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Connect with a network of driven professionals, gain valuable insights, and access
          resources that propel you toward your dream career.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-6 py-4 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-6 py-2 rounded-full flex items-center justify-center gap-2 transition-colors duration-200"
          >
            Join With Us
            <ArrowUpRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}