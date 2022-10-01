import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const PhoneBar = () => {
    const [phones, setPhone] = useState ([]);
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res .json())
        // .then(data => setPhone(data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneLoaded = data.data.data;
            const phoneData = phoneLoaded.map(phone => {
                const parts = phone.slug.split('-');
                const price = parseInt(parts[1]);
                const perPhone = {
                    name : phone.phone_name,
                    price : price
                }
                return perPhone
            })
            setPhone(phoneData)
            
        })
    

    }, [])

    return (
        <div>
            <h1 className='text-4xl underline mt-48 mb-6 font-bold'>Phone Price</h1>
            <BarChart width={500} height={200} data={phones}>
            <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </BarChart>
        </div>
    );
};

export default PhoneBar;