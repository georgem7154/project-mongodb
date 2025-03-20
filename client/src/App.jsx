import Carousel from "./Carousel";
import Ribbon from "./Ribbon";
import Book from "./Book"; // Ensure Book is imported
import Benefits from "./Benefits";
import Footer from "./Footer";
import Locations from "./Locations";
import { useRef } from "react";
import Animated from "./Animated";

function App() {
  const bookRef = useRef(null);

  return (
    <div className="relative dark:bg-black">
      <div className="h-32 max-md:hidden"></div>
      
        <Ribbon bookRef={bookRef} />

      <Animated>
        <Carousel />
      </Animated>
      <Animated>
        <Locations />
      </Animated>
      <div ref={bookRef}>
        <Animated>
          <Book />
        </Animated>
      </div>
      <Animated>
        <Benefits />
      </Animated>
      <Footer />
    </div>
  );
}

export default App;
