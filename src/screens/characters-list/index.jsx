import React from 'react';
import { useEffect } from "react";
import { View, Text, Button, FlatList} from 'react-native';
import { useSelector, useDispatch } from "react-redux"
import { ListItem } from '../../components';
import { styles } from './styles';
import { colors } from '../../constants/themes/colors';
import { loadCharacters, deleteCharacters } from "../../store/character.slice";


const CharactersList = ({navigation}) => {
  const dispatch = useDispatch();

  const characters = useSelector((state) => state.character.characters);

  useEffect(() => {
    dispatch(loadCharacters());
  }, [dispatch]);

  const onDelete = (id) => {
    dispatch(deleteCharacters(id));
  }

   const renderItem = ({item}) => 
   <ListItem {...item} 
   onDelete={onDelete}
   onSelect={() => navigation.navigate('Character', { characterId: item.id})} 
   />;

   const ListEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No Characters added yet</Text>
    </View>
  );

    return (
        <FlatList
        style={styles.container}
        data={characters}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        />

    )
}

export default CharactersList;

