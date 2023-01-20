import { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, FlatList } from 'react-native';
import { styles } from './styles';
import { NotificationsItem } from '../../components';
// import { getNotif, deleteNotif, confirmedProfile } from '../../store/actions/notif.action';
import { useSelector, useDispatch } from 'react-redux';

const Notif = ({ navigation }) => {
    const characters = useSelector((state) => state.character.characters);

    const renderItem = ({ item }) => 
    <NotificationsItem 
    {...item} 
    />;
    
    return (
            <FlatList 
            style={styles.container}
            data={characters}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            />
    )
}

export default Notif;