import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import tw from 'twrnc';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from './components/Register';
import Login from './components/Login';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarShowLabel: false,headerShown: false}}>
        <Tab.Screen name="Home" component={Login}/>
        <Tab.Screen name="Settings" component={Register} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

