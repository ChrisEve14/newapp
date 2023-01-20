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

  // const onDelete = () => {
  //   dispatch(deleteCharacters());
  // }

   const renderItem = ({item}) => 
   <ListItem {...item} 
   onDelete={(id) => deleteCharacters(id)}
   onSelect={() => navigation.navigate('Character', { characterId: item.id})} 
   />;

   console.warn("delete", renderItem);

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

