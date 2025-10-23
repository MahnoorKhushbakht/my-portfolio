import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      image: "/images/project1.jpeg",
      liveLink: 'https://promiseemmanuel.onrender.com/',
      githubLink: 'https://github.com/MahnoorKhushbakht/pe_portfolio_website',
      tags:['React.js','Bootstrap','Mongodb','ChakraUI','Yup','Formik','MaterialUI','Express']
    },
    {
      title: 'Echoes of Thoughts',
      image: "/images/project5.JPG",
      liveLink: 'https://echoesofthoughts.vercel.app/',
      githubLink: 'https://github.com/MahnoorKhushbakht/blog.git',
      tags:['Next.js','React.js','Tailwind','Mongodb','Firebase','Prisma ORM','Strapi CMS','NextUI']
    },
    {
      title: 'Marketing Agency',
      image: "/images/project2.jpeg",
      liveLink: 'https://neskomedia.onrender.com/',
      githubLink: 'https://github.com/MahnoorKhushbakht/marketing-agency',
      tags:['React.js','Bootstrap','Mongodb','ChakraUI','Yup','Formik','MaterialUI','Express']
    },
    {
      title: 'Tailored Gents',
      image: "/images/project3.JPG",
      liveLink: 'https://tailored-gents.vercel.app/',
      githubLink: 'https://github.com/MahnoorKhushbakht/tailored-gents.git',
      tags:['Next.js','React.js','Tailwind','Mongodb','Wordpress','JWT','Tailwind']
    },
    {
      title: 'Market Minds',
      image: "/images/project4.JPG",
      liveLink: 'https://marketminds.vercel.app/',
      githubLink: 'https://github.com/MahnoorKhushbakht/BSolutions.git',
      tags:['Next.js','React.js','Tailwind','Mongodb','MaterialUI','Pigeon-Maps']
    },
  ];

  return (
    <section className="bg-gray-900 body-font min-h-screen py-24">
      <div className="container px-5 mx-auto">
           <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-6">
            My Web Projects
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            A collection of my latest web development projects showcasing modern technologies and clean design
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 p-6 rounded-lg shadow-lg transition duration-300 hover:scale-105"
              data-aos="fade-up" 
            >
              <div className="w-full h-48 relative rounded-lg overflow-hidden">
                <Image
                  className="object-cover"
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="tracking-widest text-gray-500 text-lg font-medium mt-4">
                {item.title}
              </h3>
              <div className="flex flex-wrap w-auto">
                {item.tags.map((data, index) => (
                  <span
                    key={index}
                    className="bg-gray-300 mr-2 mt-2 rounded-full text-gray-900 w-auto p-2"
                  >
                    {data}
                  </span>
                ))}
              </div>
              <div className="mt-6 w-full flex justify-center">
                <a
                  href={item.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline w-full text-center p-2 mr-2 text-md bg-gray-600 text-gray-100 hover:bg-gray-700 rounded-md font-semibold transition duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline w-full text-center p-2 text-md bg-gray-600 text-gray-100 hover:bg-gray-700 rounded-md font-semibold transition duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
         <div className="text-center mt-16">
          <p className="text-gray-500 text-sm">
            Interested in working together?{" "}
            <a href="/contact" className="text-gray-300 hover:text-white underline transition-colors duration-300">
              Lets talk
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}