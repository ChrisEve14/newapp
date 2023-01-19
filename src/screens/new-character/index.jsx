import React from 'react';
import { ScrollView, Text, View, Button, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { colors } from '../../constants/themes/colors';
import { saveCharacter } from '../../store/character.slice';
import { useState } from 'react';
import { ImageSelector, LocationSelector } from "../../components";



import { styles } from './styles';

const NewCharacter = ({navigation}) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage ] = useState(null);
    const [coords, setCoords] = useState(null);

    const dispatch = useDispatch();

    const onHandleSubmit = () => {
        dispatch(saveCharacter({title, description, image, coords}));
        navigation.navigate('Characters');
    };

    const onHandleTitle = (text) => {
        setTitle(text);
    };

    const onHandleDesc = (text) => {
        setDescription(text);
    };

    const onImagePicker = (uri) => {
        setImage(uri);
    };

    const onLocationPicker = (location) => {
      setCoords(location);
    };

    return (
        <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Create your Character</Text>
          <TextInput
            onChangeText={onHandleTitle}
            style={styles.inputName}
            placeholder="Name your Character"
          />
          <TextInput
            onChangeText={onHandleDesc}
            style={styles.input}
            placeholder="Describe your Character"
            editable
            multiline
            numberOfLines={7}
            maxLength={300}
            autoCapitalize= 'sentences'
          />
          <ImageSelector 
          onImagePicker={onImagePicker} 
          />
          <LocationSelector 
          onLocationPicker={onLocationPicker} 
          />
          <Button color={colors.icons}
          title="Create" 
          onPress={onHandleSubmit} 
          />
        </View>
      </ScrollView>
    )
}

export default NewCharacter;