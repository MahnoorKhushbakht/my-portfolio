import Image from "next/image";

export default function Projects(){
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
            liveLink: 'https://echo-of-thoughts.vercel.app/',
            githubLink: 'https://github.com/MahnoorKhushbakht/blog.git',
            tags:['Next.js','React.js','Tailwind','Mongodb','Firebase','Tailwind','Prisma ORM','Strapi CMS','NextUI']
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
          liveLink: 'https://mens-clothing.vercel.app/',
          githubLink: 'https://github.com/MahnoorKhushbakht/mens-clothing.git',
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
    return(
        <section className="bg-indigo-900 body-font">
  <div className="container p-3  mx-auto">
    <div className="flex flex-wrap w-full mb-10">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mt-10 text-indigo-500">My Web Projects</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      {/* <p className="lg:w-1/2 w-full leading-relaxed text-indigo-300">Projects done successfully for my Clients.</p> */}

      </div>
    </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
    {projects.map((item, index) => (
      <div key={index} className="bg-indigo-200 p-6 rounded-lg shadow-lg transition duration-300 hover:scale-105">
        <Image
          className="w-full h-48 object-cover rounded-lg"
          src={item.image}
          alt={item.title}
          width={500} // Adjusted to fit better in grid
          height={300} // Adjusted for full-size display
        />
        <h3 className="tracking-widest text-indigo-500 text-lg font-medium mt-4">{item.title}</h3>
        {/* <h2 className="text-lg text-indigo-900 font-medium mb-6 mt-2"></h2> */}
        {/* <p className="text-base text-gray-700">
          Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
        </p> */}
        <div className="flex flex-wrap w-auto">
        {item.tags.map((data,index)=>(
        <span key={index} className="bg-indigo-300 mr-2 mt-2 rounded-full  text-indigo-900 w-auto p-2">{data}</span>
        ))}
        </div>
        <div className="mt-6 w-full flex justify-center "> 
                  <a href={item.liveLink} target="_blank" rel="noopener noreferrer" className="w-full text-center p-2 mr-2 text-md bg-indigo-600 text-indigo-100 hover:bg-indigo-700 rounded-md font-semibold transition duration-300"> 
                    Live Demo
                  </a>
                  <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="w-full text-center p-2 text-md bg-indigo-600 text-indigo-100 hover:bg-indigo-700 rounded-md font-semibold transition duration-300"> 
                    GitHub
                  </a>
                </div>
      </div>
    ))}
  </div>

  </div>
</section>
    )
}