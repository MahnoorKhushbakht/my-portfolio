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
    // Her professionalism and attention to detail ensured that the website not only met but exceeded our expectations. Mahnoor's expertise in website development is impressive, and her dedication to delivering exceptional results is commendable. It was a pleasure working with her, and I look forward to future collaborations.
    },
    {
      name: "Vivek Kumar",
      image: "/images/VK.jpeg",
      subtitle: "Digital Marketer, India",
      text: "It's been a pleasure to work with Mahnoor Khushbakht over the past some months. As a website developer, she has consistently impressed me with her ability to translate complex client requirements into seamless, functional websites. And she has great experience in front-end development. Highly recommended...",
    },
  ];

  return (
    <section className="text-gray-400 bg-indigo-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {data.map((review, index) => (
            <div key={index} className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <Image
                  width={80}
                  height={80}
                  alt={review.name}
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
                  src={review.image}
                />
                <p className="leading-relaxed">{review.text}</p>
                <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                <h2 className="text-white font-medium title-font tracking-wider text-sm">{review.name}</h2>
                <p className="text-gray-500">{review.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
