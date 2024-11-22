function Register() {
  return (
    <section
      style={{
        background:
          "linear-gradient(88.81deg, rgba(255, 230, 142, 0) -0.15%, #F3F8FF 33.24%, #FFFFFF 64.13%, #F4F9FF 78.87%, #F8F3E7 109.42%)",
      }}
      className="px-36 mt-32 mb-12 bg-custom-gradient flex items-center gap-32"
    >
      <img src="/images/register.png" alt="register" />
      <div className="flex flex-col gap-12">
        <h2 className="font-semibold text-[44px] text-[#2B2B3D]">
          Register & Enroll Now,
          <br /> and Get 69% Discount
        </h2>
        <div className="flex gap-8 items-center">
          <button className="bg-primary rounded-lg text-white px-16 py-4 w-fit">
            Start Free Trial
          </button>
          <p>$19.00/month </p>
        </div>
      </div>
    </section>
  );
}

export default Register;
