import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AuthNavigator from './auth';
import Tabs from './tabs';

const AppNavigator = () => {
    const userId = useSelector((state) => state.auth.userId);
    return (
        <NavigationContainer>
           {userId ? <Tabs/> : <AuthNavigator/>}
        </NavigationContainer>
    )
};

export default AppNavigator;