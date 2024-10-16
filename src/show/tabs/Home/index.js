import { Text, View } from 'react-native';

import styles from '../../styles';
import { ColumnView } from '../../containers';

const Home = () => {
  return (
    <View style={styles.defaultPageContainer}>
      <ColumnView>
        <Text>Home</Text>
      </ColumnView>
    </View>
  );
};

export default Home;
