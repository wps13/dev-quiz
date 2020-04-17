import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Button from '../../components/Button/Button';
import COLORS from '../../utils/COLORS';
import {baseStyles} from '../../assets/styles';
import {changeQuestion} from '../../config/redux/questions';

const Question = ({navigation}) => {
  const dispatch = useDispatch();
  const questions = useSelector(state => state.question);
  const [shouldRender, setShouldRender] = useState(true);

  const goToResult = () => {
    if (questions.lastQuestion) {
      setShouldRender(false);
      return navigation.navigate('Results');
    }
    return null;
  };

  const handleQuestionChange = text => {
    dispatch(changeQuestion(text));
    goToResult();
  };

  const renderAlternative = ({index, item}) => (
    <Button
      textColor={COLORS.white}
      buttonColor={COLORS.darkPurple}
      text={item}
      key={`${item}${index}`}
      pressFunction={handleQuestionChange}
    />
  );
  return (
    <>
      {shouldRender && (
        <SafeAreaView style={styles.container}>
          <Text style={styles.title}>
            Question {questions.actualQuestionId}
          </Text>
          <Text style={styles.text}>{questions.actualQuestion.title}</Text>
          <View style={styles.container}>
            <FlatList
              data={questions.actualQuestion.alternatives}
              renderItem={renderAlternative}
              keyExtractor={item => item}
              extraData={questions}
            />
          </View>
          <View>
            <Text>Remaining questions: {questions.remainingQuestions} </Text>
          </View>
        </SafeAreaView>
      )}
    </>
  );
};
export default Question;

const styles = StyleSheet.create({
  container: baseStyles.container,
  title: baseStyles.title,
  text: {
    fontSize: 16,
  },
});
