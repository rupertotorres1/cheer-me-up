import React, { ChangeEvent, useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { RootState } from '../store/rootReducer';
import {
  createAchievement,
  getAllAchievements,
  deleteAchievement,
  pickNextAchievement,
} from '../store/achievements/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAchievements());
  }, []);

  const displayedAchievement = useSelector(
    (state: RootState) => state.achievements.displayedAchievement,
    shallowEqual
  );

  const [newAchievement, setNewAchievement] = useState('');

  const handleNewAchievementInput = (e: ChangeEvent) => {
    const target = e.target as HTMLTextAreaElement;
    setNewAchievement(target.value);
  };

  const handleAddAchievement = () => {
    dispatch(createAchievement(newAchievement));
    setNewAchievement('');
  };

  return (
    <>
      <h1>Here's one of your achievements:</h1>
      <p
        onClick={() =>
          displayedAchievement
            ? dispatch(deleteAchievement(displayedAchievement.id))
            : undefined
        }
      >
        {' '}
        {displayedAchievement
          ? displayedAchievement.text
          : '*** Add more achievements below! ***'}{' '}
      </p>
      <button
        style={{ display: 'block' }}
        onClick={() =>
          displayedAchievement ? dispatch(pickNextAchievement()) : undefined
        }
      >
        Show me another one
      </button>
      <br></br>
      <label htmlFor="newAchievement">New Achievement: </label>
      <input
        name="newAchievement"
        value={newAchievement}
        onChange={handleNewAchievementInput}
      ></input>
      <button onClick={handleAddAchievement}>Add</button>
    </>
  );
};

export default App;
