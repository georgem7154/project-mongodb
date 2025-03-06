import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Ribbon = () => {
  const [blogs, setBlogs] = useState([]);
  
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
    <div className="z-40 h-36 top-0 w-full fixed border-2 max-md:hidden bg-white border-emerald-400">
      <div className="container mx-auto flex justify-between items-center h-full">
        <div className="font-rogue flex font-bold text-4xl">{blogItems[0]}</div>
        <div className="font-montserrat flex font-semibold text-2xl justify-between mr-36 w-7/12 flex-row">
          <button className=" bg-red-100 py-3 hover:bg-red-200 hover:scale-110 transition ease-in-out px-10 justify-center rounded-full">
          {blogItems[1]}
          </button>
          <button className=" bg-red-100 py-3 hover:bg-red-200 hover:scale-110 transition ease-in-out px-10 justify-center rounded-full">
          {blogItems[2]}
          </button>
          <button className=" bg-red-100 py-3 hover:bg-red-200 hover:scale-110 transition ease-in-out px-10 justify-center rounded-full">
          {blogItems[3]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ribbon;
