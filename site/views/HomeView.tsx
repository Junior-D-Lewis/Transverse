import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import animes from '../data/Animes';

const HomeView = () => {
  return (
    <View>
      <FlatList
        data={animes.reverse()}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          return <AnimeInfo id={item.id} name={item.name}  />;
        }}
      />
    </View>
  );
};
type Anime = {
  id: number;
  name: string;
  src: any;
}

const AnimeInfo = ({id, name}) => {
  return (
    <View>
      <Image style={{width: 200, height: 200}} source={require('../assets/images/One-Piece.jpg')} />
      <Text>{name}</Text>
    </View>
  );
};
export default HomeView;
