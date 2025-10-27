import Image from "next/image";

export default function About() {
  const skills = [
    { text: "Diligent attention to detail ensures high-quality results." },
    { text: "Effectively manage my time to deliver high-quality results efficiently." },
    { text: "I adapt to changing project needs easily, ensuring success in dynamic environments." },
  ];

  return (
    <section className="bg-gray-900 text-white flex justify-center items-center min-h-screen overflow-hidden">
      <div className="container mx-auto flex flex-col items-center py-24 px-6">
        <div
          className="text-center mb-6 max-w-2xl"
          data-aos="fade-up" 
        >
          <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-4">About Me</h1>
         <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          
      
          <p className="text-xl font-semibold text-white mb-6">
            Full Stack Developer specializing in the MERN stack, with a passion for creating seamless user experiences from frontend to backend.
          </p>

          <p data-testid='para' className="text-lg text-gray-200 leading-relaxed">
            Web Developer dedicated to delivering impactful results through innovative solutions and intuitive user experiences.
            Proficient in developing responsive web applications, solving user-centric challenges, and leveraging technical
            expertise to create seamless digital solutions.
          </p>
        </div>

        <div className="flex justify-center" data-aos="zoom-in"> 
          <div className="m-5 w-80 h-80 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <Image
              alt="feature"
              className="object-cover w-full h-full"
              width={500}
              height={500}
              src="/images/thumbnail.png"
              quality={100}
              priority
            />
          </div>
        </div>

        <div
          className="flex lg:justify-center w-full max-w-5xl mt-8"
          data-aos="fade-left" 
        >
          <div className="grid lg:grid-cols-1 grid-cols-1 gap-6 items-center text-center w-full lg:w-3/5">
            {skills.map((item, index) => (
              <div key={index} className="w-full">
                <div className="bg-gray-800 text-gray-200 shadow-lg hover:scale-105 transition-transform duration-300 rounded-lg p-5 flex items-center justify-center">
                  <span className="text-lg font-medium">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}