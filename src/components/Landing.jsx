import React, { useState } from "react";

function Landing() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <section className="h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 sm:px-16 lg:px-32 py-4 text-secondary">
        {/* Burger Icon for Mobile */}
        <div className="sm:hidden flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="text-secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6h16.5M3.75 12h16.5m-16.5 6h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Logo */}
        <div className="flex gap-3 items-center">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-6 h-6 sm:w-8 sm:h-8"
          />
          <p className="text-lg sm:text-xl font-bold">
            <span className="text-primary">Hope</span> LMS
          </p>
        </div>
        <button className="sm:hidden bg-primary rounded-lg text-white px-4 py-2">
          Login
        </button>
        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-8">
          <p className="font-semibold">My Courses</p>
          <p className="font-semibold">Support</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
          <button className="bg-primary rounded-lg text-white px-8 py-2">
            Login
          </button>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <div className="p-6">
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-4 right-4 text-secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <p className="font-semibold mb-4">My Courses</p>
          <p className="font-semibold mb-4">Support</p>
          <p className="font-semibold">Cart</p>
        </div>
      </div>

      {/* Backdrop for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Header */}
      <header className="px-8 sm:px-16 lg:px-32 pt-12 sm:pt-48 lg:pt-16 flex flex-col gap-4 sm:gap-8 relative h-[89.6%]">
        <h1 className="font-medium text-4xl sm:text-5xl lg:text-7xl leading-tight">
          Build Your <span className="text-primary">Skills</span> 🎓
        </h1>
        <h3 className="font-medium text-2xl sm:text-4xl lg:text-5xl leading-tight">
          With Experts Any Time, <br className="hidden sm:block" /> Anywhere
        </h3>
        <p className="text-secondary text-sm sm:text-lg">
          Free online courses from the world’s Leading experts.{" "}
          <br className="hidden md:block" />
          Join <span className="font-bold text-black mr-1">
            10+ Million
          </span>{" "}
          Learners today
        </p>
        <button className="bg-primary rounded-lg text-white px-8 py-2 sm:px-16 sm:py-4 w-fit">
          Join Us Today
        </button>
        <img
          src="/images/landing.png"
          alt="Landing"
          className="w-[85%] sm:w-[250px] md:w-[85%] lg:w-[700px] h-auto object-cover absolute right-4 sm:right-8 bottom-0"
        />
      </header>
    </section>
  );
}

export default Landing;
