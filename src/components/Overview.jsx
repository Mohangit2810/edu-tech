function Overview() {
  return (
    <section className="bg-primary text-white px-32 py-16">
      <div className="flex gap-24">
        <div className="flex flex-col gap-8">
          <h4 className="font-semibold text-4xl">
            At a glance LMS Student <br /> Courses Platfrom
          </h4>
          <p className="text-[#C0BAFF] tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Suspendisse blandit ligula pellentesque lorem. Viverra <br />{" "}
            tincidunt erat lobortis ut odio urna, arcur.
          </p>
          <img
            src="/images/overview.png"
            alt="overview"
            className="w-[600px] h-[325px]"
          />
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex gap-4 bg-[#00000069] backdrop-blur-md p-6 rounded-lg w-[450px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 w-12 h-8"
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
              <p className="font-semibold">Daily taks Overview</p>
              <p className="text-[#A8A0FF]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nisl
                consequat iaculis vitae arcu arcu. Ut interdum aenean sit{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-4 bg-[#00000069] backdrop-blur-md p-6 rounded-lg w-[450px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 w-12 h-8"
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
              <p className="font-semibold">For Each Course, One Assignment</p>
              <p className="text-[#A8A0FF]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nisl
                consequat iaculis vitae arcu arcu. Ut interdum aenean sit{" "}
              </p>
            </div>
          </div>
          <div className="flex gap-4 bg-[#00000069] backdrop-blur-md p-6 rounded-lg w-[450px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 w-12 h-8"
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
              <p className="font-semibold">
                You get certificate when you completed a course.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
