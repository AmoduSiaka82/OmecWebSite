import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      {/* header section */}

      <div
        className="w-full bg-center bg-cover h-[32rem]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/4KnKgf8/kaleb-tapp-J59w-WPn09-BE-unsplash.jpg)",
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-white  lg:text-5xl">
              About Us
            </h1>
          </div>
        </div>
      </div>
      {/* hero section */}
      <section>
        <section class="bg-white dark:bg-gray-800">
          <div class="container px-6 py-8 mx-auto">
            <div class="items-center lg:flex">
              <div class="lg:w-1/2">
                <h2 class="text-3xl font-bold text-gray-800 dark:text-gray-100">
                  Opeyemi Mega Eye Center
                </h2>
                <p class="mt-4 text-gray-500 dark:text-gray-400 lg:max-w-md">
                  Opeyemi Mega Eye Centre is a world class health facility
                  dedicated to providing all your Eye health needs, not only
                  curative but also preventives. We boast of cutting edge
                  equipment which aid in the diagnosis and treatment of medical
                  and surgical eye conditions, well-established Professional eye
                  hospital based in Ilorin, Kwara State. It is a 20-bed capacity
                  hospital that has all the units of a General Eye Hospital
                  including specialist service, high tech investigation
                  equipments and pharmacy.
                  <br />
                  We have highly trained and dedicated staff who provide
                  excellent care.
                  <br />
                  Our computerized systems ensures confidentiality and
                  continuity. Our hospital is well endowed with a team of
                  experts and professionals with some specialization in
                  delivering quality healthcare solutions with professionalism
                  and according to International standard with thorough
                  understanding of the Nigerian service requirements and
                  culture. We aim to set a standard for medical eye care hence
                  we continue updating and upgrading to ensure that you get the
                  best.
                </p>

                <div class="flex items-center mt-6 -mx-2">
                  <a class="mx-2" href="#" aria-label="Twitter">
                    <svg
                      class="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z" />
                    </svg>
                  </a>

                  <a class="mx-2" href="#" aria-label="Facebook">
                    <svg
                      class="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z" />
                    </svg>
                  </a>

                  <a class="mx-2" href="#" aria-label="Linkden">
                    <svg
                      class="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z" />
                    </svg>
                  </a>

                  <a class="mx-2" href="#" aria-label="Github">
                    <svg
                      class="w-5 h-5 text-gray-700 fill-current dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                    </svg>
                  </a>
                </div>
              </div>

              <div class="mt-8 lg:mt-0 lg:w-1/2">
                <div class="flex items-center justify-center lg:justify-end">
                  <div class="max-w-lg">
                    <img
                      class="object-cover object-center w-full h-64 rounded-md shadow"
                      src="https://image.freepik.com/free-photo/male-young-doctor-with-stethoscope-face-mask-isolated-white_155003-7109.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* stats */}
      <section>
        <section className="p-6 dark:bg-coolGray-800 dark:text-coolGray-100">
          <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">20</p>
              <p className="text-sm sm:text-base">Bedspaces</p>
            </div>

            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">4</p>

              <p className="text-sm sm:text-base">Specilaists</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <p className="text-4xl font-bold leading-none lg:text-6xl">5K</p>
              <p className="text-sm sm:text-base">Happy Patients</p>
            </div>
          </div>
        </section>
      </section>
      {/* doctors */}
      <h2 class="text-4xl text-center py-5 font-bold text-gray-800 dark:text-gray-100">
        Our Doctors
      </h2>
      <div class="items-center space-y-5 lg:flex">
        <div className="max-w-xs rounded-md mx-auto shadow-md dark:bg-coolGray-900 dark:text-coolGray-100">
          <img
            src="https://source.unsplash.com/random/300x300/?2"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-coolGray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl text-center font-semibold tracking-wide">
                Optician
              </h2>
              <p className="dark:text-coolGray-100 text-center font-medium">
                John Doe
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-xs rounded-md mx-auto shadow-md dark:bg-coolGray-900 dark:text-coolGray-100">
          <img
            src="https://source.unsplash.com/random/300x300/?2"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-coolGray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl text-center font-semibold tracking-wide">
                Optician
              </h2>
              <p className="dark:text-coolGray-100 text-center font-medium">
                John Doe
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-xs rounded-md mx-auto shadow-md dark:bg-coolGray-900 dark:text-coolGray-100">
          <img
            src="https://source.unsplash.com/random/300x300/?2"
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-coolGray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl text-center font-semibold tracking-wide">
                Optician
              </h2>
              <p className="dark:text-coolGray-100 text-center font-medium">
                John Doe
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* testimonials */}

      <section className="my-8">
        <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
          <h1 className="text-4xl font-semibold leading-none text-center">
            What our patients are saying about us
          </h1>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
          <div className="flex flex-col items-center mx-12 lg:mx-0">
            <div className="relative text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute top-0 left-0 w-8 h-8 dark:text-coolGray-700"
              >
                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
              </svg>
              <p className="px-6 py-1 text-lg italic">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus quibusdam, eligendi exercitationem molestias
                possimus facere.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="absolute bottom-0 right-0 w-8 h-8 dark:text-coolGray-700"
              >
                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
              </svg>
            </div>
            <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
            <p>Leroy Jenkins</p>
          </div>
          <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0">
            <div className="relative text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="absolute top-0 left-0 w-8 h-8 dark:text-coolGray-700"
              >
                <path
                  fill="currentColor"
                  d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"
                ></path>
                <path
                  fill="currentColor"
                  d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"
                ></path>
              </svg>
              <p className="px-6 py-1 text-lg italic">
                Accusantium illum cupiditate harum asperiores iusto quos quasi
                quis quae! Fugit doloribus, voluptatum quidem magnam velit
                excepturi nobis, reprehenderit ducimus incidunt quisquam quae
                veritatis, quos iure harum.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="absolute bottom-0 right-0 w-8 h-8 dark:text-coolGray-700"
              >
                <path
                  fill="currentColor"
                  d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"
                ></path>
                <path
                  fill="currentColor"
                  d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"
                ></path>
              </svg>
            </div>
            <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
            <p>Leroy Jenkins</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
