import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SectionOne from "./SectionOne";
import FeatureSection from "./FeatureSection";
import SupportSection from "./SupportSection";
import Image from "next/image";

const ScrollSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-400vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer overflow-hidden">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="scroll-section-inner min-h-screen w-[500vw] flex relative"
        >
          <div className="scroll-section min-h-screen w-screen flex justify-center items-center">
            <SectionOne />
          </div>
          <div className="scroll-section min-h-screen w-screen flex justify-center items-center">
            <div className="mx-auto max-w-7xl py-16 h-2/4">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <span className="block relative h-full w-full">
                  <Image
                    width={1920}
                    height={1080}
                    src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                    alt="App screenshot"
                    className="h-full w-full rounded-md shadow-2xl ring-1 ring-gray-900/10 object-contain"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="scroll-section min-h-screen w-screen flex justify-center items-center">
            <FeatureSection />
          </div>
          <div className="scroll-section min-h-screen w-screen flex justify-center items-center">
            <SupportSection />
          </div>
          <div className="scroll-section min-h-screen w-screen flex justify-center items-center">
            <div className="mx-auto max-w-7xl py-16 h-2/4">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <span className="block relative h-full w-full">
                  <Image
                    width={1920}
                    height={1080}
                    src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                    alt="App screenshot"
                    className="h-full w-full rounded-md shadow-2xl ring-1 ring-gray-900/10 object-contain"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollSection;
