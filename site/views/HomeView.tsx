import React from 'react';
import {ScrollView,FlatList, Image, Text, View} from 'react-native';
import { Annonce, AnnonceGroup } from '../components/Annonce';
import ListeAnnonces from '../data/ListeAnnonces';
import tw from 'twrnc';


const HomeView = () => {
  return <ScrollView>    
            <AnnonceGroup>
              {ListeAnnonces.map((annonce,key) => {
                return <Annonce info={annonce} key = {annonce.id}></Annonce>
              }
              )}
          </AnnonceGroup>
        </ScrollView>
}
// const HomeView = () => {
//   return (
//     <View>
//       <FlatList
//         data={ListeAnnonces.reverse()}
//         keyExtractor={item => item.id.toString()}
//         renderItem={({item}) => {
//           return <AnimeInfo id={item.id} name={item.name}  />;
//         }}
//       />
//     </View>
//   );
// };
// type Anime = {
//   id: number;
//   name: string;
//   src: any;
// }

// const AnimeInfo = ({id, name}) => {
//   return (
//     <View>
//       <Image style={{width: 200, height: 200}} source={require('../assets/images/One-Piece.jpg')} />
//       <Text>{name}</Text>
//     </View>
//   );
// };
export default HomeView;
