import React from "react";
import transition from "../transition";

const Contact = () => {
  return (
    <div className="flex lg:flex-row flex-col mt-10 w-screen h-full lg:justify-evenly items-center">
      <div className="flex flex-col">
        <p className="font-extrabold lg:text-3xl text-2xl mb-2.5 ">
          Let's talk.
        </p>
        <p className="font-semibold lg:text-xs text-[10px] tracking-widest ">
          Have big ideas and want to bring them to life? We'd Love to hear from
          you.
          <br /> Tell us about you, your project and how we can help make it
          happen!
        </p>

        <div className="mt-12">
          <p className="text-black text-2xl font-bold mb-2.5">Phone.</p>
          <p className="text-black text-sm font-bold tracking-wide ">
            +254 798 898988
          </p>
        </div>

        <div className="lg:mb-0 mb-4">
          <p className="font-extrabold text-2xl mb-2.5 mt-12 ">Emails.</p>
          <p className="text-black text-sm tracking-wide mb-1 italic underline">
            Sales@solosconsulting.com
          </p>
          <p className="text-black text-sm tracking-wide italic underline">
            Seif.awadalla@solosconsulting.com
          </p>
        </div>
        <div className="mt-20 lg:block hidden">
          <p className="font-bold text-6xl">SO</p>
          <p className="font-bold text-6xl">LO</p>
          <p className="font-bold text-6xl">S</p>
        </div>
      </div>
      <form
        className="mt-10 lg:self-start relative lg:w-[35%] w-[90%]"
        action="https://formsubmit.co/aujsaujs31@gmail.com"
        method="POST"
      >
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p className="text-sm font-bold mb-1">First name</p>
            <input
              type="text"
              name="firstName"
              required
              className="border-b-black focus:outline-none font-bold border-t-0 border-l-0 border-r-0 border-2 bg-transparent p-0 w-[100%] mb-4"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-bold mb-1">Email</p>
            <input
              type="text"
              name="email"
              required
              className="border-b-black focus:outline-none font-bold border-t-0 border-l-0 border-r-0 border-2 bg-transparent p-0 w-[100%] mb-4"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-bold mb-1">Message</p>
            <textarea
              name="message"
              required
              className="border-b-black focus:outline-none font-bold border-t-0 border-l-0 border-r-0 border-2 bg-transparent p-0 w-[100%] h-[30px] mb-4"
            />
          </div>
        </div>
        <button className="sendButton ml-auto" type="submit">
          <div class="svg-wrapper-1">
            <div class="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Send</span>
        </button>
      </form>
      <div className="mt-12 lg:hidden block self-start ml-5">
        <p className="font-bold text-4xl">SO</p>
        <p className="font-bold text-4xl">LO</p>
        <p className="font-bold text-4xl">S</p>
      </div>
    </div>
  );
};

export default transition(Contact);
