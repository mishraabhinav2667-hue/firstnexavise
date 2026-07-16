
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NexaviseLoadingFallback from "./Loader";

export default function RootClientWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <NexaviseLoadingFallback />;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
