import React, { ChangeEvent, useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { RootState } from '../store/rootReducer';
import {
  createAchievement,
  getAllAchievements,
  deleteAchievement,
} from '../store/achievements/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAchievements());
  }, []);

  const achievements = useSelector(
    (state: RootState) => state.achievements.items,
    shallowEqual
  );

  const [newAchievement, setNewAchievement] = useState('');

  const handleNewAchievementInput = (e: ChangeEvent) => {
    const target = e.target as HTMLTextAreaElement;
    setNewAchievement(target.value);
  };

  return (
    <>
      <h1>Here's one of your achievements:</h1>
      <ul>
        {achievements.map((d) => (
          <li key={d.id} onClick={() => dispatch(deleteAchievement(d.id))}>
            {d.text}
          </li>
        ))}
      </ul>
      {/* <p> Made this website! </p> */}
      <button style={{ display: 'block' }}>Show me another one</button>
      <br></br>
      <label htmlFor="newAchievement">New Achievement: </label>
      <input
        name="newAchievement"
        value={newAchievement}
        onChange={handleNewAchievementInput}
      ></input>
      <button onClick={() => dispatch(createAchievement(newAchievement))}>
        Add
      </button>
    </>
  );
};

export default App;
