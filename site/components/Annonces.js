import React, { useEffect, useState } from 'react';
import {ScrollView,FlatList, Image, Text, View} from 'react-native';
import { Annonce, AnnonceGroup } from './Annonce';
//import ListeAnnonces from '../data/ListeAnnonces';
import tw from 'twrnc';
import axios from 'axios';
    
export default function Annonces() {

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
    return <ScrollView>
             <View style = {tw.style(`p-10 shadow-indigo-500/40 shadow-lg`)}>
              <Text 
                style = {tw.style(` font-bold text-xl text-center text-indigo-600`)}>
                LISTE  DES  ANNONCES
              </Text>
            </View>     
            <AnnonceGroup>
              {ListeAnnonces.map((annonce,key) => {
                return <Annonce info={annonce} key = {annonce.id}></Annonce>
              }
              )}
          </AnnonceGroup>
        </ScrollView>
            }