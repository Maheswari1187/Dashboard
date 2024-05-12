import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

const Chart = () => {
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
                        y: data.map(item => item.country),
                        mode: 'markers',
                        marker: {
                            size: data.map(item => item.intensity * 10),
                            color: data.map(item => item.likelihood),
                            colorscale: 'Viridis',
                            showscale: true
                        },
                        text: data.map(item => `Topic: ${item.topics}, Relevance: ${item.relevance}, Region: ${item.region}`),
                    },
                ]}
                layout={{
                    width: 800,
                    height: 600,
                    title: 'Bubble Chart',
                    xaxis: { title: 'Year' },
                    yaxis: { title: 'Country' },
                }}
            />
        </div>
    );
};

export default Chart;
