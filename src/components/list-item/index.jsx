import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { styles } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../../constants/themes/colors';



const ListItem = ({ id, title, description, image, address, onSelect, onDelete }) => {
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onSelect} style={styles.container}>
          <Image style={styles.image} source={{ uri: image }} />
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.trash} onPress={() => onDelete(id)}>
          <FontAwesome name="trash-o" size={24} color={colors.icons}/>
        </TouchableOpacity>
      </View>
    );
};

export default ListItem;