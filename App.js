// App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Clock from './Clock';

const App = () => {
  return (
    <View style={styles.appContainer}>
      <Clock />
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow', // Fond jaune
  },
});

export default App;
