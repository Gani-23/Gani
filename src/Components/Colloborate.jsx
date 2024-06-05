import React from 'react';

const Collaborate = () => {
    return (
       
            <div className="bg-gradient-to-t from-transparent to-black h-1/2">
                <div className="flex">
                    <div className="w-1/2">
                    <img
                        src="./src/assets/res.png"
                        alt="Profile Picture"
                        className="w-64 h-auto md:w-96 lg:w-1/2 rounded-full shadow-lg mx-auto hover:transform-gyroscope"
                    />                    </div>
                    <div className="w-1/2">
                    <div className="p-10">
                    <h1 className="text-5xl text-white">Collaborate with us</h1>
                        <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus ut dolor laoreet venenatis. Ut sit amet nunc quis nisi ultricies egestas. Nulla facilisi. Nam ac dui nec turpis ultrices ultricies. Nam nec ex nec ligula lacinia lacinia. Sed nec nisi nec elit malesuada lobortis. Donec nec velit nec nunc lacinia pretium. Nullam nec purus ut dolor laoreet venenatis. Ut sit amet nunc quis nisi ultricies egestas. Nulla facilisi. Nam ac dui nec turpis ultricies ultricies. Nam nec ex nec ligula lacinia lacinia. Sed nec nisi nec elit malesuada lobortis. Donec nec velit nec nunc lacinia pretium.</p>
                        <button className="bg-blue-500 text-white p-2 rounded">Contact Us</button>
                    </div>
                        
                    </div>
                </div>
            </div>
       
    );
};

export default Collaborate;