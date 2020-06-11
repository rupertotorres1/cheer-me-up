import { all } from 'redux-saga/effects';
import achievementsSaga from './achievements/saga';

export default function* rootSaga() {
  yield all([achievementsSaga()]);
}
