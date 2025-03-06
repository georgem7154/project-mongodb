import React, { useState, useEffect } from "react";
import axios from "axios";

const Locations = () => {
  const [blogs, setBlogs] = useState([]);

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
  const blogItems = blogs.map((blog) => blog.text);

  return (
    <div className="flex flex-row my-2 py-28 px-5 justify-between mx-10 bg-green-300 h-[620px]">
      <div className=""></div>
      <div className="w-2/12  h-full">
        <img
          src={blogItems[7]}
          alt="placeholder"
          className="rounded-xl w-full h-full"
        />
        <h1 className="justify-end font-montserrat text-center">SINGAPORE</h1>
      </div>
      <div className="w-2/12  h-full">
        <img
          src={blogItems[7]}
          alt="placeholder"
          className="rounded-xl w-full h-full"
        />
      </div>
      <div className="w-2/12  h-full">
        <img
          src={blogItems[7]}
          alt="placeholder"
          className="rounded-xl w-full h-full"
        />
      </div>
      <div className="w-2/12  h-full">
        <img
          src={blogItems[7]}
          alt="placeholder"
          className="rounded-xl w-full h-full"
        />
      </div>
      <div className="w-2/12  h-full">
        <img
          src={blogItems[7]}
          alt="placeholder"
          className="rounded-xl w-full h-full"
        />
      </div>
    </div>
  );
};

export default Locations;
