import React, { useState, useEffect } from 'react';

const Intro = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-indigo-500">
            <div className="absolute top-0 right-0 p-4 text-white text-l sm:text-s md:text-xl lg:text-xl xl:text-xl font-bold animate-fadeIn">
                {currentDate}
            </div>
            <div className="absolute top-6 right-0 p-4 text-white text-l sm:text-s md:text-xl lg:text-xl xl:text-xl font-bold animate-fadeIn">
                {currentTime}
            </div>

            <div className="flex flex-col justify-center items-center h-90vh w-full">
                <h1 className="text-white text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold animate-bounce" style={{ fontFamily: 'Arial, sans-serif' }}>Hello Mate,</h1>
                <h2 className="text-white text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-12 animate-slideIn" style={{ fontFamily: 'Verdana, sans-serif' }}>You are welcome here</h2>
                <button className="px-6 py-3 bg-white text-purple-500 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out animate-pulse sm:text-base md:text-lg lg:text-xl xl:text-2xl">Get Started</button>
            </div>
        </div>
    );
};

export default Intro;
