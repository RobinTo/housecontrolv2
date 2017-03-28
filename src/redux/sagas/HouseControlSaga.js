import { call, put, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../reducers/HouseControlReducer';
import { postOutletCode } from '../api/outlets';

function* outletSaga(action) {
  try {
    const res = yield call(postOutletCode, action.code);
    yield put({ type: actionTypes.POST_RFOUTLET_CODE_SUCCESS, res });
  } catch (e) {
    yield put({ type: actionTypes.POST_RFOUTLET_CODE_FAIL, error: e.message });
  }
}

function* mySaga() {
  yield takeLatest(actionTypes.POST_RFOUTLET_CODE, outletSaga);
}

export default mySaga;
