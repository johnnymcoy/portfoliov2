import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import CSS from './ProgressBar.module.scss';

const colorArray = ['#7ea9e1', "#ed004f", "#00fcf0", "#d2fc00", "#7bff00", "#fa6900"];
function randomColor(){
    return colorArray[Math.floor(Math.random() * colorArray.length)];
}

function ProgressBar(props){
    const {size, strokeWidth, circleOneStroke, progress, percent, progressMax, text} = props;
    const circleRef = useRef(null);
    const [color, setColor] = useState('');
    const [offset, setOffset] = useState(0);

    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;
    let percentProgress;
    if(!percent)
    {
        percentProgress = (progress / progressMax) * 100;
    }
    
    useEffect(() => {
        let progressOffset
        if(percent)
        {
            progressOffset = ((100 - progress) / 100) * circumference;
        }
        else
        {
            progressOffset = (progress / progressMax) * circumference;
        }
        setOffset(progressOffset);
        circleRef.current.style = 'transition: stroke-dashoffset 850ms ease-in';
        setColor(`${"Rgb(225,"}${-percentProgress * 2 + 200}${", 0"}`);
        if(props.random){setColor(randomColor)}
    }, [setOffset, progress, circumference, offset, percent, progressMax, percentProgress]);

    return (
<>
    <svg className={CSS.svg} width={size} height={size}>
        <circle
            className={CSS.svgCircleBg}
            stroke={circleOneStroke}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
        />
        <circle
            className={CSS.svgCircle}
            ref={circleRef}
            stroke={color}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
        />
        <text 
            x={`${center}`} 
            y={`${center}`} 
            className={CSS.svgCircleText}>
        {progress} {text}
        {percent && "%"}
        </text>
    </svg>
</>
);}

ProgressBar.propTypes = {
    size: PropTypes.number.isRequired,
    progress: PropTypes.number.isRequired,
    strokeWidth: PropTypes.number.isRequired,
    circleOneStroke: PropTypes.string.isRequired,
}

export default ProgressBar;