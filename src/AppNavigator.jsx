import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from './MobileScreen/SearchScreen';
import DetailsScreen from './MobileScreen/DetailsScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Search'>
                <Stack.Screen name="Search" component={SearchScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}
