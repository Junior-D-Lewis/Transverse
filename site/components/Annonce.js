/* eslint-disable react/prop-types */
import {React, useState, useEffect} from 'react';
import {View,Text,Image,Pressable} from 'react-native'
import axios from 'axios'
import tw from 'twrnc';

// eslint-disable-next-line react/prop-types
export const AnnonceGroup = () => {
    const [ListeAnnonces, setListeAnnonces] = useState([]);
      useEffect(
        () => {
          const fetchData = async () => {
            const result = await axios.get("http://10.0.2.2:3000/api/annonce")
            setListeAnnonces(result.data)
        }
        fetchData();
    })
    return <View style = {tw`p-12 flex flex-col border-solid border-1 border-red-600`}>
        {ListeAnnonces.map((annonce,key) => {
                return <Annonce info={annonce} key = {annonce.id}></Annonce>
              }
              )}
    </View>
}

// eslint-disable-next-line react/prop-types
export const Annonce = ({info}) => {
    return (
        <Pressable style = {tw`p-2 pb-18 h-80 flex flex-col ml-1 mr-1 mt-2 mb-2 rounded border-solid border-2 border-indigo-600`}>
            <View style = {tw`h-1/5`}>
                <View>
                    <Text style = {tw`uppercase font-bold text-justify`}>{info.titre}</Text>
                </View>
            </View>
            <View style = {tw`h-5/6 w-full`}>
                <Image style = {{height : '100%',width : '100%'}} source = { info.imageSrc }></Image>
            </View>
            <View style = {tw`h-1/5 w-full`}>
                <Text style ={tw`text-base font-bold`}>{info.userPseudo}</Text>
                <Text  style ={tw`font-bold text-red-400 text-sm`}>{info.credit} credit(s)</Text>
                <Text  style ={tw`italic text-sm`}>{info.date}</Text>
            </View>
        </Pressable>
    );
}

