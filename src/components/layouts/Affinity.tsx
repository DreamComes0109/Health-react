import React from "react";

const Affinity = () => {
  return (
    <section className="mb-6 py-12 bg-white">
      <div className=" w-3/4 mx-auto">
        <div className="grid grid-cols-2 gap-5 items-center">
          <div>
            <h2 className="text-gray-800 text-3xl font-bold">
              Simple, in essence, refers to something that is uncomplicated,
              straightforward, or easily understood.
            </h2>
            <p className="text-gray-500 text-lg pt-6">
              At SHS, we strive to make the complicated easy, to make the path
              smoother. At our organization, we are designed to provide
              residential and in-home support for individuals using the
              Community Alternative for Disabled Individuals (CADI), Brain
              Injury (BI), and Elderly and Alternative Care (EW & AC) waivers.
            </p>
          </div>
          <div className="rounded-3xl">
            <a href="/locations">
              <img
                src="images/help.webp"
                className="h-full rounded-3xl"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Affinity;
