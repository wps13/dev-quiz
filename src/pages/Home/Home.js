import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import ButtonGeneric from '../../components/Button/Button';
import {baseStyles} from '../../assets/styles';

import COLORS from '../../utils/COLORS';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.text, styles.title]}>DevQuiz</Text>
      <Text style={[styles.text, styles.subText]}>
        Test your knowledge about development
      </Text>
      <View style={styles.buttonWrapper}>
        <ButtonGeneric
          buttonColor={COLORS.darkPurple}
          text="Start"
          pressFunction={() => navigation.navigate('Question')}
          textColor={COLORS.white}
          testID="Home-ButtonQuestion"
        />
        <ButtonGeneric
          buttonColor={COLORS.lightPurple}
          text="Instructions"
          pressFunction={() => navigation.navigate('Instructions')}
          textColor={COLORS.darkGrey}
          testID="Home-ButtonInstructions"
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: baseStyles.container,
  text: {
    margin: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
  },
  subText: {
    width: '50%',
    textAlign: 'center',
  },
  buttonWrapper: {
    width: '100%',
    margin: 40,
    alignItems: 'center',
  },
});
