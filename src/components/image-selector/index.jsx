import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import { FontAwesome } from '@expo/vector-icons';
import { View, Image, Text, Alert, Button, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { colors } from '../../constants/themes/colors';
import { styles } from "./styles";

const ImageSelector = ({ onImagePicker }) => {
    const [pickedUrl, setPickedUrl] = useState(null);

    const onHandleTakeImage = async () => {
        const isCameraPermissions = await verifyPermissions();
        if (!isCameraPermissions) return;

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            quality: 1,
          });

          setPickedUrl(image.assets[0].uri);
          onImagePicker(image.assets[0].uri);
    };

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("Not Allowed", "You need a permission to use the camera", [
            { text: "Ok" },
          ]);
    
          return false;
        }
        return true;
      };

    const pickImageAsync = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
        
      });
  
      if (!result.canceled) {
        setPickedUrl(result.assets[0].uri);
      } else {
        alert('You did not select any image.');
      };

        setPickedUrl(result.assets[0].uri);
        onImagePicker(result.assets[0].uri);
    };


    return (
        <View style={styles.container}>
          <View style={styles.preview}>
            {!pickedUrl ? (
              <Text style={styles.title}>No Image Selected</Text>
            ) : (
              <Image style={styles.image} source={{ uri: pickedUrl }} />
            )}
          </View>
          <View style={styles.buttonsContainer}>
            <Button title="Take a picture" color={colors.peachCrayola} onPress={onHandleTakeImage} />
            <Button title="Select picture" color={colors.peachCrayola} onPress={pickImageAsync} />     
          </View>     
      </View>
    );
}

export default ImageSelector;