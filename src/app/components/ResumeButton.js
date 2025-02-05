"use client";

import { useState } from "react";

export default function ResumeButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = () => {
    if (isLoading) return;
    setIsLoading(true);

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/docs/MahnoorKhushbakht_CV.pdf";
      link.download = "MahnoorKhushbakht_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleDownload}
      className="w-32 p-2 text-md bg-indigo-500 text-white hover:bg-indigo-600 shadow-md font-semibold rounded-md transition-all flex items-center justify-center"
      disabled={isLoading}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-5 w-5 mr-2 text-white"
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
      ) : (
        "Resume"
      )}
    </button>
  );
}
