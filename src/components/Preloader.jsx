import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Preloader = ({ setIsLoading }) => {
  const preloaderRef = useRef(null);
  const preloaderTextRef = useRef(null);
  const preloaderCounterRef = useRef(null);

  useEffect(() => {
    // The countdown will be handled by tweening this object
    let counter = { value: 5 };

    const preloaderTL = gsap.timeline();

    preloaderTL
      // 1. Animate the elements in
      .to(
        preloaderCounterRef.current,
        {
          duration: 0.5,
          opacity: 1,
          ease: "power1.in",
        },
        "-=0.5"
      )

      // 2. Animate the counter from 5 to 0 over 5 seconds
      .to(
        counter,
        {
          value: 0,
          duration: 5,
          ease: "steps(5)", // Crucial for discrete number steps
          onUpdate: () => {
            // Update the text content on each "step"
            if (preloaderCounterRef.current) {
              preloaderCounterRef.current.textContent = Math.round(
                counter.value
              );
            }
          },
        },
        "+=0.2"
      ) // Start slightly after intro animations finish

      // 3. Animate the preloader out
      .to([preloaderTextRef.current, preloaderCounterRef.current], {
        duration: 0.5,
        opacity: 0,
        ease: "power3.in",
      })
      .to(
        preloaderRef.current,
        {
          duration: 1,
          opacity: "0",
          ease: "power4.inOut",
          // onComplete: () => {
          //   setIsLoading(false);
          // },
        },
        "-=0.2"
      )
      .set(preloaderRef.current, { display: "none" });

    return () => {
      preloaderTL.kill();
    };
  }, []);

  return (
    <div className="preloader" ref={preloaderRef}>
      <h1 className="preloader-text" ref={preloaderTextRef}>
        LOADING
      </h1>
      <div className="preloader-counter" ref={preloaderCounterRef}>
        5
      </div>
    </div>
  );
};

export default Preloader;
