import { Button } from "flowbite-react";
import React from "react";

const Career = () => {
  return (
    <section>
      <div className="mb-6 relative">
        <img src="images/careers/career_bg.webp" className="w-full" alt="" />
        <div className="grid grid-cols-12 absolute top-0">
          <div className=" col-span-5"></div>
          <div className="py-20 col-span-5">
            <h2 className="text-sky-800 text-6xl font-bold">Join our team.</h2>
            <p className="text-gray-500 text-xl pt-6">
              If you would like to find out more about how you can get into a
              career in the healthcare industry and to find out about available
              positions, please <a href="/">contact us</a>. If you already know
              which position you're applying for, go ahead and apply online
              below.
            </p>
          </div>
          <div className="col-span-2"></div>
        </div>
      </div>
      <div className="pt-12 w-3/5 mx-auto">
        <p className="text-gray-500 text-xl pt-6">
          Everything we do at SHS needs to support our mission of working to
          holistically enhance the quality of life of people in our community
          with mental and physical disabilities by preserving dignity and
          fostering compassion.
        </p>
        <br />
        <p className="text-gray-500 text-xl pt-6">
          If you would like to find out more about how you can get into a career
          in the healthcare industry and to find out about available positions,
          please contact us. If you already know which position you're applying
          for, go ahead and apply online below.
        </p>
        <br />
        <p className="text-gray-500 text-xl pt-6">
          If you would like to find out more about how you can get into a career
          in the healthcare industry and to find out about available positions,
          please contact us. If you already know which position you're applying
          for, go ahead and apply online below.
        </p>
        <br />
        <Button className="mx-auto px-12 mt-4 rounded-none py-2 bg-green-400 hover:bg-green-500 text-white">
          <p className="text-lg">Apply Now!</p>
        </Button>
      </div>
      <br />
      <hr className="h-px bg-green-400 border-0 dark:bg-gray-700" />
      <br />
      <div className="w-1/3 mx-auto my-8">
        <div className="rounded-3xl">
          <img
            src="images/careers/career1.webp"
            className="rounded-3xl h-full"
            alt=""
          />
          <Button className="mx-auto px-12 mt-4 rounded-none py-2 bg-green-400 hover:bg-green-500 text-white">
            <a href="/copy-of-international-staffing-positions">
              <p className="text-lg">US-based Positions</p>
            </a>
          </Button>
        </div>
      </div>
      <br />
      <div className="w-1/3 mx-auto my-8">
        <div className="rounded-3xl">
          <img
            src="images/careers/career2.webp"
            className="rounded-3xl h-full"
            alt=""
          />
          <Button className="mx-auto px-12 mt-4 rounded-none py-2 bg-green-400 hover:bg-green-500 text-white">
            <a href="/copy-of-careers">
              <p className="text-lg">International Staffing Positions</p>
            </a>
          </Button>
        </div>
      </div>
      <br />
    </section>
  );
};

export default Career;
