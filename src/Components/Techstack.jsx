import React from 'react';

const TechStack = () => {
    const Skills = [
        'JavaScript', 'React JS', 'NodeJS', 'Angular', 'Python', 'Java', 'C#', 'SQL',
        '.NET', 'Spring boot', 'Hibernate', 'Flask', 'Django', 'MySQL', 'PostgreSQL', 'Microsoft SQL',
        'AWS', 'Git', 'Fork', 'SourceTree', 'Jira', 'Canva', 'Adobe Illustrator', 'Unreal Engine 5',
        'XAML', 'CMAKE', 'WPF', 'Virtual machines', 'Burp suite', 'SQL injection', 'Maltego', 'Vercel'
    ];
    return (
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 min-h-screen flex justify-center items-center">
        <div className="container mx-auto p-4 md:py-12">
            <div className="text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">Skills</h1>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                    {Skills.map((skill, index) => (
                        <div 
                            key={index} 
                            className="bg-white text-indigo-500 font-bold py-1 px-3 sm:py-2 sm:px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-full shadow-md transition transform hover:scale-105 text-xs sm:text-sm md:text-base lg:text-lg"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    );
};
export default TechStack;