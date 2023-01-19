import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { formatDate } from '../../utils';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../../constants/themes/colors';

const NotificationsItem = ({ id, title, description, image, address, onSelect }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.date}>{formatDate(id.date)}</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <Text style={styles.added}>Characters Added: {title}</Text>
                </View>
                <TouchableOpacity onPress={() => onDelete(id)}>
                    <FontAwesome name="trash-o" size={24} color={colors.icons}/>
                </TouchableOpacity>
            </View>
        </View>
    )

}

export default NotificationsItem;