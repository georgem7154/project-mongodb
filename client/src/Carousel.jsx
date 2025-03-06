import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Carousel = () => {
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
  
  // Generate the list of blog items with just the text content
  const blogItems = blogs.map(blog => blog.text);

  return (
    <div>
      <h1>All Blogs</h1>
      <h1>{blogItems[0]}</h1> {/* Render the text of the first blog item */}
    </div>
  );
};

export default Carousel;
