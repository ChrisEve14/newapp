import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Notif } from '../screens'

import { colors } from '../constants/themes/colors';
import { isAndroid } from '../utils/functions';

const Stack = createNativeStackNavigator();

const NotifNavigator = () => {
    return (
        <Stack.Navigator 
        initialRouteName='Notifications'
        screenOptions={{
            headerStyle: {
                backgroundColor: isAndroid ? colors.header : colors.headerDark,
            },
            headerTintColor: colors.black,
            headerTitleStyle: {
                fontFamily: 'Mina-Bold',
            },
            presentation: 'card',
            headerBackTitle: '',
            headerTitleAlign: 'center',
        }}
        >
        <Stack.Screen
                name="Notifications"
                component={Notif}
        />
        </Stack.Navigator>

    )
}

export default NotifNavigator;