import React, { Profiler } from 'react';

const Udata = [{
    name: "Saiganesh Angadi",
    designation: "Software Developer",
    profilePicture: "https://avatars.githubusercontent.com/u/47131861?v=4",
    github: "https://www.github.com/gani-23",
    email: "saiganesh7989@gmail.com",
    degree: "Major in Computer Science and Engineering",
}];

const StartIntro = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 animate-gradient h-80vh flex justify-center items-center">
            <div className="text-center">
                <div className="p-2 mb-6">
                    <img
                        src={Udata[0].profilePicture}
                        alt="Profile Picture"
                        className="w-64 h-auto md:w-96 lg:w-1/2 rounded-full shadow-lg mx-auto hover:transform-gyroscope"
                    />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">{Udata[0].name}</h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4">{Udata[0].designation}</h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-300">
                    {Udata[0].degree}
                </p>
                <div className='p-4'>

                    <button className="bg-white text-indigo-500 hover:bg-indigo-500 hover:text-white font-bold py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300">
                        <a href="https://github.com/Gani-23">Get started</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StartIntro;

