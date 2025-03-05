import Carousel from "./Carousel";
import Ribbon from "./Ribbon";
import Benefits from "./Benefits";
import Footer from "./Footer";
import Locations from "./Locations";

function App() {
  return (
    <div className="relative">
      <div className="h-32"></div>
      <Ribbon />
      <Carousel />
      <Locations />
      <Benefits />
      <Footer />
    </div>
  );
}

export default App;
