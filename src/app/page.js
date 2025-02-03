"use client";
import { Typewriter } from "react-simple-typewriter";
import Buttons from "./components/buttons";
import BackgroundStyle from "./components/BackgroundStyle";

export default function Home() {
  return (
    <div className="h-svh w-full bg-indigo-900 flex flex-col justify-center">
      <BackgroundStyle/>
      <div className="max-w-screen-lg text-left md:ml-20 ml-5 leading-relaxed md:text-6xl sm:text-4xl font-bold antialiased">
        
        {/* Console Log Box */}
        <div className="bg-red-100 text-black text-xs md:text-sm px-3 py-2 rounded-md font-mono inline-block mb-4">
          console.log(Welcome!)
        </div>

        {/* Heading */}
        <h1 className="font-bold md:text-6xl sm:text-4xl text-indigo-200 mb-4">
          Hi there <br />
          I am{" "}
          <a className="underline  text-indigo-400 decoration-indigo-500 underline-offset-3">
            Mahnoor Khushbakht
          </a>
        </h1>

        {/* Typewriter Effect */}
        <div className=" md:text-4xl sm:text-3xl text-3xl text-indigo-300">
          <Typewriter
            words={["Website Developer", "Let's Grow Together!!"]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={50}
            deleteSpeed={40}
            delaySpeed={1000}
          />
        </div>
      </div>

      {/* Buttons Component */}
      <div className="mt-6 md:ml-20 ml-5">
        <Buttons />
      </div>
    </div>
  );
}
