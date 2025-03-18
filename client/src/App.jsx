import Carousel from "./Carousel";
import Ribbon from "./Ribbon";
import Book from "./Book"; // Ensure Book is imported
import Benefits from "./Benefits";
import Footer from "./Footer";
import Locations from "./Locations";
import { useRef } from "react";

function App() {
  // Create a ref for the Book section
  const bookRef = useRef(null);

  return (
    <div className="relative dark:bg-black">
      <div className="h-32 max-md:hidden"></div>
      {/* Pass the ref to the Ribbon component */}
      <Ribbon bookRef={bookRef} />
      <Carousel />
      <Locations />
      {/* Attach the ref to the Book section */}
      <div ref={bookRef}>
        <Book />
      </div>
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;
