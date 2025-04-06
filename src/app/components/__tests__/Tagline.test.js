const { render, screen } = require("@testing-library/react")
const { default: TagLine } = require("../TagLine")

describe('Testing tags are correctly rendered',()=>{
test('Testing Tag Line',()=>{
    render(<TagLine/>)
    const el = screen.getAllByRole('span')
    expect(el).toHaveLength(8)
})
test('Testing each tags correctly',()=>{
    const tags=[
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "MongoDB",
        "Firebase",
        "Prisma ORM",
        "Strapi CMS",
        "Express.js",
      ]
render(<TagLine/>)
tags.forEach(tags => {
    expect(screen.getByText(tags)).toBeInTheDocument()
})
})
})