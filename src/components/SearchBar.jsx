import React from 'react';
import { BriefcaseIcon, MapPinIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/solid';

function SearchBar() {
  return (
    <div className="bg-gray-200 border-[2px] border-gray-300 p-8 rounded-xl shadow-lg mt-6 text-gray-700">
      <h3 className="text-xl font-semibold mb-6">Start Your Job Search</h3>
      <form className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="relative">
          <BriefcaseIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Job Title"
            className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="relative">
          <MapPinIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Location"
            className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="relative">
          <ClipboardDocumentListIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <select className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">Select Category</option>
            <option value="tech">Tech</option>
            <option value="finance">Finance</option>
            <option value="design">Design</option>
          </select>
        </div>
      </form>
      <div className="mt-6 flex justify-center space-x-4">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
          Find Jobs
        </button>
        <button className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition duration-200">
          Post a Job
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
