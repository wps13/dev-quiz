import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {baseStyles} from '../../assets/styles';

const Instructions = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>How to play</Text>
      <Text style={styles.text}>
        To Play this quiz, you should press the 'start' button and select the
        answer that you think that is correct
      </Text>
    </SafeAreaView>
  );
};

export default Instructions;

const styles = StyleSheet.create({
  container: baseStyles.container,
  title: baseStyles.title,
  text: {
    textAlign: 'center',
    margin: 20,
  },
});
