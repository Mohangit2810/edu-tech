function Register() {
  return (
    <section
      style={{
        background:
          "linear-gradient(88.81deg, rgba(255, 230, 142, 0) -0.15%, #F3F8FF 33.24%, #FFFFFF 64.13%, #F4F9FF 78.87%, #F8F3E7 109.42%)",
      }}
      className="px-6 sm:px-12 lg:px-36 mt-16 sm:mt-24 lg:mt-32 mb-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-32"
    >
      <img
        src="/images/register.png"
        alt="register"
        className="w-full sm:w-2/3 lg:w-auto"
      />
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-12 text-center lg:text-left">
        <h2 className="font-semibold text-2xl sm:text-3xl lg:text-[44px] text-[#2B2B3D]">
          Register & Enroll Now,
          <br /> and Get 69% Discount
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center justify-center lg:justify-start">
          <button className="bg-primary rounded-lg text-white px-8 py-3 sm:px-16 sm:py-4 w-fit">
            Start Free Trial
          </button>
          <p className="text-lg">$19.00/month</p>
        </div>
      </div>
    </section>
  );
}

export default Register;
