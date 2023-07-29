import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Appointment = () => {
  return (
    <div>
      <Navbar />
      <div
        className="w-full bg-center bg-cover h-[32rem]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/hmRbX92/eric-rothermel-Fo-KO4-Dp-Xam-Q-unsplash.jpg)",
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-black  lg:text-5xl">
              Appointment
            </h1>
          </div>
        </div>
      </div>

      <section class="w-full max-w-2xl px-6 py-4 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 class="text-3xl font-semibold text-center text-gray-800 dark:text-white">
          Book an appointment
        </h2>
        <p class="mt-3 text-center text-gray-600 dark:text-gray-400">
          Contact us with any of the following means, or just send an email.
        </p>

        <div class="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
          <a
            href="#"
            class="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
          >
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"
              />
            </svg>

            <span class="mt-2">
              No 4B, Sabo Line Isale
              <br />
              Opposite Temitope Hospital
              <br />
              Amilegbe
              <br />
              Ilorin, Kwara State
              <br />
              Nigeria
            </span>
          </a>

          <a
            href="#"
            class="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
          >
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>

            <span class="mt-2">+234 814 6416 676</span>
          </a>

          <a
            href="#"
            class="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-500"
          >
            <svg
              class="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            
            <span class="mt-2">omechsop@gmail.com</span>
          </a>
        </div>

        <form
          class="mt-6 "
          target="_top"
          action="mailto:adetifaboluwatife@gmail.com"
          method="post"
          encType="text/plain"
        >
          <div class="items-center -mx-2 md:flex">
            <div class="w-full mx-2">
              <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Name
              </label>

              <input
                required
                class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="text"
              />
            </div>

            <div class="w-full mx-2">
              <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Email
              </label>

              <input
                required
                class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="email"
              />
            </div>
          </div>

          <div class="items-center -mx-2 md:flex">
            <div class="w-full mx-2">
              <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Phone
              </label>

              <input
                required
                class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="text"
              />
            </div>

            <div class="w-full mx-2">
              <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
                Preferred Appointment Date
              </label>

              <input
                required
                class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                type="date"
              />
            </div>
          </div>

          <div class="w-full mt-4">
            <label class="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">
              Brief History of the Eye
            </label>

            <textarea
              required
              class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            ></textarea>
          </div>

          <div class="flex justify-center mt-6">
            <button class="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Send Message
            </button>
          </div>
          <button
            style={{ color: "white", background: "blue" }}
            type="submit"
            className="text-red-600 px-3 py-2 font-semibold rounded "
          >
            Submit
          </button>
        </form>
      </section>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Appointment;
