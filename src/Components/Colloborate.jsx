import React from 'react';

const Collaborate = () => {
    return (
        <>
        <div className="bg-gradient-to-t from-transparent to-black ">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/029/711/176/non_2x/developer-with-ai-generated-free-png.png"
                        alt="Profile Picture"
                        className="w-full md:w-64 lg:w-96 h-auto rounded-full shadow-lg mx-auto hover:transform-gyroscope"
                    />
                </div>
                <div className="md:w-1/2 p-4">
                    <h1 className="text-3xl md:text-5xl text-white mb-4">Collaborate with us</h1>
                    <p className="text-white mb-4">Looking for a skilled contract software engineer to drive your project forward? With extensive experience in Application support, .NET desktop development, Web development and pipeline deployments I offer a proven track record in developing high-performance software solutions and optimizing deployment processes. I bring a collaborative approach to ensure seamless integration with your team and effective communication throughout the project. Committed to delivering timely and high-quality results, I focus on understanding your unique business needs and aligning solutions to achieve your goals. Let's discuss how we can work together to bring your vision to life.</p>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded">Contact Me</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Collaborate;
