import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { formatDate } from '../../utils';

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
            </View>
        </View>
    )

}

export default NotificationsItem;