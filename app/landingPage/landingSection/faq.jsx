"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqList = [
  {
    question: "How Do I Get Started with My First Course?",
    answer: "Getting started is simple! Browse our course catalog, select your course, and hit 'Enroll.' Our step-by-step guides and onboarding tutorials will assist you every step of the way.",
  },
  {
    question: "Can I Access My Course Materials After Completion?",
    answer: "Yes, once you've enrolled in a course, all materials are accessible for life! You can revisit lessons, download resources, and refresh your knowledge whenever you need.",
  },
  {
    question: "Is It Possible to Switch Courses Midway?",
    answer: "Absolutely! We understand that interests change. You can easily transfer between courses. Just reach out to our support team, and we’ll assist you with the transition.",
  },
  {
    question: "Do I Receive a Certificate After Completing a Course?",
    answer: "Yes, all completed courses grant you a verified certificate that you can share on your resume or LinkedIn profile to showcase your accomplishments.",
  },
  {
    question: "What Are the Benefits of Joining Study Groups?",
    answer: "Study groups are a fantastic way to enhance learning. You'll connect with fellow learners, exchange ideas, and collaborate on projects. It’s all about learning together and building community.",
  },
];

export default function InteractiveFAQ() {
  const [active, setActive] = useState(null);

  const toggle = (i) => {
    setActive(active === i ? null : i);
  };

  return (
    <section className=" py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">FAQs</h2>
          <p className="text-gray-600 mt-2">
            Get answers to some of the most frequently asked questions about our platform and courses.
          </p>
        </div>

        <div className="space-y-4">
          {faqList.map((item, i) => (
            <div
              key={i}
              className={`bg-white p-6 rounded-lg shadow-md transition duration-300 ${
                active === i ? "ring-2 ring-indigo-400" : ""
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="flex justify-between w-full items-center focus:outline-none"
              >
                <h3 className="text-lg font-medium text-indigo-500">{item.question}</h3>
                {active === i ? (
                  <ChevronUp className="text-green-700 transition-transform duration-300" />
                ) : (
                  <ChevronDown className="text-gray-500 transition-transform duration-300" />
                )}
              </button>
              {active === i && (
                <div className="mt-4 text-gray-600">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
