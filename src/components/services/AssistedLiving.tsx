import React from "react";
import { Button } from "flowbite-react";

const AssistedLiving = () => {
  return (
    <section className="bg-white">
      <div id="empowering" className="grid grid-cols-2 gap-8 mb-20">
        <div className="pt-12 pl-20 bg-gradient-to-r from-green-200 to-white">
          <h2 className="text-gray-800 text-4xl font-bold">
            Caring Solutions for Independent Lives
          </h2>
          <p className="text-gray-500 text-lg pt-4">
            Experience compassionate care and a warm, supportive environment for
            your loved ones. Discover personalized assistance and a vibrant
            community designed to enhance their well-being. Join us on a journey
            of comfort, companionship, and quality living.
          </p>
          <Button className="text-white mt-4 px-12 py-2 rounded-none">
            <a href="/referral-application">
              <p className="text-lg">MAKE A REFERRAL</p>
            </a>
          </Button>
        </div>
        <div className="relative">
          <img src="images/services/solution.webp" className="h-full" alt="" />
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-[hsla(255,100%,100%,0.5)]"></div>
        </div>
      </div>
      <div id="assist">
        <div className="bg-gradient-to-r from-green-50 pl-8 to-green-700">
          <h2 className="text-gray-800 py-8 text-4xl font-bold">
            Assisted Living
          </h2>
        </div>
        <div className="pt-4 mx-4 text-gray-500 text-xl">
          <p>
            At SHS, we believe that even a small amount of assistance can have a
            profound impact on enabling individuals to live life on their own
            terms. Our assisted living services are specifically designed to
            provide the necessary support with daily activities and medical
            care, allowing residents to maintain their independence and enhance
            their quality of life.
          </p>
          <br />
          <p>
            We understand that each resident has unique needs and preferences,
            which is why our nurturing environment is meticulously crafted to
            empower and amplify their independence. Our compassionate staff is
            trained to provide personalized assistance with tasks such as
            dressing, bathing, grooming, and medication management. By offering
            a helping hand with these essential activities, we aim to alleviate
            any challenges and promote a sense of confidence and well-being.
          </p>
          <br />
          <p>
            We also recognize the importance of involving your loved ones and
            healthcare provider in your care journey. That's why we actively
            collaborate with them to devise a personalized care plan that
            respects your individuality and allows you to continue pursuing the
            activities you cherish the most. By fostering open communication and
            working closely with your support network, we ensure that your
            unique needs and goals are at the center of your care plan.
          </p>
          <br />
          <p>
            At SHS, our commitment is to provide a nurturing and empowering
            environment where you can live life on your terms. We believe that
            with the right support and opportunities, you can continue to
            embrace the activities you love and enjoy a fulfilling and vibrant
            lifestyle.
          </p>
        </div>
        <div className="pt-8 mx-4 items-center flex justify-between">
          <div className="rounded-2xl">
            <img
              src="images/services/offer3.png"
              alt=""
              className="h-full rounded-2xl"
            />
          </div>
          <div className="text-gray-500 w-2/3 text-xl pl-12 font-light">
            <h2 className="text-gray-800 py-8 text-4xl font-bold">
              What Services are Offered?
            </h2>
            <p>
              At SHS, we offer a comprehensive range of services designed to
              meet the diverse needs and desires of our residents. Our services
              include:
            </p>
            <br />
            <ul className="pl-8 list-decimal">
              <li>
                <p>
                  <strong>
                    Assistance with Activities of Daily Living (ADLs):
                  </strong>{" "}
                  Our compassionate staff is here to provide support with
                  essential daily activities such as dressing, bathing,
                  grooming, and dining. We understand the importance of
                  maintaining personal hygiene, and our dedicated team is
                  trained to offer assistance while respecting your dignity and
                  independence.
                </p>
              </li>
              <li>
                <p>
                  <strong>
                    Social, Cultural, and Recreational Activities:
                  </strong>{" "}
                  We believe in fostering a vibrant and engaging community for
                  our residents. Our social, cultural, and recreational
                  activities are designed to promote socialization, mental
                  stimulation, and personal fulfillment. From group outings and
                  hobby clubs to educational programs and cultural events, there
                  are numerous opportunities to connect, learn, and have fun.
                </p>
              </li>
              <li>
                <p>
                  <strong>Scheduled Transportation:</strong> We understand the
                  importance of staying connected to the outside world. Our
                  scheduled transportation services ensure that you have
                  reliable transportation to attend appointments, engage in
                  social activities, and explore the local community. You can
                  have peace of mind knowing that you can easily access the
                  services and experiences you desire.
                </p>
              </li>
              <li>
                <p>
                  <strong>24-Hour Nursing Availability:</strong> The health and
                  well-being of our residents are our top priorities. With
                  24-hour nursing availability, our skilled and compassionate
                  nursing staff is always ready to provide medical assistance,
                  address concerns, and offer support whenever needed. You can
                  trust that you'll receive timely and attentive care from our
                  experienced healthcare professionals.
                </p>
              </li>
              <li>
                <p>
                  <strong>Trained, Compassionate Caregivers:</strong> Our
                  caregivers are specially trained to meet the unique needs of
                  our residents. They provide personalized care with empathy and
                  compassion, ensuring that you receive the support and
                  assistance required for a comfortable and fulfilling
                  lifestyle. Our team is committed to building strong
                  relationships and creating a nurturing environment where you
                  feel valued and well-cared for.
                </p>
              </li>
              <li>
                <p>
                  <strong>Weekly Housekeeping and Flat Linen Service:</strong>{" "}
                  We understand the importance of maintaining a clean and
                  organized living space. Our dedicated housekeeping staff takes
                  care of weekly housekeeping tasks, ensuring that your living
                  environment remains tidy and comfortable. Additionally, we
                  provide a flat linen service, so you can enjoy fresh linens on
                  a regular basis.
                </p>
              </li>
              <li>
                <p>
                  <strong>Beautifully Landscaped Outdoor Areas:</strong> Nature
                  has a profound impact on our well-being. Our community
                  features beautifully landscaped outdoor areas that provide a
                  serene and tranquil setting. Whether you prefer to take a
                  leisurely stroll, relax in a peaceful garden, or engage in
                  outdoor activities, our outdoor spaces offer a rejuvenating
                  retreat within the comfort of our community.
                </p>
              </li>
            </ul>
            <br />
            <p>
              At SHS, we are committed to providing exceptional services that
              enhance your quality of life. Our dedicated team is here to
              support you with personalized care, engaging activities, and a
              comfortable living environment. Your well-being and satisfaction
              are our top priorities as we strive to create a nurturing and
              fulfilling assisted living experience.
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
        <div className="mx-4 text-xl pt-8 grid grid-cols-2 gap-12 text-gray-500">
          <div>
            <p>
              The admission eligibility for assisted living is determined by the
              individual care needs of each potential resident. In general,
              assisted living is suitable for individuals who require:
            </p>
            <br />
            <ul className="pl-8 list-decimal">
              <li>
                <p>
                  <strong>Minimal Skilled Nursing Services:</strong> Assisted
                  living provides support for individuals who may need
                  occasional assistance with medical care that does not require
                  round-the-clock skilled nursing services. It is a suitable
                  option for those who can manage their daily activities with
                  some assistance.
                </p>
              </li>
              <li>
                <p>
                  <strong>Rehabilitation Services:</strong> Assisted living can
                  be beneficial for individuals who are undergoing
                  rehabilitation and need assistance with their recovery
                  process. Our community can provide the necessary support and
                  services to aid in rehabilitation and regain independence.
                </p>
              </li>
              <li>
                <p>
                  <strong>Daily Assistance with Everyday Tasks:</strong>{" "}
                  Assisted living is well-suited for individuals who require
                  help with activities of daily living (ADLs), such as eating,
                  bathing, dressing, and mobility. Our caring staff is trained
                  to provide the support needed to ensure comfort and
                  well-being.
                </p>
              </li>
              <li>
                <p>
                  <strong>Medication Management:</strong> Assisted living offers
                  assistance with medication management, ensuring that residents
                  receive the appropriate medications at the right times. Our
                  staff can help with medication reminders and administration to
                  promote health and safety.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <p>
              However, it is important to note that assisted living may not be
              suitable for individuals who require:
            </p>
            <br />
            <ul className="pl-8 list-decimal">
              <li>
                <p>
                  <strong>Continuous Supervision:</strong> If an individual
                  requires constant supervision due to severe cognitive
                  impairments or safety concerns, other care options such as
                  memory care or skilled nursing facilities may be more
                  appropriate.
                </p>
              </li>
              <li>
                <p>
                  <strong>Extensive Medical Care:</strong> Assisted living is
                  not designed to provide extensive medical care, such as
                  complex medical treatments or procedures that require
                  specialized medical attention. In such cases, a higher level
                  of care, such as a skilled nursing facility, may be more
                  suitable.
                </p>
              </li>
              <li>
                <p>
                  <strong>Memory Care:</strong> Assisted living may not be ideal
                  for individuals with advanced dementia or Alzheimer's disease
                  who require specialized memory care services tailored to their
                  specific needs. Memory care communities are designed to
                  provide a secure environment and specialized support for
                  individuals with memory-related conditions.
                </p>
              </li>
            </ul>
            <br />
            <p>
              At SHS, we prioritize the safety and well-being of our residents.
              Our admission process involves a thorough assessment of the
              individual's care requirements to ensure that assisted living is
              the appropriate level of care for their specific needs.
            </p>
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
    </section>
  );
};

export default AssistedLiving;
