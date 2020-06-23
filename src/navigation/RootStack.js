import { Ionicons } from '@expo/vector-icons';

import {createStackNavigator} from '@react-navigation/stack';

import React,{Component} from 'react';

import { View,Modal,Text,Button } from 'react-native';

import HeaderLeft from './../components/headerLeft';
import HeaderRight from './../components/headerRight';

import TabsScreen from './Tabs';

const Root=createStackNavigator();
export default class RootStack extends Component{
    render(){
        return(
            <Root.Navigator mode="modal">
            <Root.Screen name="Root" component={TabsScreen} options={{
                headerTitle:null,
                headerLeft:()=>(<HeaderLeft/>),
               
                headerRight:()=>(<HeaderRight/> ),
                headerStyle:{
                    height:100,
                }
                }}/>
            </Root.Navigator>
        )
    }
}