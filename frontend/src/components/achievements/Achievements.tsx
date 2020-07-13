import React, { ChangeEvent, useState, useEffect } from 'react';
import {
  Box,
  Button,
  IconButton,
  Typography,
  TextField,
  Container,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import {
  createAchievement,
  getAllAchievements,
  deleteAchievement,
  pickNextAchievement,
} from '../../store/achievements/actions';

const AddIconButton = () => (
  <IconButton type="submit">
    <AddIcon />
  </IconButton>
);

const Achievements = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAchievements());
    // eslint-disable-next-line
  }, []);

  const displayedAchievement = useSelector(
    (state: RootState) => state.achievements.displayedAchievement,
    shallowEqual
  );

  const [newAchievement, setNewAchievement] = useState('');

  const handleNewAchievementInput = (e: ChangeEvent) => {
    e.preventDefault();
    const target = e.target as HTMLTextAreaElement;
    setNewAchievement(target.value);
  };

  const handleAddAchievement = () => {
    dispatch(createAchievement(newAchievement));
    setNewAchievement('');
  };

  return (
    // TODO: is this the right way to do responsive width?
    <Container style={{ textAlign: 'center', maxWidth: '927px' }}>
      <Typography style={{ marginBottom: '32px' }} variant="h2">
        Here's one of your achievements:
      </Typography>
      <Typography
        style={{ marginBottom: '8px' }}
        variant="body1"
        onClick={() =>
          displayedAchievement
            ? dispatch(deleteAchievement(displayedAchievement.id))
            : undefined
        }
      >
        {displayedAchievement
          ? displayedAchievement.text
          : '*** Add more achievements below! ***'}
      </Typography>
      <Button
        style={{ display: 'block', margin: '0 auto 32px auto' }}
        variant="contained"
        onClick={() =>
          displayedAchievement ? dispatch(pickNextAchievement()) : undefined
        }
      >
        Show me another one
      </Button>
      <form onSubmit={handleAddAchievement}>
        {/* TODO: weird label positioning */}
        <TextField
          label="New Achievement"
          value={newAchievement}
          onChange={handleNewAchievementInput}
          InputProps={{
            endAdornment: <AddIconButton />,
          }}
          fullWidth
        />
      </form>
    </Container>
  );
};

export default Achievements;
