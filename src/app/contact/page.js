'use client';
import { useState } from "react";


export default function Contact() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL_Contact;
  const [formData, setFormData] = useState({ email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState(''); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('');
    if (!validateEmail(formData.email)) {
      setStatusType('error');
      setStatusMessage('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      setLoading(false);

      if (response.ok) {
        setStatusType('success');
        setStatusMessage('Thank you! Your message has been sent successfully.');
        setFormData({ email: '', message: '' });
      } else {
        setStatusType('error');
        setStatusMessage('An error occurred. Please try again later.');
      }
    } catch (error) {
      setLoading(false);
      setStatusType('error');
      setStatusMessage('Submission error. Please try again.');
      console.error('Submission error:', error);
    }
  };

  return (
    <section className="text-indigo-600 body-font relative">
      <div className="absolute inset-0 bg-indigo-100">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        ></iframe>
      </div>
      <div className="container px-2 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-indigo-400 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-indigo-100 text-lg mb-1 font-medium title-font">Get in Touch</h2>
          <p className="leading-relaxed mb-5 text-indigo-100">
            I’d love to hear from you! Feel free to reach out with your thoughts, questions, or suggestions.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-indigo-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="someone@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-indigo-200 rounded border border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-red-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out placeholder-indigo-500"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-indigo-200">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-indigo-200 rounded border border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-indigo-400 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out placeholder-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              aria-label="Send feedback"
              className="text-indigo-400 bg-indigo-100 w-full border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 hover:text-indigo-100 rounded text-lg"
              disabled={loading}
            >
              {loading ? (
                <div className="flex justify-center">
                            <svg
            className="animate-spin h-5 w-5 text-indigo-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 11-8 8z"
            ></path>
          </svg>
                </div>
              ) : (
                'Send'
              )}
            </button>
          </form>
          {statusMessage && (
            <p
              className={`text-sm mt-3 ${
                statusType === 'success' ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {statusMessage}
            </p>
          )}
          <p className="text-xs text-indigo-500 mt-3">
            We appreciate your feedback and aim to respond promptly. Thank you for connecting with us!
          </p>
        </div>
      </div>
    </section>
  );
}
