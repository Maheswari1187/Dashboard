import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import axios from 'axios';

const Pie= () => {
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
                        values: data.map(item => item.intensity),
                        labels: data.map(item => item.country),
                        type: 'pie',
                        textinfo: 'label+percent',
                        insidetextorientation: 'radial'
                    },
                ]}
                layout={{
                    width: 800,
                    height: 600,
                    title: 'Pie Chart',
                }}
            />
        </div>
    );
};

export default Pie;
