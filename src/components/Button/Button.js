import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const Button = ({text, pressFunction, buttonColor, textColor}) => {
  return (
    <TouchableOpacity
      onPress={() => pressFunction(text)}
      style={[styles.button, {backgroundColor: buttonColor}]}>
      <Text style={[styles.text, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    shadowColor: '#2AC062',
    shadowOpacity: 0.4,
    shadowOffset: {height: 10, width: 0},
    shadowRadius: 20,
    padding: 10,
    borderRadius: 5,
    margin: 10,
    minWidth: 120,
    maxWidth: '85%',
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
});
