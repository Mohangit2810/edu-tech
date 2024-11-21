function Latest() {
  return (
    <section className="px-36 py-16 flex flex-col items-center gap-12">
      <div className="flex flex-col items-center gap-2">
        <p className="font-semibold text-secondary uppercase">
          Our New Courses For You
        </p>
        <h5 className="font-semibold text-5xl">Latest Courses</h5>
      </div>
      <div className="relative flex gap-12">
        <div className="border border-[#E3E3E3] pb-8 p-3 rounded-lg flex flex-col gap-4">
          <img src="/images/course-1.png" alt="course 1" />
          <div className="flex justify-between items-center">
            <p>
              Learn modern architecture <br /> Online course
            </p>
            <p className="text-[#FF7E00] text-xl font-semibold">$120</p>
          </div>
          <div className="flex gap-6 items-center text-secondary">
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
        <div className="border border-[#E3E3E3] pb-8 p-3 rounded-lg flex flex-col gap-4">
          <img src="/images/course-1.png" alt="course 1" />
          <div className="flex justify-between items-center">
            <p>
              Learn modern architecture <br /> Online course
            </p>
            <p className="text-[#FF7E00] text-xl font-semibold">$120</p>
          </div>
          <div className="flex gap-6 items-center text-secondary">
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
        <div className="border border-[#E3E3E3] pb-8 p-3 rounded-lg flex flex-col gap-4">
          <img src="/images/course-1.png" alt="course 1" />
          <div className="flex justify-between items-center">
            <p>
              Learn modern architecture <br /> Online course
            </p>
            <p className="text-[#FF7E00] text-xl font-semibold">$120</p>
          </div>
          <div className="flex gap-6 items-center text-secondary">
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
        <div className="absolute top-[42%] right-[-70px] p-2 rounded-full shadow-lg w-min">
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
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div className="absolute top-[42%] left-[-70px] p-2 rounded-full shadow-lg w-min">
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
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Latest;
