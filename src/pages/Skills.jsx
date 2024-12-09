import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { skill: 'JavaScript', level: 85 },
    { skill: 'React', level: 90 },
    { skill: 'CSS', level: 75 },
];

const Skills = () => {
    return (
        <section className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">Skills</h1>
            <ResponsiveContainer width="90%" height={300}>
                <BarChart data={data} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                    <XAxis
                        dataKey="skill"
                        tick={{ fill: '#4a5568' }}
                        tickLine={false}
                        axisLine={{ stroke: '#a0aec0' }}
                    />
                    <YAxis
                        tick={{ fill: '#4a5568' }}
                        tickLine={false}
                        axisLine={{ stroke: '#a0aec0' }}
                    />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#2d3748', border: 'none', borderRadius: '8px', color: '#f7fafc' }}
                        itemStyle={{ color: '#f7fafc' }}
                    />
                    <Bar dataKey="level" fill="#63b3ed" radius={[8, 8, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </section>
    );
};

export default Skills;
