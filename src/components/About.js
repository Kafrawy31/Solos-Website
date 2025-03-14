import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import aboutData from "../assets/aboutplaceholders";
import transition from "../transition";

const Testing = () => {
  const [selectedSection, setSelectedSection] = useState(aboutData[0]); // Default to first section
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { x: -100, opacity: 0 }, // Start position (off-screen to the left)
        { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" } // Slide in smoothly
      );
    }
  }, [selectedSection]); // Re-run animation when selectedSection changes

  return (
    <div className="flex flex-col w-screen justify-center items-center ">
      <div className="fixed lg:top-[19%] top-[28%]">
        <img
          className="opacity-[0.07]"
          src="./logo-sonos-removebg-preview.png"
          width={570}
          alt=""
        />
      </div>
      <h1 className="lg:text-6xl lg:mt-6 mt-[2rem] text-4xl">About Us</h1>

      {/* Buttons for selecting sections */}
      <div className="flex gap-4 mt-14 lg:mb-10 mb-2">
        {aboutData.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedSection(item)}
            className={`lg:px-8 px-3  border-2 border-white py-2 lg:text-md text-sm font-bold rounded-md transition-all ${
              selectedSection.id === item.id
                ? "bg-[#192C19] text-[#F0833A]"
                : "bg-transparent"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Display Selected Section */}
      <div
        ref={textRef}
        className="lg:mt-12 mt-20 lg:w-[50%] w-[70%] text-center"
      >
        <h2 className="text-3xl font-semibold mb-5 text-[#192C19]">
          {selectedSection.title}
        </h2>
        <p
          className="mt-2 lg:text-xl text-sm text-justify"
          style={{ textAlign: "justify", textAlignLast: "center" }}
        >
          {selectedSection.description}
        </p>
      </div>
      <div className="flex flex-row lg:mb-0 mb-6">
        <Link to={"/case-studies"}>
          <button class="learn-more lg:w-[10rem] lg:h-[2.6rem] w-[7rem] mt-12 mr-6">
            <span class="circle">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text italic text-[0.4rem] lg:text-xs ">
              Case studies
            </span>
          </button>
        </Link>
        <Link to={"/contact"}>
          <button class="learn-more lg:w-[10rem] lg:h-[2.6rem] w-[7rem] mt-12">
            <span class="circle">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text italic text-[0.4rem] lg:text-xs">
              Get in Touch
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default transition(Testing);
