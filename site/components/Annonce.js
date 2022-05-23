/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import {View,Text,Image,Pressable} from 'react-native'
import axios from 'axios'
import tw from 'twrnc';
//import listeAnnonces from '../data/ListeAnnonces';


// eslint-disable-next-line react/prop-types

export const AnnonceGroup = ({children}) => {

    const [listeAnnonce, setListeAnnonce] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios('http://localhost:3000/api/annonce/');
        console.log(response.data);
        setListeAnnonce(response.data);
      }
      fetchData();
    }, []);
    
    const ListeAnnonces = listeAnnonce;
    console.log(ListeAnnonces);

    const annonces = React.Children.toArray(children)
    return <View style = {tw`p-12 flex flex-col border-solid border-1 border-red-600`}>
        {ListeAnnonces.map((annonce,key) => {
                return <Annonce info={annonce} key = {annonce.id}></Annonce>
              }
              )}
    </View>
}

// eslint-disable-next-line react/prop-types
export function Annonce({ info }){
    return (
        <Pressable 

        style = {tw`p-2 pb-18 h-80 flex flex-col ml-1 mr-1 mt-2 mb-2 rounded border-solid border-2 border-indigo-600`}>
            <View style = {tw`h-1/5`}>
                <View>
                    <Text style = {tw`uppercase font-bold text-justify`}>{info.titre}</Text>
                </View>
            </View>
            <View style = {tw`h-5/6 w-full`}>
                <Image
            style={{height : '100%',width : '100%'}}
            defaultSource={require('../assets/images/Naruto-Shippuden.png')}
            source={{ uri: info.imageSrc }} />
            </View>
            <View style = {tw`h-1/5 w-full`}>
                <Text style ={tw`text-base font-bold`}>{info.userPseudo}</Text>
                <Text  style ={tw`font-bold text-red-400 text-sm`}>{info.credit} credit(s)</Text>
                <Text  style ={tw`italic text-sm`}>{info.date}</Text>
            </View>
        </Pressable>
    );
}

export function Preview({info }){
    return (
        <View  style ={tw`w-full flex flex-col py-3`}>
            <Image style ={tw`w-full`} source = {info.imgSrc}></Image>
            <View style = {tw`h-1/5`}>
                <View>
                    <Text style = {tw`uppercase font-bold text-justify`}>{info.name}</Text>
                </View>
            </View>
            <View style = {tw`h-5/6 w-full`}>
                <Text  style ={tw`font-bold text-red-400 text-sm`}>{info.credits} credit(s)</Text>
                <Text style ={tw`text-base font-bold`}>{info.des}</Text>
            </View>
            <View style = {tw`h-1/5 w-full`}>
                <Text style ={tw`text-base font-bold`}>{info.userPseudo}</Text>
                <Text  style ={tw`italic text-sm`}>{info.date}</Text>
            </View>
            <View style = {tw`px-5`}>
                <Pressable style = {tw`p-2 bg-green-400`}>
                    <Text> ACCEPTER </Text>
                </Pressable>
                <Pressable style = {tw`p-2 bg-red-400`}>
                    <Text> REVENIR </Text>
                </Pressable>
            </View>
        </View>
    )
}
