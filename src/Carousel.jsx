import React, { useState, useEffect } from "react";
import axios from "axios";

const Carousel = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments from the backend
    axios
      .get("http://localhost:5000/api/string")
      .then((response) => {
        console.log("Fetched string:", response.data); // Log fetched data
        setComments(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the string!", error);
      });
  }, []);

  return (
    <div>
      {comments.length > 0 ? (
        comments.map((string) => (
          <div key={string.id} className="string">
            <h2>{string.text}</h2>
          </div>
        ))
      ) : (
        <p>No comments available</p> // Display message if no comments
      )}
    </div>
  );
};

export default Carousel;
