/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import Achievements from './achievements/Achievements';

const App = () => {
  return (
    <Flex sx={{ justifyContent: 'center' }}>
      <Achievements></Achievements>
    </Flex>
  );
};

export default App;
