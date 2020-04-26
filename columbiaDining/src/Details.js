import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Menu } from './Menu.js';

const Tab = createMaterialTopTabNavigator();
export function DetailsScreen({ route, navigation}) {
  const { location } = route.params;
  navigation.setOptions({title: location});

  return (
    <Tab.Navigator
      initialRouteName="Lunch" 
      tabBarOptions={{
        style: { backgroundColor: '#B3DAFF', },
      }}
      backBehavior='none'
    >
      <Tab.Screen name="Breakfast" component={Menu}/>
      <Tab.Screen name="Lunch" component={Menu}/>
      <Tab.Screen name="Dinner" component={Menu}/>
    </Tab.Navigator>
  );

}

/*
To do: 
initialRouteName so that it goes to current meal or the one comming up
*/

