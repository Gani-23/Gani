import React from 'react';

const SelfIntro = () => {
    const userData = {
        name: "Saiganesh Angadi",
        designation: "Software Developer",
        profilePicture: "../assets/Loca.png",
        github: "https://www.github.com/gani-23",
        email: "saiganesh7989@gmail.com",
        phone: "+91 9182345999",
        address: "Bangalore, India",
    };

    return (
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-screen flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 shadow-md max-w-md">
                <div className="flex items-center justify-center">
                    <img src={userData.profilePicture} alt="Profile" className="rounded-full w-32 h-32" />
                </div>
                <div className="text-center mt-4">
                    <h1 className="text-3xl font-semibold text-gray-800">{userData.name}</h1>
                    <p className="text-lg text-gray-600">{userData.designation}</p>
                </div>
                <div className="mt-6">
                    <div className="flex justify-center space-x-4">
                        <a href={userData.github} className="text-blue-500 hover:underline">GitHub</a>
                        <span className="text-gray-400">|</span>
                        <a href={`mailto:${userData.email}`} className="text-blue-500 hover:underline">Email</a>
                    </div>
                    <p className="text-gray-600 mt-2">{userData.phone}</p>
                    <p className="text-gray-600">{userData.address}</p>
                </div>
            </div>
        </div>
    );
};

export default SelfIntro;
