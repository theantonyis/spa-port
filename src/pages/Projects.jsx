import { useState } from 'react';

const projects = [
    { id: 1, name: 'Project A', category: 'Web' },
    { id: 2, name: 'Project B', category: 'Mobile' },
    { id: 3, name: 'Project C', category: 'Web' },
    { id: 4, name: 'Project D', category: 'Game' },
];

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(project => project.category === filter);

    return (
        <section>
            <h1>Projects</h1>
            <div>
                <button onClick={() => setFilter('All')}>All</button>
                <button onClick={() => setFilter('Web')}>Web</button>
                <button onClick={() => setFilter('Mobile')}>Mobile</button>
                <button onClick={() => setFilter('Game')}>Game</button>
            </div>
            <ul>
                {filteredProjects.map(project => (
                    <li key={project.id}>{project.name} - {project.category}</li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
