/* eslint-disable react/prop-types */
import React from 'react';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {View,Text,Image,Pressable} from 'react-native'
import tw from 'twrnc';

// eslint-disable-next-line react/prop-types
const Stack = createNativeStackNavigator();
const navigation = useNavigation;
export const AnnonceGroup = ({children}) => {
    const annonces = React.Children.toArray(children)
    return <View style = {tw`p-12 flex flex-col border-solid border-1 border-red-600`}>
        {annonces.map( annonce => annonce)}
    </View>
}

// eslint-disable-next-line react/prop-types
export function AnnonceBtn({ info }){
    return (
        <Pressable 
        onPress = {}
        style = {tw`p-2 pb-18 h-80 flex flex-col ml-1 mr-1 mt-2 mb-2 rounded border-solid border-2 border-indigo-600`}>
            <View style = {tw`h-1/5`}>
                <View>
                    <Text style = {tw`uppercase font-bold text-justify`}>{props.info.name}</Text>
                </View>
            </View>
            <View style = {tw`h-5/6 w-full`}>
                <Image style = {{height : '100%',width : '100%'}} source = { props.info.imgSrc }></Image>
            </View>
            <View style = {tw`h-1/5 w-full`}>
                <Text style ={tw`text-base font-bold`}>{props.info.userPseudo}</Text>
                <Text  style ={tw`font-bold text-red-400 text-sm`}>{props.info.credits} credit(s)</Text>
                <Text  style ={tw`italic text-sm`}>{props.info.date}</Text>
            </View>
        </Pressable>
    );
}

export function Preview( {info }){
    return (
        <View  style ={tw`w-full flex flex-col py-3`}>
            <Image style ={tw`w-full`} source = {props.info.imgSrc}></Image>
            <View style = {tw`h-1/5`}>
                <View>
                    <Text style = {tw`uppercase font-bold text-justify`}>{props.info.name}</Text>
                </View>
            </View>
            <View style = {tw`h-5/6 w-full`}>
                <Text  style ={tw`font-bold text-red-400 text-sm`}>{props.info.credits} credit(s)</Text>
                <Text style ={tw`text-base font-bold`}>{props.info.des}</Text>
            </View>
            <View style = {tw`h-1/5 w-full`}>
                <Text style ={tw`text-base font-bold`}>{props.info.userPseudo}</Text>
                <Text  style ={tw`italic text-sm`}>{props.info.date}</Text>
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
