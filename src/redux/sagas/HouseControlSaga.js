import { call, put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../reducers/HouseControlReducer';
import { postOutletCode, getWeather, getBussTimes, getImageList } from '../api';

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

function* updateBussTimes() {
  try {
    const res = yield call(getBussTimes);
    yield put({ type: actionTypes.UPDATE_BUSS_TIMES_SUCCESS, bussTimes: res });
  } catch (e) {
    yield put({ type: actionTypes.UPDATE_BUSS_TIMES_FAIL, error: e.message });
  }
}

function* updateImageList() {
  try {
    const res = yield call(getImageList);
    yield put({ type: actionTypes.GET_IMAGE_LIST_SUCCESS, imageList: res });
  } catch (e) {
    yield put({ type: actionTypes.GET_IMAGE_LIST_FAIL, error: e.message });
  }
}

function* mySaga() {
  yield [
    takeLatest(actionTypes.POST_RFOUTLET_CODE, outletSaga),
    takeLatest(actionTypes.UPDATE_WEATHER, updateWeather),
    takeLatest(actionTypes.UPDATE_BUSS_TIMES, updateBussTimes),
    takeLatest(actionTypes.GET_IMAGE_LIST, updateImageList),
  ];
}

export default mySaga;
