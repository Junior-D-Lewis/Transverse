import {Button, Image, TextInput, View, Text } from 'react-native'
import React from 'react'
import GoogleIcon from '../Icons/GoogleIcon';
import FacebookIcon from '../Icons/FacebookIcon';
import AppleIcon from '../Icons/AppleIcon';
import tw from 'twrnc';

const Register = () => {
    const [prenom, onChangePrenom] = React.useState("");
    const [nom, onChangeNom] = React.useState("");
    const [email, onChangeEmail] = React.useState("");
    const [Password, onChangePass] = React.useState("");
    const [pass_confirm, onChangeConfirm] = React.useState("");
  return (
    <View>
        <Image source={require('../assets/profil.jpg')} style={tw.style(`rounded-full mx-auto`  , {width: 200, height: 200, marginTop: 50})}/>
       <TextInput style={tw.style(`appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name`)}
        onChangeText={onChangePrenom}
        value={prenom}
        placeholder="Prenom"
      />    
        <TextInput style={tw.style(`appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name`)}
        onChangeText={onChangeNom}
        value={nom}
        placeholder="Nom"
      />
        <TextInput style={tw.style(`appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name`)}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
      />
        <TextInput style={tw.style(`appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name`)}
        onChangeText={onChangePass}
        value={Password}
        placeholder="useless placeholder"
      />
        <TextInput style={tw.style(`appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name`)}
        onChangeText={onChangeConfirm}
        value={pass_confirm}
        placeholder="Confirme Password"
      />
      <Button title="Register" />
      <Text>Or register witch</Text>
      <View style={{flexDirection: 'row'}}>
          <View>
            <GoogleIcon height='25' width='25'/>
          </View>
          <View>
            <FacebookIcon height='25' width='25'/>
          </View>
          <View>
            <AppleIcon height='25' width='25'/>
          </View>
      </View>
    </View>
  )
}

export default Register