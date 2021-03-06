import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Button from '../../components/Button/Button';
import {baseStyles} from '../../assets/styles';
import COLORS from '../../utils/COLORS';
import {reset} from '../../config/redux/questions';

const Result = ({navigation}) => {
  const dispatch = useDispatch();
  const questionsData = useSelector(state => state.question);
  let {
    status,
    correctAnswers,
    totalQuestions,
    correctPercent,
    minimumPercent,
  } = questionsData;
  const goToStart = () => {
    dispatch(reset());
    return navigation.navigate('Home');
  };
  let styleTitle =
    status === 'passed' ? styles.successTitle : styles.failedTitle;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styleTitle} testID="Results-title">
          You {status}!
        </Text>
      </View>
      <View>
        <Text testID="Results-description">
          You answered {correctAnswers} out of {totalQuestions} correctly
        </Text>
        <Text testID="Results-correctPercent">
          You got {correctPercent}% correct
        </Text>
        <Text testID="Results-minimumPercent">
          Minimum required to pass: {minimumPercent}%
        </Text>
      </View>
      <Button
        text="Try again"
        pressFunction={goToStart}
        buttonColor={COLORS.darkPurple}
        textColor={COLORS.white}
        testID="Results-buttonHome"
      />
    </SafeAreaView>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: baseStyles.container,
  successTitle: {
    color: COLORS.green,
  },
  failedTitle: {
    color: COLORS.red,
  },
});
