import React, { useState, useEffect } from 'react';
import {ScrollView,FlatList, Image, Text, View} from 'react-native';
import { Annonce, AnnonceGroup } from '../components/Annonce';
//import ListeAnnonces from '../data/ListeAnnonces';
import axios from 'axios'
import tw from 'twrnc';


const HomeView = () => {

  return <ScrollView>
            <View style = {tw.style(`p-10 shadow-indigo-500/40 shadow-lg`)}>
              <Text 
                style = {tw.style(` font-bold text-xl text-center text-indigo-600`)}>
                LISTE  DES  ANNONCES
              </Text>
            </View>    
            <AnnonceGroup>
              
          </AnnonceGroup>
        </ScrollView>
}

export default HomeView;
