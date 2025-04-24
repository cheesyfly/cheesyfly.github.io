import { useEffect, useRef, useState } from 'react';

export default function useOnScreen<T extends Element>(threshold = 0.1) {
  const ref = useRef<T>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [setIntersecting]);

  return [ref, isIntersecting] as const;
}
