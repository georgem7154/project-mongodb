import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

const Animated2 = ({ children, className = "", delay = 200, duration = 600, distance = "50px", direction = "bottom" }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ScrollReveal().reveal(ref.current, {
        delay,
        duration,
        distance,
        easing: "ease-in-out",
        origin: direction, // Use the direction prop
        reset: true, // Change to true if you want repeated animations on scroll
      });
    }
  }, [direction]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default Animated2;
