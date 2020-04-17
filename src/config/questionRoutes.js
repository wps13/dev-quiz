import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../pages/Home/Home';
import Result from '../pages/Result/Result';

const Tabs = createBottomTabNavigator();

const QuestionRoutes = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={Home} />
    <Tabs.Screen name="Results" component={Result} />
  </Tabs.Navigator>
);

export default QuestionRoutes;
