"use client";
import { Typewriter } from "react-simple-typewriter";
import BackgroundStyle from "./components/BackgroundStyle";
import TagLine from "./components/TagLine";

export default function Home() {
  return (
    <div className="h-svh w-full bg-gray-900 flex flex-col justify-center">
      <BackgroundStyle/>
      <div className="max-w-screen-lg text-left md:ml-20 ml-5 leading-relaxed md:text-6xl sm:text-4xl font-bold antialiased">
        

        <div data-aos="fade-right" className="bg-red-100 text-black text-xs md:text-sm px-3 py-2 rounded-md font-mono inline-block mb-4">
          console.log(Welcome!)
        </div>

      
        <h1
  data-aos="fade-right"
  className="font-bold text-4xl sm:text-5xl md:text-6xl text-gray-200 mb-4"
>
  Hi there <br />
  I am{" "}
  <a className="underline text-gray-400 decoration-gray-500 underline-offset-3">
    Mahnoor Khushbakht
  </a>
</h1>


        
        <div data-aos="fade-right" className=" md:text-4xl sm:text-3xl text-3xl text-gray-300">
 <Typewriter
            words={["Frontend Developer", "Full Stack Developer", "MERN Stack Specialist", "Let's Build Together!"]}
            loop={true}
            cursor
            cursorStyle="_"
            cursorColor="#60A5FA"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </div>
      </div>

      
      <div data-aos="fade-up" className="mt-4 md:ml-20 ml-5">
        <TagLine/>
      </div>
    </div>
  );
}
