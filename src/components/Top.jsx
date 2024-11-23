function Top() {
  return (
    <section className="px-6 sm:px-12 md:px-24 lg:px-36 py-8 sm:py-12 md:py-16 flex flex-col items-center gap-8 md:gap-12">
      {/* Heading Section */}
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="font-semibold text-secondary uppercase text-sm sm:text-base">
          Choose Our Desired Courses
        </p>
        <h5 className="font-semibold text-2xl sm:text-4xl md:text-5xl">
          Browse our Top Courses
        </h5>
      </div>

      {/* Categories */}
      <ul className="flex flex-wrap gap-4 md:gap-8 font-semibold items-center justify-center text-secondary text-sm sm:text-base">
        <li className="bg-primary rounded-lg text-white px-6 py-2 w-fit">
          Graphic
        </li>
        <li>Business</li>
        <li>Finance and Marketing</li>
        <li>Photography</li>
        <li>UI UX</li>
        <li>Colour</li>
      </ul>

      {/* Course Cards */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
        {/* Card 1 */}
        <div className="border border-[#E3E3E3] pb-8 p-3 rounded-lg flex flex-col gap-4">
          <img src="/images/course-1.png" alt="course 1" className="w-full" />
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-sm text-primary bg-[#EEF5FF]">
              Advanced
            </span>
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm sm:text-base">
              Learn modern architecture <br /> Online course
            </p>
          </div>
          <div className="flex gap-6 items-center text-secondary text-sm">
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
          <p className="text-[#FF7E00] text-lg sm:text-xl font-semibold">
            Free
          </p>
        </div>
        <div className="border border-[#E3E3E3] pb-8 p-3 rounded-lg flex flex-col gap-4">
          <img src="/images/course-1.png" alt="course 1" className="w-full" />
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-sm text-primary bg-[#EEF5FF]">
              Advanced
            </span>
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm sm:text-base">
              Learn modern architecture <br /> Online course
            </p>
          </div>
          <div className="flex gap-6 items-center text-secondary text-sm">
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
          <p className="text-[#FF7E00] text-lg sm:text-xl font-semibold">
            Free
          </p>
        </div>
        <div className="border border-[#E3E3E3] pb-8 p-3 rounded-lg flex flex-col gap-4">
          <img src="/images/course-1.png" alt="course 1" className="w-full" />
          <div className="flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-sm text-primary bg-[#EEF5FF]">
              Advanced
            </span>
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm sm:text-base">
              Learn modern architecture <br /> Online course
            </p>
          </div>
          <div className="flex gap-6 items-center text-secondary text-sm">
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
          <p className="text-[#FF7E00] text-lg sm:text-xl font-semibold">
            Free
          </p>
        </div>

        {/* Repeat the above card structure for Card 2 and Card 3 */}
        {/* Navigation Arrows */}
        <div className="hidden lg:block absolute top-1/2 -right-6 lg:-right-12 transform -translate-y-1/2 p-2 rounded-full shadow-lg w-min">
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
        <div className="hidden lg:block absolute top-1/2 -left-6 lg:-left-12 transform -translate-y-1/2 p-2 rounded-full shadow-lg w-min">
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

export default Top;
