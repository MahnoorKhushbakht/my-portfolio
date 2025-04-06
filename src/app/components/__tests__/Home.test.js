const { default: Home } = require("@/app/page")
const { render, screen } = require("@testing-library/react")

jest.mock("@/app/components/BackgroundStyle", () =>{
 const MockBgStyle = () => <div data-testid="bg-style" />
MockBgStyle.displayName="MockBackgroundStyle"
return MockBgStyle
});

jest.mock("@/app/components/TagLine",()=>{
    const MockTagLine = () => <div data-testid="tag-line"/>
    MockTagLine.displayName = "MockTagLine"
    return MockTagLine
})

jest.mock("react-simple-typewriter", () => ({
  Typewriter: () => <span data-testid="typewriter">Mocked Typewriter</span>,
}));

describe("Home page Test",()=>{
test('Testing Home Page',()=>{
    render(<Home/>)
    
    expect(screen.getByText("console.log(Welcome!)")).toBeInTheDocument()
    expect(screen.getByText(/Hi there/i)).toBeInTheDocument();
    expect(screen.getByText('Mahnoor Khushbakht')).toBeInTheDocument()

    expect(screen.getByTestId("bg-style")).toBeInTheDocument()
    expect(screen.getByTestId("tag-line")).toBeInTheDocument()
    expect(screen.getByTestId("typewriter")).toBeInTheDocument()


})
})