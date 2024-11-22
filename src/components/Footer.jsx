function Footer() {
  return (
    <footer className="px-32 py-24 flex gap-24 bg-footer-gradient">
      <div className="w-1/4">
        <div className="flex gap-3">
          <img src="/images/logo.png" alt="logo" className="w-8 h-8" />
          <p className="text-xl font-bold">
            <span className="text-primary">Hope</span> LMS
          </p>
        </div>
        <p className="text-secondary mt-1">
          A service a treansaction in which no physical goods are transferred
          from the seller, to the buyer. the benefits of such a service are{" "}
        </p>
        <div className="flex gap-8 mt-8">
          <img src="/images/fb.png" alt="facebook" />
          <img src="/images/fb.png" alt="facebook" />
          <img src="/images/fb.png" alt="facebook" />
        </div>
      </div>
      <div className="w-1/4">
        <p className="font-medium text-[#2B2B3D]">Company</p>
        <ul className="flex flex-col gap-4 text-secondary mt-4">
          <li>Terms</li>
          <li>About</li>
          <li>Test Exam</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="w-1/4">
        <p className="font-medium text-[#2B2B3D]">Courses</p>
        <ul className="flex flex-col gap-4 text-secondary mt-4">
          <li>UIUX</li>
          <li>Design</li>
          <li>Business</li>
          <li>Mobile and Banking</li>
        </ul>
      </div>
      <div className="w-1/4">
        <p className="font-medium text-[#2B2B3D]">Get Updated Newsletter</p>
        <p className="text-secondary my-6">
          Subscribe to get the latest news from us
        </p>
        <div className="flex gap-4 p-4 bg-white shadow rounded">
          <input type="text" placeholder="Email" className="bg-transparent" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
}

export default Footer;