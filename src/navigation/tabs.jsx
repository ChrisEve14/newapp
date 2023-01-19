import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Fontisto, Entypo, FontAwesome  } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import GameNavigator from './game';
import NotifNavigator from './notif';
import { colors } from '../constants/themes/colors';

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
    const characters = useSelector((state) => state.character.characters);


    return (
        <BottomTab.Navigator 
        initialRouteName='Characters'
        screenOptions={{
            headerShown: false,
            tabBarLabelStyle: {
                fontFamily: 'Mina',
                fontSize: 12,
            },
            tabBarActiveTintColor: colors.black,
            tabBarInactiveTintColor: colors.gray,
        }}>
            <BottomTab.Screen 
                name='Cove' 
                component={GameNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Fontisto 
                            name="island" 
                            size={24} 
                            color={colors.icons} 
                        />
                    )
                }}
            />
            <BottomTab.Screen 
                name='NotificationsTab' 
                component={NotifNavigator} 
                options={{ 
                    title:'Notifications',
                    tabBarIcon: ({ focused }) => (
                        <Entypo 
                            name="notification" 
                            size={24} 
                            color={colors.icons} 
                        />
                    ),
                    tabBarBadge: characters.length === 0 ? null : characters.length,
                    tabBarBadgeStyle: {
                        backgroundColor: colors.icons,
                        color: colors.white,
                        fontSize: 14,
                    },
                }}
            />
         
        </BottomTab.Navigator>
    )
}

export default Tabs;