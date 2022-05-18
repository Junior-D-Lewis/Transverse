/* eslint-disable react/prop-types */
import React from 'react';
import {View,Text,Image,Pressable} from 'react-native'
import tw from 'twrnc';

// eslint-disable-next-line react/prop-types
export const AnnonceGroup = ({children}) => {
    const annonces = React.Children.toArray(children)
    return <View style = {tw`p-12 flex flex-col border-solid border-1 border-red-600`}>
        {annonces.map( annonce => annonce)}
    </View>
}

// eslint-disable-next-line react/prop-types
export const Annonce = ({info}) => {
    return (
        <Pressable style = {tw`flex flex-row ml-1 mr-1 mt-2 mb-2 rounded border-solid border-2 border-indigo-600`}>
            <View style = {tw`p-2  w-1/2`}>
                <View>
                    <Text style = {tw`uppercase font-bold text-justify`}>{info.name}</Text>
                    <View style = {tw`ml-5`}>
                        <Text style = {tw`w-1/2 mt-2 mb-2 text-lg font-mono`}>{info.des}</Text>
                    </View>
                    <View style = {tw`w-1/2 mt-2`}>
                        <Text style ={tw`text-base font-bold`}>{info.userPseudo}</Text>
                        <Text  style ={tw`italic text-sm`}>{info.date}</Text>
                    </View>
                </View>
            </View>
            <Image style = {tw`w-1/2 h-full`} source = { info.imgSrc }></Image>
        </Pressable>
    );
}

