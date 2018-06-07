import React from 'react';
import { Text, View} from 'react-native';
import Home from './pages/home.js';
import Profile from './pages/user/index.js';
import {
  createStackNavigator,
} from 'react-navigation';

const App = createStackNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile },
});

export default App