import React from 'react';

const TechStack = () => {
  const Skills = [
    ' Python', 'Java', 'JavaScript', 'C#', 'SQL',
    '.NET', 'Spring boot', 'Hibernate', 'Angular', 'NodeJS', 'React JS', 'Flask', 'Django',
    'MySQL', 'PostgreSQL', 'Microsoft SQL',
    'Tools: AWS', 'Git', 'Fork', 'SourceTree', 'Jira', 'Canva', 'Adobe Illustrator', 'Unreal Engine 5',
    'Other: XAML', 'CMAKE', 'WPF', 'Virtual machines', 'Burp suite', 'SQL injection', 'Maltego', 'Vercel'
  ];
return (
<div className="bg-gradient-to-r from-blue-500 to-indigo-500 min-h-screen flex justify-center items-center">
    <div className="text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Tech Stack</h1>
        <div className="flex flex-wrap justify-center gap-4 m-10">
            {Skills.map((skill, index) => (
                <div key={index} className="skill-badge bg-white text-indigo-500 font-bold py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-full m-2 shadow-md transition duration-300 transform hover:scale-105">
                    {skill}
                </div>
            ))}
        </div>
        <div className="text-white mt-8">
            <p className="mb-2">Skill Levels:</p>
            <div className="flex items-center justify-center gap-4">
                <div className="flex items-center">
                    <div className="w-4 h-4 bg-indigo-500 rounded-full mr-2"></div>
                    <p>Advanced</p>
                </div>
                <div className="flex items-center">
                    <div className="w-4 h-4 bg-indigo-200 rounded-full mr-2"></div>
                    <p>Intermediate</p>
                </div>
                <div className="flex items-center">
                    <div className="w-4 h-4 bg-white rounded-full mr-2"></div>
                    <p>Beginner</p>
                </div>
            </div>
        </div>
    </div>
</div>
);
};
export default TechStack;