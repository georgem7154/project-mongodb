const Carousel = () => {
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
