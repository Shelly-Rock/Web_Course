import { useEffect, useRef, useState } from "react";

export default function useScroll(options = {}) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
            setShow(true);
            observer.unobserve(entry.target);
            }
        },
        {
            threshold: 0.9, 
            ...options,
        }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return {ref, show};
}
