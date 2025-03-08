import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Ribbon = () => {
  const [blogs, setBlogs] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }, [isDarkMode]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/allblogs')
      .then(response => {
        console.log(response.data);  // Log the data to verify it's being received
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the blogs!', error);
      });
  }, []);
  const blogItems = blogs.map(blog => blog.text);

  return (
    <div className="z-40 h-36 top-0 w-full fixed border-2 dark:border-0 max-md:hidden dark:bg-slate-900 dark:text-white bg-white">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="rounded-lg  font-rogue flex font-bold text-4xl hover:scale-110 hover:shadow-lg  hover:shadow-pink-300 hover:bg-opacity-0 transition  ease-in-out">{blogItems[0]}</div>
        <div className="font-montserrat flex font-semibold text-2xl justify-between mr-36 w-7/12 flex-row">
          <button className=" shadow-sm hover:shadow-md dark:bg-pink-400 dark:text-white dark:hover:text-red-500 dark:hover:bg-white hover:shadow-black shadow-slate-800 bg-red-100 py-3 hover:bg-red-200 hover:scale-110 transition ease-in-out px-10 justify-center rounded-full">
          {blogItems[1]}
          </button>
          <button className=" shadow-sm hover:shadow-md dark:bg-pink-400 dark:text-white dark:hover:text-red-500 dark:hover:bg-white hover:shadow-black shadow-slate-800 bg-red-100 py-3 hover:bg-red-200 hover:scale-110 transition ease-in-out px-10 justify-center rounded-full">
          {blogItems[2]}
          </button>
          <button className=" shadow-sm hover:shadow-md dark:bg-pink-400 dark:text-white dark:hover:text-red-500 dark:hover:bg-white hover:shadow-black shadow-slate-800 bg-red-100 py-3 hover:bg-red-200 hover:scale-110 transition ease-in-out px-10 justify-center rounded-full">
          {blogItems[3]}
          </button>
          <button className='shadow-sm hover:shadow-md dark:bg-pink-400 dark:text-white dark:hover:text-red-500 dark:hover:bg-white hover:shadow-black shadow-slate-800 bg-green-100 py-3 hover:bg-red-200 hover:scale-110 transition ease-in-out px-3 justify-center rounded-full'  onClick={() => setIsDarkMode(!isDarkMode)}>D/W</button>
        </div>
      </div>
    </div>
  );
};

export default Ribbon;
