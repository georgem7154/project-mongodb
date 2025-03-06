import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Carousel = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/allblogs')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the blogs!', error);
      });
  }, []);

  return (
    <div>
      <h1>All Blogs</h1>
      {blogs.map(blog => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
