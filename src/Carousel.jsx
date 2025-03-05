import React, { useState, useEffect } from "react";
import axios from "axios";

const Carousel = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch comments from the backend
    axios
      .get("http://localhost:5000/api/comments")
      .then((response) => {
        console.log("Fetched comments:", response.data); // Log fetched data
        setComments(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the comments!", error);
      });
  }, []);

  return (
    <div>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.movie_id} className="comment">
            <h2>{comment.name}</h2>
            <p>{comment.text}</p>
          </div>
        ))
      ) : (
        <p>No comments available</p> // Display message if no comments
      )}
    </div>
  );
};

export default Carousel;