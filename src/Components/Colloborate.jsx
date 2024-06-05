import React from 'react';

const Collaborate = () => {
    return (
        <div className="bg-gradient-to-t from-transparent to-black">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <img
                        src="./src/assets/res.png"
                        alt="Profile Picture"
                        className="w-full md:w-64 lg:w-96 h-auto rounded-full shadow-lg mx-auto hover:transform-gyroscope"
                    />
                </div>
                <div className="md:w-1/2 p-4">
                    <h1 className="text-3xl md:text-5xl text-white mb-4">Collaborate with us</h1>
                    <p className="text-white mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut dolor laoreet venenatis. Ut sit amet nunc quis nisi ultricies egestas. Nulla facilisi. Nam ac dui nec turpis ultrices ultricies. Nam nec ex nec ligula lacinia lacinia. Sed nec nisi nec elit malesuada lobortis. Donec nec velit nec nunc lacinia pretium. Nullam nec purus ut dolor laoreet venenatis. Ut sit amet nunc quis nisi ultricies egestas. Nulla facilisi. Nam ac dui nec turpis ultricies ultricies. Nam nec ex nec ligula lacinia lacinia. Sed nec nisi nec elit malesuada lobortis. Donec nec velit nec nunc lacinia pretium.</p>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default Collaborate;
