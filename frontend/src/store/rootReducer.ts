import { combineReducers } from 'redux';
import achievementsReducer from './achievements/reducer';

const rootReducer = combineReducers({
  achievements: achievementsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
