import React from 'react';

const Udata = [{
    name: "Saiganesh Angadi",
    designation: "Software Developer",
    profilePicture: "https://lh3.googleusercontent.com/pw/AP1GczNQKVK2IKRFndSmdW0Vduljtzv5iZU3-qEhPP1mwLoSpqJt_qwHmwpysrrPeL18J1Oy836Xiwe5wSBlsTyqxLjuvECgQTSQRz50foU6TI7W8FSP44sK4cD54GpJfJPTM-acwzrOFPakexmM2Z2fuYZFqCFTpqjn8zZvXt4-P11CgMsi9K5Uz_0SvJ-VIlvBdbr6r3oQ5eFT0VbcSp1m0bH3VTV_VwJGEBm27iahoLjuJ66ycnRIpZDULnYOtJJa-Bzz5f00dagWHmZ5R3We7b06oKPvnUYkZp0unp5u1-esjgKI9D691uA0LzdYPVV8-71K6sdHGJphKygZPv-YIBidH1vblrrdMwEulXXg3P2UOfqHYom8l3-8sAvEEpzfDvv7lhN4XdhOdk-p4DaBV88A8o79SB7qcQJegWU0PML_Rd6mZmJKA2Ke0i7pdd1JXeSQdh9E2l3mMWvzj-uhqhSPnWVpP9-cLR0mUCpTXydq1G1ca2__rtQoKT2i0jhhJ7ihM5-tNTwfsve7k5bICzj77KtW4160w-mOv_mkHs-Tkio9wdfl4Cqnb1egaxIzUBjYxJVvTZkqMYivVa7qJTXgVP4h8RdpU-fXbmMxewOSGERbG_B7GLjA8TXHSVsm2sd5ZlvrqqF2xTq-xE9agxPj58pE8anRuvquJEZkPWNf0ZHMHSgNCn3ZUwuRJf7UT5FOHX0nWqlFhjWX0e7L_C_P3gVnNrEMnok0UlkqCPMhPvN7e7bDQB3A0LcIaHt9zDmFv0EHITbSo6Dqnd_MZam2J6NFYKEXYDN9L3HZgjmcVJ1tLHFBB_QWcTMs1nyanEwCIuz_hgaHnYjZPHM8xc2yJI-KpkZ6KWfEwfC0KTxyTy3iEj2UBg9v_bAB_lYPSac20reFuAPHFGXzMKQHMlpNBnM=w685-h913-s-no-gm?authuser=0",
    github: "https://www.github.com/gani-23",
    email: "saiganesh7989@gmail.com",
    degree: "Major in Computer Science and Engineering",
}];

const StartIntro = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 animate-gradient h-screen flex justify-center items-center">
            <div className="text-center">
                <div className="p-2 mb-6">
                    <img
                        src={Udata[0].profilePicture}
                        alt="Profile Picture"
                        className="w-64 h-auto md:w-96 lg:w-1/2 rounded-full shadow-lg mx-auto"
                    />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">{Udata[0].name}</h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4">{Udata[0].designation}</h2>
                <p className="text-base md:text-lg lg:text-xl text-gray-300">
                    {Udata[0].degree}
                </p>
                <div className='p-4'>
                    <button className="bg-white text-indigo-500 hover:bg-indigo-500 hover:text-white font-bold py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-full focus:outline-none focus:shadow-outline transi</div>tion duration-300">
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StartIntro;
