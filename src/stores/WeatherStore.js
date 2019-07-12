//
// ACTIONS
//

export const updateZipCode = (zipCode) => (
    {
        type: 'UPDATE_ZIP',
        payload: zipCode
    }
);

export const updateForecast = (forecastData) => (
    {
        type: 'UPDATE_FORECAST',
        payload: forecastData
    }
);

//
// STATE
//

const defaultState = {
    zipCode: '',
    forecastList: [],
    city: {}
};

//
// REDUCER
//

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'UPDATE_ZIP':
            return {
                ...state,
                zipCode: action.payload
            }
        case 'UPDATE_FORECAST_LIST':
            return {
                ...state,
                forecastList: action.payload
            }

            case 'UPDATE_FORECAST_CITY':
                return {
                    ...state,
                    city: action.payload
                }
    

        default: return state
    }
};

// export default reducer;

export default {
    reducer,
    updateZipCode,
    updateForecast
};
