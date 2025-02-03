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
      <section className="text-indigo-300 bg-indigo-900 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-indigo-300">
            {data.map((item, index) => (
              <div key={index} className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-4 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-indigo-600">
                    {item.category}
                  </span>
                  {/* <span className="mt-1 text-gray-500 text-sm">{item.date}</span> */}
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-indigo-400 title-font mb-2">
                    {item.title}
                  </h2>
                  <p className="leading-relaxed">{item.description}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-200 inline-flex items-center mt-4"
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