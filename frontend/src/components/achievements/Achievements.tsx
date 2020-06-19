/** @jsx jsx */
import { jsx, Box, Heading, Text, Label, Input, Button, Flex } from 'theme-ui';
import { ChangeEvent, useState, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import {
  createAchievement,
  getAllAchievements,
  deleteAchievement,
  pickNextAchievement,
} from '../../store/achievements/actions';

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
    const target = e.target as HTMLTextAreaElement;
    setNewAchievement(target.value);
  };

  const handleAddAchievement = () => {
    dispatch(createAchievement(newAchievement));
    setNewAchievement('');
  };

  return (
    <Box sx={{ fontSize: [2, 3, 4] }}>
      <Heading mb="4" sx={{ fontSize: [4, 5, 6] }}>
        Here's one of your achievements:
      </Heading>
      <Text
        sx={{ flex: 1, textAlign: 'center', mb: '2' }}
        onClick={() =>
          displayedAchievement
            ? dispatch(deleteAchievement(displayedAchievement.id))
            : undefined
        }
      >
        {displayedAchievement
          ? displayedAchievement.text
          : '*** Add more achievements below! ***'}
      </Text>
      <Button
        sx={{ display: 'block', mx: 'auto', mb: '6', fontSize: [0, 1, 2] }}
        onClick={() =>
          displayedAchievement ? dispatch(pickNextAchievement()) : undefined
        }
      >
        Show me another one
      </Button>
      <Label htmlFor="newAchievement">New Achievement: </Label>
      <Flex>
        <Input
          sx={{ fontSize: [1, 2, 3] }}
          name="newAchievement"
          value={newAchievement}
          onChange={handleNewAchievementInput}
        ></Input>
        <Button sx={{ fontSize: [0, 1, 2] }} onClick={handleAddAchievement}>
          Add
        </Button>
      </Flex>
    </Box>
  );
};

export default Achievements;
