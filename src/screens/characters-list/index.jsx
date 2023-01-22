import React from 'react';
import { useEffect } from "react";
import { View, Text, FlatList} from 'react-native';
import { useSelector, useDispatch } from "react-redux"
import { ListItem } from '../../components';
import { styles } from './styles';
import { loadCharacters, deleteCharacters, setCharacters } from "../../store/character.slice";


const CharactersList = ({navigation}) => {
  const dispatch = useDispatch();

  const characters = useSelector((state) => state.character.characters);

  useEffect(() => {
    dispatch(loadCharacters());
  }, []);

  const onDelete = (id) => {
    const updatedCharacters = characters.filter(item => item.id !== id);
    dispatch(setCharacters(updatedCharacters));
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
        renderItem={({item}) => renderItem({item})}
        ListEmptyComponent={ListEmptyComponent}
      />
    )
}

export default CharactersList;

