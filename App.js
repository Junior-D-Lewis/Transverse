import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import tw from 'twrnc';
import Register from './components/Register';
import Login from './components/Login';

export default function App() {
  return (
    <View >
      <Login/>
      <StatusBar style="auto" />
    </View>
  );
}

