import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import Splash from './Components/Splash'
import Game from './Components/Game'
import Fruit from './Components/Fruit'

const RootStack = createStackNavigator(
    {
        Splash: {
            screen: Splash
        },
        Game: {
            screen: Game
        },
        Fruit: {
            screen: Fruit
        }
    },
    {
        initialRouteName: 'Game',
    },
);

const AppContainer = createAppContainer(RootStack);


export default function App() {
    return (<AppContainer />);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});
