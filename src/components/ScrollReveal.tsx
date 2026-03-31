import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Props {
  children: ReactNode;
  className?: string;
}

const ScrollReveal = ({ children, className = "" }: Props) => {
  const { ref, isInView } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
