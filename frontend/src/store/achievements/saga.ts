import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import { apiGet, apiPost, apiDelete } from '../../apiHelper';
import {
  getAllAchievementsSuccess,
  createAchievementSuccess,
  pickNextAchievement,
} from './actions';
import {
  GET_ALL_ACHIEVEMENTS,
  CreateAchievementAction,
  DeleteAchievementAction,
  CREATE_ACHIEVEMENT,
  Achievement,
  DELETE_ACHIEVEMENT,
} from './types';

function* getAll() {
  const res = yield call(apiGet, 'achievements');
  const { achievements }: { achievements: Achievement[] } = yield res.json();

  yield put(getAllAchievementsSuccess(achievements));

  // should this be it's own saga (watching getAllAchievementsSuccess)?
  // worried about race condition (trying to pick the achievement before the achievements are loaded into state)
  yield put(pickNextAchievement());
}

function* create(action: CreateAchievementAction) {
  const text = action.payload;
  const res = yield call(apiPost, 'achievements', { text });
  const { id } = yield res.json();

  const achievement: Achievement = { id, text };
  yield put(createAchievementSuccess(achievement));
}

function* remove(action: DeleteAchievementAction) {
  const id = action.payload;
  yield call(apiDelete, `achievements/${id}`);

  yield put(pickNextAchievement());
}

export default function* rootSaga() {
  yield all([
    takeLatest(GET_ALL_ACHIEVEMENTS, getAll),
    takeEvery(CREATE_ACHIEVEMENT, create),
    takeEvery(DELETE_ACHIEVEMENT, remove),
  ]);
}
