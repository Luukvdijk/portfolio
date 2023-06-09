"use client";
//npm install react-scroll-percentage@4.2.0 --force
import React, {
  useRef,
  useState,
  useLayoutEffect,
  useCallback,
  useEffect,
} from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useScroll,
} from "framer-motion";

import { useScrollPercentage } from "react-scroll-percentage";
import styles from "./Projecten.module.css";
import StartProject from "./startProject/StartProject";
import Project from "./project/Project";

export default function Projecten({ children }: { children: React.ReactNode }) {
  const scrollRef: any = useRef(null);
  const ghostRef: any = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);

  const scrollPerc = useMotionValue(0);

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  const onResize = useCallback((entries: any) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    resizeObserver.observe(ghostRef.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const { scrollYProgress } = useScroll();

  const [containerRef, percentage] = useScrollPercentage({
    threshold: 0.1,
  });

  useEffect(() => {
    scrollPerc.set(percentage);
  }, [percentage]);

  const transform = useTransform(
    scrollPerc,
    [0, 1],
    [0, -scrollRange + viewportW]
  );
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <div className={styles.mainContainer} ref={containerRef}>
      <div className={styles.scrollContainer}>
        <motion.div
          ref={scrollRef}
          style={{ x: spring }}
          className={styles.thumbnailsContainer}
        >
          <div className={styles.thumbnails}>
            <StartProject />
            {children}
          </div>
        </motion.div>
      </div>
      <div
        ref={ghostRef}
        style={{ height: scrollRange }}
        className={styles.ghost}
      />
    </div>
  );
}
