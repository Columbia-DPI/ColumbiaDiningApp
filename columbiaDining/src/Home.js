import React, { Children } from 'react';
import { View, StyleSheet } from 'react-native';
import Card from '../assets/components/card.js';
import { Diningcard } from '../assets/components/card.js';
import dininghall_overview from '../dummy/dininghall_overview.json';

//connect to db and send name through onPress

export function HomeScreen({ navigation }) {
  var halls = dininghall_overview.dininghalls
  var cards = []
  for(let i = 0; i < halls.length; i++){
    cards.push(
      <Card onPress={() => navigation.navigate('Details', {diningHall: halls[i].name})} key={JSON.stringify(halls[i])}> 
        <Diningcard
          name= {halls[i].name}
          items = {halls[i].times}
          density= {halls[i].density}
          key={JSON.stringify(halls[i])}
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