const { default: About } = require("@/app/about/page")
const { render, screen } = require("@testing-library/react")


describe('Testing About Page',()=>{
    beforeEach(()=>{
        render(<About/>)
    })
    test('Test heading',()=>{
        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument()
    })
    test('Test description',()=>{
        const paragraph = screen.getByTestId("para")
        expect(paragraph).toBeInTheDocument()
    })
    test('Test image',()=>{
        const image = screen.getByAltText("feature")
        expect(image).toBeInTheDocument()
    })
    test('Testing Skills',()=>{
        const skills = [
           "Diligent attention to detail ensures high-quality results.",
           "Effectively manage my time to deliver high-quality results efficiently.",
           "I adapt to changing project needs easily, ensuring success in dynamic environments.",
        ];
      skills.forEach(skills =>{
        expect(screen.getByText(skills)).toBeInTheDocument()
      })  
    })
})