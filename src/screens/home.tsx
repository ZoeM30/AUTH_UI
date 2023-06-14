import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, Pressable } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import { Button } from '../components';
import { TouchableOpacity } from 'react-native-gesture-handler';

type HomeScreenProps = {

  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
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
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [letterIndex, wordIndex]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {words[wordIndex].substring(0, letterIndex + 1)}
      </Text>
      <View style={styles.button_container}>
        <Pressable onPress={() => navigation.navigate('SignUp')}>
          <Button title="Sign Up with Email" onPress={() => navigation.navigate('SignUp')} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Login')}>
          <Button title="Login" onPress={() => navigation.navigate('Login')} />
        </Pressable>
      </View>
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 300,
  },
  button_container: {
    flex: 1,
    justifyContent: 'flex-end'
  }
});

