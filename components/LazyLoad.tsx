// components/LazyLoad.tsx
"use client";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface LazyLoadProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
}

export default function LazyLoad({
  children,
  fallback = null,
  threshold = 0.1,
}: LazyLoadProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold });
  return <div ref={ref}>{inView ? children : fallback}</div>;
}
