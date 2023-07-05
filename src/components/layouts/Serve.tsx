import React from "react";

const Serve = () => {
  return (
    <section className="bg-gray-200 mb-6">
      <div className="pt-16 text-center">
        <h2 className="text-gray-800 text-4xl font-bold">How we serve</h2>
        <p className="text-gray-500 text-lg pt-12">
          Our organization maintains an unyielding focus on providing quality
          services to all individuals that we serve.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-3">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img src="images/serve1.webp" className="w-full" alt="" />
          <div className="absolute right-0 bottom-0 left-0 h-1/4 w-full overflow-hidden bg-fixed bg-[hsla(156,46%,46%,0.5)]"></div>
          <div className="absolute px-8 bottom-12 text-center font-medium text-white">
            <h2 className="text-2xl">Independent Housing & Services</h2>
            <p className=" font-normal">
              An independent supportive housing program for adults with
              capabilities, centered around the client's home and independence
              in the community.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden bg-cover">
          <img src="images/serve2.webp" className="w-full" alt="" />
          <div className="absolute right-0 bottom-0 left-0 h-1/4 w-full overflow-hidden bg-fixed bg-[hsla(156,46%,46%,0.5)]"></div>
          <div className="absolute px-8 bottom-12 text-center font-medium text-white">
            <h2 className="text-2xl">Customized & Assisted Living</h2>
            <p className=" font-normal">
              24-hour Customized Living services for adults living with physical
              and/or mental disabilities in a comfortable residential setting.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img src="images/serve3.webp" className="h-full" alt="" />
          <div className="absolute right-0 bottom-0 left-0 h-1/4 w-full overflow-hidden bg-fixed bg-[hsla(156,46%,46%,0.5)]"></div>
          <div className="absolute px-8 bottom-8 text-center font-medium text-white">
            <h2 className="text-2xl">Housing Stabilization Services</h2>
            <p className=" font-normal">
              A new Minnesota Medical Assistance benefit to help people with
              disabilities, including mental illness and substance use disorder,
              and seniors find and keep housing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Serve;
