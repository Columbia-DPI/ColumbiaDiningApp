import React from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import { Temp } from './temp.js';

const Tab = createMaterialTopTabNavigator();
export function DetailsScreen({ route, navigation}) {

  const { location } = route.params;
  navigation.setOptions({title: location}); //dynamically change nav bar title

  return (
    <Tab.Navigator
      initialRouteName="Lunch" 
      tabBarOptions={{
        style: { backgroundColor: '#B3DAFF' },
      }}
      backBehavior='none'
    >
      <Tab.Screen name="Breakfast" component={Temp}/>
      <Tab.Screen name="Lunch" component={Temp}/>
      <Tab.Screen name="Dinner" component={Temp}/>
    </Tab.Navigator>
  );

}

/*
To do: 
initialRouteName so that it goes to current meal or the one comming up
*/

