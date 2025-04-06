const { render, screen } = require("@testing-library/react")
const { default: Footer } = require("../Footer")


describe('Testing Footer',()=>{
    beforeEach(()=>{
        render(<Footer/>)
    })

    test('Testing Footer Text',()=>{
        const text = screen.getByText(/© 2024 Crafted By Mahnoor Khushbakht./i)
        expect(text).toBeInTheDocument()
    })

    test('Testing Links',()=>{
        const facebookLink = screen.getByRole("link",{name: /facebook/i})
        const instagramLink = screen.getByRole("link",{name: /instagram/i})
        const linkedinLink = screen.getByRole("link",{name: /linkedin/i})
        const githubLink = screen.getByRole("link",{name: /github/i})
        const gmailLink = screen.getByRole("link",{name: /gmail/i})


        expect(facebookLink).toHaveAttribute("href","https://www.facebook.com/mahnoor.khushbakht?mibextid=ZbWKwL")
        expect(instagramLink).toHaveAttribute("href","https://www.instagram.com/mahnoor.khushbakht")
        expect(linkedinLink).toHaveAttribute("href","https://www.linkedin.com/in/mahnoorkhushbakht/")
        expect(githubLink).toHaveAttribute("href","https://github.com/MahnoorKhushbakht")
        expect(gmailLink).toHaveAttribute("href","mahnoorkhushbakht@gmail.com")




    })
})