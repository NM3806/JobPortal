import React from 'react';
import { BriefcaseIcon, CheckCircleIcon, LightBulbIcon } from '@heroicons/react/24/outline';

function Features() {
  const featureData = [
    {
      icon: <BriefcaseIcon className="h-12 w-12 text-blue-500 mb-4" />,
      title: "Wide Job Opportunities",
      description: "Explore numerous job openings across various fields and industries.",
    },
    {
      icon: <CheckCircleIcon className="h-12 w-12 text-green-500 mb-4" />,
      title: "Verified Companies",
      description: "Find jobs from trusted and verified employers to ensure your safety.",
    },
    {
      icon: <LightBulbIcon className="h-12 w-12 text-yellow-500 mb-4" />,
      title: "Career Guidance",
      description: "Get personalized insights and tips from industry experts to boost your career.",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Why Choose Us</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover how our platform can help you find your dream job and advance your career.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white border-[2px] border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
            >
              {feature.icon}
              <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;