import React from "react";
import { Button } from "flowbite-react";

const SupportiveApart = () => {
  return (
    <section className="bg-white">
      <div id="nurturing" className="grid grid-cols-2 gap-8 mb-20">
        <div className="pt-12 pl-20 bg-gradient-to-r from-green-200 to-white">
          <h2 className="text-gray-800 text-4xl font-bold">
            Nurturing independence, thriving together
          </h2>
          <p className="text-gray-500 pt-4">
            At SHS, we believe in the power of community. Our dedicated staff is
            here to support residents in various aspects of their daily lives,
            from community participation and accessing resources to health,
            safety, and wellness.
          </p>
          <Button className="text-white mt-8 px-12 py-2 rounded-none">
            <a href="/referral-application">
              <p className="text-lg">MAKE A REFERRAL</p>
            </a>
          </Button>
        </div>
        <div className="relative">
          <img src="images/services/nurturing.webp" className="h-full" alt="" />
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-[hsla(255,100%,100%,0.5)]"></div>
        </div>
      </div>
      <div id="supportive">
        <div className="bg-gradient-to-r from-green-50 pl-8 to-green-700">
          <h2 className="text-gray-800 py-8 text-4xl font-bold">
            Supportive Apartment Program
          </h2>
        </div>
        <div className="pt-4 mx-4 items-center flex justify-between">
          <div className="text-gray-500 w-2/3 text-xl pr-20 font-light">
            <p>
              ICS is an independent supportive housing program for adults with
              disabilities. The ICS program is centered around the client’s home
              and community and services are provided that meet the client's
              goals to maintain independence in the community.
            </p>
            <br />
            <p>
              ICS is delivered in an apartment setting, with each client having
              their own individual unit (kitchen , bathroom, bedroom). ICS
              services can be provided for up to 24 hours a day if needed and
              other supportive services can be coordinated such as nursing and
              home care if needed.
            </p>
            <br />
            <p>
              At our supportive housing program, we prioritize creating a
              nurturing and empowering environment for our participants. We
              understand the importance of having a place to call home, which is
              why we provide clean, comfortable, and safe apartments that
              individuals and families can truly make their own.​
            </p>
            <br />
            <p>
              What sets our supportive housing program apart is the unwavering
              support that our SHS staff provides. They are there every step of
              the way, ensuring that individuals have access to the assistance
              and resources they need to thrive. From personalized care plans to
              emotional support, our staff members are dedicated to helping our
              participants reach their full potential.
            </p>
          </div>
          <div className="rounded-2xl">
            <img
              src="images/services/supportive.webp"
              alt=""
              className="h-full rounded-2xl"
            />
          </div>
        </div>
        <div className="mt-4 mx-4">
          <h2 className="text-gray-800 py-8 text-4xl font-bold">
            What Services are Offered?
          </h2>
          <p className="pt-4 text-xl text-gray-500">
            Our organization is committed to providing a wide range of
            supportive services directly to individuals in the comfort and
            privacy of their own homes. These services have a primary focus on
            promoting independence, supporting individuals in achieving their
            personal goals, facilitating the attainment and maintenance of
            secure housing, and effectively reducing the need for crisis
            intervention. Here are some of the key services we offer:
          </p>
        </div>
        <div className="mt-4 mx-4">
          <h2 className="text-gray-800 pt-8 text-3xl font-bold">
            Community Participation
          </h2>
          <p className="text-xl text-gray-500">
            Our dedicated SHS staff are here to support you in fully engaging
            with and exploring your community. They can assist you in navigating
            the community safely, accessing available resources, and meeting
            your transportation needs. Our staff are also ready to help you
            participate in leisure activities, recreation, and socialization,
            ensuring that you have opportunities to connect with others and
            enjoy your favorite pastimes.
          </p>
        </div>
        <div className="mt-4 mx-4">
          <h2 className="text-gray-800 pt-8 text-3xl font-bold">
            Health, Safety, and Wellness
          </h2>
          <p className="text-xl text-gray-500">
            Your well-being is our top priority. Our staff work collaboratively
            with you to arrange healthcare appointments, social services, and
            other necessary meetings. They provide the support you need to
            complete self-care activities, including Activities of Daily Living
            (ADLs). With a commitment to helping you achieve your health,
            safety, and wellness goals, our staff are always there to lend a
            helping hand.
          </p>
        </div>
        <div className="mt-4 mx-4">
          <h2 className="text-gray-800 pt-8 text-3xl font-bold">
            Household Management
          </h2>
          <p className="text-xl text-gray-500">
            Maintaining a well-managed household is made easier with the support
            of our SHS staff. They can provide cueing, guidance, supervision,
            training, and instruction to help you with routine household care
            and maintenance. Our staff have specialized knowledge in household
            safety and can offer skills training to ensure a secure living
            environment. Additionally, they assist you with financial budgeting,
            offering training, assistance, and guidance. From cooking and
            meal-planning to developing healthy lifestyle skills and managing
            household chores, including minor maintenance activities, our staff
            are here to assist you every step of the way.
          </p>
        </div>
        <div className="mt-4 mx-4">
          <h2 className="text-gray-800 pt-8 text-3xl font-bold">
            Adaptive Skills
          </h2>
          <p className="text-xl text-gray-500">
            Our SHS staff are dedicated to empowering you with the necessary
            skills to navigate challenges and thrive. They encourage and train
            you in crisis prevention skills, helping you implement positive
            support strategies and problem-solving techniques. Through coaching
            and guidance, our staff support your journey towards
            self-sufficiency and assist you in increasing positive behaviors
            that contribute to your overall well-being.
          </p>
        </div>
      </div>
      <div id="qualifications" className="mt-16">
        <div className="bg-gradient-to-r from-green-50 pl-8 to-green-700">
          <h2 className="text-gray-800 py-8 text-4xl font-bold">
            Qualifications
          </h2>
        </div>
        <div className="mx-4">
          <p className="text-xl py-8 text-gray-500">
            Our services are available to individuals who meet the following
            criteria:
          </p>
          <div className="flex justify-between">
            <ul className="px-8 list-disc">
              <li className="text-xl text-gray-500">
                <p>
                  <strong>Age:</strong> You must be 18 years of age or older to
                  be eligible for our programs.
                </p>
              </li>
              <li className="text-xl text-gray-500">
                <strong>Mental Illness, Brain Injury, or Disability:</strong>{" "}
                Our services are designed to support individuals who are
                experiencing mental illness, brain injury, or other
                disabilities. We understand the unique challenges that these
                conditions may present, and our programs are tailored to address
                and accommodate these specific needs.
              </li>
              <li className="text-xl text-gray-500">
                <strong>Active Participation:</strong> We value your active
                involvement in your own journey towards well-being and success.
                To benefit from our programs, you should be willing to actively
                participate in setting and working towards your desired goals.
                We believe in collaboration and partnership, where your input
                and aspirations play a crucial role in shaping the support you
                receive.
              </li>
            </ul>
            <ul className="pl-8 list-disc">
              <li className="text-xl text-gray-500">
                <p>
                  <strong>Public Funding Availability:</strong> For individuals
                  who qualify, public funding is available through various
                  waiver programs such as the Community Alternatives for
                  Disabled Individuals (CADI) waiver or the Brain Injury (BI)
                  waiver, CAC, DD. These public funding options can help cover
                  the costs associated with our services.
                </p>
              </li>
              <li className="text-xl text-gray-500">
                <strong>Private Payment:</strong> If you do not qualify for
                public funding through waiver programs, you still have the
                option to access our services by paying privately. We understand
                that not everyone may meet the criteria for public funding, and
                we are committed to ensuring that our services remain accessible
                to those who need them.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="application" className="mt-16">
        <div className="bg-gradient-to-r from-green-50 pl-8 to-green-700">
          <h2 className="text-gray-800 py-8 text-4xl font-bold">
            Application Process
          </h2>
        </div>
        <div className="pt-4 mx-4 items-center flex justify-between pb-12">
          <div className="rounded-2xl">
            <img
              src="images/services/application.webp"
              alt=""
              className="h-full rounded-2xl"
            />
          </div>
          <div className="text-gray-500 w-2/3 pt-12 text-xl pl-20 font-light">
            <p>
              Our team of intake specialists and program coordinators will
              support the applicant and their support team through the following
              steps:
            </p>
            <br />
            <div className="flex items-center">
              <img
                src="images/icons/number1.png"
                className="h-full pr-8"
                alt=""
              />
              <p>
                Submit a &nbsp;
                <a
                  href="/referral-application"
                  className="text-green-400 font-medium"
                >
                  Referral
                </a>
              </p>
            </div>
            <br />
            <div className="flex items-center">
              <img
                src="images/icons/number2.png"
                className="h-full pr-8"
                alt=""
              />
              <p>
                After passing the initial screening, the applicant and their
                support team will be invited to a Meet & Greet Tour.
              </p>
            </div>

            <br />
            <div className="flex">
              <img
                src="images/icons/number3.png"
                className="h-full pr-8"
                alt=""
              />
              <div>
                <p>
                  Following recommendation from our program coordinator, we will
                  begin the intake process. This includes:
                </p>
                <ul className="px-12 list-disc">
                  <li className="pt-16">
                    <p>Financial review</p>
                  </li>
                  <li>
                    <p>
                      Complete physical and provide documents signed provider
                    </p>
                  </li>
                  <li>
                    <p>Schedule intake assessment meeting.</p>
                  </li>
                </ul>
              </div>
            </div>
            <br />
            <div className="flex items-center">
              <img
                src="images/icons/number4.png"
                className="h-full pr-8"
                alt=""
              />
              <p>
                Complete Assessment Meeting and provider personal documents
                (birth certificate, MN ID, etc.)
              </p>
            </div>
            <br />
            <div className="flex items-center pt-8">
              <img
                src="images/icons/number5.png"
                className="h-full pr-8"
                alt=""
              />
              <p>
                Schedule move-in date and prepare final needs (transitional
                services, rent/deposit monies, any missing documentation, etc.)
              </p>
            </div>
            <br />
            <div className="flex items-center">
              <img
                src="images/icons/number6.png"
                className="h-full pr-8"
                alt=""
              />
              <p>Sign lease and move in.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportiveApart;
