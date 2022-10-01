import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AssignmentsMarks = () => {
    const data = [
        {
          name: "Page A",
          mark: 4000,
          quiz: 2400,
          amt: 2400
        },
        {
          name: "Page B",
          mark: 3000,
          quiz: 1398,
          amt: 2210
        },
        {
          name: "Page C",
          mark: 2000,
          quiz: 9800,
          amt: 2290
        },
        {
          name: "Page D",
          mark: 2780,
          quiz: 3908,
          amt: 2000
        },
        {
          name: "Page E",
          mark: 1890,
          quiz: 4800,
          amt: 2181
        },
        {
          name: "Page F",
          mark: 2390,
          quiz: 3800,
          amt: 2500
        },
        {
          name: "Page G",
          mark: 3490,
          quiz: 4300,
          amt: 2100
        }
      ];
    return (
        <div className='mt-36'>
            <h1 className='text-4xl underline mb-6 font-bold'>Marks</h1>
            <LineChart
                width={800}
                height={400}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
            }}
            >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
                type="monotone"
                dataKey="quiz"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="mark" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default AssignmentsMarks;