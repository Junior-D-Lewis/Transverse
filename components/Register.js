import {Button, Image, TextInput, View, Text } from 'react-native'
import React from 'react'
import GoogleIcon from '../Icons/GoogleIcon';
import FacebookIcon from '../Icons/FacebookIcon';
import AppleIcon from '../Icons/AppleIcon';
import tw from 'twrnc';

const Register = () => {
    const [prenom, onChangePrenom] = React.useState(null);
  return (
    <View>
        <Image source={require('../assets/profil.jpg')} style={tw.style(`rounded-full mx-auto`  , {width: 200, height: 200, marginTop: 50})}/>
        <Text>nom</Text>
        <TextInput
        onChangeText={onChangePrenom}
        value={prenom}
        placeholder="useless placeholder"
      />    
      <Text>prenom</Text>
        <TextInput
        onChangeText={onChangePrenom}
        value={prenom}
        placeholder="useless placeholder"
      />
      <Text>email</Text>
        <TextInput
        onChangeText={onChangePrenom}
        value={prenom}
        placeholder="useless placeholder"
      />
        <Text>password</Text>
        <TextInput
        onChangeText={onChangePrenom}
        value={prenom}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Text>confrmer mot de passe</Text>
        <TextInput
        onChangeText={onChangePrenom}
        value={prenom}
        placeholder="useless placeholder"
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