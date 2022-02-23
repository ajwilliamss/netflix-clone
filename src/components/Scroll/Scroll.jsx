import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./Scroll.scss";

const Scroll = () => {
  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    if (window.pageYOffset > 300) {
      setDisplay(true);
    } else {
      setDisplay(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleDisplay);
    // Cleanup function
    return () => {
      window.removeEventListener("scroll", toggleDisplay);
    };
  }, []);

  return (
    <div className="scroll">
      {display && (
        <div className="to-top-icon" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}
    </div>
  );
};

export default Scroll;
