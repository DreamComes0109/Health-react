import React from "react";
import { Button } from "flowbite-react";

const USPosition = () => {
  return (
    <section className="mt-12 mb-32">
      <div className="w-2/3 mx-auto  text-center">
        <h2 className="text-green-800 text-5xl font-bold">
          Jobs in the U.S. with SHS
        </h2>
        <br />
        <hr className="h-px bg-green-400 border-0 dark:bg-gray-700" />
      </div>

      <div className="mt-12 mx-4 grid grid-cols-4 gap-12">
        <div>
          <img
            src="images/careers/career3.webp"
            className="rounded-3xl w-full"
            alt=""
          />
          <Button className="rounded-none py-2 mt-6 w-full bg-green-400 hover:bg-green-500">
            Direct Support Specailist
          </Button>
        </div>
        <div>
          <img
            src="images/careers/career_help.webp"
            className="rounded-3xl w-full"
            alt=""
          />
          <Button className="rounded-none py-2 mt-6 w-full bg-green-400 hover:bg-green-500">
            Program Coordinator
          </Button>
        </div>
        <div>
          <img
            src="images/careers/career5.webp"
            className="rounded-3xl w-full"
            alt=""
          />
          <Button className="rounded-none py-2 mt-6 w-full bg-green-400 hover:bg-green-500">
            Independent Living Specialist
          </Button>
        </div>
        <div>
          <img
            src="images/careers/career4.webp"
            className="rounded-3xl"
            alt=""
          />
          <Button className="rounded-none py-2 mt-6 w-full bg-green-400 hover:bg-green-500">
            Housing Stanilization Specialist
          </Button>
        </div>
      </div>
      <div className="mt-12 mx-4 grid grid-cols-4 gap-12">
        <div>
          <img
            src="images/careers/career3.webp"
            className="rounded-3xl w-full"
            alt=""
          />
          <Button className="rounded-none py-2 mt-6 w-full bg-green-400 hover:bg-green-500">
            Behavioral Support
          </Button>
        </div>
        <div>
          <img
            src="images/careers/career4.webp"
            className="rounded-3xl w-full"
            alt=""
          />
          <Button className="rounded-none py-2 mt-6 w-full bg-green-400 hover:bg-green-500">
            Direct Support Specailist
          </Button>
        </div>
        <div>
          <img
            src="images/careers/career5.webp"
            className="rounded-3xl w-full"
            alt=""
          />
          <Button className="rounded-none py-2 mt-6 w-full bg-green-400 hover:bg-green-500">
            Behavioral Support
          </Button>
        </div>
        <div>
          <img
            src="images/careers/career4.webp"
            className="rounded-3xl"
            alt=""
          />
          <Button className="rounded-none py-2 mt-6 w-full bg-green-400 hover:bg-green-500">
            Behavioral Support
          </Button>
        </div>
      </div>
    </section>
  );
};

export default USPosition;
