import React from 'react';

const Collaborate = () => {
    return (
        <>
            <div className="bg-gradient-to-t from-transparent to-black p-4 md:p-8">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-4 md:mb-0">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/029/711/176/non_2x/developer-with-ai-generated-free-png.png"
                            alt="Profile Picture"
                            className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto rounded-full shadow-lg mx-auto"
                        />
                    </div>
                    <div className="md:w-1/2 text-center md:text-left p-4 md:p-8">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl text-white mb-4">Collaborate with us</h1>
                        <p className="text-white mb-4 text-sm md:text-base lg:text-lg">
                            Looking for a skilled contract software engineer to drive your project forward? With extensive experience in Application support, .NET desktop development, Web development and pipeline deployments I offer a proven track record in developing high-performance software solutions and optimizing deployment processes. I bring a collaborative approach to ensure seamless integration with your team and effective communication throughout the project. Committed to delivering timely and high-quality results, I focus on understanding your unique business needs and aligning solutions to achieve your goals. Let's discuss how we can work together to bring your vision to life.
                        </p>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 transition">
                            Contact Me
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Collaborate;
