import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginLanding from './src/screens/LoginLanding';
import SignIn from './src/screens/SignIn';
import Register from './src/screens/Register';
import LupaPassword from './src/screens/LupaPassword';

const Stack = createNativeStackNavigator();

const Login = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginLanding"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginLanding" component={LoginLanding} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="LupaPassword" component={LupaPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Login
