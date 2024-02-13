import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    // <!-- Footer Start -->
    <div className="">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="lg:mb-[-8.5rem] sm:mb-[-5.5rem]"
      >
        <path
          fill="#f3f4f5"
          fillOpacity="1"
          d="M0,32L40,37.3C80,43,160,53,240,90.7C320,128,400,192,480,192C560,192,640,128,720,117.3C800,107,880,149,960,165.3C1040,181,1120,171,1200,149.3C1280,128,1360,96,1400,80L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
      <footer className=" bg-[#f3f4f5] relative text-gray-600">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-12">
            <div className="col-span-12">
              <div className="py-[60px] px-0">
                <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                  <div className="lg:col-span-4 md:col-span-12">
                    <a href="#" className="text-[22px] focus:outline-none">
                      <Image
                        className="h-12"
                        src={"/logo.png"}
                        alt=""
                        width={"100"}
                        height={"100"}
                      />
                    </a>
                    <p className="mt-6 text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <ul className="list-none mt-6 text-gray-600">
                      <li className="inline">
                        <a
                          href=""
                          className="bg-blue-400 font-semibold tracking-wide align-middle transition duration-500 ease-in-out p-1 h-9 w-9 inline-flex items-center text-center justify-center text-sm border !border-gray-800 rounded-md hover:border-yellow-600  hover:bg-yellow-600 "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 fill-gray-300"
                            viewBox="0 0 24 24"
                          >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                          </svg>
                        </a>
                      </li>
                      <li className="inline">
                        <a
                          href=""
                          className="bg-blue-400 font-semibold tracking-wide align-middle transition duration-500 ease-in-out p-1 h-9 w-9 inline-flex items-center text-center justify-center text-sm border !border-gray-800 rounded-md hover:border-yellow-600  hover:bg-yellow-600 "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 fill-gray-300"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          </svg>
                        </a>
                      </li>
                      <li className="inline">
                        <a
                          href=""
                          className=" bg-blue-400 font-semibold tracking-wide align-middle transition duration-500 ease-in-out p-1 h-9 w-9 inline-flex items-center text-center justify-center text-sm border !border-gray-800 rounded-md hover:border-yellow-600  hover:bg-yellow-600 "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 fill-gray-300"
                            viewBox="0 0 24 24"
                          >
                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                          </svg>
                        </a>
                      </li>
                      <li className="inline">
                        <a
                          href=""
                          className=" bg-blue-400 font-semibold tracking-wide align-middle transition duration-500 ease-in-out p-0 h-9 w-9 inline-flex items-center text-center justify-center text-sm border !border-gray-800 rounded-md hover:border-yellow-600  hover:bg-yellow-600 "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 fill-gray-300"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                    {/* <!--end icon--> */}
                  </div>
                  {/* <!--end col--> */}

                  <div className="lg:col-span-2 md:col-span-4 text-gray-600 flex-col items-center">
                    <h5 className="tracking-[1px] text-gray-400 font-semibold">
                      Company
                    </h5>
                    <ul className="list-none  mt-6 flex flex-col gap-4">
                      <li>
                        <a
                          href="#about"
                          className="hover:text-yellow-400 text-blue-300 transition-all duration-500 ease-in-out"
                        >
                          About us
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="#"
                          className=" hover:text-gray-400 transition-all duration-500 ease-in-out"
                        >
                          Services
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="#"
                          className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                        >
                          Pricing
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="#"
                          className="hover:text-gray-400 transition-all duration-500 ease-in-out"
                        >
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!--end col--> */}

                  <div className="lg:col-span-3 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-400 font-semibold">
                      Important Links
                    </h5>
                    <ul className="list-none  mt-6">
                      <li>
                        <a
                          href="#"
                          className="text-gray-500 hover:text-gray-800 transition-all duration-500 ease-in-out"
                        >
                          Terms of Services
                        </a>
                      </li>
                      <li className="mt-[10px]">
                        <a
                          href="#"
                          className="text-blue-300 hover:text-gray-800 transition-all duration-500 ease-in-out"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li className="mt-[10px]">
                        <a
                          href="#"
                          className="text-gray-500 hover:text-gray-800 transition-all duration-500 ease-in-out"
                        >
                          Documentation
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!--end col--> */}

                  <div className="lg:col-span-3 md:col-span-4">
                    <h5 className="tracking-[1px] text-gray-400 font-semibold">
                      Newsletter
                    </h5>
                    <p className="mt-6">
                      Sign up and receive the latest tips via email.
                    </p>
                    <form>
                      <div className="grid grid-cols-1">
                        <div className=" my-3">
                          <label className="form-label">
                            Write your email
                            <span className="text-red-600">*</span>
                          </label>
                          <div className="relative mt-2">
                            <input
                              type="email"
                              className="w-full py-2 px-3 rounded h-10 outline-none bg-transparent rounded-t-sm rounded-r-none rounded-b-none rounded-l-sm outline-0 border border-gray-800/90 text-gray-800  focus:shadow-none focus:border-gray-300"
                              placeholder="Email"
                              name="email"
                              required=""
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          id="submitsubscribe"
                          name="send"
                          className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-[#FFCDA3] border-[#FFCDA3] text-black rounded-md"
                        >
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* <!--end col--> */}
                </div>
                {/* <!--end grid--> */}
              </div>
              {/* <!--end col--> */}
            </div>
          </div>
          {/* <!--end grid--> */}
        </div>
        {/* <!--end container--> */}
      </footer>
    </div>
    // <!--end footer-->
  );
};

export default Footer;
