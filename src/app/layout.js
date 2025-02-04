import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOSInitializer from "./components/AOSInitializer";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mahnoor Khushbakht | Web Developer",
  description: "A passionate web developer crafting user-friendly and results-driven websites. Explore my portfolio to see my latest projects and expertise in Next.js, Tailwind CSS, and modern web technologies.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
     <AOSInitializer/>
        <header>
        <div className="relative z-50">
 
  <Header /> 

</div>

          </header>     
      
        <main>

          {children}
          </main>
        <footer>
          <Footer/>
        </footer>
      
      </body>
    </html>
  );
}
