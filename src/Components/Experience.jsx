import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const islands = [
  {
    id: 1,
    name: "Contract Software Engineer",
    position: [12.9292731, 77.5824229],
    info: "Designed and developed high-performance cross-platform applications, optimizing responsiveness and user experience. Collaborated with clients to gather requirements and translate business needs into effective technical solutions. Developed and integrated RESTful APIs to enhance functionality and system interoperability. Utilized Git for project management and collaboration, ensuring seamless version control and code integrity. Conducted code reviews, providing feedback to maintain high-quality standards and foster continuous improvement."
  },
  {
    id: 2,
    name: "Software Development Engineer",
    position: [12.9246950, 77.6012962],
    info: "Supported and enhanced multi-platform applications (desktop, Android, iOS) using .NET and MVVM architecture, improving maintainability and user experience for a diverse client base. Developed a cross-platform tool using dependency injection, which reduced project switching time by 30% and boosted developer productivity. Performed bug fixes and feature updates in .NET applications to enhance system stability and performance. Collaborated with UI/UX teams to integrate new design assets using XAML, localization, and data binding within the MVVM framework. Optimized Cake build scripts for automated binary deployments into private containers, improving release efficiency. Resolved 4-5 critical issues and numerous bug fixes during reduced team availability, ensuring continued progress and adherence to project timelines."
  },
  { 
    id: 3, 
    name: 'AI Engineering Intern', 
    position: [43.0826188, -73.7853522], 
    info: `
      - **Developed and Optimized AI Models**: Contributed to the development and fine-tuning of machine learning models, achieving up to 84.5% accuracy in predictive tasks.
      - **Enhanced Data Handling**: Utilized Python for data preprocessing and analysis, significantly improving data quality and model performance with a reduction in data processing time by X%.
      - **Implemented Model Deployment**: Assisted in deploying machine learning models using AWS and Docker, facilitating scalable and efficient solutions with minimal downtime.
      - **Algorithm Improvement**: Optimized algorithms, leading to performance enhancements and achieving model accuracy improvements ranging between 85% to 100%.
      - **Collaborative Agile Environment**: Actively participated in Agile sprints and team meetings, contributing to timely project delivery and fostering effective cross-functional collaboration.
    `
  }
  // Add more islands as needed
];

const routes = [
  [islands[0].position, islands[1].position],
  [islands[1].position, islands[2].position],
  // Add more routes as needed
];

const Experience = () => {
  const [selectedIsland, setSelectedIsland] = useState(null);

  return (
  
<div className="relative flex flex-col min-h-screen bg-black rounded">
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-50">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center p-4 md:p-8 text-white">WORK EXPERIENCE</h1>
      <div className="flex-1">
      <MapContainer 
        center={[12.9246950, 77.6012962]} 
        zoom={50} 
        style={{ height: 'calc(100vh - 80px)', width: '100%' }}
      >
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {islands.map(island => (
        <Marker
          key={island.id}
          position={island.position}
          eventHandlers={{
          click: () => {
            setSelectedIsland(island);
          },
          }}
        >
          <Popup>
          <h2 className="text-xl font-semibold">{island.name}</h2>
          <div className="bg-white p-2 rounded-lg shadow-md">
            <p className="text-sm">{island.info}</p>
            <p className="text-xs text-gray-600">Contact me to know more.</p>
          </div>
          </Popup>
        </Marker>
        ))}
        {routes.map((route, index) => (
        <Polyline key={index} positions={route} color="blue" />
        ))}
      </MapContainer>
      </div>
      {selectedIsland && (
      <div className="absolute bottom-0 left-0 w-full bg-white p-4 shadow-lg md:max-w-lg md:left-1/2 md:-translate-x-1/2 rounded-t-lg">
        <h2 className="text-xl font-semibold">{selectedIsland.name}</h2>
        <div className="bg-gray-100 p-2 rounded-lg shadow-md">
        <p className="text-sm">{selectedIsland.info}</p>
        <p className="text-xs text-gray-600">Click on the map to explore more</p>
        </div>
      </div>
      )}
    </div>
    </div>
    
    );
};

export default Experience;
