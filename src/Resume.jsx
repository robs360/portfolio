import React from "react";

const Resume = () => {
  return (
    <div className="mx-auto mt-20 w-[95%] max-w-2xl p-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl shadow-lg">
      <h1 className="text-white text-4xl font-semibold text-center mb-4">
        My Resume
      </h1>
      <a
        href="https://docs.google.com/document/d/1e5Iz6iEULBFr4rXzLSItfXgNXdraFmKnfKomfwJ9z50/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center text-white text-lg font-medium underline hover:text-gray-200 transition duration-200"
      >
        📄 Click here to view or download my resume
      </a>
    </div>
  );
};

export default Resume;
