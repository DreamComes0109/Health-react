import React from "react";

const Location = () => {
  return (
    <section>
      <div className="mb-6 relative">
        <img src="images/location_bg.webp" alt="" />
        <div className="grid grid-cols-12 absolute top-0">
          <div className=" col-span-7"></div>
          <div className="py-20 col-span-5">
            <h2 className="text-sky-800 text-5xl font-bold">Our Locations</h2>
            <p className="text-gray-500 text-xl pt-6">
              Our homes are handpicked and tailored to enhance the delivery of
              our services. We continuously develop, update, and improve our
              locations, indoors and out.
            </p>
            <div className="grid grid-rows-2 gap-4 w-3/4 mt-16">
              <a
                href="/locations#community"
                className="bg-white hover:bg-green-100 py-1 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center"
              >
                <img
                  alt="home Logo"
                  className="mx-3 h-2/3"
                  src="images/icons/home.png"
                />
                <p className="font-semibold">Community Residential Settings</p>
              </a>
              <a
                href="/locations#integrate"
                className="bg-white hover:bg-green-100 py-1 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center"
              >
                <img
                  alt="home Logo"
                  className="mx-3 h-2/3"
                  src="images/icons/home.png"
                />
                <p className=" font-semibold">
                  Integrated Community Support Settings
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white" id="integrate">
        <div className="grid grid-cols-2 items-center py-8 gap-24 w-4/5 mx-auto">
          <div className="text-gray-500 text-lg">
            <h2 className="text-gray-900 text-3xl font-bold">
              Midtown Residence (7-Unit)
            </h2>
            <p className="text-green-400">
              2521 Bloomington Ave S. Minneapolis, MN 55407
            </p>
            <br />
            <p>
              The newly built Midtown Residence is located near Midtown and in
              the East Phillips community. Residents are located directly on a
              bus line with less than a 100-yard walk to the nearest bus stop. A
              limited number of ADA Accessible units are available at this
              location!
            </p>
            <div className="flex justify-between mt-8">
              <div className="bg-white hover:bg-green-100 py-2 w-2/5 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center">
                <svg
                  fill="rgb(49 196 141)"
                  viewBox="0 0 24 24"
                  width={45}
                  height={45}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M17,23a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2H7A2,2,0,0,0,5,3V21a2,2,0,0,0,2,2ZM7,3H9.5L10,4h4l.5-1H17V21H7Zm6,16a1,1,0,1,1-1-1A1,1,0,0,1,13,19Z"></path>
                  </g>
                </svg>
                <p className="text-base font-semibold">Call for Information</p>
              </div>
              <div className="bg-white hover:bg-green-100 py-2 w-2/5 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center">
                <svg
                  version="1.0"
                  id="Layer_1"
                  width={45}
                  height={45}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  enable-background="new 0 0 64 64"
                  fill="rgb(49 196 141)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"
                      ></path>{" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                      ></path>{" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p className=" font-semibold">View on map</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              id="default-carousel"
              className="relative w-full z-0"
              data-carousel="slide"
            >
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/midtown1.png"
                    className="absolute h-full block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/midtown2.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/midtown3.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
              </div>
              <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                ></button>
              </div>
              <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>

            <div className="absolute z-10 right-0 bottom-0 bg-green-400 p-4 text-white text-center">
              <p>Supportive Apartment</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="grid grid-cols-2 items-center py-12 gap-24 w-4/5 mx-auto">
          <div className="relative">
            <div
              id="default-carousel"
              className="relative w-full z-0"
              data-carousel="slide"
            >
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/apartment1.png"
                    className="absolute h-full block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/apartment2.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/apartment3.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/apartment4.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/apartment5.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/apartment6.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/apartment7.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/apartment8.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
              </div>
              <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 4"
                  data-carousel-slide-to="3"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 5"
                  data-carousel-slide-to="4"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 6"
                  data-carousel-slide-to="5"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 7"
                  data-carousel-slide-to="6"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 8"
                  data-carousel-slide-to="7"
                ></button>
              </div>
              <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
            <div className="absolute z-10 left-0 bottom-0 bg-green-400 p-4 text-white text-center">
              <p>Supportive Apartment</p>
            </div>
          </div>
          <div className="text-gray-500 text-lg">
            <h2 className="text-gray-900 text-3xl font-bold">
              Residence on Oakland Ave (4-Unit)
            </h2>
            <p className="text-green-400">
              2636 Oakland Ave S. Minneapolis, MN 55407
            </p>
            <br />
            <p>
              Our newly renovated Oakland Residence offers spacious 2-bedroom
              apartments for residents to enjoy independent living with the
              support of SHS staff. Located just blocks away from a hospital
              residents have access to bus lines and a number of community
              resources.
            </p>
            <div className="flex justify-between mt-8">
              <div className="bg-white hover:bg-green-100 py-2 w-2/5 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center">
                <svg
                  fill="rgb(49 196 141)"
                  viewBox="0 0 24 24"
                  width={45}
                  height={45}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M17,23a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2H7A2,2,0,0,0,5,3V21a2,2,0,0,0,2,2ZM7,3H9.5L10,4h4l.5-1H17V21H7Zm6,16a1,1,0,1,1-1-1A1,1,0,0,1,13,19Z"></path>
                  </g>
                </svg>
                <p className="text-base font-semibold">Call for Information</p>
              </div>
              <div className="bg-white hover:bg-green-100 py-2 w-2/5 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center">
                <svg
                  version="1.0"
                  id="Layer_1"
                  width={45}
                  height={45}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  enable-background="new 0 0 64 64"
                  fill="rgb(49 196 141)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"
                      ></path>{" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                      ></path>{" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p className=" font-semibold">View on map</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="grid grid-cols-2 items-center py-12 gap-24 w-4/5 mx-auto">
          <div className="text-gray-500 text-lg">
            <h2 className="text-gray-900 text-3xl font-bold">
              Residence on 14th Ave (11-unit)
            </h2>
            <p className="text-green-400">
              3223 14th Ave S, Minneapolis, MN 55407
            </p>
            <br />
            <p>
              Our residence on 14th avenue is located across from Powderhorn
              Park - featuring athletic fields, a recreation center, and a lake.
              Located on the outskirts of the city are a few local restaurants
              and boutiques. With comfortable one-bedroom apartments in a
              multi-level building, residents enjoy their independence while
              staying a part of their building community.
            </p>
            <div className="flex justify-between mt-8">
              <div className="bg-white hover:bg-green-100 py-2 w-2/5 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center">
                <svg
                  fill="rgb(49 196 141)"
                  viewBox="0 0 24 24"
                  width={45}
                  height={45}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M17,23a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2H7A2,2,0,0,0,5,3V21a2,2,0,0,0,2,2ZM7,3H9.5L10,4h4l.5-1H17V21H7Zm6,16a1,1,0,1,1-1-1A1,1,0,0,1,13,19Z"></path>
                  </g>
                </svg>
                <p className="text-base font-semibold">Call for Information</p>
              </div>
              <div className="bg-white hover:bg-green-100 py-2 w-2/5 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center">
                <svg
                  version="1.0"
                  id="Layer_1"
                  width={45}
                  height={45}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  enable-background="new 0 0 64 64"
                  fill="rgb(49 196 141)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"
                      ></path>{" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                      ></path>{" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p className=" font-semibold">View on map</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              id="default-carousel"
              className="relative w-full z-0"
              data-carousel="slide"
            >
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/residence1.png"
                    className="absolute h-full block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/residence2.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/residence3.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/residence4.png"
                    className="absolute h-full block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
              </div>
              <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 4"
                  data-carousel-slide-to="3"
                ></button>
              </div>
              <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
            <div className="absolute z-10 right-0 bottom-0 bg-green-400 p-4 text-white text-center">
              <p>Supportive Apartment</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="grid grid-cols-2 items-center py-12 gap-24 w-4/5 mx-auto">
          <div className="relative">
            <img src="images/locations/street1.png" alt="..." />
            <div className="absolute z-10 left-0 bottom-0 bg-green-400 p-4 text-white text-center">
              <p>Supportive Apartment</p>
            </div>
          </div>
          <div className="text-gray-500 text-lg">
            <h2 className="text-gray-900 text-3xl font-bold">
              Residence on 26th Street (8-unit)
            </h2>
            <p className="text-green-400">
              912 E 26th St, Minneapolis, MN 55404
            </p>
            <br />
            <p>
              Our residence on 26th street consists of newly renovated
              apartments in the bustling area of South Minneapolis. Conveniently
              located within walking distance to the light rail for
              transportation. Featuring secure entry doors, wireless internet,
              and coin-operated washer and dryers. Residents enjoy the privacy
              of independent, comfortable living in these apartments.
            </p>
            <div className="flex justify-between mt-8">
              <div className="bg-white hover:bg-green-100 py-2 w-2/5 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center">
                <svg
                  fill="rgb(49 196 141)"
                  viewBox="0 0 24 24"
                  width={45}
                  height={45}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M17,23a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2H7A2,2,0,0,0,5,3V21a2,2,0,0,0,2,2ZM7,3H9.5L10,4h4l.5-1H17V21H7Zm6,16a1,1,0,1,1-1-1A1,1,0,0,1,13,19Z"></path>
                  </g>
                </svg>
                <p className="text-base font-semibold">Call for Information</p>
              </div>
              <div className="bg-white hover:bg-green-100 py-2 w-2/5 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center">
                <svg
                  version="1.0"
                  id="Layer_1"
                  width={45}
                  height={45}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  enable-background="new 0 0 64 64"
                  fill="rgb(49 196 141)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"
                      ></path>{" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                      ></path>{" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p className=" font-semibold">View on map</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="grid grid-cols-2 items-center py-12 gap-24 w-4/5 mx-auto">
          <div className="text-gray-500 text-lg">
            <h2 className="text-gray-900 text-3xl font-bold">
              Residence on Isabel Ave
            </h2>
            <p className="text-green-400">
              71 Isabel St W, Saint Paul, MN 55107
            </p>
            <br />
            <p>
              Our Residence on Isabel Ave is located in a quiet neighborhood in
              St.Paul just minutes away from the scenic views of the Mississippi
              River. In this independent living location, individuals enjoy
              apartment-style living close to the bus line for convenience.
            </p>
            <div className="flex justify-between mt-8">
              <div className="bg-white hover:bg-green-100 py-2 w-2/5 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center">
                <svg
                  fill="rgb(49 196 141)"
                  viewBox="0 0 24 24"
                  width={45}
                  height={45}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M17,23a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2H7A2,2,0,0,0,5,3V21a2,2,0,0,0,2,2ZM7,3H9.5L10,4h4l.5-1H17V21H7Zm6,16a1,1,0,1,1-1-1A1,1,0,0,1,13,19Z"></path>
                  </g>
                </svg>
                <p className="text-base font-semibold">Call for Information</p>
              </div>
              <div className="bg-white hover:bg-green-100 py-2 w-2/5 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center">
                <svg
                  version="1.0"
                  id="Layer_1"
                  width={45}
                  height={45}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  enable-background="new 0 0 64 64"
                  fill="rgb(49 196 141)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"
                      ></path>{" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                      ></path>{" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p className=" font-semibold">View on map</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              id="default-carousel"
              className="relative w-full z-0"
              data-carousel="slide"
            >
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/isabel1.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/isabel2.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/isabel3.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/isabel4.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/isabel5.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
              </div>
              <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 4"
                  data-carousel-slide-to="3"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 5"
                  data-carousel-slide-to="4"
                ></button>
              </div>
              <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
            <div className="absolute z-10 right-0 bottom-0 bg-green-400 p-4 text-white text-center">
              <p>Supportive Apartment</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="grid grid-cols-2 items-center py-12 gap-24 w-4/5 mx-auto">
          <div className="relative">
            <img src="images/locations/exterior.png" alt="..." />
            <div className="absolute z-10 left-0 bottom-0 bg-green-400 p-4 text-white text-center">
              <p>Supportive Apartment</p>
            </div>
          </div>
          <div className="text-gray-500 text-lg">
            <h2 className="text-gray-900 text-3xl font-bold">
              Residence on 11th Ave (Triplex)
            </h2>
            <p className="text-green-400">
              3517 11th Ave S, Minneapolis, MN 55407
            </p>
            <br />
            <p>
              Our residence on 11th Ave is a Triplex conveniently located in the
              heart of South Minneapolis. With spacious bedrooms and updated
              kitchens and bathrooms, residents enjoy being close to public
              transportation, local grocery stores, and boutique shops, as well
              as hospitals and clinics for convenience.
            </p>
            <div className="flex justify-between mt-8">
              <div className="bg-white hover:bg-green-100 py-2 w-2/5 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center">
                <svg
                  fill="rgb(49 196 141)"
                  viewBox="0 0 24 24"
                  width={45}
                  height={45}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M17,23a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2H7A2,2,0,0,0,5,3V21a2,2,0,0,0,2,2ZM7,3H9.5L10,4h4l.5-1H17V21H7Zm6,16a1,1,0,1,1-1-1A1,1,0,0,1,13,19Z"></path>
                  </g>
                </svg>
                <p className="text-base font-semibold">Call for Information</p>
              </div>
              <div className="bg-white hover:bg-green-100 py-2 w-2/5 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center">
                <svg
                  version="1.0"
                  id="Layer_1"
                  width={45}
                  height={45}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  enable-background="new 0 0 64 64"
                  fill="rgb(49 196 141)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"
                      ></path>{" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                      ></path>{" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p className=" font-semibold">View on map</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="grid grid-cols-2 items-center py-12 gap-24 w-4/5 mx-auto">
          <div className="text-gray-500 text-lg">
            <h2 className="text-gray-900 text-3xl font-bold">
              Residence on Lyndale Ave (Multi-Unit)
            </h2>
            <p className="text-green-400">
              9130 Lyndale Ave S, Bloomington, MN 55420
            </p>
            <br />
            <p>
              Our residence on Lyndale Ave. is located in the heart of
              Bloomington and 4 miles west of the Mall of America. There are
              several parks nearby and easy access to public transportation. In
              these newly remodeled one-bedroom apartments in a multi-level
              building, residents are able to enjoy their independence in a
              comfortable, clean home.
            </p>
            <div className="flex justify-between mt-8">
              <div className="bg-white hover:bg-green-100 py-2 w-2/5 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center">
                <svg
                  fill="rgb(49 196 141)"
                  viewBox="0 0 24 24"
                  width={45}
                  height={45}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M17,23a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2H7A2,2,0,0,0,5,3V21a2,2,0,0,0,2,2ZM7,3H9.5L10,4h4l.5-1H17V21H7Zm6,16a1,1,0,1,1-1-1A1,1,0,0,1,13,19Z"></path>
                  </g>
                </svg>
                <p className="text-base font-semibold">Call for Information</p>
              </div>
              <div className="bg-white hover:bg-green-100 py-2 w-2/5 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center">
                <svg
                  version="1.0"
                  id="Layer_1"
                  width={45}
                  height={45}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  enable-background="new 0 0 64 64"
                  fill="rgb(49 196 141)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"
                      ></path>{" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                      ></path>{" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p className=" font-semibold">View on map</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              id="default-carousel"
              className="relative w-full z-0"
              data-carousel="slide"
            >
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/lyndale1.png"
                    className="absolute h-full block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/lyndale2.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/lyndale3.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/lyndale4.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/lyndale5.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/lyndale6.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
              </div>
              <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 4"
                  data-carousel-slide-to="3"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 5"
                  data-carousel-slide-to="4"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 6"
                  data-carousel-slide-to="5"
                ></button>
              </div>
              <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
            <div className="absolute z-10 right-0 bottom-0 bg-green-400 p-4 text-white text-center">
              <p>Supportive Apartment</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="grid grid-cols-2 items-center py-12 gap-24 w-4/5 mx-auto">
          <div className="relative">
            <img src="images/locations/elliot.png" alt="..." />
            <div className="absolute z-10 left-0 bottom-0 bg-green-400 p-4 text-white text-center">
              <p>Supportive Apartment</p>
            </div>
          </div>
          <div className="text-gray-500 text-lg">
            <h2 className="text-gray-900 text-3xl font-bold">
              Residence on Elliot Ave (Quadplex)
            </h2>
            <p className="text-green-400">
              2112 Elliot Ave, Minneapolis, MN 55404
            </p>
            <br />
            <p>
              Our Elliot Ave Residence is a quadplex conveniently located in the
              heart of South Minneapolis. With spacious bedrooms and updated
              kitchens and bathrooms, residents enjoy being close to public
              transportation, local grocery stores, and boutique shops, as well
              as hospitals and clinics for convenience.
            </p>
            <div className="flex justify-between mt-8">
              <div className="bg-white hover:bg-green-100 py-2 w-2/5 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center">
                <svg
                  fill="rgb(49 196 141)"
                  viewBox="0 0 24 24"
                  width={45}
                  height={45}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M17,23a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2H7A2,2,0,0,0,5,3V21a2,2,0,0,0,2,2ZM7,3H9.5L10,4h4l.5-1H17V21H7Zm6,16a1,1,0,1,1-1-1A1,1,0,0,1,13,19Z"></path>
                  </g>
                </svg>
                <p className="text-base font-semibold">Call for Information</p>
              </div>
              <div className="bg-white hover:bg-green-100 py-2 w-2/5 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center">
                <svg
                  version="1.0"
                  id="Layer_1"
                  width={45}
                  height={45}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  enable-background="new 0 0 64 64"
                  fill="rgb(49 196 141)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"
                      ></path>{" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                      ></path>{" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p className=" font-semibold">View on map</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="grid grid-cols-2 items-center py-12 gap-24 w-4/5 mx-auto">
          <div className="text-gray-500 text-lg">
            <h2 className="text-gray-900 text-3xl font-bold">
              Old Shakopee Residence
            </h2>
            <p className="text-green-400">
              5014 West Old Shakopee Rd, Bloomington MN 55420
            </p>
            <br />
            <p>
              Our Old Shakopee Residence is an independent living located close
              to the Mall of America and 35W highway. This location is
              conveniently located close to the bus line, stores, and healthcare
              clinics. These units have a full backyard and residents enjoy
              bonfires in the summer months.
            </p>
            <div className="flex justify-between mt-8">
              <div className="bg-white hover:bg-green-100 py-2 w-2/5 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center">
                <svg
                  fill="rgb(49 196 141)"
                  viewBox="0 0 24 24"
                  width={45}
                  height={45}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M17,23a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2H7A2,2,0,0,0,5,3V21a2,2,0,0,0,2,2ZM7,3H9.5L10,4h4l.5-1H17V21H7Zm6,16a1,1,0,1,1-1-1A1,1,0,0,1,13,19Z"></path>
                  </g>
                </svg>
                <p className="text-base font-semibold">Call for Information</p>
              </div>
              <div className="bg-white hover:bg-green-100 py-2 w-2/5 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center">
                <svg
                  version="1.0"
                  id="Layer_1"
                  width={45}
                  height={45}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  enable-background="new 0 0 64 64"
                  fill="rgb(49 196 141)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"
                      ></path>{" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                      ></path>{" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p className=" font-semibold">View on map</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              id="default-carousel"
              className="relative w-full z-0"
              data-carousel="slide"
            >
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/shakeopee1.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/shakeopee2.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/shakeopee3.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/shakeopee4.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/shakeopee5.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
              </div>
              <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 4"
                  data-carousel-slide-to="3"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 5"
                  data-carousel-slide-to="4"
                ></button>
              </div>
              <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
            <div className="absolute z-10 right-0 bottom-0 bg-green-400 p-4 text-white text-center">
              <p>Supportive Apartment</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="grid grid-cols-2 items-center py-12 gap-24 w-4/5 mx-auto">
          <div className="relative">
            <div
              id="default-carousel"
              className="relative w-full z-0"
              data-carousel="slide"
            >
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/community1.png"
                    className="absolute h-full block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/community2.png"
                    className="absolute h-full block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/community3.png"
                    className="absolute h-full block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/community4.png"
                    className="absolute h-full block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
              </div>
              <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 4"
                  data-carousel-slide-to="3"
                ></button>
              </div>
              <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
            <div className="absolute left-0 bottom-0 bg-green-400 p-4 text-white text-center">
              <p>Community Residential</p>
            </div>
          </div>
          <div className="text-gray-500 text-lg" id="community">
            <h2 className="text-gray-900 text-3xl font-bold">
              Residence on 4th Ave
            </h2>
            <p className="text-green-400">
              6604 4th Ave S, Richfield, MN 55420
            </p>
            <br />
            <p>
              Our 4th Residence home is conveniently located conveniently close
              to Minneapolis, the airport, the Mall of America, and Eagan
              outlets. The average age range at our Elliot residence is 30-65
              years old although we accept residents over 18 years old. At the
              4th Ave residence, our residents enjoy home-cooked meals, mental
              health services, care coordination, and public transportation. Our
              residents enjoy lunch out in the large backyard in the summer
              months.
            </p>
            <div className="flex justify-between mt-8">
              <div className="bg-white hover:bg-green-100 py-2 w-2/5 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center">
                <svg
                  fill="rgb(49 196 141)"
                  viewBox="0 0 24 24"
                  width={45}
                  height={45}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M17,23a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2H7A2,2,0,0,0,5,3V21a2,2,0,0,0,2,2ZM7,3H9.5L10,4h4l.5-1H17V21H7Zm6,16a1,1,0,1,1-1-1A1,1,0,0,1,13,19Z"></path>
                  </g>
                </svg>
                <p className="text-base font-semibold">Call for Information</p>
              </div>
              <div className="bg-white hover:bg-green-100 py-2 w-2/5 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center">
                <svg
                  version="1.0"
                  id="Layer_1"
                  width={45}
                  height={45}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  enable-background="new 0 0 64 64"
                  fill="rgb(49 196 141)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"
                      ></path>{" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                      ></path>{" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p className=" font-semibold">View on map</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="grid grid-cols-2 items-center py-12 gap-24 w-4/5 mx-auto">
          <div className="text-gray-500 text-lg">
            <h2 className="text-gray-900 text-3xl font-bold">
              Residence on Clinton Ave
            </h2>
            <p className="text-green-400">
              3552 Clinton Ave S, Minneapolis MN 55408
            </p>
            <br />
            <p>
              Formerly (Moore Board and Care). Moore Board & Care was founded by
              Christine Moore in 1998. SHS Clinton Residence is a home for women
              in transition. We assist with providing meals, mental health
              services, and coordination of care. This assisted living/ Board
              and Lodge facility is dedicated to helping women live in comfort
              and peace. SHS MN is committed to continuing Ms. Moore’s legacy by
              providing compassion and respect to all of the women living at our
              facility.
            </p>
            <div className="flex justify-between mt-8">
              <div className="bg-white hover:bg-green-100 py-2 w-2/5 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center">
                <svg
                  fill="rgb(49 196 141)"
                  viewBox="0 0 24 24"
                  width={45}
                  height={45}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M17,23a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2H7A2,2,0,0,0,5,3V21a2,2,0,0,0,2,2ZM7,3H9.5L10,4h4l.5-1H17V21H7Zm6,16a1,1,0,1,1-1-1A1,1,0,0,1,13,19Z"></path>
                  </g>
                </svg>
                <p className="text-base font-semibold">Call for Information</p>
              </div>
              <div className="bg-white hover:bg-green-100 py-2 w-2/5 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center">
                <svg
                  version="1.0"
                  id="Layer_1"
                  width={45}
                  height={45}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  enable-background="new 0 0 64 64"
                  fill="rgb(49 196 141)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"
                      ></path>{" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                      ></path>{" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p className=" font-semibold">View on map</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              id="default-carousel"
              className="relative w-full z-0"
              data-carousel="slide"
            >
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/clinton1.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/clinton2.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/clinton3.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/clinton4.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
              </div>
              <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 4"
                  data-carousel-slide-to="3"
                ></button>
              </div>
              <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
            <div className="absolute z-10 right-0 bottom-0 bg-green-400 p-4 text-white text-center">
              <p>Community Residential</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="grid grid-cols-2 items-center py-12 gap-24 w-4/5 mx-auto">
          <div className="relative">
            <div
              id="default-carousel"
              className="relative w-full z-0"
              data-carousel="slide"
            >
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/eagan1.png"
                    className="absolute h-full block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/eagan2.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
              </div>
              <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
              </div>
              <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
            <div className="absolute z-10 left-0 bottom-0 bg-green-400 p-4 text-white text-center">
              <p>Community Residential</p>
            </div>
          </div>
          <div className="text-gray-500 text-lg">
            <h2 className="text-gray-900 text-3xl font-bold">
              Residence on 13th Ave
            </h2>
            <p className="text-green-400">
              9230 13th Ave S, Bloomington MN 55420
            </p>
            <br />
            <p>
              Our 13th Residence home is conveniently located near the Mall of
              America and Eagan outlets. The average age range at our Elliot
              residence is 30-65 years old although we accept residents over 18
              years old. At the 13th Ave, residence residents enjoy one level of
              accessible living and home-cooked meals. Our residents enjoy lunch
              out in the large backyard in the summer months.
            </p>
            <div className="flex justify-between mt-8">
              <div className="bg-white hover:bg-green-100 py-2 w-2/5 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center">
                <svg
                  fill="rgb(49 196 141)"
                  viewBox="0 0 24 24"
                  width={45}
                  height={45}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M17,23a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2H7A2,2,0,0,0,5,3V21a2,2,0,0,0,2,2ZM7,3H9.5L10,4h4l.5-1H17V21H7Zm6,16a1,1,0,1,1-1-1A1,1,0,0,1,13,19Z"></path>
                  </g>
                </svg>
                <p className="text-base font-semibold">Call for Information</p>
              </div>
              <div className="bg-white hover:bg-green-100 py-2 w-2/5 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center">
                <svg
                  version="1.0"
                  id="Layer_1"
                  width={45}
                  height={45}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  enable-background="new 0 0 64 64"
                  fill="rgb(49 196 141)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"
                      ></path>{" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                      ></path>{" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p className=" font-semibold">View on map</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="grid grid-cols-2 items-center py-12 gap-24 w-4/5 mx-auto">
          <div className="text-gray-500 text-lg">
            <h2 className="text-gray-900 text-3xl font-bold">
              Elliot Residence
            </h2>
            <p className="text-green-400">
              9213 Elliot Ave S, Bloomington MN 55420
            </p>
            <br />
            <p>
              Our Elliot home is conveniently located near the Mall of America
              and Eagan outlets. The average age range at our Elliot residence
              is 50+. At the Elliot home residents enjoy one-level living and
              home-cooked meals. Our residents enjoy barbecues and eating lunch
              out in the large backyard in the summer months.
            </p>
            <div className="flex justify-between mt-8">
              <div className="bg-white hover:bg-green-100 py-2 w-2/5 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center">
                <svg
                  fill="rgb(49 196 141)"
                  viewBox="0 0 24 24"
                  width={45}
                  height={45}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M17,23a2,2,0,0,0,2-2V3a2,2,0,0,0-2-2H7A2,2,0,0,0,5,3V21a2,2,0,0,0,2,2ZM7,3H9.5L10,4h4l.5-1H17V21H7Zm6,16a1,1,0,1,1-1-1A1,1,0,0,1,13,19Z"></path>
                  </g>
                </svg>
                <p className="text-base font-semibold">Call for Information</p>
              </div>
              <div className="bg-white hover:bg-green-100 py-2 w-2/5 border-solid border-green-300 border-2  items-center rounded-3xl flex justify-center">
                <svg
                  version="1.0"
                  id="Layer_1"
                  width={45}
                  height={45}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  enable-background="new 0 0 64 64"
                  fill="rgb(49 196 141)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"
                      ></path>{" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                      ></path>{" "}
                      <path
                        fill="rgb(49 196 141)"
                        d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p className=" font-semibold">View on map</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div
              id="default-carousel"
              className="relative w-full z-0"
              data-carousel="slide"
            >
              <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/customized1.png"
                    className="absolute h-full block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/customized2.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <img
                    src="images/locations/customized3.png"
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    alt="..."
                  />
                </div>
              </div>
              <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                ></button>
              </div>
              <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
            <div className="absolute z-10 right-0 bottom-0 bg-green-400 p-4 text-white text-center">
              <p>Customized Living</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
