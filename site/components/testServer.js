import { View, Text, Button, TextInput } from 'react-native'
import React, {useState, useEffect} from 'react'
import tw from 'twrnc';

const testServer = () => {
    const [res, setRes] = useState('Etat initial')
    const getRest = () => {
        const url = 'http://10.0.2.2:3000/'
        fetch(url).then(function(response) {
            response.text().then(function(text) {
              if(response.status === 200) {
                setRes(text)
              }else {
                setRes('Erreur')
              }
            });
          });
    }
  return (
    <View style={tw.style(`m-10 `)}>
      <TextInput style={tw.style(`m-10`)} placeholder="Entrez votre nom" onChangeText={(text) => setRes(text)}/>
      <Text>testServer {res }</Text>
      <Button title="Change" onPress={getRest} />
    </View>
  )
}

export default testServer