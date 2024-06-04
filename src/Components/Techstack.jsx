import React from 'react';

const TechStack = () => {
    const Skills = [
        'JavaScript', 'React JS', 'NodeJS', 'Angular', 'Python', 'Java', 'C#', 'SQL',
        '.NET', 'Spring boot', 'Hibernate', 'Flask', 'Django', 'MySQL', 'PostgreSQL', 'Microsoft SQL',
        'AWS', 'Git', 'Fork', 'SourceTree', 'Jira', 'Canva', 'Adobe Illustrator', 'Unreal Engine 5',
        'XAML', 'CMAKE', 'WPF', 'Virtual machines', 'Burp suite', 'SQL injection', 'Maltego', 'Vercel'
    ];
    return (
        <>
        
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 min-h-screen flex justify-center items-center">
            <div className='md:py-12'>
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Tech Stack</h1>
                    <div className="flex flex-wrap justify-center gap-4 m-10">
                        {Skills.map((skill, index) => (
                            <div key={index} className="skill-badge bg-white text-indigo-500 font-bold py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-full m-2 shadow-md transition duration-300 transform hover:scale-105">
                                {skill}
                            </div>
                        ))}
                    </div>
                
                </div>
            </div>
            </div>
        </>
    );
};
export default TechStack;