import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { useSelector } from "react-redux";
import MapPreview from "../../components/map-preview";
import { styles } from './styles';


const CharacterDetail = ({navigation, route}) => {

    const { characterId } = route.params;

    const character = useSelector((state) => state.character.characters.find((character) => character.id === characterId));
    const { title, description, image, address, coords } = character || {};
    const location = JSON.parse(coords);

    return (
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Image source={{ uri: image }} style={styles.image} />
        <Text style={styles.description}>{description}</Text>
        <View style={styles.location}>
          <View style={styles.addressContainer}>
            <Text style={styles.address}>{address}</Text>
          </View>
          <MapPreview location={{ lat: location.lat, lng: location.lng }}>
            <Text>Location not available</Text>
          </MapPreview>
        </View>
      </ScrollView>
    );
  };

export default CharacterDetail;