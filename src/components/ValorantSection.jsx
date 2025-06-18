import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
const ValorantSection = () => {
  const valorantSectionRef = useRef(null);
  const sectionTitleRef = useRef(null);
  const sectionParagraphRef = useRef(null);
  const valorantTextBgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // "Valorant" Section animations
      gsap.from(sectionTitleRef.current, {
        scrollTrigger: {
          trigger: valorantSectionRef.current,
          start: "top 70%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
      });

      gsap.from(sectionParagraphRef.current, {
        scrollTrigger: {
          trigger: valorantSectionRef.current,
          start: "top 60%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.2,
      });

      // Parallax for the background text "VALORANT"
      gsap.to(valorantTextBgRef.current, {
        scrollTrigger: {
          trigger: valorantSectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: -150, // Moves the text up as you scroll down
      });
    }, valorantSectionRef); // scope the selector to the sectionRef

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section className="we-are-valorant" ref={valorantSectionRef}>
      <div className="container">
        <div className="valorant-text-bg" ref={valorantTextBgRef}>
          VALORANT
        </div>
        <h2 className="section-title" ref={sectionTitleRef}>
          A 5v5 character-based tactical shooter.
        </h2>
        <p ref={sectionParagraphRef}>
          This is more than just a shooter. It's a test of creativity, clutch
          plays, and strategy. Outwit, outplay, and outshine your competition.
        </p>
      </div>
    </section>
  );
};

export default ValorantSection;
