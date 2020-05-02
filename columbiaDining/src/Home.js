import React from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../assets/components/card.js';
import { Diningcard } from '../assets/components/card.js';
import dininghall_overview from '../dummy/dininghall_overview.json';

//import Header from '../assets/components/header.js'; //Can't use header with nav bar
//import { ScrollView } from 'react-native-gesture-handler'; Not needed if it fits in 1 screen

/*
date: new Date().getMinutes(),

const times = [
  'Breakfast: Dinner: 12:00-4:00',
  'Lunch: 11:00-4:00',
  'Dinner: Dinner: 12:00-4:00',
];

function changeTime (){
  const i =1;
  if time > 1 {
    this.setState.Date = times[1]
  }
}
*/

//connect to db and send name through onPress

export function HomeScreen({ navigation }) {
  var halls = dininghall_overview.dininghalls
  var cards = []
  for(let i = 0; i < halls.length; i++){
    cards.push(
      <Card onPress={() => navigation.navigate('Details', {diningHall: "Ferris Booth"})}> 
        <Diningcard
          name= {halls[i].name}
          items = {halls[i].times}
          density= {halls[i].density}
        />
      </Card>
    )
  }
  
  
  
  
  
  return (
    <View style={styles.container}>
      { cards }
    </View>
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