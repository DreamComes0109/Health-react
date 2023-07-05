import { Button, Footer } from "flowbite-react";

export default function FooterWithSocialMediaIcons() {
  return (
    <section>
      <Footer container className="footer-bg rounded-none px-16">
        <div className="w-full">
          <div className="flex justify-between mb-32">
            <div className="w-2/5">
              <a href="/" className="h-24 flex items-center">
                <img src="images/logo_footer.png" alt="" className="h-24" />
                <div className="text-white text-lg font-bold">
                  <p>Simple</p>
                  <p>Health</p>
                  <p>Services</p>
                </div>
              </a>
              <p className="text-white pt-8 w-2/3">
                Working to holistically enhance the quality of life of people in
                our community with mental and physical disabilities by
                preserving dignity and fostering compassion.
              </p>
              <div className="grid grid-cols-12 gap-1 pt-8">
                <div className="col-span-5">
                  <svg
                    fill="rgb(49 196 141)"
                    height="48px"
                    width="48px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 297 297"
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
                        <path d="M148.5,0C87.43,0,37.747,49.703,37.747,110.797c0,91.026,99.729,179.905,103.976,183.645 c1.936,1.705,4.356,2.559,6.777,2.559c2.421,0,4.841-0.853,6.778-2.559c4.245-3.739,103.975-92.618,103.975-183.645 C259.253,49.703,209.57,0,148.5,0z M148.5,272.689c-22.049-21.366-90.243-93.029-90.243-161.892 c0-49.784,40.483-90.287,90.243-90.287s90.243,40.503,90.243,90.287C238.743,179.659,170.549,251.322,148.5,272.689z"></path>{" "}
                        <path d="M148.5,59.183c-28.273,0-51.274,23.154-51.274,51.614c0,28.461,23.001,51.614,51.274,51.614 c28.273,0,51.274-23.153,51.274-51.614C199.774,82.337,176.773,59.183,148.5,59.183z M148.5,141.901 c-16.964,0-30.765-13.953-30.765-31.104c0-17.15,13.801-31.104,30.765-31.104c16.964,0,30.765,13.953,30.765,31.104 C179.265,127.948,165.464,141.901,148.5,141.901z"></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <p className="text-white text-lg">
                    Simple Health Services 4445 W 77th St Suite 106
                    <br />
                    Edina, MN 55435.
                  </p>
                </div>
                <div className="col-span-4">
                  <svg
                    viewBox="0 0 48 48"
                    id="b"
                    height="48px"
                    width="48px"
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
                      <path
                        className="c"
                        d="m19.308,12.467c-.4234-1.4115-.7215-2.8773-.8813-4.3843-.1571-1.4812-1.449-2.5826-2.9385-2.5826h-6.9092c-1.7767,0-3.1454,1.5345-2.989,3.3043,1.5754,17.8285,15.7771,32.0302,33.6056,33.6056,1.7698.1564,3.3043-1.2073,3.3043-2.9839v-6.1595c0-2.2488-1.1015-3.5362-2.5826-3.6932-1.507-.1598-2.9728-.4579-4.3843-.8813-1.7266-.5179-3.5957-.0304-4.8704,1.2442l-2.9566,2.9566c-5.326-2.8825-9.7164-7.2729-12.5989-12.5989l2.9566-2.9567c1.2746-1.2746,1.7621-3.1438,1.2442-4.8703Z"
                      ></path>
                    </g>
                  </svg>
                  <p className="text-white text-lg">
                    Phone <br />
                    763-346-4942
                  </p>
                </div>
                <div className="col-span-3">
                  <svg
                    height="48px"
                    width="48px"
                    version="1.1"
                    id="_x32_"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
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
                        <path
                          className="st0"
                          d="M429.684,163.714V78.711L350.958,0h-4.916h-179.11v148.673c-12.768-10.612-29.068-17.136-46.961-17.136 h-16.586c-20.396-0.015-38.776,8.324-51.953,21.734C38.239,166.674,30.162,185.2,30.17,205.55v221.216 c0.008,47.015,38.219,85.218,85.235,85.234h281.192c47.015-0.016,85.219-38.219,85.234-85.234V242.262 C481.816,206.972,460.298,176.651,429.684,163.714z M190.676,23.743h150.451l1.213,1.213V87.8h62.859l0.742,0.742v69.027 c-3.068-0.34-6.183-0.541-9.344-0.541H190.676V23.743z M56.278,205.55c0-26.016,21.092-47.108,47.107-47.108h16.586 c26.016,0,47.108,21.092,47.108,47.108v119.898c0,26.015-21.092,47.108-47.108,47.108h-16.586 c-26.016,0-47.107-21.093-47.107-47.108V205.55z M454.926,426.766c0,32.214-26.116,58.33-58.33,58.33H115.404 c-32.214,0-58.33-26.116-58.33-58.33v-47.818c12.436,10.782,28.604,17.351,46.311,17.351h16.586 c39.07,0,70.851-31.782,70.851-70.851v-19.376v-77.165v-44.975h205.774c32.214,0,58.33,26.116,58.33,58.331V426.766z"
                        ></path>{" "}
                        <path
                          className="st0"
                          d="M236.98,386.908c-8.494,0-15.381,6.894-15.381,15.389c0,8.494,6.887,15.38,15.381,15.38 c8.494,0,15.388-6.886,15.388-15.38C252.367,393.802,245.473,386.908,236.98,386.908z"
                        ></path>{" "}
                        <path
                          className="st0"
                          d="M316.131,386.908c-8.495,0-15.381,6.894-15.381,15.389c0,8.494,6.886,15.38,15.381,15.38 c8.494,0,15.388-6.886,15.388-15.38C331.519,393.802,324.625,386.908,316.131,386.908z"
                        ></path>{" "}
                        <path
                          className="st0"
                          d="M395.283,386.908c-8.494,0-15.381,6.894-15.381,15.389c0,8.494,6.886,15.38,15.381,15.38 c8.502,0,15.388-6.886,15.388-15.38C410.671,393.802,403.784,386.908,395.283,386.908z"
                        ></path>{" "}
                        <path
                          className="st0"
                          d="M236.98,336.771c-8.494,0-15.381,6.894-15.381,15.388c0,8.494,6.887,15.381,15.381,15.381 c8.494,0,15.388-6.887,15.388-15.381C252.367,343.665,245.473,336.771,236.98,336.771z"
                        ></path>{" "}
                        <path
                          className="st0"
                          d="M316.131,336.771c-8.495,0-15.381,6.894-15.381,15.388c0,8.494,6.886,15.381,15.381,15.381 c8.494,0,15.388-6.887,15.388-15.381C331.519,343.665,324.625,336.771,316.131,336.771z"
                        ></path>{" "}
                        <path
                          className="st0"
                          d="M395.283,336.771c-8.494,0-15.381,6.894-15.381,15.388c0,8.494,6.886,15.381,15.381,15.381 c8.502,0,15.388-6.887,15.388-15.381C410.671,343.665,403.784,336.771,395.283,336.771z"
                        ></path>{" "}
                        <path
                          className="st0"
                          d="M236.98,286.649c-8.494,0-15.381,6.894-15.381,15.388s6.887,15.381,15.381,15.381 c8.494,0,15.388-6.887,15.388-15.381S245.473,286.649,236.98,286.649z"
                        ></path>{" "}
                        <path
                          className="st0"
                          d="M316.131,286.649c-8.495,0-15.381,6.894-15.381,15.388s6.886,15.381,15.381,15.381 c8.494,0,15.388-6.887,15.388-15.381S324.625,286.649,316.131,286.649z"
                        ></path>{" "}
                        <path
                          className="st0"
                          d="M395.283,286.649c-8.494,0-15.381,6.894-15.381,15.388s6.886,15.381,15.381,15.381 c8.502,0,15.388-6.887,15.388-15.381S403.784,286.649,395.283,286.649z"
                        ></path>{" "}
                        <path
                          className="st0"
                          d="M396.055,231.696H237.768c-8.741,0-15.828,7.088-15.828,15.829c0,8.742,7.087,15.829,15.828,15.829h158.288 c8.742,0,15.829-7.087,15.829-15.829C411.884,238.784,404.797,231.696,396.055,231.696z"
                        ></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <p className="text-white text-lg">
                    Fax <br />
                    6122068580
                  </p>
                </div>
              </div>
            </div>
            <div className="sm:mt-12 sm:gap-6">
              <div>
                <Footer.Title
                  title="Quick Links"
                  className="text-white text-xl"
                />
                <Footer.LinkGroup col className="text-white">
                  <Footer.Link href="/our-services" className=" text-lg">
                    Services
                  </Footer.Link>
                  <Footer.Link href="/locations" className=" text-lg">
                    Locations
                  </Footer.Link>
                  <Footer.Link href="/contact-us" className=" text-lg">
                    Contact
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
            <div className="sm:mt-12">
              <Footer.Title title="Connect" className="text-white text-xl" />
              <Footer.LinkGroup col className="text-white">
                <Footer.Link href="#" className=" text-lg">
                  Subscribe to our newsletter
                </Footer.Link>
              </Footer.LinkGroup>
              <div className="flex mt-6">
                <input
                  placeholder="Email*"
                  className=" p-2 rounded-l-lg rounded-r-none"
                />
                <Button className="rounded-l-none bg-green-400 hover:bg-green-500">
                  <svg
                    viewBox="0 0 1024 1024"
                    width="15px"
                    height="21px"
                    className="icon"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z"
                        fill="white"
                      ></path>
                    </g>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex pb-12 sm:items-center sm:justify-between">
            <Footer.Copyright
              by="Simple Health Services.  All Rights Reserved."
              className="text-white"
              href="#"
              year={2023}
            />
            <div className="mt-4 text-white flex space-x-6 sm:mt-0 sm:justify-center">
              <p>Notice of Use &nbsp;|</p>
              <p>Terms of Use &nbsp;|</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </Footer>
    </section>
  );
}
