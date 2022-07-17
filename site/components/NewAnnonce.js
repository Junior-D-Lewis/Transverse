import {React, useState} from 'react'
import {View, Text, Image, TextInput, Pressable, Platform, Button, Alert } from 'react-native'
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios'
import tw from 'twrnc'; 
  
const NewAnnonce = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [credit, setCredit] = useState('');
    const [image, setImage] = useState(null);
    let result;

    const imagePicker = async () => {
       result = await DocumentPicker.getDocumentAsync({
        type: 'image/*',
        copyToCacheDirectory: true,
      });
      console.log(result);
      
      const files = new FormData();
      files.append('files', result.file /* {
        uri: result.uri,
        name: result.name,
        type: result.mimeType
      }*/);

      const res = await axios.post('http://10.188.223.22:3000/api/upload',
        files, {
        headers: {
          'Content-Type': 'multipart/form-data',
          },});
      console.log(res.data);
      setImage("../../api/src/assets/images/"+res.data.filename)
      alert(res.data.path, 'Image uploaded')
      Alert.alert(image, 'Image uploaded');
      console.log(image);
    }
    
    console.log(image);
    const addAnnonce = async () => {

        const responce = await axios.post("http://10.188.223.22:3000/api/annonce", 
            {titre: title, description: description, credit: credit, imageSrc: image})
            if(responce.status === 200){
                Alert.alert("Annonce ajoutée avec succès")
             // navigation.navigate('HomeView')
            }else{
              alert('email ou mot de passe incorrect')
            }
      }

    return (
        <View style={tw`mt-10`}>
            <Text style={tw`text-2xl text-gray-700`}>
                Nouvelle annonce
            </Text>
            <View style={tw`mt-5 w-4/5 h-3/6 bg-red-300 mx-auto`}>
                <View></View>
                <View style={tw`flex flex-row flex-nowrap border-b-2 border-gray-200 pb-1 w-80`}>
                    <TextInput  onChangeText={setTitle} value={title} placeholder="title"/>
                </View>
                <View style={tw`flex flex-row flex-nowrap border-b-2 border-gray-200 pb-1 w-80`}>
                    <TextInput  onChangeText={setDescription} value={description} placeholder="description"/>
                </View>
                <View style={tw`flex flex-row flex-nowrap border-b-2 border-gray-200 pb-1 w-80`}>
                    <TextInput  onChangeText={setCredit} value={credit} placeholder="credit"/>
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Pressable style={tw`mx-auto bg-blue-600 rounded-3 w-30 p-0.5 `} onPress={imagePicker} >
                        <Text style={tw`text-center text-white`}>Choose image</Text>
                    </Pressable>
                    <Image source={{uri: image}} style={{ width: 200, height: 200 }} />
                </View>
                <Pressable style={tw`mx-auto bg-blue-600 rounded-3 w-80 py-3 `}
                            onPress={addAnnonce}>
                    <Text style={tw`text-center text-white`}>Post</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default NewAnnonce