import React, { useRef } from "react";

export default function useIntersectionObserver(callback: any) {
  const observer = useRef(
    new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            callback();
          }
        });
      },
      { threshold: 1 }
    )
  );

  const observe = (element: any) => {
    observer.current.observe(element);
  };

  const unobserve = (element: any) => {
    observer.current.unobserve(element);
  };

  return [observe, unobserve];
}
