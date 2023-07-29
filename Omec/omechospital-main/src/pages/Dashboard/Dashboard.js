import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Dashboard = () => {
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
                            Dashboard
                        </h1>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Dashboard;