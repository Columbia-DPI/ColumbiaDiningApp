import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Menu } from './Menu.js';

const Tab = createMaterialTopTabNavigator();
export function DetailsScreen({ route, navigation}) {

  const { diningHall } = route.params;
  navigation.setOptions({title: diningHall}); //set the navigation header to the correct dining hall
  
  const meals = ["Breakfast", "Lunch", "Dinner"]; //will change depending on what dining hall it is e.g jjs doesnt have 3 meals
  const data = meals.map((meal) => '{"diningHall":"' + diningHall + '","meal":"' + meal + '"}')
  
  var mealTabs = []
  for(let i = 0; i < meals.length; i++){  
    mealTabs.push(
      <Tab.Screen 
        name= {data[i]}
        component={Menu}
        options={{title: meals[i]}} //title is what is shown on tab
        key={i}
      />
    )
  }

  return (
    <Tab.Navigator
      initialRouteName= 'temp'//change this
      tabBarOptions={{
        style: { backgroundColor: '#B3DAFF', },
      }}
      backBehavior='none'
    >
    
    {mealTabs}
      
    </Tab.Navigator>

  );
}



