import { call, put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../reducers/HouseControlReducer';
import { postOutletCode, getWeather } from '../api';

function* outletSaga(action) {
  try {
    const res = yield call(postOutletCode, action.code);
    yield put({ type: actionTypes.POST_RFOUTLET_CODE_SUCCESS, res });
  } catch (e) {
    yield put({ type: actionTypes.POST_RFOUTLET_CODE_FAIL, error: e.message });
  }
}

function* updateWeather() {
  try {
    const res = yield call(getWeather);
    yield put({ type: actionTypes.UPDATE_WEATHER_SUCCESS, weather: res });
  } catch (e) {
    yield put({ type: actionTypes.UPDATE_WEATHER_FAIL, error: e.message });
  }
}

function* mySaga() {
  yield [
    takeLatest(actionTypes.POST_RFOUTLET_CODE, outletSaga),
    takeLatest(actionTypes.UPDATE_WEATHER, updateWeather),
  ];
}

export default mySaga;
