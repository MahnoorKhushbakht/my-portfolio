export default function TagLine() {
    const item = {
      tags: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "MongoDB",
        "Firebase",
        "Prisma ORM",
        "Strapi CMS",
        "Express.js",
      ],
    };
  
    return (
      <div className="flex flex-wrap  w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 mt-1">
        {item.tags.map((data, index) => (
          <span
            key={index}
            className="bg-indigo-300 text-indigo-900 px-2 py-2 rounded-full shadow-md 
                       text-sm sm:text-base font-medium m-1 transition-transform duration-300 ease-in-out 
                       hover:scale-105 hover:bg-indigo-400"
          >
            {data}
          </span>
        ))}
      </div>
    );
  }
  