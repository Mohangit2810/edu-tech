function Overview() {
  return (
    <section className="bg-primary text-white px-8 sm:px-16 lg:px-32 py-16">
      <div className="flex flex-col md:flex-row gap-12 xl:gap-24">
        {/* Left Section */}
        <div className="flex flex-col gap-8">
          <h4 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">
            At a glance LMS Student <br /> Courses Platform
          </h4>
          <p className="text-[#C0BAFF] tracking-wide text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Suspendisse blandit ligula pellentesque lorem. Viverra <br />
            tincidunt erat lobortis ut odio urna, arcur.
          </p>
          <img
            src="/images/overview.png"
            alt="overview"
            className="w-full max-w-lg sm:max-w-xl lg:w-[600px] h-auto"
          />
        </div>

        <div className="flex flex-col gap-8">
          {/* Card 1 */}
          <div className="flex gap-4 bg-[#00000069] backdrop-blur-md p-6 rounded-lg w-full max-w-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
              />
            </svg>
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-sm sm:text-base">
                Daily Tasks Overview
              </p>
              <p className="text-[#A8A0FF] text-xs sm:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nisl
                consequat iaculis vitae arcu arcu. Ut interdum aenean sit{" "}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex gap-4 bg-[#00000069] backdrop-blur-md p-6 rounded-lg w-full max-w-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
              />
            </svg>
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-sm sm:text-base">
                For Each Course, One Assignment
              </p>
              <p className="text-[#A8A0FF] text-xs sm:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nisl
                consequat iaculis vitae arcu arcu. Ut interdum aenean sit{" "}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex gap-4 bg-[#00000069] backdrop-blur-md p-6 rounded-lg w-full max-w-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
              />
            </svg>
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-sm sm:text-base">
                You get a certificate when you complete a course.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
