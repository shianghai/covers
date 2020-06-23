import {createStackNavigator} from '@react-navigation/stack';

import React,{Component} from 'react';

import ReportScreen from './../screens/report/Report';
import UpdateReportScreen from './../screens/report/updateReport';


const RStack=createStackNavigator();
export default class Report extends Component{
    render(){
        return(
            <RStack.Navigator
            screenOptions={{headerShown:false}}
            >
            <RStack.Screen name="Report" component={ReportScreen}/>
            <RStack.Screen name="UpdateReport" component={UpdateReportScreen}/>
            </RStack.Navigator>
        )
    }
}