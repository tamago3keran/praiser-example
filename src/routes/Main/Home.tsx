import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Detail, Home } from '../../components/pages';
import { DETAIL, HOME } from '../../constants/path';

const Stack = createStackNavigator();

function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName={HOME}>
      <Stack.Screen name={HOME} component={Home} />
      <Stack.Screen name={DETAIL} component={Detail} />
    </Stack.Navigator>
  );
}
export default HomeNavigator;
