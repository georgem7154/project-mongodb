import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

const Animated = ({ children, className = "", delay = 200, duration = 500, distance = "100px" }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ScrollReveal().reveal(ref.current, {
        delay,
        duration,
        distance,
        easing: "ease-in-out",
        origin: "bottom",
        reset: true, // Set to true if you want it to animate every time it comes into view
      });
    }
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default Animated;
