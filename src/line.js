import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

const LineChart = () => {
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
                        x: data.map(item => item.year),
                        y: data.map(item => item.intensity),
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: 'blue' }
                    },
                ]}
                layout={{
                    width: 800,
                    height: 600,
                    title: 'Line Chart',
                    xaxis: { title: 'Year' },
                    yaxis: { title: 'Intensity' }
                }}
            />
        </div>
    );
};

export default LineChart;
