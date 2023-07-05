import React from "react";
import { Button, Accordion } from "flowbite-react";

const Stabilization = () => {
  return (
    <section className="bg-white">
      <div id="empowering" className="grid grid-cols-2 gap-8 mb-20">
        <div className="pt-12 bg-gradient-to-r from-green-200 to-white">
          <div className="mx-auto w-2/3">
            <h2 className="text-gray-800 text-4xl font-bold">
              Building Stability, Restoring Hope
            </h2>
            <p className="text-gray-500 text-lg pt-4">
              We are committed to empowering our clients and creating a pathway
              towards a brighter future. Together, let's build a stable
              tomorrow, one step at a time.
            </p>
            <Button className="text-white mt-4 px-12 py-2 rounded-none">
              <p className="text-lg">MAKE A REFERRAL</p>
            </Button>
          </div>
        </div>
        <div className="relative">
          <img src="images/services/stability.webp" className="h-full" alt="" />
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-[hsla(255,100%,100%,0.5)]"></div>
        </div>
      </div>
      <div id="stabilization">
        <div className="bg-gradient-to-r from-green-50 pl-8 to-green-700">
          <h2 className="text-gray-800 py-8 text-4xl font-bold">
            Housing Stabilization Services
          </h2>
        </div>
        <div className="pt-4 mx-4 text-gray-500 text-xl">
          <p>
            Every day, countless adults find themselves without a place they can
            truly call home. The reasons for their homelessness vary, ranging
            from mental health crises and job loss to substance use disorders
            and the tragic loss of a family member. Such circumstances can have
            devastating effects, and merely providing a roof over someone's head
            often falls short in addressing their underlying issues. Our program
            goes beyond offering housing; it provides individuals with the
            opportunity to grow professionally, pursue educational advancement,
            and establish a positive rental history, ultimately helping them
            overcome homelessness.
          </p>
          <br />
          <p>
            Securing and maintaining stable, affordable housing is crucial for
            leading a fulfilling life. If you qualify for Medical Assistance
            (MA), you may have access to housing stabilization services, which
            can assist you in finding and retaining housing.
          </p>
          <br />
          <p>
            Housing Stabilization Services (HSS) are designed to help people
            locate permanent housing. Eligibility extends to individuals in
            various situations. Whether you currently reside in unsuitable
            accommodations, find yourself homeless, live with a family member,
            or reside in institutions such as hospitals, nursing homes, or
            intermediate care facilities (ICFs), this program may be well-suited
            for you. Moreover, it involves the development of a housing-focused
            person-centered plan tailored to your specific needs, preferences,
            and informed choices.
          </p>
        </div>
        <div className="pt-8 mx-4 items-center flex justify-between">
          <div className="rounded-2xl grid grid-rows-2 gap-12">
            <img
              src="images/services/offer2.webp"
              alt=""
              className="h-full rounded-2xl"
            />
            <img
              src="images/services/offer1.webp"
              alt=""
              className="h-full rounded-2xl"
            />
          </div>
          <div className="text-gray-500 w-2/3 text-xl pl-12 font-light">
            <h2 className="text-gray-800 py-8 text-4xl font-bold">
              What Services are Offered?
            </h2>
            <p>
              Housing Stabilization Services (HSS) is a benefit provided through
              Medical Assistance, aimed at assisting individuals with
              disabilities, seniors, and those at risk of homelessness in
              locating and maintaining housing. HSS falls under the state plan
              of Home and Community-Based Services (HCBS), rather than being a
              waiver program.
            </p>
            <br />
            <p>
              HSS encompasses three distinct services:{" "}
              <strong>
                Housing Consultation, Housing Transition, and Housing
                Sustaining.
              </strong>
            </p>
            <br />
            <br />
            <h2 className="text-3xl font-bold text-black">
              Housing Consultation
            </h2>
            <p>
              Housing Consultation involves developing a person-centered plan
              for individuals who do not have MA case management services. This
              service aids individuals in creating a housing-focused
              person-centered plan tailored to their specific needs.
              Additionally, Housing Consultation supports individuals in making
              informed choices regarding housing transition or sustaining
              providers. It also assists individuals in accessing resources that
              may not be directly related to housing but are identified in their
              person-centered plan.
            </p>
            <br />
            <br />
            <h2 className="text-3xl font-bold text-black">
              Housing Transition
            </h2>
            <p>
              Housing Transition is a service designed to support individuals in
              finding suitable housing. It provides guidance and assistance
              throughout the process of locating a new place to live.
            </p>
            <br />
            <p>
              Our team is here to provide comprehensive support throughout the
              entire moving process. We can assist with various aspects,
              including:
            </p>
            <ul className="pl-8 list-disc">
              <li>
                <p>Developing a personalized plan tailored to your needs</p>
              </li>
              <li>
                <p>Assisting with the housing application process</p>
              </li>
              <li>
                <p>Organizing and coordinating logistics</p>
              </li>
              <li>
                <p>Researching available housing options</p>
              </li>
              <li>
                <p>Facilitating the application process for housing</p>
              </li>
              <li>
                <p>Ensuring necessary adaptive accommodations are in place</p>
              </li>
              <li>
                <p>
                  Coordinating details such as lease agreements, moving trucks,
                  and supplies
                </p>
              </li>
            </ul>
            <br />
            <h2 className="text-3xl font-bold text-black">
              Housing Sustaining
            </h2>
            <p>
              Housing Sustaining is a service that focuses on helping
              individuals maintain their housing once they have secured it. It
              provides ongoing support to ensure the individual's housing
              situation remains stable and sustainable.
            </p>
            <br />
            <p>
              Our aim is to help individuals maintain their preferred living
              arrangements. We offer support in the following areas:
            </p>
            <ul className="pl-8 list-disc">
              <li>
                <p>
                  Education and training to foster positive relationships with
                  landlords, property managers, neighbors, and roommates
                </p>
              </li>
              <li>
                <p>
                  Assistance in understanding and applying for housing-related
                  benefits
                </p>
              </li>
              <li>
                <p>Transportation support</p>
              </li>
              <li>
                <p>Provision of assistive technology, if needed</p>
              </li>
              <li>
                <p>
                  Facilitating arrangements for adaptive housing accommodations
                </p>
              </li>
              <li>
                <p>Assistance in navigating Economic Assistance programs</p>
              </li>
              <li>
                <p>
                  Facilitating connections with a Community Living Support (CLS)
                  worker for those transitioning from a group setting to an
                  individual living arrangement
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="qualifications" className="mt-16">
        <div className="bg-gradient-to-r from-green-50 pl-8 to-green-700">
          <h2 className="text-gray-800 py-8 text-4xl font-bold">
            Qualifications
          </h2>
        </div>
        <div className="mx-4 text-xl pt-8 grid grid-cols-2 gap-12 text-gray-500">
          <div>
            <p>
              To qualify for Housing Stabilization Services, the following
              requirements must be met:
            </p>
            <br />
            <ul className="pl-8 list-disc">
              <li>
                <p>Have Medical Assistance (MA) coverage.</p>
              </li>
              <li>
                <p>Be 18 years of age or older.</p>
              </li>
              <li>
                <p>
                  Have a documented disability or disabling condition. It is not
                  necessary for the disability to meet Social Security's adult
                  standards. Disabilities can include physical disabilities,
                  mental illness, substance use disorder, and other conditions.
                  The program manual provides specific details regarding
                  qualifying disability types.
                </p>
              </li>
              <li>
                <p>Be in one of the following situations:</p>
              </li>
              <ul className="pl-4 list-[circle]">
                <li>
                  <p>Currently experiencing homelessness.</p>
                </li>
                <li>
                  <p>
                    At risk of homelessness, which includes being doubled up,
                    requiring services to maintain housing, or having previously
                    experienced homelessness and now facing discharge from a
                    correctional facility, medical facility, mental health
                    treatment center, or substance use disorder treatment center
                    without a permanent residence.
                  </p>
                </li>
              </ul>
            </ul>
          </div>
          <div>
            <ul className="pl-8 list-disc">
              <ul className="pl-8 list-[circle]">
                <li>
                  <p>
                    Transitioning out of, or having moved out of within the last
                    six months, an institution, nursing facility, or specific
                    group settings such as Board and Lodge or Adult Foster Care.
                  </p>
                </li>
                <li>
                  <p>At risk of institutionalization.</p>
                </li>
              </ul>
              <li>
                <p>
                  Have an assessment indicating the need for assistance in at
                  least one of the following disability-related areas:
                </p>
              </li>
              <ul className="pl-8 list-[circle]">
                <li>
                  <p>Communication.</p>
                </li>
                <li>
                  <p>Mobility.</p>
                </li>
                <li>
                  <p>Decision-making.</p>
                </li>
                <li>
                  <p>Managing moods or behaviors.</p>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
      <div
        id="referral-form"
        className="mt-16 mb-20 items-end bg-gradient-to-tr from-green-100 px-8 py-12 to-green-700 flex justify-between"
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
      <div id="questions" className="mb-32">
        <h2 className="text-3xl text-center font-bold text-black">
          Frequently Asked Questions
        </h2>

        <Accordion className="mt-4">
          <Accordion.Panel>
            <Accordion.Title className="bg-green-100 hover:bg-green-100 text-gray-800 py-8 pl-4 text-2xl font-bold">
              How soon can I find housing?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 text-lg dark:text-gray-400">
                <p>
                  The state processing time for eligibility is currently 4-6
                  weeks. As soon as we get the eligibility confirmation, our
                  team can start working to help you find housing. In some
                  cases, we can help you find housing within 3-6 months.
                </p>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="bg-green-100 mt-4 hover:bg-green-100 text-gray-800 py-8 pl-4 text-2xl font-bold">
              Do you provide housing for me?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 text-lg dark:text-gray-400">
                <p>
                  While SHS offers Supportive Housing Services, we assist in
                  finding the ideal housing situation for you. This may look
                  like affordable housing or regular market rate homes that fit
                  your budget.
                </p>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="bg-green-100 mt-4 hover:bg-green-100 text-gray-800 py-8 pl-4 text-2xl font-bold">
              Do I need to be on a waiver to access housing stabilization
              services?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 text-lg dark:text-gray-400">
                <p>
                  No, you do not need to be on a waiver to access housing
                  stabilization services. These services are open to individuals
                  with disabilities who qualify for Medical Assistance (MA) and
                  meet the specified eligibility criteria. Our team can guide
                  you to the right professional to get the eligibility
                  determination.
                </p>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="bg-green-100 mt-4 hover:bg-green-100 text-gray-800 py-8 pl-4 text-2xl font-bold">
              When should I use relocation services instead of housing
              stabilization services if they seem duplicative?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 text-lg dark:text-gray-400">
                <p>
                  If a member is currently in an institution, it is recommended
                  to use relocation services. Providers can bill for services
                  while the member is institutionalized. If a member has already
                  utilized the maximum 180 days of relocation services, they can
                  then transition to housing stabilization services.
                </p>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="bg-green-100 mt-4 hover:bg-green-100 text-gray-800 py-8 pl-4 text-2xl font-bold">
              Where can I find a list of housing stabilization services
              providers?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 text-lg dark:text-gray-400">
                <p>
                  You can access a list of providers on this website
                  https://licensinglookup.dhs.state.mn.us/
                </p>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="bg-green-100 mt-4 hover:bg-green-100 text-gray-800 py-8 pl-4 text-2xl font-bold">
              How are these services billed? Is there any need for the care
              coordinator to authorize them?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 text-lg dark:text-gray-400">
                <p>
                  These services are billed under the member's Medical
                  Assistance (MA) or Managed Care Health Insurance. If the
                  person is on a waiver, the case manager needs to authorize the
                  service.
                </p>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="bg-green-100 mt-4 hover:bg-green-100 text-gray-800 py-8 pl-4 text-2xl font-bold">
              What options are available to me if I don't have income?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 text-lg dark:text-gray-400">
                <p>
                  Our team will help you create a budget. SHS also can provide
                  housing support up to $1135 per month.
                </p>
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </section>
  );
};

export default Stabilization;
