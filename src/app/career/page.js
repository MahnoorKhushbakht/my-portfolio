export default function Experience() {
  const data = [
    {
      category: "Graphic Design",
      title: "Researched and designed innovative brand development ideas",
      description:
        "Researched and designed innovative brand development ideas, coordinated with clients to create targeted advertising content, designed social media graphics, logos, brochures, and labels using Adobe Illustrator/Photoshop, and created animations/videos with Adobe After Effects.",
      url: "https://github.com/MahnoorKhushbakht/GraphicDesign/tree/master",
    },
    {
      category: "Web Development",
      title: "Developed responsive and user-friendly web applications",
      description:
        "Collaborated on web projects using Next.js and React.js, building responsive interfaces and robust backends with Next.js APIs and Express.js. Designed efficient database solutions with MongoDB, Prisma ORM, and Strapi CMS, streamlining data management while ensuring intuitive UI/UX designs and seamless functionality across devices.",
      url: "https://github.com/MahnoorKhushbakht/WebProjects",
    },
    {
      category: "Virtual Assistant",
      title: "Amazon Product Research & Feasibility Analysis",
      description:
        "Researched 20+ products based on client KPIs, calculated profit margins, created SEO-optimized listings using Helium10 Scribbles, analyzed competitors, generated keyword reports with Helium10 Magnet/Jungle Scout, and crafted feasibility reports.",
      url: "https://github.com/MahnoorKhushbakht/Virtual-Assistant-Portfolio",
    },
  ];

  return (
    <section className="text-gray-300 bg-gray-900 body-font min-h-screen py-24 overflow-x-hidden">
      <div className="container px-4 mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent mb-4 px-4">
            Career Timeline
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-4">
            Key roles, accomplishments, and learning experiences throughout my career
          </p>
        </div>
        <div className="divide-y-2 divide-gray-700 px-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="py-8 flex flex-col md:flex-row gap-4"
              data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} 
            >
              <div className="md:w-48 flex-shrink-0">
                <span className="font-semibold title-font text-gray-400 text-lg">
                  {item.category}
                </span>
              </div>
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-medium text-gray-300 title-font mb-3">
                  {item.title}
                </h2>
                <p className="leading-relaxed text-gray-400 text-justify md:text-left">
                  {item.description}
                </p>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center mt-4 transition-colors duration-200"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}