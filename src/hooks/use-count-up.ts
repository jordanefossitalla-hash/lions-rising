import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  enabled?: boolean;
}

export function useCountUp({
  start = 0,
  end,
  duration = 2000,
  delay = 0,
  enabled = true,
}: UseCountUpOptions) {
  const [count, setCount] = useState(start);
  const countRef = useRef(start);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!enabled || hasAnimated.current) return;

    const startTime = Date.now() + delay;
    const endTime = startTime + duration;

    const animate = () => {
      const now = Date.now();

      if (now < startTime) {
        requestAnimationFrame(animate);
        return;
      }

      if (now >= endTime) {
        setCount(end);
        countRef.current = end;
        hasAnimated.current = true;
        return;
      }

      const progress = (now - startTime) / duration;
      // Easing function: easeOutExpo for smooth deceleration
      const easeProgress = 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(start + (end - start) * easeProgress);

      if (currentCount !== countRef.current) {
        countRef.current = currentCount;
        setCount(currentCount);
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [start, end, duration, delay, enabled]);

  return count;
}
