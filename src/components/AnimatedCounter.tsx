import { LucideIcon } from 'lucide-react';
import { useCountUp } from '@/hooks/use-count-up';
import { useInView } from '@/hooks/use-in-view';

interface AnimatedCounterProps {
  icon: LucideIcon;
  number: string;
  label: string;
  delay?: number;
}

export function AnimatedCounter({ icon: Icon, number, label, delay = 0 }: AnimatedCounterProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.3, triggerOnce: true });
  
  // Extract numeric value and suffix (like '+')
  const numericMatch = number.match(/^(\d+)(.*)$/);
  const numericValue = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const suffix = numericMatch ? numericMatch[2] : '';

  const count = useCountUp({
    end: numericValue,
    duration: 2000,
    delay,
    enabled: isInView,
  });

  return (
    <div
      ref={ref}
      className="card-glass text-center py-3 sm:py-4 md:py-6 px-2 sm:px-4 transform hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center"
    >
      <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-energy mb-1 sm:mb-2" />
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-secondary tabular-nums">
        {isInView ? count : 0}{suffix}
      </div>
      <div className="text-[10px] sm:text-xs md:text-sm text-secondary/60 mt-0.5 sm:mt-1 line-clamp-2 text-center">
        {label}
      </div>
    </div>
  );
}
