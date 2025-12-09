import Image from "next/image";

export default function Projects() {
  const projects = [
   
    {
      title: 'Echoes of Thoughts',
      image: "/images/project5.JPG",
      liveLink: 'https://blog-eot.vercel.app/',
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
      liveLink: 'https://clothing-tailored-gents.vercel.app/',
      githubLink: 'https://github.com/MahnoorKhushbakht/tailored-gents.git',
      tags:['Next.js','React.js','Tailwind','Mongodb','Wordpress','JWT','Tailwind']
    },
    {
      title: 'Market Minds',
      image: "/images/project4.JPG",
      liveLink: 'https://bsolutions.netlify.app/',
      githubLink: 'https://github.com/MahnoorKhushbakht/BSolutions.git',
      tags:['Next.js','React.js','Tailwind','Mongodb','MaterialUI','Pigeon-Maps']
    },
     {
      title: 'Portfolio Website',
      image: "/images/project1.jpeg",
      liveLink: 'https://promiseemmanuel.onrender.com/',
      githubLink: 'https://github.com/MahnoorKhushbakht/pe_portfolio_website',
      tags:['React.js','Bootstrap','Mongodb','ChakraUI','Yup','Formik','MaterialUI','Express']
    },
  ];

  return (
    <section className="bg-gray-900 body-font min-h-screen py-24 overflow-x-hidden">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-6">
            My Web Projects
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            A collection of my latest web development projects showcasing modern technologies and clean design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-lg transition duration-300 hover:scale-105 border border-gray-700"
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
              <h3 className="text-xl font-semibold text-gray-100 mt-4 mb-3">
                {item.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.tags.map((data, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-600"
                  >
                    {data}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-4">
                <a
                  href={item.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 text-sm bg-blue-600 text-white hover:bg-blue-700 rounded-md font-medium transition duration-300"
                >
                  Live Demo
                </a>
                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2 text-sm bg-gray-700 text-white hover:bg-gray-600 rounded-md font-medium transition duration-300"
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