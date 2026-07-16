import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHash = () => {
  const { hash } = useLocation(); // Get the current URL hash

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // Remove "#" and find the element
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [hash]); // Run effect whenever the hash changes

  return null;
};

export default ScrollToHash;
