import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors }   from '../constants/themes/colors';
import { TouchableOpacity } from "react-native";
import {AntDesign}  from '@expo/vector-icons';
import { isAndroid } from '../utils';

import { CharactersList, CharacterDetail, NewCharacter, Maps } from '../screens';

const Stack = createNativeStackNavigator();

const GameNavigator = () => {
    return (
        <Stack.Navigator 
        initialRouteName="Characters"
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
        }}
        
        >
            <Stack.Screen   
            name="Characters" 
            component={CharactersList}
            options={({ navigation }) => ({
                title: "Characters",
                headerTitleAlign: 'center',
                headerRight: () => (
                  <TouchableOpacity onPress={() => navigation.navigate("New Character")}>
                    <AntDesign name="pluscircleo" size={24} color={colors.black} />
                  </TouchableOpacity>
                  ),
                })}
            />

            <Stack.Screen 
            name="Character" 
            component={CharacterDetail} 
            options={{
                headerTitleAlign: 'center',
                // headerShown: false,
            }} 
            />

            <Stack.Screen 
            name="New Character"
            component={NewCharacter} 
            options={{
                headerTitleAlign: 'center',
                // headerShown: false,
            }} 
            />
            <Stack.Screen 
            name="Maps" 
            component={Maps} 
            options={{ 
                title: "Map",
                headerTitleAlign: 'center',
            }} 
            />


        </Stack.Navigator>
    )
}

export default GameNavigator;