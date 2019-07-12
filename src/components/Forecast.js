import React from 'react';

function Forecast(props) {

    const convertKelvinToFarenheit = (temperature) => {
        return Math.round(temperature * (9/5) - 459.67);
    }

    return (
        <div>
            <span>{props.date} - {convertKelvinToFarenheit(props.temp)}  &#8457;</span>
            <span><img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt=""/></span>
        </div>
    );

}

export default Forecast;
