import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { skill: 'JavaScript', level: 85 },
    { skill: 'React', level: 90 },
    { skill: 'CSS', level: 75 },
];

const Skills = () => {
    return (
        <section>
            <h1>Skills</h1>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <XAxis dataKey="skill" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="level" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </section>
    );
};

export default Skills;