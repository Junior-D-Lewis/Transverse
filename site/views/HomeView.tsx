import { StatusBar } from 'expo-status-bar';
//import {Text, View } from 'react-native';
import tw from 'twrnc';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from '../components/Register';
import Login from '../components/Login';
import Ajouter from '../components/Ajouter';
import Annonces from '../components/Annonces';
import { AntDesign,Feather,MaterialIcons,FontAwesome,SimpleLineIcons } from '@expo/vector-icons';
import { Annonce } from '../components/Annonce';
import Search from '../components/Search';

const Tab = createBottomTabNavigator();

export default function HomeView() {
  return (
      <Tab.Navigator screenOptions={{headerShown : false}}>
        <Tab.Screen 
          name="Home" 
          component={Annonces}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="home" size={24} style={tw`text-blue-600`}/>
            ),
          }}
        />
        <Tab.Screen 
          name="Search" 
          component={Search} 
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <Feather name="search" size={24} style={tw`text-blue-600`}/>
            ),
          }}
        />
        <Tab.Screen 
          name="Ajouter une annonce" 
          component={Ajouter} 
          options={{
            tabBarLabel: 'Ajouter',
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="pluscircleo" size={24} style={tw`text-blue-600`}/>
            ),
          }}
        />
        <Tab.Screen 
          name="Notifications" 
          component={Annonces} 
          options={{
            tabBarLabel: 'Notifications',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="notifications-none" size={24} style={tw`text-blue-600`}/>            
              ),
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={Annonces} 
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <SimpleLineIcons name="user" size={24} style={tw`text-blue-600`} />
             ),
          }}
        />
      </Tab.Navigator>
  );
}