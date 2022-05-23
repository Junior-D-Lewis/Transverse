import { Image, View, Text } from 'react-native'
import React from 'react'
import {registerUser, reg } from '../components/Register';
import {loginUser} from '../components/Login';
import { useEffect, useState } from 'react';
import tw from 'twrnc';

const Profile = () => {
    const [user, setUser] = useState({});
    useEffect(() => {
    if(reg){
      setUser(registerUser);
    }else{
      setUser(loginUser);
    }
    console.log(user);
    });
  return (
    <View>
    <Image style={tw`rounded-xl h-20 w-16`} source={require('../assets/images/One-Piece.jpg')} />
      <Text>{user.prenom}</Text>
      <Text>{user.nom}</Text>
      <Text>{user.email}</Text>
      <Text>{user.credit}</Text>
    </View>
  )
}

export default Profile