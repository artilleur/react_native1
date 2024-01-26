// Clock.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import moment from 'moment';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(moment().format('HH:mm:ss'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format('HH:mm:ss'));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <ImageBackground
      source={require('./images/Sans titre111111111111.jpeg')} // Remplacez le chemin par celui de votre image
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.clockText}>{currentTime}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    size:'100%'
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Vous pouvez ajuster l'opacité selon vos préférences
    padding: 50,
    borderRadius: 10,
  },
  clockText: {
    fontSize: 350,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default Clock;