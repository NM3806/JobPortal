import React, { useState } from 'react';

const testimonialsData = [
  {
    id: 1,
    feedback: "Found my dream job within a week!",
    name: "John D.",
    institution: "University of Chicago",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Youngkitten.JPG/220px-Youngkitten.JPG", 
  },
  {
    id: 2,
    feedback: "Great platform with verified employers.",
    name: "Sarah W.",
    institution: "MIT",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/1-month-old_kittens_32.jpg/1280px-1-month-old_kittens_32.jpg",
  },
  {
    id: 3,
    feedback: "Excellent support and guidance!",
    name: "Kevin L.",
    institution: "Stanford University",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="bg-gray-100 py-20 px-4 md:px-8 text-center">
      <h3 className="text-2xl md:text-3xl font-bold mb-10">What Our Users Say</h3>
      <div className="container mx-auto flex flex-col items-center">
        <div className="p-8 border rounded-lg shadow-md max-w-md text-center bg-white">
          <img
            src={currentTestimonial.imageUrl}
            alt={currentTestimonial.name}
            className="rounded-full w-24 h-24 mx-auto mb-4 object-cover"
          />
          <p className="text-gray-600 italic mb-4">"{currentTestimonial.feedback}"</p>
          <h5 className="mt-4 font-semibold">{currentTestimonial.name}</h5>
          <p className="text-sm text-gray-500">{currentTestimonial.institution}</p>
        </div>
        
        {/* Navigation Arrows */}
        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={handlePrev}
            className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-300"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="bg-white text-gray-700 p-2 rounded-full shadow hover:bg-gray-300"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
