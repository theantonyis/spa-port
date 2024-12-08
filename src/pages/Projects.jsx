import { useState } from 'react';

const projects = [
    { id: 1, name: 'Google', category: 'Web', image: 'google.png' },
    { id: 2, name: 'Brawl Stars', category: 'Mobile', image: 'browl.jpg' }, // Оновлено зображення на 'brawl-stars.jpg'
    { id: 3, name: 'Facebook', category: 'Web', image: 'facebook.png' },
    { id: 4, name: 'Dota 2', category: 'Game', image: 'dota2.png' },
];

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Projects</h1>
            <div className="mb-4">
                <button
                    onClick={() => setFilter('All')}
                    className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-all"
                >
                    All
                </button>
                <button
                    onClick={() => setFilter('Web')}
                    className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-all"
                >
                    Web
                </button>
                <button
                    onClick={() => setFilter('Mobile')}
                    className="px-4 py-2 mr-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-all"
                >
                    Mobile
                </button>
                <button
                    onClick={() => setFilter('Game')}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-all"
                >
                    Game
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map(project => (
                    <div key={project.id} className="p-4 bg-gray-200 dark:bg-gray-800 rounded-lg text-center">
                        <img src={`./assets/${project.image}`} alt={project.name} className="w-full h-32 object-cover mb-2" />
                        <h2 className="text-xl font-bold">{project.name}</h2>
                        <p>{project.category}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
