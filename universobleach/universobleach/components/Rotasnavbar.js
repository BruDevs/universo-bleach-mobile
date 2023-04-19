import React from 'react';
import { Image, StyleSheet } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AntDesign} from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 

import Quincy from './Quincy';
import Hollow from './Hollow';
import Shinigami from './Shinigami';
import Vizard from './Vizard';
import Arrancars from './Arrancars'

const Tab = createBottomTabNavigator();

export default function Rotasnavbar(){
return(
  <Tab.Navigator initialRouteName ="JuniorTi" screenOptions={{headerShow:false}}>
    <Tab.Screen name="Quincy" component={Quincy} 
    options={{
      tabBarIcon:({color,size}) => (
    <Image source={require('../assets/Ishida.png')} style={estilo.img}/>), }}/>

    <Tab.Screen name="Hollow" component={Hollow} 
    options={{
      tabBarIcon:({color,size}) => (
    <Image source={require('../assets/Gran_Fisher.png')} style={estilo.img}/>), }}/>
    
    <Tab.Screen name="Shinigami" component={Shinigami} 
    options={{
      tabBarIcon:({color,size}) => (
    <Image source={require('../assets/Kurosaki.png')} style={estilo.img}/>), }}/>

    <Tab.Screen name="Vizard" component={Vizard} 
    options={{
      tabBarIcon:({color,size}) => (
    <Image source={require('../assets/Hirako.png')} style={estilo.img}/>), }}/>

    <Tab.Screen name="Arrancars" component={Arrancars} 
    options={{
      tabBarIcon:({color,size}) => (
    <Image source={require('../assets/Espada5.png')} style={estilo.img}/>), }}/>


  </Tab.Navigator>
);

}

const estilo = StyleSheet.create({


img:{
  height:38,
  width: 38
}
})

