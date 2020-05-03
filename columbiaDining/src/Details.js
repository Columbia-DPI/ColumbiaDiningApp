import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {StyleSheet, View, ScrollView } from 'react-native';
import { Card_nopress, Foodcard } from '../assets/components/card.js';

//Dummy Data
import ferris_menu from '../dummy/ferris_menu.json'; 
import johnjay_menu from '../dummy/johnjay_menu.json'; 
import jjs_menu from '../dummy/jjs_menu.json'; 
import hewitt_menu from '../dummy/hewitt_menu.json'; 
import diana_menu from '../dummy/diana_menu.json'; 



var menu_data;
export function get_menu_data(){
  return menu_data;
}

const Tab = createMaterialTopTabNavigator();
export function DetailsScreen({ route, navigation }) {
  
  const { diningHall } = route.params; //Get name of diningHall from route sent from Home

  //Look up in the db using diningHall
  if (diningHall=="Ferris Booth"){
    menu_data = ferris_menu;
  } else if(diningHall=="John Jay"){
    menu_data = johnjay_menu;
  } else if(diningHall=="JJ's Place"){
    menu_data = jjs_menu;
  } else if(diningHall=="Hewitt"){
    menu_data = hewitt_menu;
  } else if(diningHall=="Diana"){
    menu_data = diana_menu;
  }
  //Replace this with actual db lookup using diningHall
  //Note: In order for this to work, the name of dining hall in open-times table must be the exact same as the name in the menus table. bc diningHall is sent from Home

  navigation.setOptions({title: menu_data.name}); //Set title of top navbar
  const meals = menu_data.times.map(function(timeslot){ //list of timeslot names to use for tab names
    return timeslot.name;
  });

  var mealTabs = []
  for(let i = 0; i < meals.length; i++){
    mealTabs.push(
      <Tab.Screen 
        name= {meals[i]}
        component={Menu}
        key={meals[i].toString()}
      />
    )
  }

  return (
    <Tab.Navigator
      initialRouteName= 'tab2 Lunch'//change this
      tabBarOptions={{
        style: { backgroundColor: '#B3DAFF', },
      }}
      backBehavior='none'
    >
    {mealTabs} 
    </Tab.Navigator>
  );
}









/*------------(Menu Contents)--------------*/


export function Menu({ route, navigation}) {
  const menu_data = get_menu_data();
  var menu;
  for(let i = 0; i < menu_data.times.length; i++){ //Find the right time slot for this tab
    if(menu_data.times[i].name == route.name){
      menu = menu_data.times[i].groups;
      break;
    }
  }

  var groups = []
  for(let i = 0; i < menu.length; i++){  //Create different Foodcard for each group in menu
    groups.push(
      <Card_nopress key={JSON.stringify(menu[i])}>
        <Foodcard
          name={menu[i].name}
          items={menu[i].foods}
          key={JSON.stringify(menu[i])}
        />
      </Card_nopress>
    )
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        { groups }        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: '2%',
    paddingTop: '2%',
    flexDirection: 'column'
  }
});