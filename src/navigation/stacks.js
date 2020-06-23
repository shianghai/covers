

import {createStackNavigator} from '@react-navigation/stack';

import React,{Component} from 'react';

import BackgroundScreen from './../screens/auth/backgroundInfo';
import VerifyScreen from './../screens/auth/verifyPhone';
import WelcomeScreen from './../screens/auth/welcome';

import RootStack from './RootStack';







const Stack=createStackNavigator();
export default class Stacks extends Component{ 
    render(){
        return(
            <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="Change Phone" component={VerifyScreen}/>
            <Stack.Screen name="General Information" component={BackgroundScreen} options={{headerLeft:null}}/>
            <Stack.Screen name="Root" component={RootStack} options={{headerShown:false,gestureEnabled:false
            }}/>
             
            </Stack.Navigator>
        )
    }
}