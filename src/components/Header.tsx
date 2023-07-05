import { Button, Navbar } from "flowbite-react";

const Header = () => {
  return (
    <section className="my-2">
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <img
            alt="Health Logo"
            className="mr-3 h-12 lg:h-20"
            src="images/logo.png"
          />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <a href="/contact-us" className="text-white">
            <Button className="bg-green-400 hover:bg-green-500">
              Contact Us
            </Button>
          </a>
          <Navbar.Toggle />
        </div>
        <div className="flex items-center md:order-2">
          <img
            alt="Phone Logo"
            className="mr-3 h-full"
            src="images/icons/phone.png"
          />
          <div className="grid grid-rows-3">
            <p className="text-gray-500">Main Phone</p>
            <h2 className="text-gray-700 font-bold text-2xl">763-346-4942</h2>
            <p className="text-gray-600 font-medium">Se Habla Español</p>
          </div>
        </div>
        <Navbar.Collapse>
          <Navbar.Link className="text-lg" href="/about">
            About Us
          </Navbar.Link>
          <div className=" flex items-center md:justify-center">
            <div className="group relative cursor-pointer">
              <div className="flex items-center justify-between">
                <a
                  href="/our-services"
                  className="md:menu-hover px-2 font-medium text-gray-700 text-lg"
                >
                  Our Services
                </a>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </div>
              <div className="invisible absolute z-50 flex w-max flex-col text-lg bg-white py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                <a
                  href="/ICS-Integrated-Community-Support"
                  className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                >
                  Supportive Apartments
                </a>

                {/* <a
                  href="/copy-of-supportive-apartments-1"
                  className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                >
                  Group Homes
                </a> */}
                <a
                  href="/Housing-Stabilization-Services."
                  className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                >
                  Housing Stabilization Services
                </a>
                <a
                  href="/copy-of-housing-stabilization-services-1"
                  className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                >
                  Assisted Living
                </a>
                {/* <a
                  href="/copy-of-housing-stabilization-services"
                  className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                >
                  Positive Supports
                </a> */}
              </div>
            </div>
          </div>
          <Navbar.Link className="text-lg" href="/locations">
            Program Locations
          </Navbar.Link>
          <Navbar.Link className="text-lg" href="/referrals">
            Make a Referral
          </Navbar.Link>
          {/* <div className="mx-auto flex items-center justify-center">
            <div className="group relative cursor-pointer">
              <div className="flex items-center justify-between">
                <a
                  href="/careers"
                  className="menu-hover px-2 font-medium text-gray-700 text-lg"
                >
                  Careers
                </a>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </div>
              <div className="invisible absolute z-50 flex w-max flex-col text-lg bg-white py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                <a
                  href="/copy-of-international-staffing-positions"
                  className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                >
                  US-based Positions
                </a>

                <a
                  href="/copy-of-careers"
                  className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                >
                  International Based Applicants
                </a>
                <a
                  href="/"
                  className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                >
                  New Page
                </a>
              </div>
            </div>
          </div> */}
        </Navbar.Collapse>
      </Navbar>
    </section>
  );
};

export default Header;
