import Image from "next/image";

export default function Reviews() {
  const data = [
    {
      name: "Promise Emmanuel",
      image: "/images/ClientImage.jpeg",
      subtitle: "Digital Marketer, Nigeria",
      text: "I'd like to give a special shout-out to Mahnoor Khushbakht, who created a professional and eye-catching portfolio website. Her expertise and attention to detail were invaluable in creating a site that truly reflects my work and style. I'm so grateful for her help and I highly recommend her to anyone looking for website developer services.",
    },
    {
      name: "Abdullah Ali Khan",
      image: "/images/neskomedia.jpeg",
      subtitle: "Nesko Media",
      text: "I had the pleasure of working with Mahnoor on a website project for my Digits Marketing Agency, and I highly recommend her services. Mahnoor's ability to create amazing websites is evident in the project she completed for us.",
    },
    {
      name: "Vivek Kumar",
      image: "/images/VK.jpeg",
      subtitle: "Digital Marketer, India",
      text: "It's been a pleasure to work with Mahnoor Khushbakht over the past some months. As a website developer, she has consistently impressed me with her ability to translate complex client requirements into seamless, functional websites. And she has great experience in front-end development. Highly recommended...",
    },
  ];

  return (
    <section className="text-gray-400 bg-gradient-to-br from-gray-900 to-gray-800 body-font py-24 overflow-x-hidden">
      <div className="container px-4 mx-auto max-w-6xl">

        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-4">
            Client Testimonials
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>
        
        <div className="flex flex-wrap -m-2">
          {data.map((review, index) => (
            <div
              key={index}
              className="w-full lg:w-1/3 p-2"
              data-aos={index % 2 === 0 ? "fade-up" : "fade-right"}
              data-aos-duration="1000" 
            >
              <div className="h-full text-center bg-gray-800 bg-opacity-50 rounded-xl p-6 border border-gray-700">
                <Image
                  width={80}
                  height={80}
                  alt={review.name}
                  className="w-20 h-20 mb-6 object-cover object-center rounded-full inline-block border-2 border-gray-700"
                  src={review.image}
                />
                <p className="leading-relaxed text-gray-300 text-sm">{review.text}</p>
                <span className="inline-block h-1 w-10 rounded bg-gray-600 mt-6 mb-4"></span>
                <h2 className="text-white font-medium title-font tracking-wider text-sm">{review.name}</h2>
                <p className="text-gray-500 text-xs">{review.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-3">
              Ready to start your project?
            </h3>
            <p className="text-gray-400 mb-4 text-base">
              Join satisfied clients who have brought their ideas to life
            </p>
            <a href="/contact">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm">
                Get In Touch
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}