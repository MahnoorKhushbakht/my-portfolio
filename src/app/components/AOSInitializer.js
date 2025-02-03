'use client'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSInitializer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Ensures animation runs only once
      easing: "ease-in-out", // Smooth animation
    });
  }, []);

  return null; // This component doesn't render anything, just initializes AOS
};

export default AOSInitializer;
