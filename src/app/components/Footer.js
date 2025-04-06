import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-white bg-indigo-500 body-font">
      <div className="container px-3 py-8 mx-auto flex items-center sm:flex-row flex-col">
        {/* <a className="flex title-font font-medium items-center md:justify-start justify-center">
          <Image
            alt="Profile Image"
            src="/images/mk.png" // Ensure the image is inside 'public/'
            width={40}
            height={40}
            className="shadow-sm"
          />
          <span className="ml-3 text-xl text-indigo-200">Mahnoor Khushbakht</span>
        </a> */}
<p className="text-sm text-indigo-200  sm:py-2 sm:mt-0 mt-4">
  © 2024 Crafted By Mahnoor Khushbakht.  
  {/* <a href="#" className="text-indigo-200 ml-1">
    All Rights Reserved.
  </a> */}
</p>

        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="https://www.facebook.com/mahnoor.khushbakht?mibextid=ZbWKwL" className="text-indigo-200" aria-label="Facebook">
            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          {/* <a href="#" className="ml-3 text-indigo-200">
            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a> */}
          <a href="https://www.instagram.com/mahnoor.khushbakht" className="ml-3 text-indigo-200" aria-label="Instagram">
            <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/mahnoorkhushbakht/" className="ml-3 text-indigo-200" aria-label="Linkedin">
            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          <a href="mahnoorkhushbakht@gmail.com" className="ml-3 text-indigo-200" aria-label="Gmail">
    <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M22 6.5V17a2.5 2.5 0 01-2.5 2.5H4.5A2.5 2.5 0 012 17V6.5l10 7 10-7z"></path>
      <path d="M2 6.5L12 2l10 4.5"></path>
    </svg>
  </a>
  <a href="https://github.com/MahnoorKhushbakht" className="ml-3 text-indigo-200" aria-label="Github">
    <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.21.66-.47v-1.69c-2.78.61-3.36-1.34-3.36-1.34-.46-1.17-1.12-1.48-1.12-1.48-.91-.63.07-.62.07-.62 1 .07 1.52 1.02 1.52 1.02.9 1.54 2.36 1.1 2.94.84.09-.65.35-1.1.64-1.35-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.47 9.47 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.83-2.34 4.68-4.57 4.92.36.31.68.93.68 1.87v2.77c0 .26.16.56.67.47C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"></path>
    </svg>
</a>
        </span>
      </div>
    </footer>
  );
}
