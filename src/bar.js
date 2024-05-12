import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

const BarChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/data');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h1>Data Visualization Dashboard</h1>
            <Plot
                data={[
                    {
                        x: data.map(item => item.country),
                        y: data.map(item => item.intensity),
                        type: 'bar'
                    },
                ]}
                layout={{
                    width: 800,
                    height: 600,
                    title: 'Bar Chart',
                    xaxis: { title: 'Country' },
                    yaxis: { title: 'Intensity' }
                }}
            />
        </div>
    );
};

export default BarChart;
