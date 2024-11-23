function Steps() {
  return (
    <section className="bg-[#130F38] px-6 sm:px-12 lg:px-36 py-12 sm:py-16 lg:py-24 text-white flex flex-col lg:flex-row gap-12 lg:gap-32">
      <div className="flex flex-col gap-6 lg:w-1/2 items-center lg:items-start">
        <img
          src="/images/steps.png"
          alt="steps"
          className="w-1/2 sm:w-2/3 lg:w-1/2"
        />
        <h5 className="font-semibold text-2xl sm:text-3xl text-center lg:text-left">
          Follow few steps and <br /> start Learning
        </h5>
        <p className="text-[#A5A8AF] text-center lg:text-left">
          A service a transaction in which no physical goods are transferred
          from the seller to the buyer. The benefits of such a service are held
          to...
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-4xl text-[#A5A8AF7D]">01</p>
          <p className="text-lg sm:text-xl font-medium">
            GOALS FOR THE UNIT OF STUDY
          </p>
          <p className="text-[#A5A8AF]">
            A service a transaction in which no physical...
          </p>
        </div>
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-4xl text-[#A5A8AF7D]">02</p>
          <p className="text-lg sm:text-xl font-medium">
            STRUCTURE AND SEQUENCE OF ACTIVITIES
          </p>
          <p className="text-[#A5A8AF]">
            A service a transaction in which no physical...
          </p>
        </div>
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-4xl text-[#A5A8AF7D]">03</p>
          <p className="text-lg sm:text-xl font-medium">
            TIMELINE FOR COMPLETION OF ACTIVITIES
          </p>
          <p className="text-[#A5A8AF]">
            A service a transaction in which no physical...
          </p>
        </div>
        <div className="flex flex-col gap-4 text-center sm:text-left">
          <p className="text-4xl text-[#A5A8AF7D]">04</p>
          <p className="text-lg sm:text-xl font-medium">
            STRUCTURE AND SEQUENCE OF ACTIVITIES
          </p>
          <p className="text-[#A5A8AF]">
            A service a transaction in which no physical...
          </p>
        </div>
      </div>
    </section>
  );
}

export default Steps;
