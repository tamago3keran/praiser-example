import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Detail, Statistics } from '../../components/pages';
import { DETAIL, STATISTICS } from '../../constants/path';

const Stack = createStackNavigator();

function StatisticsNavigator() {
  return (
    <Stack.Navigator initialRouteName={STATISTICS}>
      <Stack.Screen name={STATISTICS} component={Statistics} />
      <Stack.Screen name={DETAIL} component={Detail} />
    </Stack.Navigator>
  );
}
export default StatisticsNavigator;
