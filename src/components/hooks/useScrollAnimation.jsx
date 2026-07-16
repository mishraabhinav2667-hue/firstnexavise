import { useRef } from "react";
import { useInView } from "framer-motion";
// Custom hook for intersection observer
function useScrollAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return [ref, isInView];
}

export default useScrollAnimation;