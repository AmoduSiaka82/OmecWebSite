import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Services = () => {
  return (
    <div>
      <Navbar />
      {/* header section */}
      <div
        className="w-full bg-center bg-cover h-[32rem]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/DYWWBXH/national-cancer-institute-L8t-WZT4-Cc-VQ-unsplash.jpg)",
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-white  lg:text-5xl">
              Services And Facilities
            </h1>
          </div>
        </div>
      </div>

      <section>
        <h1 class="text-3xl py-2 font-medium text-center leading-tight mt-0 mb-2 text-blue-600">
          Services offered by Opeyemi Mega Eye Center.
        </h1>
        <p className="text-center pb-5">
          Opeyemi Mega Eye Clinic has the best equipment to give you the
          clinical service you deserve
        </p>
        <section className="m-4 md:m-8 dark:bg-coolGray-800 dark:text-coolGray-100">
          {/* individual services */}
          <div
            style={{ background: "#fafafa", border: "1px solid #f0f0f0" }}
            className="container mx-auto grid justify-center gap-4 bg-grey-200 sm:grid-cols-2 lg:grid-cols-3"
          >
            <div
              style={{ border: "1px solid #f0f0f0" }}
              className="flex flex-col bg-grey-200 items-center p-4"
            >
              <img src="https://img.icons8.com/windows/32/000000/eye-disease.png" />
              <h3 className="my-3 text-3xl font-semibold">Clinicals</h3>
              <div className="space-y-1 leading-tight">
                <li>General ophthalmology clinic </li>
                <li>Glaucoma clinic</li>
                <li>Refraction service</li>
                <li>Glass dispensing</li>
                <li>Eye surgeries</li>
                <li>Preventive eye care</li>
                <li>School eye care</li>
                <li>Outreach reach service </li>
              </div>
            </div>
            {/* item */}
            <div
              style={{ border: "1px solid #f0f0f0" }}
              className="flex flex-col items-center p-4"
            >
              <img src="https://img.icons8.com/windows/32/000000/eye-checked.png" />
              <h3 className="my-3 text-3xl font-semibold">Investigations</h3>
              <div className="space-y-1 leading-tight">
                <li>Central Virtual Field</li>
                <li>Autorefraction</li>
                <li>Biometry</li>
                <li>Pachymetry</li>
                <li>Ocular Cohorence Tomography + Angiography</li>
                <li>A- scan</li>
                <li>B- scan</li>
                <li>Fundus Photography + Angiography</li>
                <li>Intraocular pressure</li>
              </div>
            </div>
            {/*
            <div
              style={{ border: "1px solid #f0f0f0" }}
              className="flex flex-col items-center p-4"
            >
              <img src="https://img.icons8.com/windows/32/000000/eyelashes-2d--v1.png" />
              <h3 className="my-3 text-3xl font-semibold">Sugery</h3>
              <div className="space-y-1 leading-tight">
                <ol>A standard operation theatre</ol>
                <ol>Two (2) opening microscopes and tables</ol>
                
              </div>
            </div>
            */}

            <div
              style={{ border: "1px solid #f0f0f0" }}
              className="flex flex-col items-center p-4"
            >
              <img src="https://img.icons8.com/windows/32/000000/hand-holding-heart.png" />
              <h3 className="my-3 text-3xl font-semibold">Our Facilites</h3>
              <div className="space-y-1 leading-tight">
                <li>20 bedded space</li>
                <li>A standard operation theatre</li>
                <li>Two (2) opening microscopes and tables</li>
                <li>Standard sterilizing facilities</li>
                <li>A pharmaceutical dispensary unit</li>
                <li>Two standard investigation rooms</li>
                <li>Three consulting rooms</li>
                <li>A standard nursing station</li>
                <li>OCT</li>
                <li>CVF</li>
                <li>A- scan</li>
                <li>Refractometer / kertometer</li>
                <li>Laser Machine</li>
                <li>Pressure Check Machine</li>
              </div>
            </div>
            {/*
            <div
              style={{ border: "1px solid #f0f0f0" }}
              className="flex flex-col items-center p-4"
            >
              <img src="https://img.icons8.com/material-outlined/24/000000/hospital-room--v1.png" />
              <h3 className="my-3 text-3xl font-semibold">Bed Spacing</h3>
              <div className="space-y-1 leading-tight">
                <p>Similique quas ea veniam</p>
                <p>Tempore quasi porro</p>
                <p>Blanditiis aut mollitia ex</p>
              </div>
            </div>
            
            
            <div
              style={{ border: "1px solid #f0f0f0" }}
              className="flex flex-col items-center p-4"
            >
              <img src="https://img.icons8.com/material-outlined/24/000000/ophthalmology.png" />
              <h3 className="my-3 text-3xl font-semibold">Consultancy</h3>
              <div className="space-y-1 leading-tight">
                <p>Similique quas ea veniam</p>
                <p>Tempore quasi porro</p>
                <p>Blanditiis aut mollitia ex</p>
              </div>
            </div>
            */}
          </div>
        </section>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
