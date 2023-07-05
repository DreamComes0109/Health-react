import React from "react";

const Enhance = () => {
  return (
    <section className="mb-6">
      <div className="relative">
        <img src="images/about_bg.webp" className="w-screen h-fit" alt="" />
        <div className="absolute top-0">
          <div className="grid grid-cols-12">
            <div className=" col-span-8"></div>
            <div className="py-10 px-4 col-span-4">
              <h2 className="text-sky-800 text-4xl font-bold">
                Enhancing quality of life in our community.
              </h2>
              <p className="text-gray-500 text-base pt-6">
                Simple Health Services provides a variety of services and
                supports and is committed to connecting the people we serve to
                resources to improve their lives in order to reach their
                greatest potential.
              </p>
              <div className="grid grid-rows-3 gap-2 w-2/3 mt-6">
                <a
                  href="/our-services"
                  className="bg-white border-solid border-green-300 py-2 border-2 items-center rounded-3xl flex"
                >
                  <img
                    alt="heart Logo"
                    className="mx-3 h-12"
                    src="images/icons/heart.png"
                  />
                  <p className="text-lg font-bold">View Our Services</p>
                </a>
                <a
                  href="/locations"
                  className="bg-white border-solid border-green-300 py-2 border-2  items-center rounded-3xl flex"
                >
                  <img
                    alt="home Logo"
                    className="mx-3 h-12"
                    src="images/icons/home.png"
                  />
                  <p className="text-lg font-bold">View Our Locations</p>
                </a>
                <a
                  href="/referral-application"
                  className="bg-white border-solid border-green-300 py-2 border-2 items-center rounded-3xl flex"
                >
                  <img
                    alt="edit Logo"
                    className="mx-3 h-12"
                    src="images/icons/edit.png"
                  />
                  <p className="text-lg font-bold">Apply to Program</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enhance;
