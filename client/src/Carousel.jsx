import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const Carousel = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(4); // Start with blogItems[4]
  const intervalRef = useRef(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allblogs")
      .then((response) => {
        console.log(response.data); // Log the data to verify it's being received
        setBlogs(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the blogs!", error);
      });
  }, []);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex < 9 ? prevIndex + 1 : 4));
    }, 2000);
  };

  // Start the interval when the component mounts
  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current); // Clean up the interval on component unmount
  }, []);

  // Function to handle right button click
  const handleRightClick = () => {
    clearInterval(intervalRef.current); // Clear the existing interval
    setCurrentIndex((prevIndex) => (prevIndex < 9 ? prevIndex + 1 : 4));
    startInterval(); // Restart the interval
  };

  // Function to handle left button click
  const handleLeftClick = () => {
    clearInterval(intervalRef.current); // Clear the existing interval
    setCurrentIndex((prevIndex) => (prevIndex > 4 ? prevIndex - 1 : 9));
    startInterval(); // Restart the interval
  };

  // Generate the list of blog items with just the text content
  const blogItems = blogs.map((blog) => blog.text);

  return (
    <div className="relative bg-blue-500 w-full h-[520px]">
      <div className="absolute rounded-full max-md:hidden top-1/2 right-64">
        <button
          onClick={handleRightClick}
          className="hover:bg-gray-950 bg-gray-500 dark:bg-slate-500 dark:hover:bg-lime-200 border-red-200 opacity-70 text-white font-bold py-8 px-8 rounded-full flex items-center"
        >
          <svg className="w-6 h-6" viewBox="0 0 1024 1024" strokeWidth="32" stroke="currentColor" fill="white">
            <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" />
          </svg>
        </button>
      </div>
      <div className="absolute rounded-full top-1/2 max-md:hidden left-64">
        <button
          onClick={handleLeftClick}
          className="hover:bg-gray-950 bg-gray-500 dark:bg-slate-500 dark:hover:bg-lime-200 border-red-200 opacity-70 text-white font-bold py-8 px-8 rounded-full flex items-center"
        >
          <svg className="w-6 h-6" viewBox="0 0 1024 1024" strokeWidth="32" stroke="currentColor " fill="white">
            <path d="M768 120.768L717.568 64 256 512l461.568 448L768 903.232 364.928 512z" />
          </svg>
        </button>
      </div>

      <div className="h-full bg-red-400">
        {blogItems[currentIndex] && (
          <img
            src={blogItems[currentIndex]}
            alt="carousel"
            className="w-full h-full object-center object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default Carousel;
