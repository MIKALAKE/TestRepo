import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import styles from '../styles';
import { Home, PastTodos } from '../tabs';

const Navigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Past' component={PastTodos} options={styles.defaultTabSyle} />
        <Tab.Screen name='Home' component={Home} options={styles.defaultTabSyle} />
        <Tab.Screen name='Upcoming' component={Home} options={styles.defaultTabSyle} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
