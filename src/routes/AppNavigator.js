import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Splash from '../screens/Splash';
import Home from '../screens/Home';
import VideoPlayer from '../screens/VideoPlayer/VideoPlayer';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName='Splash'>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
