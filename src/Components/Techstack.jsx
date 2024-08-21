import React from 'react';

const TechStack = () => {
    const Skills = [
        // Programming Languages
        'JavaScript', 'Python', 'Java', 'C#', 'SQL', 'Bash Scripting',
    
        // Web Frameworks & Libraries
        'React JS', 'NodeJS', 'Angular', 'Next.js', 'Flask', 'Django', 'Spring Boot', 'Hibernate',
    
        'Tailwind CSS', 'HTML', 'CSS', 'Avalonia UI', 'Reactive UI',
    
        // .NET Ecosystem
        '.NET', '.NET Core MVVM', 'WPF', 'XAML', 'Entity Framework', 'LINQ',
    
        // Cloud & DevOps
        'AWS', 'AWS Lambda', 'Docker', 'Jenkins', 'Kubernetes', 'Nginx',
    
        // Version Control & CI/CD
        'Git', 'GitHub', 'SourceTree', 'Fork', 'GitHub CI', 'Cake Build (CMake)', 'CI/CD',
    
        // Design & Development Tools
        'Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Canva', 'Unreal Engine 5',
    
        // Security & Monitoring
        'Burp Suite', 'SQL Injection', 'Maltego', 'Security Implementation', 'Monitoring and Alerting', 'Logging',
    
        // Database Technologies
        'MySQL', 'PostgreSQL', 'Microsoft SQL', 'MongoDB',
    
        // Engineering Practices
        'Agile Methodologies', 'Software Design', 'Unit Testing', 'Debugging', 'Automated Deployment', 'Backup and Recovery Procedure', 'Cloud Support Services'
    ];
    
    return (
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 min-h-screen flex justify-center items-center">
            <div className="container mx-auto p-4 md:py-12">
                <div className="text-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">SKILLS</h1>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                        {Skills.map((skill, index) => (
                            <div
                                key={index}
                                className="bg-white text-indigo-500 font-bold py-1 px-3 sm:py-2 sm:px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-full shadow-md transition transform hover:scale-105 text-xs sm:text-sm md:text-base lg:text-lg animate-bounce"
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