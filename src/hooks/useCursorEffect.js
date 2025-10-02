import { useEffect } from "react";

export function useCursorEffect() {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    
    if (!cursor) return;

    const handleMouseMove = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
}
