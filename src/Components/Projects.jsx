import projectdetails from "../Models/projectdetails";


const Projects = () => {
    return (
        <div className="projects bg-gradient-to-r from-blue-500 to-indigo-500 animate-gradient p-10">
            <h1 className="text-4xl font-bold text-white text-center py-10">Projects</h1>
            <div className="projects-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {projectdetails.map((project) => (
                    <div className="project bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between" key={project.id}>
                        <img className="w-full h-48 object-cover rounded-md mb-4" src={project.image} alt={project.title} />
                        <div className="flex flex-col justify-between h-full bg-white rounded-lg shadow-lg p-6">
                            <div>
                                <h2 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h2>
                                <p className="text-gray-600">{project.description}</p>
                            </div>
                            <a className="text-blue-500 hover:text-blue-700 font-bold mt-4" href={project.link} target="_blank" rel="noreferrer">View on GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
