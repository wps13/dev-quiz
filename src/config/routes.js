import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../pages/Home/Home';
import Instructions from '../pages/Instructions/Instructions';
import Question from '../pages/Question/Question';
import Result from '../pages/Result/Result';

const Stack = createStackNavigator();
const Routes = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
    <Stack.Screen name="Instructions" component={Instructions} />
    <Stack.Screen
      name="Question"
      component={Question}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Results"
      component={Result}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default Routes;
