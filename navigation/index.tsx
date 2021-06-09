
import {NavigationContainer , DefaultTheme, DarkTheme} from '@react-navigation/native';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { ColorSchemeName } from 'react-native';
// import { createAppContainer } from 'react-navigation'

// screen import
import AgentListScreen from '../screens/AgentListScreen'
import AgentDetailScreen from '../screens/AgentDetailScreen'

import {RootNavigatorParamList} from '../interfaces'


const Navigation = ({colorScheme} :{colorScheme : ColorSchemeName}) => {
    return (
        <NavigationContainer
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <RootNavigation />
        </NavigationContainer>
    )
}

const Stack = createStackNavigator<RootNavigatorParamList>();

const RootNavigation = () => {

    return (
        <Stack.Navigator 
            screenOptions={
                {headerShown : false}
            }
        >
            <Stack.Screen name="AgentList" options={{title : "Agent List"}} component={AgentListScreen} />
            <Stack.Screen name="AgentDetail" options={{title : "Agent Detail"}} component={AgentDetailScreen} />
        </Stack.Navigator>
    )
}

export default Navigation;