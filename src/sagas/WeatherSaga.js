import {call, put, takeEvery} from 'redux-saga/effects';
import WeatherService from '../services/WeatherService';

const weatherService = new WeatherService();

function* fetchForecast(action) {
    try {
        const forecast = yield call(weatherService.getForecast, action.payload);
        yield put({type: 'UPDATE_FORECAST_LIST', payload: forecast.list});
        yield put({type: 'UPDATE_FORECAST_CITY', payload: forecast.city});
    } catch(e) {
        console.error('ERROR FETCHING FORECAST!!!');
        yield put({type: 'UPDATE_FORECAST_LIST', payload: [] });
        yield put({type: 'UPDATE_FORECAST_CITY', payload: {} });
    }
}

function* forecastSaga() {
    yield takeEvery('UPDATE_ZIP', fetchForecast);
}

export default forecastSaga;
