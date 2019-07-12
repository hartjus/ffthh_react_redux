import React, { useState } from 'react';
import {connect} from 'react-redux';
import WeatherStore from '../stores/WeatherStore';

function ZipInput(props) {

    const [zip, setZip] = useState(0);

    const onButtonClick = () => {
        props.onChange(zip);
    }

    return (
        <div>
            <label htmlFor="zip-input">Enter a ZIP code:</label>
            <br />
            <input type="number" name="zip-input" min="0" max="99999" step="1" onChange={ (e) => setZip(e.target.value) } />
            <button type="button" onClick={onButtonClick}>GO!</button>
        </div>
    );
}

const mapStateToProps = (store) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (zipCode) => dispatch(WeatherStore.updateZipCode(zipCode))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ZipInput);
