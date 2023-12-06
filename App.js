//  import { StatusBar } from 'expo-status-bar';
//  import { StyleSheet, Text, View } from 'react-native';

//  export default function App() {
//    return (
//      <View style={styles.container}>
//        <Text>j'aime pas les cons</Text>
//        <StatusBar style="auto" />
//      </View>
//    );
//  }

//  const styles = StyleSheet.create({
//    container: {
//      flex: 1,
//      backgroundColor: '#fff',
//      alignItems: 'center',
//      justifyContent: 'center',
//    },
//  });
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  stretch: {
    width: 400,
    height: 400,
    resizeMode: 'stretch',
  },
});

const DisplayAnImageWithStyle = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.stretch}
        source={require('./images/images.jpeg')}
      />

<Image
        style={styles.stretch}
        source={require('./images/image2.jpg')}
      />

    </View>
  );
};

export default DisplayAnImageWithStyle;