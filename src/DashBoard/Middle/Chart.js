import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Chart = () => {


    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (percentage < 80) {
                setPercentage(percentage + 1);
            }
        }, 50);
    }, [percentage]);



    return (
        <div >
            {/* <h4>Circular progress bar in React </h4> */}
            <div style={{ width: 125, height: 125 }}>
                <CircularProgressbar style={{}} value={percentage} text={`${percentage}%`} />
            </div>
        </div>
    );
};

export default Chart;