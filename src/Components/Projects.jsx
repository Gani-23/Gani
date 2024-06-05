import React, { useState } from 'react';
import projectDetails from '../Models/Projectdetails';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const cardsToShow = 3;

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - cardsToShow + projectDetails.length) % projectDetails.length);
    setShowCard(false);
    setHoverIndex(null);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + cardsToShow) % projectDetails.length);
    setShowCard(false);
    setHoverIndex(null);
  };

  const toggleCard = (index) => {
    setShowCard((prevShowCard) => !prevShowCard);
    setHoverIndex(index);
  };

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const displayedProjects = projectDetails.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white relative">
      <div className="w-full h-5/6 md:h-4/5 lg:h-3/4 overflow-hidden">
        <div className="flex items-center justify-around w-full h-full transition-transform duration-500 ease-in-out">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              className="relative w-full h-full cursor-pointer"
              onClick={() => toggleCard(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={project.image} alt={project.title} className="w-full h-full object-contain" />
              {(showCard && hoverIndex === index) && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-4 md:p-8 bg-black bg-opacity-75">
                  <div className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg p-4 md:p-6 shadow-lg max-w-md transform transition-all duration-300 hover:scale-105">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-white">{project.title}</h2>
                    <p className="mb-4 md:mb-6 text-white">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-red-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-red-700 transition duration-300"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        <button
          onClick={handlePrevious}
          className="bg-red-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md mr-4 hover:bg-red-700 transition duration-300"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-red-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-red-700 transition duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;
