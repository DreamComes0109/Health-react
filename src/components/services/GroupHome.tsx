import React from "react";
import { Button } from "flowbite-react";

const GroupHome = () => {
  return (
    <section className="bg-white">
      <div id="empowering" className="grid grid-cols-2 gap-8 mb-20">
        <div className="pt-12 pl-20 bg-gradient-to-r from-green-200 to-white">
          <h2 className="text-gray-800 text-4xl font-bold">
            Empowering Lives, Enriching Communities
          </h2>
          <p className="text-gray-500 text-lg pt-4">
            With a focus on person-centered care plans and a range of funding
            options, we strive to make our services accessible to individuals
            with mental illnesses, brain injuries, or other disabilities.
            Experience compassionate care and a supportive community at Affinity
            Care
          </p>
          <Button className="text-white mt-4 px-12 py-2 rounded-none">
            <a href="/referral-application">
              <p className="text-lg">MAKE A REFERRAL</p>
            </a>
          </Button>
        </div>
        <div className="relative">
          <img src="images/services/empower.webp" className="h-full" alt="" />
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-[hsla(255,100%,100%,0.5)]"></div>
        </div>
      </div>
      <div id="group-homes">
        <div className="bg-gradient-to-r from-green-50 pl-8 to-green-700">
          <h2 className="text-gray-800 py-8 text-4xl font-bold">Group Homes</h2>
        </div>
        <div className="pt-4 mx-4 text-gray-500 text-xl">
          <p>
            In the midst of life's overwhelming demands, the presence of a
            mental health diagnosis or disability can further complicate
            day-to-day struggles. We recognize that individual needs often defy
            conventional schedules, and navigating everything alone can seem
            like an insurmountable task. Our program is designed to offer you a
            warm, empathetic, and supportive community where you can find
            stability and triumph over challenges. With our person-centered
            approach, we prioritize your agency and empower you to take the
            lead, while we stand beside you as a reliable support system. We
            provide the precise amount of assistance required, ensuring your
            independence and preserving your dignity throughout the journey.
          </p>
          <br />
          <br />
          <p>
            Our organization offers round-the-clock Customized Living services
            to adults facing physical and/or mental disabilities, ensuring their
            well-being in a pleasant residential environment. We prioritize the
            independence of individuals while fostering their inclusion within
            the broader community. Our facilities are conveniently located in
            Minneapolis, Richfield, and Bloomington. We are dedicated to
            providing comprehensive support, including assistance with bathing,
            dressing, personal hygiene, grooming, and other daily activities.
            Additionally, we take responsibility for managing medication
            requirements as needed.
          </p>
          <br />
          <p>
            Our utmost commitment lies in promoting the highest level of
            independence for our residents while delivering the necessary care.
            Through our small-scale residential setting, we can adopt a
            personalized approach that aligns with the preferences of our
            residents.
          </p>
        </div>
        <div className="pt-8 mx-4 items-center flex justify-between">
          <div className="rounded-2xl">
            <img
              src="images/services/offer.webp"
              alt=""
              className="h-full rounded-2xl"
            />
          </div>
          <div className="text-gray-500 w-2/3 text-xl pl-12 font-light">
            <h2 className="text-gray-800 py-8 text-4xl font-bold">
              What Services are Offered?
            </h2>
            <p>
              Our organization specializes in offering round-the-clock,
              community-based Customized Living housing and services
              specifically tailored for adults facing the challenges of Serious
              and Persistent Mental Illness (SPMI) or other disabilities. We
              firmly believe in enabling individuals to uphold their
              independence while actively participating in the larger community.
              Our conveniently located facilities can be found in both
              Minneapolis, Bloomington, and Richfield.
            </p>
            <br />
            <p>Our comprehensive range of services includes:</p>
            <br />
            <ul>
              <li>
                <p>
                  <strong>Room and Board:</strong> Our program provides
                  comfortable accommodations and nutritious meals, ensuring that
                  residents have a secure and supportive living environment.
                </p>
              </li>
              <li>
                <p>
                  <strong>24-Hour Staffing:</strong> Our dedicated and highly
                  trained staff members are available around the clock to offer
                  assistance, support, and supervision to residents whenever
                  needed. We prioritize their well-being and safety at all
                  times.
                </p>
              </li>
              <li>
                <p>
                  <strong>Advocacy:</strong> We strongly advocate for the rights
                  and needs of our residents, ensuring they have access to the
                  resources, services, and opportunities they require to thrive.
                </p>
              </li>
              <li>
                <p>
                  <strong>Appointment Management:</strong> We assist individuals
                  in managing their appointments, such as medical, therapy, or
                  social service visits, ensuring they receive the necessary
                  care and support.
                </p>
              </li>
              <li>
                <p>
                  <strong>Medication Management:</strong> Our skilled staff
                  members help residents with their medication needs, ensuring
                  proper adherence to prescribed regimens and addressing any
                  concerns or questions they may have.
                </p>
              </li>
              <li>
                <p>
                  <strong>Home Health Services:</strong> We offer essential home
                  health services, including assistance with activities of daily
                  living, personal care, and any necessary medical monitoring or
                  support.
                </p>
              </li>
              <li>
                <p>
                  <strong>Housekeeping:</strong> We ensure that residents'
                  living spaces are clean, comfortable, and well-maintained,
                  allowing them to focus on their well-being and personal
                  growth.
                </p>
              </li>
              <li>
                <p>
                  <strong>Socialization and Activities:</strong> We promote
                  socialization and engagement by organizing a variety of
                  activities, outings, and events designed to foster
                  connections, personal growth, and enjoyment.
                </p>
              </li>
            </ul>
            <br />
            <p>
              By providing these comprehensive services, we strive to create a
              supportive and inclusive environment where individuals can thrive,
              maintain their independence, and actively participate in the wider
              community.
            </p>
          </div>
        </div>
      </div>
      <div id="qualifications" className="mt-16">
        <div className="bg-gradient-to-r from-green-50 pl-8 to-green-700">
          <h2 className="text-gray-800 py-8 text-4xl font-bold">
            Qualifications
          </h2>
        </div>
        <div className="mx-4 text-xl pt-8 text-gray-500">
          <p>The criteria for individuals to access our services include:</p>
          <br />
          <p>
            <strong>Age Requirement:</strong> Individuals must be 18 years of
            age or older to be eligible for our services.
          </p>
          <p>
            <strong>Diagnosis:</strong> Individuals should have a documented
            diagnosis of a mental illness, brain injury, or other disability.
            This ensures that our services are specifically tailored to address
            their unique needs.
          </p>

          <p>
            <strong>Willingness to Adhere to Care Plans:</strong> Individuals
            must be willing to follow and adhere to care plans created by their
            medical providers. This cooperation ensures that their specific
            needs and goals can be effectively addressed and supported.
          </p>

          <p>
            <strong>Funding Options:</strong> We offer various funding options
            to ensure accessibility and affordability for our services. These
            options include the Community Alternatives for Disabled Individuals
            (CADI) waiver, Brain Injury (BI) waiver, and Elderly Waiver (EW)
            through the Waiver Programs. Additionally, individuals may be
            eligible for funding through the Group Residential Housing (GRH)
            program or choose to privately fund their room and board through
            benefits such as Supplemental Security Income (SSI), Social Security
            Disability Insurance (SSDI), or Retirement, Survivors, and
            Disability Insurance (RSDI).
          </p>
          <br />
          <p>
            By considering these criteria, we aim to provide services that cater
            to individuals who meet the age and diagnosis requirements, are
            committed to their care plans, and have access to funding options
            that suit their financial circumstances.
          </p>
        </div>
      </div>
      <div
        id="referral-form"
        className="mt-16 mb-32 items-end bg-gradient-to-tr from-green-100 px-8 py-12 to-green-700 flex justify-between"
      >
        <div className="w-2/3">
          <h2 className="text-gray-800 py-8 text-4xl font-bold">
            Referral form
          </h2>
          <p className="text-gray-500 text-xl">
            Kindly complete the referral form provided below. Our Intake
            Coordinator will reach out to you shortly to provide additional
            details about the services currently offered.
          </p>
        </div>
        <Button className="text-white py-4 px-8 hover:bg-green-600 referral-form flex">
          <a href="/referral-application">
            <p className="text-2xl">MAKE A REFERRAL</p>
          </a>

          <svg
            fill="white"
            width={45}
            height={45}
            viewBox="0 0 24 24"
            id="right-arrow"
            xmlns="http://www.w3.org/2000/svg"
            className="icon line pl-2"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                id="primary"
                d="M3,12H21m-3,3,3-3L18,9"
                style={{
                  fill: "none",
                  stroke: "white",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.5",
                }}
              ></path>
            </g>
          </svg>
        </Button>
      </div>
    </section>
  );
};

export default GroupHome;
