import React, { ChangeEvent, useState, useEffect } from 'react';
import {
  Button as MaterialButton,
  IconButton,
  Typography,
  TextField,
  Container as MaterialContainer,
  InputAdornment,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { styled } from '@material-ui/core/styles';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import {
  createAchievement,
  getAllAchievements,
  deleteAchievement,
  pickNextAchievement,
} from '../../store/achievements/actions';
import theme from '../../theme';

const Container = styled(MaterialContainer)({
  textAlign: 'center',
  maxWidth: '927px',
});

const Heading = styled(Typography)({
  marginBottom: theme.spacing(4),
});

const Body = styled(Typography)({
  marginBottom: theme.spacing(1),
});

const Button = styled(MaterialButton)({
  display: 'block',
  margin: theme.spacing(0, 'auto', 4, 'auto'),
});

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

  const handleDeleteAchievement = () => {
    if (displayedAchievement) {
      dispatch(deleteAchievement(displayedAchievement.id));
    }
  };

  const handleShowNext = () => {
    if (displayedAchievement) {
      dispatch(pickNextAchievement());
    }
  };

  return (
    // TODO: is this the right way to do responsive width?
    <Container>
      <Heading variant="h2">Here's one of your achievements:</Heading>
      <Body variant="body1" onClick={handleDeleteAchievement}>
        {displayedAchievement
          ? displayedAchievement.text
          : '*** Add more achievements below! ***'}
      </Body>
      <Button variant="contained" onClick={handleShowNext}>
        Show me another one
      </Button>
      <form onSubmit={handleAddAchievement}>
        <TextField
          label="New Achievement"
          value={newAchievement}
          onChange={handleNewAchievementInput}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AddIconButton />
              </InputAdornment>
            ),
          }}
          fullWidth
        />
      </form>
    </Container>
  );
};

export default Achievements;
