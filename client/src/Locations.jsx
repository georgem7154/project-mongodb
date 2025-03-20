import React, { useState, useEffect } from "react";
import axios from "axios";
import Animated2 from "./Animated2";

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
    <div className="flex flex-row max-md:flex-col max-md:justify-center max-md:items-center  my-2 py-28 px-5 justify-between mx-10 ">
      <div className="w-2/12 max-md:w-72 max-md:mx-10 my-20 hover:scale-125 h-full  dark:text-white dark:hover:text-cyan-300 hover:font-bold hover:text-2xl hover:text-red-700 ">
        <Animated2 direction="left">
          <img
            src={blogItems[11]}
            alt="placeholder"
            className="shadow-lg h-[390px] shadow-slate-500 dark:shadow-lime-300 rounded-xl object-cover w-full"
          />
          <h1 className="underline mt-5 font-semibold text-xl italic justify-end font-montserrat text-center">
            {blogItems[15]}
          </h1>
        </Animated2>
      </div>

      <div className="w-2/12 max-md:w-72 max-md:mx-10 my-20 hover:scale-125 h-96  dark:text-white dark:hover:text-cyan-300 hover:font-bold hover:text-2xl hover:text-red-700 ">
        <Animated2 direction="left">
        <img
          src={blogItems[10]}
          alt="placeholder"
          className="shadow-lg shadow-slate-500 dark:shadow-lime-300 rounded-xl object-cover w-full h-[390px]"
        />
        <h1 className="underline font-semibold text-xl italic justify-end font-montserrat mt-5  text-center">
          {blogItems[16]}
        </h1>
        </Animated2>
      </div>

      <div className="w-2/12 max-md:w-72 max-md:mx-10 my-20 hover:scale-125 h-96  dark:text-white dark:hover:text-cyan-300 hover:font-bold hover:text-2xl hover:text-red-700 ">
      <Animated2 direction="bottom">
        <img
          src={blogItems[12]}
          alt="placeholder"
          className="shadow-lg shadow-slate-500 dark:shadow-lime-300 rounded-xl object-cover w-full h-[390px]"
        />
        <h1 className="underline font-semibold text-xl italic justify-end font-montserrat mt-5  text-center">
          {blogItems[17]}
        </h1>
        </Animated2>
      </div>
      <div className="w-2/12 max-md:w-72 max-md:mx-10 my-20 hover:scale-125 h-96  dark:text-white dark:hover:text-cyan-300 hover:font-bold hover:text-2xl hover:text-red-700 ">
      <Animated2 direction="right">
        <img
          src={blogItems[13]}
          alt="placeholder"
          className="shadow-lg shadow-slate-500 dark:shadow-lime-300 rounded-xl object-cover w-full h-[390px]"
        />
        <h1 className="underline font-semibold text-xl italic justify-end font-montserrat mt-5  text-center">
          {blogItems[18]}
        </h1>
        </Animated2>
      </div>
      <div className="w-2/12 max-md:w-72 max-md:mx-10 my-20 hover:scale-125 h-96  dark:text-white dark:hover:text-cyan-300 hover:font-bold hover:text-2xl hover:text-red-700 ">
      <Animated2 direction="right">
        <img
          src={blogItems[14]}
          alt="placeholder"
          className="shadow-lg shadow-slate-500 dark:shadow-lime-300 rounded-xl object-cover w-full h-[390px]"
        />
        <h1 className="underline font-semibold text-xl italic justify-end font-montserrat mt-5  text-center">
          {blogItems[19]}
        </h1>
        </Animated2>
      </div>
    </div>
  );
};

export default Locations;
