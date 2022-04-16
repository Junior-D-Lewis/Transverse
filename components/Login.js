import { View, Text, Image, TextInput,Pressable } from 'react-native'
import React from 'react';
import { Foundation, Feather } from '@expo/vector-icons';
import tw from 'twrnc';

const Login = () => {
    const [email, setEmail] = React.useState('')
  return (
    <View style={tw`flex flex-col`}>
      <View>
          <Image style={tw`h-100 w-100 mx-auto`}  source={require("../assets/login.jpg")}/>
      </View>

      <View>
        <Text style={tw`text-left text-3xl font-bold pl-10`}>Login</Text>
      </View>

      <View style={tw`flex flex-col pt-5 mx-auto justify-center items-center`}>
        <View style={tw`flex flex-row flex-nowrap grow shrink border-b-2 border-gray-200 pb-1 w-80`}>
            <Foundation name="at-sign" size={28} color="gray" style={tw`px-3`} />
            <TextInput  onChangeText={setEmail} value={email} placeholder="Email ID"/>
        </View>
        <View style={tw`flex flex-row flex-nowrap grow shrink border-b-2 border-gray-200 pb-1 w-80`}>
            <Feather name="key" size={28} color="gray" style={tw`px-3`} />
            <TextInput  onChangeText={setEmail} value={email} placeholder="Password"/>
        </View>
        <Pressable style={tw`mx-auto bg-blue-600 rounded-3 w-80 py-3`}>
            <Text style={tw`text-center text-white`}>Login</Text>
        </Pressable>
        <View style={tw`pt-5`}>
            <Text style={tw`text-center text-gray-400 text-xs`}>Or, login with..</Text>
        </View>
      </View>
    
    </View>
  )
}



export default Login