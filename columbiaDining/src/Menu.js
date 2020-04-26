import React from 'react';
import {StyleSheet, View, ScrollView } from 'react-native';
import { Card_nopress, Foodcard } from '../assets/components/card.js';

export function Menu({ route, navigation}) {
  const data = JSON.parse(route.name)
  const diningHall = data.diningHall; //'Ferris Booth', 'John Jay', 'JJ's Place', etc.
  const meal = data.meal; //'Breakfast', 'Lunch', or 'Dinner'
  
  //use these 2 search terms to look up menu items in db
  //use results from db to create different Foodcards (Action Line, Main Line, Pasta, Soup, Dessert, etc. however columbia dining groups things)
  //the food items are inputted as an array

  return (
    <ScrollView>
    <View style={styles.container}>
        
      <Card_nopress> 
        <Foodcard
            name="Action Line"
            items={["Waffles","Chicken"]}
        />
      </Card_nopress>

      <Card_nopress> 
        <Foodcard
            name="Main Line"
            items={["Pancackes", "Potato Hash", "Elbow Pasta", "Marinara (Vegan)", "Grilled Vegetables (Vegetarian)"]}
        />
      </Card_nopress>

      <Card_nopress> 
        <Foodcard
            name="Vegan Station"
            items={["Vegan French Toast", "Vegan Pancackes", "Oatmeal (Vegan)"]}
        />
      </Card_nopress>

      <Card_nopress> 
        <Foodcard
            name="The Regulars"
            items={["Cheese Pizza", "Sandwich"]}
        />
      </Card_nopress>
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