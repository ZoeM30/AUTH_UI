import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';


type SplashScreenProps = {

  navigation: StackNavigationProp<RootStackParamList, 'Splash'>;
};
const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const words = ['Simplify', 'Achieve', 'Zenitha'];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (letterIndex < words[wordIndex].length - 1) {
        setLetterIndex(letterIndex + 1);
      } else if (wordIndex < words.length - 1) {
        setWordIndex(wordIndex + 1);
        setLetterIndex(0);
      } else {
        navigation.replace('Home');
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [letterIndex, wordIndex]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {words[wordIndex].substring(0, letterIndex + 1)}
      </Text>
      <Image source={require('../../assets/logo.png')} style={styles.image} />
    </View>
  );
};
export default SplashScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    marginTop: 30,

  }
});

