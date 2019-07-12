import {createStore, combineReducers, applyMiddleware} from 'redux';
import WeatherStore from './WeatherStore';

import createSagaMiddleware from 'redux-saga';
import WeatherSaga from '../sagas/WeatherSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        weather: WeatherStore.reducer
    }),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(WeatherSaga);

export default store;
