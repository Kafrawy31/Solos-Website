import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import placeholderData from "../assets/placeholder";
import transition from "../transition";

/**
 * 1) A simple custom hook to check if the screen width is <= 768px
 *    (Adjust the breakpoint as needed).
 */
function useIsSmallScreen() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    function checkScreenSize() {
      setIsSmallScreen(window.innerWidth <= 1000);
    }
    window.addEventListener("resize", checkScreenSize);
    // Initial check
    checkScreenSize();

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return isSmallScreen;
}

/**
 * 2) Desktop version: Your "CaseStudies" component
 *    (original snippet for large screens).
 */
function DesktopCaseStudies() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleZoom = (item, index) => {
    setSelectedItem(item);
    const rect = document
      .querySelector(`.item${index}`)
      .getBoundingClientRect();
    const xOffset = window.innerWidth / 2 - (rect.left + rect.width / 2);
    const yOffset = window.innerHeight / 2 - (rect.top + rect.height / 2);
    const scaleX = window.innerWidth / rect.width;
    const scaleY = window.innerHeight / rect.height;
    const scale = Math.max(scaleX, scaleY); // Ensure it covers the whole screen

    placeholderData.forEach((_, i) => {
      const element = document.querySelector(`.item${i}`);

      const textElement = element.querySelector("h1");
      const descriptionElement = element.querySelector("p");
      const caseStudyElement = element.querySelector("h2");
      const imgElement = element.querySelector("img");
      const btnElement = element.querySelector("button");

      btnElement.addEventListener("mouseenter", () => {
        gsap.to(btnElement, { scale: 1.25, duration: 0.2 });
      });

      btnElement.addEventListener("mouseleave", () => {
        gsap.to(btnElement, { scale: 1, duration: 0.2 });
      });

      if (i === index) {
        const tl = gsap.timeline();

        tl.to(element, {
          scale: 0.2, // Shrink the box first
          duration: 0.6,
          backgroundColor: "rgba(198, 213, 198, 0.6)",
          backdropFilter: "blur(2.5px)",
          ease: "power2.inOut",
        }).to(element, {
          scale: scale / 1.02, // Then expand to full screen
          x: xOffset,
          y: yOffset,
          duration: 1.2,
          ease: "power2.out",
        });

        gsap.to(textElement, {
          y: "-360%",
          delay: 0.7,
          duration: 1.0,
          color: "#192C19",
        });

        gsap.set(descriptionElement, {
          opacity: 0,
          x: 30,
        });

        gsap.to(descriptionElement, {
          delay: 1.2,
          opacity: 1,
          x: 0,
          duration: 1,
        });

        gsap.set(caseStudyElement, {
          opacity: 0,
          y: -20,
        });

        gsap.to(caseStudyElement, {
          delay: 1.5,
          opacity: 1,
          y: 0,
          duration: 1,
        });

        gsap.set(imgElement, {
          opacity: 0,
          x: -20,
        });

        gsap.to(imgElement, {
          delay: 1,
          opacity: 1,
          x: 0,
          duration: 1,
        });

        gsap.set(btnElement, {
          y: 20,
          opacity: 0,
        });

        gsap.to(btnElement, {
          delay: 1.5,
          y: 0,
          opacity: 1,
          duration: 1.0,
        });
      } else {
        gsap.to(element, {
          scale: 0,
          duration: 0.2,
          opacity: 0.5,
        });
      }
    });
    item.isSelected = true;
  };

  const handleClose = (item, index) => {
    placeholderData.forEach((_, i) => {
      const element = document.querySelector(`.item${i}`);
      const textElement = element.querySelector("h1");
      const descriptionElement = element.querySelector("p");
      const caseStudyElement = element.querySelector("h2");
      const imgElement = element.querySelector("img");
      const btnElement = element.querySelector("button");

      if (i === index) {
        gsap.to(element, {
          scale: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          backgroundColor: "rgba(55,76,74, 1)",
          backdropFilter: "blur(0px)",
          ease: "power2.InOut",
          opacity: 0.8,
        });

        // Reset text positions and opacity
        gsap.to(textElement, {
          y: "0%",
          duration: 1.1,
          color: "white",
        });

        gsap.to(descriptionElement, {
          opacity: 0,
          x: 30,
          duration: 0.5,
        });

        gsap.to(caseStudyElement, {
          opacity: 0,
          y: -20,
          duration: 0.5,
        });

        gsap.to(imgElement, {
          opacity: 0,
          x: -20,
          duration: 0.5,
        });

        gsap.to(btnElement, {
          opacity: 0,
          y: -20,
          duration: 0.5,
        });
      } else {
        gsap.to(element, {
          scale: 1,
          opacity: 1,
          delay: 1,
          duration: 0.3,
        });
      }
    });

    setSelectedItem(null);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-4xl lg:mt-[3rem]">Case Studies</h1>
      <div className={`mt-[4rem] grid grid-cols-2 grid-rows-2 gap-2.5 px-2`}>
        {placeholderData.map((item, index) => (
          <div
            key={index}
            className={`item${index} 
              flex bg-[#374C4A] flex-col z-[1000] max-w-[375px] h-[180px] max-h-[260px]  
              justify-center items-center cursor-pointer overflow-hidden
              ${
                !!selectedItem && selectedItem !== item
                  ? "pointer-events-none"
                  : "pointer-events-auto"
              }`}
            onClick={() => !selectedItem && handleZoom(item, index)}
          >
            <div className="translate-y-[200%] z-[1000]">
              <h1
                className={`text-[0.5rem] text-white lg:text-sm`}
                onClick={
                  selectedItem ? undefined : (event) => handleZoom(item, index)
                }
              >
                {item.name}
              </h1>
            </div>
            <div className="flex lg:justify-evenly items-center lg:flex-row flex-col lg:max-w-[100%] max-h-full">
              <p
                className={` ${
                  selectedItem ? "" : "opacity-0 -translate-x-full"
                } description max-w-[40%] flex-grow ml-6 max-h text-[0.22rem] lg:text-[0.4rem]`}
              >
                {item.text}
              </p>
              <div className="flex flex-col justify-center items-center">
                <h2
                  className={` ${
                    selectedItem ? "" : "opacity-0 -translate-y-full"
                  } text-[0.3rem] mb-1 lg:text-[0.35rem] font-semibold`}
                >
                  Demo
                </h2>
                <img
                  className={`${
                    selectedItem ? "" : "opacity-0 -translate-x-full"
                  } lg:w-[80px] rounded-md `}
                  src="./images.png"
                  alt=""
                />
              </div>
              <button
                className={`${
                  selectedItem ? "" : "opacity-0 translate-y-full"
                }text-[0.2rem] cursor-pointer rounded-md bg-[#192C19] absolute left-[50%] bottom-[5%] z-[1000]`}
                onClick={() => handleClose(item, index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12px"
                  height="12px"
                  viewBox="0 0 24 24"
                  className="ml"
                  class="stroke-[#C2B3A3] mr-[1px] ml-[0.5px]"
                >
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    d="M11 6L5 12M5 12L11 18M5 12H19"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
        <div className="fixed top-[10%] left-[10%]">
          <img
            className="z-[-2000] opacity-10"
            src="./logo-sonos-removebg-preview.png"
            width={700}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

/**
 * 3) Mobile version: Your second snippet ("About")
 *    to show on small screens.
 */
function MobileCaseStudies() {
  const stickyRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = (event, id) => {
    event.preventDefault();
    if (id === "beginning") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (!stickyRef.current) return;
      const offsetTop = stickyRef.current.offsetTop - 12;
      setIsSticky(window.scrollY >= offsetTop);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sr = ScrollReveal();

    // Computer Vision
    sr.reveal(".cv-title", {
      origin: "top",
      distance: "50px",
      duration: 1000,
      delay: 200,
      viewOffset: { top: window.innerHeight / 2, bottom: 0 },
    });
    sr.reveal(".cv-video", {
      origin: "left",
      distance: "50px",
      duration: 1200,
      delay: 400,
      viewOffset: { top: window.innerHeight / 2, bottom: 0 },
    });
    sr.reveal(".cv-header", {
      origin: "right",
      distance: "50px",
      duration: 1200,
      delay: 600,
      viewOffset: { top: window.innerHeight / 2, bottom: 0 },
    });
    sr.reveal(".cv-text", {
      origin: "bottom",
      distance: "50px",
      duration: 1400,
      delay: 800,
      viewOffset: { top: window.innerHeight / 2, bottom: 0 },
    });

    // LLMs
    sr.reveal(".llm-title", {
      origin: "top",
      distance: "100px",
      duration: 1000,
      delay: 200,
      viewOffset: { top: window.innerHeight / 2, bottom: 0 },
    });
    sr.reveal(".llm-video", {
      origin: "right",
      distance: "50px",
      duration: 1200,
      delay: 400,
      viewOffset: { top: window.innerHeight / 2, bottom: 0 },
    });
    sr.reveal(".llm-header", {
      origin: "left",
      distance: "50px",
      duration: 1200,
      delay: 600,
      viewOffset: { top: window.innerHeight / 2, bottom: 0 },
    });
    sr.reveal(".llm-text", {
      origin: "bottom",
      distance: "50px",
      duration: 1400,
      delay: 800,
      viewOffset: { top: window.innerHeight / 2, bottom: 0 },
    });

    // AI Agents
    sr.reveal(".ai-agent-title", {
      origin: "top",
      distance: "100px",
      duration: 1000,
      delay: 200,
      viewOffset: { top: window.innerHeight / 2, bottom: 0 },
    });
    sr.reveal(".ai-agent-video", {
      origin: "left",
      distance: "50px",
      duration: 1200,
      delay: 400,
      viewOffset: { top: window.innerHeight / 2, bottom: 0 },
    });
    sr.reveal(".ai-agent-header", {
      origin: "right",
      distance: "50px",
      duration: 1200,
      delay: 600,
      viewOffset: { top: window.innerHeight / 2, bottom: 0 },
    });
    sr.reveal(".ai-agent-text", {
      origin: "bottom",
      distance: "50px",
      duration: 1400,
      delay: 800,
      viewOffset: { top: window.innerHeight / 2, bottom: 0 },
    });

    // Predictive Analysis
    sr.reveal(".pred-analysis-title", {
      origin: "top",
      distance: "100px",
      duration: 1000,
      delay: 200,
      viewOffset: { top: window.innerHeight / 2, bottom: 0 },
    });
    sr.reveal(".pred-analysis-video", {
      origin: "right",
      distance: "50px",
      duration: 1200,
      delay: 400,
      viewOffset: { top: window.innerHeight / 2, bottom: 0 },
    });
    sr.reveal(".pred-analysis-header", {
      origin: "left",
      distance: "50px",
      duration: 1200,
      delay: 600,
      viewOffset: { top: window.innerHeight / 2, bottom: 0 },
    });
    sr.reveal(".pred-analysis-text", {
      origin: "bottom",
      distance: "50px",
      duration: 1400,
      delay: 800,
      viewOffset: { top: window.innerHeight / 2, bottom: 0 },
    });

    return () => sr.destroy();
  }, []);

  return (
    <div className="container flex justify-center lg:px-[2rem] items-center flex-col w-screen">
      <h1
        id="beginning"
        className="about-title lg:text-[3rem] text-[2rem] sm:text-[2rem] mb-[30px] mt-[2rem]"
      >
        Case Studies
      </h1>
      <div className="content flex justify-center items-center"></div>
      <div
        ref={stickyRef}
        className={`
          sticky top-[0.5rem]
          ${isSticky ? "w-[90vw]" : "w-[60%]"}
          py-[1rem] rounded-lg z-[300] mt-[2rem]
          text-center flex flex-row justify-between items-center
          text-[8px] sm:text-[10px] lg:text-[12px]
          bg-white/20
          transition-width
        `}
      >
        <button
          className="custom-link font-bold pl-[1rem]"
          onClick={(e) => handleScroll(e, "computer-vision")}
        >
          Computer <br />
          Vision
        </button>
        <button
          className="custom-link font-bold"
          onClick={(e) => handleScroll(e, "llms")}
        >
          LLM's
        </button>
        <button
          className="custom-link font-bold"
          onClick={(e) => handleScroll(e, "ai-agents")}
        >
          Automation
        </button>
        <button
          className="custom-link font-bold pr-[1rem]"
          onClick={(e) => handleScroll(e, "predictive-analysis")}
        >
          Predictive <br /> Analysis
        </button>
      </div>

      <div className="w-[75%]">
        {/* Computer Vision */}
        <section id="computer-vision" className="p-0 lg:ml-[1.5rem]">
          <div className="mt-[14rem] flex flex-col items-center">
            <h1 className="cv-title lg:text-[2.1rem] font-bold sm:text-[2rem] mb-[1.5rem]">
              Computer Vision
            </h1>
            <div className="flex flex-row w-[90%] sm:w-[90%]">
              <img
                src="./cv-img-nobg.png"
                alt=""
                className="cv-video rounded-lg flex-[3] h-auto max-h-[300px] max-w-[40%] z-[100]"
              />
              <div className="flex-[3] pl-[20px]  items-center">
                <h2 className="cv-header font-bold mt-3 lg:text-[36px] sm:text-[10px] lg:mt-[2.5rem] lg:mb-[1rem]">
                  What we provide
                </h2>
                <p className="cv-text lg:text-[18px] text-[8px]">
                  Harness the power of AI to analyze and interpret images and
                  videos with precision. From real-time object detection and
                  facial recognition to automated quality control and security
                  monitoring, our solutions enhance efficiency and accuracy
                  across industries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LLMs */}
        <section id="llms" className="p-0 lg:ml-[1.5rem]">
          <div className="mt-[10rem] flex flex-col items-center">
            <h1 className="llm-title rounded-lg lg:text-[2.1rem] font-bold sm:text-[2rem] mb-[1.5rem]">
              LLMs
            </h1>
            <div className="flex flex-row w-[100%] sm:w-[90%]">
              <div className="flex-[3] flex flex-col pl-[20px] min-h-flex items-center">
                <h2 className="llm-header self-start font-bold lg:text-[36px] sm:text-[10px] lg:mt-[2.5rem] lg:mb-[1rem]">
                  What we provide
                </h2>
                <p className="llm-text self-start lg:text-[18px] text-[8px]">
                  Enhance customer interactions, automate content creation, and
                  streamline workflows with advanced AI-powered language models.
                  From chatbots to document processing, our LLM solutions drive
                  efficiency and deliver human-like communication at scale.
                </p>
              </div>
              <img
                src="./llm-img-nobg.png"
                alt=""
                className="llm-video flex-[2] ml-6 h-auto max-h-[300px] max-w-[30%] rounded-md  z-[100]"
              />
            </div>
          </div>
        </section>

        {/* AI Agents */}
        <section id="ai-agents" className="p-0 lg:ml-[1.5rem]">
          <div className="mt-[10rem] flex flex-col items-center">
            <h1 className="ai-agent-title lg:text-[2.1rem] font-bold sm:text-[2rem] mb-[1.2rem]">
              Automation
            </h1>
            <div className="flex flex-row w-[90%] sm:w-[90%]">
              <img
                src="./automation-nobg.png"
                alt=""
                className="ai-agent-video rounded-lg flex-[2] h-auto max-h-[300px] max-w-[30%] z-[100]"
              />
              <div className="flex-[3] pl-[20px] min-h-flex items-center">
                <h2 className="ai-agent-header font-bold lg:text-[36px] sm:text-[10px] lg:mt-[2.5rem] mt-2 lg:mb-[1rem]">
                  What we provide
                </h2>
                <p className="ai-agent-text lg:text-[18px] text-[8px]">
                  Eliminate repetitive tasks and optimize operations with
                  AI-powered automation. Whether it's workflow automation,
                  robotic process automation (RPA), or intelligent assistants,
                  we help businesses boost productivity and reduce manual
                  effort.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Predictive Analysis */}
        <section className="p-0 lg:ml-[1.5rem]">
          <div className="mt-[10rem] flex flex-col items-center">
            <h1
              id="predictive-analysis"
              className="pred-analysis-title lg:text-[2.1rem] font-bold sm:text-[2rem] mb-[2rem]"
            >
              Predictive Analysis
            </h1>
            <div className="flex flex-row w-[100%] sm:w-[90%]">
              <div className="flex-[3] mr-10 flex flex-col items-center">
                <h2
                  id="predictive-analysis"
                  className="pred-analysis-header font-bold self-start lg:text-[36px] sm:text-[10px] lg:mt-[2.5rem] lg:mb-[1rem]"
                >
                  What we provide
                </h2>
                <p className="pred-analysis-text self-start mt-2 lg:text-[18px] text-[8px]">
                  Leverage data-driven insights to forecast trends, optimize
                  decision-making, and mitigate risks. Our predictive analytics
                  solutions help businesses anticipate demand, detect anomalies,
                  and uncover opportunities—turning raw data into strategic
                  advantages.
                </p>
              </div>
              <img
                src="./analysis.svg"
                alt=""
                className="pred-analysis-video rounded-lg flex-[2] h-auto max-h-[300px] max-w-[30%] mt-1 z-[100]"
              />
            </div>
          </div>
        </section>
      </div>

      <div className="flex ml-3 flex-row mt-[6rem] mb-[3rem] ">
        <button onClick={(e) => handleScroll(e, "beginning")}>
          <button className="learn-more lg:w-[10rem] lg:h-[2.6rem] w-[7rem] ">
            <span className="circle">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text italic lg:text-xs text-[0.4rem]">
              Back to Top
            </span>
          </button>
        </button>
        <div className="ml-4">
          <Link to={"/contact"}>
            <button className="learn-more lg:w-[10rem] lg:h-[2.6rem] w-[7rem] ">
              <span className="circle">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text italic lg:text-xs text-[0.4rem]">
                Get in Touch
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

/**
 * 4) Parent component: Decides which version to show
 *    based on screen size, and is exported as default.
 */
function ResponsiveCaseStudies() {
  const isSmallScreen = useIsSmallScreen();

  // Return the Mobile version if on a small screen;
  // else return the Desktop version
  return isSmallScreen ? <MobileCaseStudies /> : <DesktopCaseStudies />;
}

// Wrap your final component with `transition` if needed:
export default transition(ResponsiveCaseStudies);
