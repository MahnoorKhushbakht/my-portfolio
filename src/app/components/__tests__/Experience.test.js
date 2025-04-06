const { default: Experience } = require("@/app/career/page");
const { render, screen } = require("@testing-library/react");

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

describe("Experience Page Test", () => {
  beforeEach(() => {
    render(<Experience />);
  });

  test("Checking Parts", () => {
    data.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.category)).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });

    // Get all "Learn More" links
    const links = screen.getAllByRole("link", { name: /Learn More/i });

    // Ensure there are as many links as data items
    expect(links).toHaveLength(data.length);

    // Verify that each link has the correct URL
    links.forEach((link, index) => {
      expect(link).toHaveAttribute("href", data[index].url);
    });
  });
});
