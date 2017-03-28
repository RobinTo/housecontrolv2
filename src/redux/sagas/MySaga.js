import { put, takeLatest } from 'redux-saga/effects';

function* test(action) {
  try {
    console.log('Running action', action);
    yield put({ type: 'Test succeeded', dummy: 1 });
  } catch (e) {
    yield put({ type: 'Test saga failed', message: 'Test saga error' });
  }
}

function* mySaga() {
  yield takeLatest('test', test);
}

export default mySaga;
