import React from 'react';
import { View, StyleSheet, StatusBar, Image, Animated, Button, Text } from 'react-native';
import Card from '../assets/components/card.js';
import { Diningcard } from '../assets/components/card.js';

//import Header from '../assets/components/header.js'; //Can't use header with nav bar
//import { ScrollView } from 'react-native-gesture-handler'; Not needed if it fits in 1 screen

/*
date: new Date().getMinutes(),

const times = [
  'Breakfast: 5:00-8:00',
  'Lunch: 11:00-4:00',
  'Dinner: 5:00-8:00',
];

function changeTime (){
  const i =1;
  if time > 1 {
    this.setState.Date = times[1]
  }
}
*/

//!!!Once we connect to the backend, send name to the onPress function

export function HomeScreen({ navigation }) {
    return (
      
        <View style={styles.container}>
          <Card onPress={() => navigation.navigate('Details', {location: "Ferris Booth"})}> 
            <Diningcard
              name="Ferris Booth"
              breakfast="9:00-12:00"
              lunch="12:00-4:00"
              dinner="5:00-8:00"
              density="70%"
            />
          </Card>
          
          <Card onPress={() => navigation.navigate('Details', {location: "John Jay"})}>
            <Diningcard
              name="John Jay"
              breakfast="9:00-12:00"
              lunch="12:00-4:00"
              dinner="5:00-8:00"
              density="10%"
            />
          </Card>
        
          <Card onPress={() => navigation.navigate('Details', {location: "JJ's Place"})}>
            <Diningcard
              name="JJ's Place"
              breakfast="9:00-12:00"
              lunch="12:00-4:00"
              dinner="5:00-8:00"
              density="80%"
            />
          </Card>
        
          <Card onPress={() => navigation.navigate('Details', {location: "Hewitt"})}>
            <Diningcard
              name="Hewitt"
              breakfast="9:00-12:00"
              lunch="12:00-4:00"
              dinner="5:00-7:45"
              density="70%"
            />
          </Card>
        
          <Card onPress={() => navigation.navigate('Details', {location: "Diana"})}>
            <Diningcard
              name="Diana"
              breakfast="9:00-12:00"
              lunch="12:00-4:00"
              dinner="5:00-8:00"
              density="40%"
            />
          </Card>
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