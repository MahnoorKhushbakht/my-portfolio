const { render, screen } = require("@testing-library/react")
const { default: BackgroundStyle } = require("../BackgroundStyle")
// const {motion} =require("framer-motion")

jest.mock('framer-motion', () => ({
    motion: {
      div: ({ children, whileInView, whileHover, initial, animate, transition, ...rest }) => (
        <div data-testid="framer-id" {...rest}>
          {children}
        </div>
      )
    }
  }));
  
test('Framer Motion',()=>{
    render(<BackgroundStyle/>)
    const el = screen.getAllByTestId('framer-id')
    expect(el).toHaveLength(7)
})