import React, { useState, useEffect } from 'react';
import './Donates.css';
import topicImage from './kunsho.jpg';
import movingPic from './tor.jpeg';


const Donates = (props) => {
    const aim = 1000000; // Adjust the goal amount
    const [reached, setReached] = useState(900000);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        const calculatedPercentage = parseInt((reached / aim) * 100, 10);
        setPercentage(calculatedPercentage > 100 ? 100 : calculatedPercentage);
    }, [reached]);

    const progressBarStyle = {
        width: `${percentage}%`,
        backgroundColor: 'pink'
    };

    const movingPicContainerStyle = {
        right: `${percentage}%`,
    };

    return (
        <div className="donates">
            <img
                src={topicImage}
                id='topicImage'
                alt="topicImage"
                className="topic-image"
            />
            <div className='two'>
                <h3 >{percentage}% הושגו</h3>
                <h1 > ₪ {reached} </h1></div>
            <div className="progress-container">
                <span id="progressBar" style={progressBarStyle}></span>
                <div
                    id="movingPicContainer"
                    className="moving-pic-container"
                    style={movingPicContainerStyle}
                >
                    <img
                        src={movingPic}
                        alt={`Progress Icon - ${percentage}% completed`}
                        className="progress-icon"
                    />
                </div>
            </div>
            <h1>מתוך 1,000,000 </h1>
            <h3>מספר התורמים שתרמו: {props.sum}</h3>
        </div>
    );
};

export default Donates;
