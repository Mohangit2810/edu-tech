function Landing() {
  return (
    <section className="h-screen">
      <nav className="flex justify-between items-center px-32 py-4 text-secondary">
        <div className="flex gap-5">
          <img src="/images/logo.png" alt="logo" className="w-8 h-8" />
          <p className="text-xl font-bold">
            <span className="text-primary">Hope</span> LMS
          </p>
        </div>
        <div className="flex items-center gap-8">
          <p className="font-semibold">My Courses</p>
          <p className="font-semibold">Support</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
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
      <header className="px-32 pt-16 flex flex-col gap-8 relative h-[89.6%]">
        <h1 className="font-medium text-7xl">
          Build Your <span className="text-primary">Skills</span> 🎓
        </h1>
        <h3 className="font-medium text-5xl">
          With Experts Any Time, <br /> Anywhere
        </h3>
        <p className="text-secondary text-lg">
          Free online courses from the world’s Leading experts. <br /> Join{" "}
          <span className="font-bold text-black mr-1">10+ Million</span>
          Learners today
        </p>
        <button className="bg-primary rounded-lg text-white px-16 py-4 w-fit">
          Join Us Today
        </button>
        <img
          src="/images/landing.png"
          alt="Landing"
          className="w-[700px] h-[575px] object-cover absolute right-8 bottom-0"
        />
      </header>
    </section>
  );
}

export default Landing;
