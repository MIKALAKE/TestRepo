import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  defaultTabSyle: {
    headerStyle: {
      backgroundColor: '#2C2E3E'
    },
    headerTintColor: '#EE2B47',
    headerTitleStyle: {
      paddingBottom: 10,
      fontSize: 24,
      fontWeight: 'bold'
    },
    tabBarStyle: {
      backgroundColor: '#2C2E3E'
    },
    tabBarActiveTintColor: '#EE2B47',
    tabBarInactiveTintColor: '#F6F6F6'
  },

  defaultPageContainer: {
    backgroundColor: '#34374C',
    display: 'flex',
    height: '100%',
    padding: 16
  }
});
