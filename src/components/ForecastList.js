import React from 'react';
import {connect} from 'react-redux';
import Forecast from './Forecast';

function ForecastList(props) {

    const itemEls = props.forecastData.map((x, idx) => {
        return <Forecast key={idx} date={x.dt_txt} temp={x.main.temp} icon={x.weather[0].icon} />
    });

    return (
        
        <div>
            {
                props.city.name &&
                <span>Showing forecast for {props.city.name}, {props.city.country}</span>
            }
            {itemEls}
        </div>
        
    );

}

const mapStateToProps = (store) => {
    return {
        forecastData: store.weather.forecastList,
        city: store.weather.city
    };
}

const mapDispatchToProps = (dispatch) => {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastList);
