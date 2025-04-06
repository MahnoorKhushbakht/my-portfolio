const { render, screen, fireEvent, waitFor } = require("@testing-library/react")
const { default: Header } = require("../Header");
import { motion, AnimatePresence } from 'framer-motion';

const resizeScreen = (width) => {
    window.innerWidth = width;
    window.dispatchEvent(new Event("resize"));
  };

 
jest.mock('framer-motion',()=>({
    motion:{
        div:({children,...rest})=><div {...rest}>{children}</div>
    },
    AnimatePresence:({children})=><div>{children}</div>
}))

// jest.mock('../components/ResumeButton', () => () => <button>Resume</button>);

describe('Testing Headers',()=>{
    // beforeEach(()=>{
    //     render(<Header/>)
    // })
    // test('Checking Avatar Image',()=>{
    //     const image = screen.getByAltText('avatar')
    //     expect(image).toBeInTheDocument()
    // })

    test('render navigation links',()=>{
        resizeScreen(1024)
        render(<Header/>)
        expect(screen.getByText('Home')).toBeInTheDocument()
        expect(screen.getByText('About')).toBeInTheDocument()
        expect(screen.getByText('Contact')).toBeInTheDocument()
    })

    test('Checking Dropdown Button',()=>{
        resizeScreen(1024)
        render(<Header/>)
        const btn = screen.getByTestId('dropDown')
        expect(btn).toBeInTheDocument()
        fireEvent.click(btn)
        expect(screen.getByText('Career')).toBeInTheDocument()
        expect(screen.getByText('Portfolio')).toBeInTheDocument()
        expect(screen.getByText('Testimonials')).toBeInTheDocument()
    })

    test('Checking Menu Button',async()=>{
    resizeScreen(500)
    render(<Header/>)
//     const menuBtn = await waitFor(()=>screen.getByTestId('mobile-menu'))
//     fireEvent.click(menuBtn)
//     await waitFor(()=>{
//     expect(screen.getByText('Home')).toBeInTheDocument()
//     expect(screen.getByText('About')).toBeInTheDocument()
//     expect(screen.getByText('Contact')).toBeInTheDocument()
// })

await waitFor(() => {
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();
  });

  // Now you can interact with the button:
  fireEvent.click(screen.getByTestId('mobile-menu'));
  
})
})