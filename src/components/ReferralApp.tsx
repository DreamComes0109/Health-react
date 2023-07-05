import React from "react";
import { Card, Label, Button, Radio, TextInput } from "flowbite-react";

const ReferralApp = () => {
  return (
    <section className="mb-6">
      <div className="py-16 text-center text-white bg-gradient-to-r from-green-200 to-green-700">
        <h2 className="text-5xl font-bold">Apply For Our Programs </h2>
        <p className="text-xl pt-4">
          Help us direct you to the correct application form by telling us{" "}
        </p>
        <p className="text-xl">which program you are interested in below.</p>
      </div>
      <div className="mt-16 w-1/3 mx-auto">
        <button className="border-2 px-8 py-2 border-black border-solid text-center hover:bg-gray-500 hover:text-white">
          <p className="text-lg">
            Can't see the form below? Click here to access it!
          </p>
        </button>
      </div>
      <Card className="mt-4 w-2/3 mx-auto px-16">
        <img src="images/logo.png" className="mx-auto w-44 h-24" alt="" />
        <h2 className="text-2xl font-semibold text-gray-800">
          Please let us know which of our services you are interested in
          applying for.
        </h2>
        <p>
          Once you select your option, we'll redirect you to the appropriate
          page.
        </p>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <form className="flex flex-col gap-4 pt-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your Name" />
              </div>
              <TextInput id="name" required type="text" />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Your PhoneNumber" />
              </div>
              <TextInput id="phone" required type="text" />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="birth" value="Your Birthday" />
            </div>
            <TextInput id="birth" required type="date" />
          </div>
          <p className="text-lg font-semibold">I am looking for...</p>
          <div className="flex items-center gap-2">
            <Radio
              defaultChecked
              size={6}
              id="housing-programs"
              name="countries"
              value="housing"
            />
            <Label htmlFor="housing-programs">
              Housing Programs (ICS Apartments / Assisted Living / CRS Group
              Homes)
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="germany" name="countries" value="Germany" />
            <Label htmlFor="germany">
              Positive Behavioral Support Services (formerly behavioral support)
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Radio id="spain" name="countries" value="Spain" />
            <Label htmlFor="spain">Housing Stabilization Services</Label>
          </div>
          <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </section>
  );
};

export default ReferralApp;
