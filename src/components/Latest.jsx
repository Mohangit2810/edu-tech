function Latest() {
  return (
    <section className="px-4 md:px-36 py-8 md:py-16 flex flex-col items-center gap-12">
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="font-semibold text-secondary uppercase text-sm md:text-base">
          Our New Courses For You
        </p>
        <h5 className="font-semibold text-2xl md:text-5xl">Latest Courses</h5>
      </div>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Course Card */}
        {[...Array(3)].map((_, idx) => (
          <div
            key={idx}
            className="border border-[#E3E3E3] pb-8 p-4 rounded-lg flex flex-col gap-4"
          >
            <img
              src="/images/course-1.png"
              alt={`course ${idx + 1}`}
              className="w-full h-auto"
            />
            <div className="flex justify-between items-center">
              <p className="text-sm md:text-base">
                Learn modern architecture <br /> Online course
              </p>
              <p className="text-[#FF7E00] text-lg md:text-xl font-semibold">
                $120
              </p>
            </div>
            <div className="flex gap-6 items-center text-secondary text-sm md:text-base">
              <p>⭐ 4.8 (250)</p>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-6 h-6 bg-[#FD878D] p-1 rounded-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                  />
                </svg>
                <p>12 Lessons</p>
              </div>
            </div>
          </div>
        ))}
        {/* Navigation Arrows */}
        <div className="hidden md:flex absolute top-[42%] right-[-40px] p-2 rounded-full shadow-lg bg-white cursor-pointer">
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
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div className="hidden md:flex absolute top-[42%] left-[-40px] p-2 rounded-full shadow-lg bg-white cursor-pointer">
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
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Latest;
