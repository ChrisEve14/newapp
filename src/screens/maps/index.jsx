import React, { useState, useLayoutEffect } from "react";
import {TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from "./styles";

const Maps = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState();
  const initialRegion = {
    latitude: 27.994402,
    longitude: -81.760254,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };


  const onHandleSaveLocation = () => {
    if (selectedLocation) navigation.navigate("New Character", { mapLocation: selectedLocation });
  };

  const onHandlePickLocation = (event) => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onHandleSaveLocation}>
          <MaterialIcons name="save-alt" size={24} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, onHandleSaveLocation]);

  return (
    <MapView initialRegion={initialRegion} style={styles.container} onPress={onHandlePickLocation} >
        {selectedLocation && (
          <Marker
            title="Selected location"
            coordinate={{
              latitude: selectedLocation.lat,
              longitude: selectedLocation.lng,
            }}
          />
        )}
    </MapView>
  );
};


export default Maps;
