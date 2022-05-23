/* eslint-disable react/react-in-jsx-scope */
import { StatusBar } from 'expo-status-bar';
//import {Text, View } from 'react-native';
//import tw from 'twrnc';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from './components/Register';
import Login from './components/Login';
import TestServer from './components/TestServer';
import NewAnnonce from './components/NewAnnonce';
import HomeView from './views/HomeView'
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
// const navigation = useNavigation();

export default function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarShowLabel: false,headerShown: false}}>
        <Tab.Screen 
          name="Login" 
          component={Login}
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-key" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Register" 
          component={Register} 
          options={{
            tabBarLabel: 'Register',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="keypad" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="newAnnonce" 
          component={NewAnnonce} 
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="HomeView" 
          component={HomeView} 
          options={{
            tabBarLabel: 'Annonces',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="notifications-sharp" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

