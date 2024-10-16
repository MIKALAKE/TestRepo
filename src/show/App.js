import { StatusBar } from 'react-native';

import Navigator from './navigator';

const App = () => {
  return (
    <>
      <StatusBar barStyle='light-content' />

      <Navigator />
    </>
  );
};

export default App;
