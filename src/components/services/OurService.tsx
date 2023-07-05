import React, { useState } from "react";
import { Button } from "flowbite-react";

const OurService = () => {
  const [groupHome, setGroupHome] = useState(true);
  const [supportive, setSupportive] = useState(false);
  const [housing, setHousing] = useState(false);

  const groupHomeClick = () => {
    setGroupHome(true);
    setSupportive(false);
    setHousing(false);
  };

  const supportiveClick = () => {
    setGroupHome(false);
    setSupportive(true);
    setHousing(false);
  };

  const housingClick = () => {
    setGroupHome(false);
    setSupportive(false);
    setHousing(true);
  };

  return (
    <section>
      <div className="mb-6 relative">
        <img src="images/services/service_bg.webp" alt="" />
        <div className="absolute top-0 grid grid-cols-12">
          <div className=" col-span-5"></div>
          <div className="py-32 col-span-5">
            <h2 className="text-sky-800 text-5xl font-bold">How we serve.</h2>
            <p className="text-gray-500 text-xl pt-6">
              SHS MN provides a variety of services and supports and is
              committed to connecting the people we serve to resources to
              improve their lives in order to reach their greatest potential.
            </p>
          </div>
          <div className="col-span-2"></div>
        </div>
      </div>
      <div>
        <div className="m-12 grid grid-cols-3 gap-12">
          <button
            onClick={groupHomeClick}
            className="rounded-3xl border-solid border-2 border-green-200 hover:bg-green-100 hover:border-none items-center flex"
          >
            <svg
              width="75"
              height="75"
              viewBox="0 0 48 48"
              fill="none"
              className="pl-4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="24"
                cy="17"
                r="13"
                fill="none"
                stroke="rgb(49 196 141)"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M42 17C42 26.9411 33.9411 35 24 35C14.0589 35 6 26.9411 6 17"
                stroke="rgb(49 196 141)"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M42 17H38"
                stroke="rgb(49 196 141)"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10 17H6"
                stroke="rgb(49 196 141)"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M30 44H18"
                stroke="rgb(49 196 141)"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24 44V36"
                stroke="rgb(49 196 141)"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="font-medium truncate pl-4">
              Group Homes (Customized & Assisted Living)
            </p>
          </button>
          <button
            onClick={supportiveClick}
            className="rounded-3xl border-solid border-2 border-green-200 hover:bg-green-100 hover:border-none items-center flex"
          >
            <svg
              viewBox="0 0 24 24"
              width="75"
              height="75"
              className="pl-4"
              xmlns="http://www.w3.org/2000/svg"
              aria-labelledby="wheelchairIconTitle"
              stroke="rgb(49 196 141)"
              stroke-width="1"
              stroke-linecap="square"
              stroke-linejoin="miter"
              fill="none"
              color="rgb(49 196 141)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title id="wheelChairIconTitle">
                  Accessibility (wheelchair)
                </title>
                <path d="M15 17C15 19.7614 12.7614 22 10 22C7.23858 22 5 19.7614 5 17C5 14.9497 6.2341 13.1876 8 12.416"></path>
                <circle cx="11" cy="3" r="1"></circle>
                <path d="M19 21.5L17.3959 15.4847C17.1624 14.6092 16.3695 14 15.4634 14H11V7L17 10"></path>
              </g>
            </svg>
            <p className="font-medium truncate pl-4">Supportive Apartments</p>
          </button>
          <button
            className="rounded-3xl border-solid border-2 border-green-200 hover:bg-green-100 hover:border-none items-center flex"
            onClick={housingClick}
          >
            <svg
              viewBox="0 0 50 50"
              width="75"
              height="75"
              className="pl-4"
              id="Message_And_Communication_Icons"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              fill="rgb(49 196 141)"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <g>
                  <g>
                    <g>
                      <path
                        d="M39.7,7.7c2.8,2.4,4.5,6,4.5,10c0,5.4-3.2,10-7.8,12.1c0,0.1,0,0.2,0,0.4c0,0.9-0.1,1.8-0.2,2.6 c6.3-1.1,11-6.6,11-13.1C47.3,14.4,44.2,9.8,39.7,7.7z"
                        style={{ fill: "rgb(49 196 141)" }}
                      ></path>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g>
                        <path
                          d="M32.9,32.6v-1.2c7,0,12.7-5.7,12.7-12.7S39.9,5.9,32.9,5.9c-5.7,0-10.7,3.8-12.3,9.3l-1.2-0.3 c1.7-6,7.2-10.2,13.4-10.2c7.7,0,13.9,6.3,13.9,13.9S40.6,32.6,32.9,32.6z"
                          style={{ fill: "rgb(49 196 141)" }}
                        ></path>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g>
                        <path
                          d="M24.7,19.5c2.8,2.4,4.5,6,4.5,10c0,4-1.8,7.6-4.6,10v4.1l3,3v-5.1c2.8-2.4,4.6-6,4.6-10 C32.3,26.2,29.2,21.7,24.7,19.5z"
                          style={{ fill: "rgb(49 196 141)" }}
                        ></path>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M21.6,41.5c-1.7,0.8-3.7,1.3-5.7,1.3c-2.1,0-4.1-0.5-5.8-1.4c2.4,2.1,5.4,3.4,8.8,3.4 c1.8,0,3.5-0.4,5-1L21.6,41.5z"
                          style={{ fill: "rgb(49 196 141)" }}
                        ></path>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g>
                        <path
                          d="M27.3,47l-3.8-3.8c-1.8,0.8-3.7,1.2-5.6,1.2C10.2,44.4,4,38.2,4,30.5c0-7.7,6.3-13.9,13.9-13.9 c7.7,0,13.9,6.3,13.9,13.9c0,3.9-1.7,7.7-4.6,10.3V47z M23.8,41.8l2.3,2.3v-3.9l0.2-0.2c2.8-2.4,4.4-5.9,4.4-9.6 c0-7-5.7-12.7-12.7-12.7S5.2,23.5,5.2,30.5s5.7,12.7,12.7,12.7c1.9,0,3.7-0.4,5.5-1.2L23.8,41.8z"
                          style={{ fill: "rgb(49 196 141)" }}
                        ></path>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g>
                        <path
                          d="M7.8,28.9l-1.2-0.2c0.3-1.5,0.8-3,1.7-4.3l1,0.7C8.5,26.2,8,27.5,7.8,28.9z"
                          style={{ fill: "rgb(49 196 141)" }}
                        ></path>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M10.1,24l-0.9-0.8c0.3-0.4,0.6-0.7,1-1l0.8,0.9C10.6,23.4,10.3,23.7,10.1,24z"
                          style={{ fill: "rgb(49 196 141)" }}
                        ></path>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g>
                        <rect
                          height="1.2"
                          style={{ fill: "rgb(49 196 141)" }}
                          width="5.7"
                          x="18.1"
                          y="27"
                        ></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect
                          height="1.2"
                          style={{ fill: "rgb(49 196 141)" }}
                          width="3.2"
                          x="12.8"
                          y="27"
                        ></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect
                          height="1.2"
                          style={{ fill: "rgb(49 196 141)" }}
                          width="2.3"
                          x="21.5"
                          y="30.5"
                        ></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect
                          height="1.2"
                          style={{ fill: "rgb(49 196 141)" }}
                          width="6.4"
                          x="12.8"
                          y="30.5"
                        ></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect
                          height="1.2"
                          style={{ fill: "rgb(49 196 141)" }}
                          width="11"
                          x="12.8"
                          y="34"
                        ></rect>
                      </g>
                    </g>
                  </g>
                  <g>
                    <g>
                      <g>
                        <rect
                          height="1.2"
                          style={{ fill: "rgb(49 196 141)" }}
                          width="5.7"
                          x="33.2"
                          y="14.8"
                        ></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect
                          height="1.2"
                          style={{ fill: "rgb(49 196 141)" }}
                          width="3.2"
                          x="27.9"
                          y="14.8"
                        ></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect
                          height="1.2"
                          style={{ fill: "rgb(49 196 141)" }}
                          width="8.6"
                          x="30.3"
                          y="18.3"
                        ></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect
                          height="1.2"
                          style={{ fill: "rgb(49 196 141)" }}
                          width="6.5"
                          x="32.4"
                          y="21.7"
                        ></rect>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
            <p className="font-medium truncate pl-4">Housing Stabilization</p>
          </button>
        </div>
        <div className="pt-4 mx-auto w-3/5">
          <h2 className="text-gray-700 text-3xl font-bold">
            {groupHome && "Customized & Assisted Living"}
            {supportive && "Integrated Community Supports (ICS)"}
            {housing && "Housing Stabilization Services"}
          </h2>
          <br />
          {groupHome && (
            <>
              <p className="text-gray-500 text-lg pt-6">
                We provide 24-hour Customized Living services for adults living
                with physical and/or mental disabilities in a comfortable
                residential setting. We help individuals maintain their
                independence while also being integrated into the greater
                community. We have locations in Minneapolis, Richfield, and
                Bloomington.
              </p>
              <br />
              <p className="text-gray-500 text-lg">
                We provide assistance with bathing, dressing, daily hygiene,
                grooming, and other activities of daily living as well as any
                medication management that may be required.
              </p>
              <br />
              <p className="text-gray-500 text-lg">
                We make every effort to encourage the maximum independence of
                our residents while still providing them with the assistance
                they need. Our small residential setting allows for a
                personalized approach that residents prefer.
              </p>
              <div className="rounded-3xl text-center bg-gradient-to-r py-8 my-20 from-green-100 to-green-500 text-white">
                <h2 className="text-4xl font-bold">
                  Find out how we can help you.
                </h2>
                <Button className="mx-auto mt-8 flex items-center bg-transparent hover:border-transparent border-white border-2">
                  <svg
                    fill="white"
                    width="45"
                    height="45"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z"></path>
                    </g>
                  </svg>
                  <a href="/contact-us">
                    <p className="text-xl">Contact Us</p>
                  </a>
                </Button>
              </div>
            </>
          )}
          {supportive && (
            <>
              <p className="text-gray-500 text-lg pt-6">
                ICS is an independent supportive housing program for adults with
                disabilities. The ICS program is centered around the client’s
                home and community and services are provided that meet the
                client's goals to maintain independence in the community.
              </p>
              <br />
              <p className="text-gray-500 text-lg">
                ICS is delivered in an apartment setting, with each client
                having their own individual unit (kitchen , bathroom, bedroom).
                ICS services can be provided for up to 24 hours a day if needed
                and other supportive services can be coordinated such as nursing
                and home care if needed.
              </p>
              <br />
              <div className="rounded-3xl text-center bg-gradient-to-r py-8 my-20 from-green-100 to-green-500 text-white">
                <h2 className="text-4xl font-bold">
                  Contact us for ICS assistance.
                </h2>
                <Button className="mx-auto mt-8 flex items-center bg-transparent hover:border-transparent border-white border-2">
                  <svg
                    fill="white"
                    width="45"
                    height="45"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z"></path>
                    </g>
                  </svg>
                  <a href="/contact-us">
                    <p className="text-xl">Contact Us</p>
                  </a>
                </Button>
              </div>
            </>
          )}
          {housing && (
            <>
              <p className="text-gray-500 text-lg pt-6">
                Housing Stabilization Services is a new Minnesota Medical
                Assistance benefit to help people with disabilities, including
                mental illness and substance use disorder, and seniors find and
                keep housing.
              </p>
              <br />
              <p className="text-green-400 text-xl font-bold uppercase">
                WE CURRENTLY PROVIDE CONSULTATION, TRANSITIONING, and SUSTAINING
                SERVICES ONLY
              </p>
              <br />
              <p className="text-gray-800 text-xl font-semibold">
                Services include:
              </p>
              <ul className="pl-8 list-disc">
                <li className="text-gray-500 text-lg">
                  Developing a housing-focused person-centered plan based on
                  assessment outcomes
                </li>
                <li className="text-gray-500 text-lg">
                  Supporting the person in identifying their strengths, needs,
                  and wants in housing including cultural requirements and/or
                  preferences
                </li>
                <li className="text-gray-500 text-lg">
                  Supporting the person to make an informed choice in their
                  housing transition/sustaining provider
                </li>
                <li className="text-gray-500 text-lg">
                  Offering resource information for services that support
                  non-housing related goals as identified in the person-centered
                  planning process
                </li>
                <li className="text-gray-500 text-lg">
                  Coordinating with other service providers currently working
                  with the person
                </li>
                <li className="text-gray-500 text-lg">
                  Helping the person understand their rights to privacy and
                  appeal information
                </li>
                <li className="text-gray-500 text-lg">
                  Annually reassessing the person-centered plan as it relates to
                  housing.
                </li>
              </ul>
              <p className="text-gray-800 text-xl font-semibold">
                We accept MA and all MCO’s
              </p>
              <ul className="pl-8 list-disc">
                <li className="text-gray-500 text-lg">BCBS</li>
                <li className="text-gray-500 text-lg">HealthPartners</li>
                <li className="text-gray-500 text-lg">Medica</li>
                <li className="text-gray-500 text-lg">PrimeWest</li>
                <li className="text-gray-500 text-lg">UCare</li>
                <li className="text-gray-500 text-lg">Hennepin Health</li>
              </ul>
              <br />
              <div className="rounded-3xl text-center bg-gradient-to-r py-8 my-20 from-green-100 to-green-500 text-white">
                <h2 className="text-4xl font-bold">
                  Need assistance with housing?
                </h2>
                <Button className="mx-auto mt-8 flex items-center bg-transparent hover:border-transparent border-white border-2">
                  <svg
                    fill="white"
                    width="45"
                    height="45"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z"></path>
                    </g>
                  </svg>
                  <a href="/contact-us">
                    <p className="text-xl">Contact Us</p>
                  </a>
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurService;
