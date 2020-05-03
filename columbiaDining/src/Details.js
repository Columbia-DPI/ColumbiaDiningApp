import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {StyleSheet, View, ScrollView, ActivityIndicator } from 'react-native';
import { Card_nopress, Foodcard } from '../assets/components/card.js';

const url = "http://columbia-dining.herokuapp.com/hall/";
const nameToURL = {
  "Ferris Booth": "ferris",
  "John Jay": "johnjay",
  "JJ's Place": "jjs",
  "Hewitt": "hewitt",
  "Diana": "diana"
}
let menu_data;

export class DetailsScreen extends React.Component{
  constructor({route, navigation}){
    super();
    this.diningHall = route.params.diningHall;
    this.navigation = navigation;
    this.state = {loaded: false}
  }
  
  componentDidMount(){
    return fetch(url + nameToURL[this.diningHall]) //GET the json
      .then((response) => response.json())
      .then((responseJson) => {
        menu_data = responseJson;
        this.setState({
          loaded: true
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const Tab = createMaterialTopTabNavigator();
    this.navigation.setOptions({title: this.diningHall}); //Set title of top navbar
    
    if(this.state.loaded){
      const meals = menu_data.times.map(function(timeslot){ //list of timeslot names to use for tab names
        return timeslot.name;
      });
      
      let mealTabs = [];
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
          initialRouteName= ""//change this
          tabBarOptions={{
            style: { backgroundColor: '#B3DAFF', },
          }}
          backBehavior='none'
        >
          {mealTabs} 
        </Tab.Navigator>
      );
      
    } else {
      /*-------Loading Screen-------*/
      return (
        <View style={styles.container}>
          <ActivityIndicator/>
        </View>
      );
    }
  }
}









/*------------(Menu Contents)--------------*/


class Menu extends React.Component{
  constructor({route, navigation}){
    super();
    this.route = route;
    this.navigation = navigation;
  }

  render(){
    let menu;
    for(let i = 0; i < menu_data.times.length; i++){ //Find the right time slot for this tab
      if(menu_data.times[i].name == this.route.name){
        menu = menu_data.times[i].groups;
        break;
      }
    }

    let groups = []
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
          {groups}        
        </View>
      </ScrollView>
    );
  }




  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: '2%',
    paddingTop: '2%',
    flexDirection: 'column'
  }
});