import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserInfo } from '../../components/pages';
import { USER_INFO } from '../../constants/path';
import { HeaderLeft } from '../Header';

const Stack = createStackNavigator();

function UserInfoNavigator() {
  return (
    <Stack.Navigator initialRouteName={USER_INFO}>
      <Stack.Screen name={USER_INFO} component={UserInfo} options={{ headerLeft: () => <HeaderLeft /> }} />
    </Stack.Navigator>
  );
}
export default UserInfoNavigator;
