import React from "react";
import transition from "../transition.js";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="absolute lg:left-[17%] left-[12%] lg:top-[35%] top-[30%]">
      <div className="flex flex-row">
        <div className="flex flex-col w-fit">
          <h2 className="lg:text-[38px] text-[12px] tracking-normal">
            <strong>Customized </strong>AI powered <strong>solutions</strong>{" "}
            <br></br> to meet <strong>your</strong> business needs
          </h2>
          <h3 className="lg:text-[17px] text-[10px] tracking-wide   pt-[0.8rem]">
            Future proof your business with language models,
            <br /> automation, analytics, and computer vision.
          </h3>
          <div className="flex flex-row  mt-[1.2rem]">
            <Link to={"/case-studies"}>
              <button class="learn-more lg:w-[10rem] lg:h-[2.6rem] w-[7rem]">
                <span class="circle">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text italic lg:text-xs text-[0.4rem] ">
                  Learn More
                </span>
              </button>
            </Link>
            <div className="ml-4">
              <Link to={"/contact"}>
                <button class="learn-more lg:w-[10rem] lg:h-[2.6rem] w-[7rem]">
                  <span class="circle">
                    <span class="icon arrow"></span>
                  </span>
                  <span class="button-text italic text-[0.4rem] lg:text-xs ">
                    Get in Touch
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="fixed lg:top-[18%] lg:left-[32%] z-[-1000] top-[23%] left-[20%] ">
          <img
            src="./logo-sonos-removebg-preview.png"
            className="max-w-[300px] lg:max-w-[570px] opacity-[0.07] h-auto "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default transition(Home);
