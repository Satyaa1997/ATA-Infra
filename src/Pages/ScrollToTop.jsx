import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Kisi bhi page link par click hone par screen instant top par reset ho jayegi
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // ya "smooth" agar smooth scrolling chahte hain
    });
  }, [pathname]);

  return null;
}