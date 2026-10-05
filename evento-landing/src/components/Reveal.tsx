import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealVariant = "fade-up" | "title-left" | "title-right" | "pop" | "fade";

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "h1" | "h2" | "h3" | "p" | "span";
}

/**
 * Componente de aparición dinámica al hacer scroll.
 * Usa IntersectionObserver para detectar cuándo el elemento entra en viewport
 * y dispara la animación correspondiente. Solo anima una vez.
 */
export function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  className = "",
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as as "div";

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`reveal reveal-${variant} ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
