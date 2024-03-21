"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import Project from "./project/Project";
import styles from "./Projecten.module.css";

export default function YourComponent() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const races = scrollRef.current;

    const getScrollAmount = () => {
      let racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    };

    gsap.registerPlugin(ScrollTrigger);

    const tween = gsap.to(races, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: ".triggerScroll",
      start: "top 20%",
      end: () => `+=${getScrollAmount() * -1}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      markers: true,
    });
  }, []);

  return (
    <div className="triggerScroll">
      <div className={styles.mainContainer}>
        <div className={styles.scrollSectionInner} ref={scrollRef}>
          {/* @ts-expect-error Server Component */}
          <Project />
        </div>
      </div>
    </div>
  );
}
